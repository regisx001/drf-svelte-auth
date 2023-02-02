import { PUBLIC_DOMAIN } from "$env/static/public";
import { fail } from "@sveltejs/kit";
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

        console.log(await response.json())
    }
};