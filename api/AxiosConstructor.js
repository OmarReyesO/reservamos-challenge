import axios from "axios"

async function ConstructorAPIAsync(timeoutRequest = 5000) {
  const timeout = timeoutRequest
  let headers = {
    "content-type": "application/json",
    Accept: "*/*"
  }

  return axios.create({
    headers,
    responseType: "json",
    responseEncoding: "utf8",
    timeout,
    type: "json"
  })
}

export default ConstructorAPIAsync
