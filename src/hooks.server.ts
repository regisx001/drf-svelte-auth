import { PUBLIC_DOMAIN } from "$env/static/public";
import type { Handle } from "@sveltejs/kit";

async function getUserData(accessToken: string) {
    const response = await (await fetch(`${PUBLIC_DOMAIN}auth/user/data/`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer  ${accessToken}`
        }
    })).json()
    // console.log(response)
    return response
}

export const handle: Handle = async ({ resolve, event }) => {

    const refresh = event.cookies.get('refresh')
    const access = event.cookies.get("access")

    if (!refresh) {
        return resolve(event)
    }

    if (!access) {
        const refresh_response = await fetch(`${PUBLIC_DOMAIN}auth/token/refresh/`, {
            method: "POST",
            body: JSON.stringify({ refresh }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        if (refresh_response.status === 200) {
            let accessToken = (await refresh_response.json()).access

            event.cookies.set("access", accessToken, {
                httpOnly: true,
                path: "/",
                maxAge: 60 * 60 * 24,
            })

            // Fetch User Data
            const userData = await getUserData(accessToken)

            event.locals.user = {
                id: userData.id,
                username: userData.username,
                accessToken: String(accessToken),
                refreshToken: String(refresh)
            }
            // console.log("Token Refreshed")
        }
        return resolve(event)
    }


    const verification_response = await fetch(`${PUBLIC_DOMAIN}auth/token/verify/`, {
        method: "POST",
        body: JSON.stringify({ token: access }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    if (verification_response.status === 200) {
        // Fetch User Data
        const userData = await getUserData(access)


        event.locals.user = {
            id: userData.id,
            username: userData.username,
            accessToken: String(access),
            refreshToken: String(refresh),
        }
        // console.log("Token Mazal Salah")
        return resolve(event)
    }

    return resolve(event)
}   