const throwError = (msg) => {
	throw new Error(msg)
}

export const errorHandler = (code, complement) => {
	switch (code) {
		// API Errors
		case 0:
			throwError("Invalid token")
			break
		case 10003:
			throwError("Invalid Channel ID")
			break
		case 40005:
			throwError(
				`The file size exceeds the limit of the server, the limit is ${
					complement / 1048576
				} MB`
			)
			break
		case 50001:
			throwError("Missing Access, try inviting the bot to your server.")
			break
		case 50013:
			throwError(
				"Missing Permissions, the bot cannot send messages or attach files in that channel."
			)
			break

		// Constructor Errors
		case 600:
			throwError("token is required")
			break
		case 601:
			throwError("channelId is required")
			break

		// Default
		default:
			throwError(complement)
			break
	}
}

export default errorHandler
