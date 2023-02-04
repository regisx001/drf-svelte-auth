import { PUBLIC_DOMAIN } from '$env/static/public';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
    return {
        user: locals.user
    };
}) satisfies PageServerLoad;


export const actions: Actions = {
    updateProfile: async ({ request, fetch, locals }) => {
        const formData = await request.formData()

        const response = await (await fetch(`${PUBLIC_DOMAIN}auth/users/${locals.user.username}/`, {
            method: "PUT",
            body: formData,
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })).json()

        console.log(response)
    }
};