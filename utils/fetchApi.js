import fetch from "node-fetch"
import errorHandler from "./errorHandler.js"

const fetchApi = async (endpoint, options) => {
	const { token, method, headers, body } = options
	const res = await (
		await fetch(`https://discord.com/api/v9/${endpoint}`, {
			method: method,
			headers: {
				Authorization: `Bot ${token}`,
				...headers,
			},
			body: body,
		})
	).json()
	res.code !== undefined && errorHandler(res.code)
	return res
}

export default fetchApi
