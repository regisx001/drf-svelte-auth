import { PUBLIC_DOMAIN } from "$env/static/public";
import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";

export const load: PageServerLoad = async () => {
    return {}
}

export const actions: Actions = {
    login: async ({ request, fetch, cookies }) => {
        const formData = await request.formData()

        if (!String(formData.get("username"))) {
            return fail(400, {
                username: "required"
            })
        }

        if (!String(formData.get("password"))) {
            return fail(400, {
                password: "required"
            })
        }

        const response = await fetch(`${PUBLIC_DOMAIN}auth/token/`, {
            method: "POST",
            body: formData
        })
        const jsonData = await response.json()

        if (response.status === 200) {
            cookies.set("refresh", jsonData.refresh, {
                path: "/",
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 30,
            })

            cookies.set("access", jsonData.access, {
                path: "/",
                httpOnly: true,
                maxAge: 60 * 60 * 24,
            })
            throw redirect(300, "/")
        }
    }
};