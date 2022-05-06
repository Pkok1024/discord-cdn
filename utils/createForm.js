import FormData from "form-data"

export const createForm = (filename, filebuffer) => {
  const form = new FormData()
  form.append("files[0]", filebuffer, {
    filename: filename,
    contentType: "application/octet-stream",
  })
  return form
}

export default createForm
