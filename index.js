import createForm from "./utils/createForm.js"
import fetchApi from "./utils/fetchApi.js"
import getFileLimit from "./utils/getFileLimit.js"
import errorHandler from "./utils/errorHandler.js"

class DiscordClient {
	constructor({ token, channelId }) {
		token ? (this.token = token) : errorHandler(600)
		channelId ? (this.channelId = channelId) : errorHandler(601)
	}

	async send(filename, filebuffer) {
		if (!this.fileLimit)
			this.fileLimit = await getFileLimit(this.token, this.channelId)

		filebuffer.byteLength > this.fileLimit &&
			errorHandler(40005, this.fileLimit)

		const form = createForm(filename, filebuffer)
		const options = {
			token: this.token,
			method: "POST",
			headers: form.getHeaders(),
			body: form,
		}

		const { attachments } = await fetchApi(
			`channels/${this.channelId}/messages`,
			options
		)

		return attachments[0]
	}
}

export default DiscordClient
