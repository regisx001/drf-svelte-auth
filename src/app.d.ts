// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {
				id: number
				username: string
				first_name: string
				last_name: string
				email: string
				avatar: string
				refreshToken: string
				accessToken: string
			}
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export { };
