import httpService from './http.service.js'
const userEndpoint = 'users/'

const userService = {
	get: async () => {
		const { data } = await httpService.get(userEndpoint);
		return data;
	},
	getUserById: async (id) => {
		const { data } = await httpService.get(`${userEndpoint}${id}/`)
		return data;
	}
}

export default userService;

