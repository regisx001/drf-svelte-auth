import { PUBLIC_DOMAIN } from "$env/static/public";
import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";

export const load: PageServerLoad = async () => {
    return {}
}



export const actions: Actions = {
    register: async ({ request, fetch, cookies }) => {
        const formData = await request.formData();

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

        if (String(formData.get("password")) !== String(formData.get("confirmPassword"))) {
            return fail(400, {
                confirmPassword: "do not match"
            })
        }

        const response = await fetch(`${PUBLIC_DOMAIN}auth/register/`, {
            method: "POST",
            body: formData
        })

        throw redirect(300, "/login")
    }
};