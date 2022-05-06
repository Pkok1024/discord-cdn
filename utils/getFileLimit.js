import fetchApi from "./fetchApi.js"

const getGuildId = async (token, channelId) => {
	const options = {
		token,
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	}
	const { guild_id } = await fetchApi(`channels/${channelId}`, options)
	return guild_id
}

const getFileLimit = async (token, channelId) => {
	const guildId = await getGuildId(token, channelId)
	const options = {
		token,
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	}
	const res = await fetchApi(`guilds/${guildId}`, options)

	const { premium_tier: boostLevel } = res
	switch (boostLevel) {
		case 0:
		case 1:
			return 8388608

		case 2:
			return 52428800

		case 3:
			return 104857600
	}
}

export default getFileLimit
