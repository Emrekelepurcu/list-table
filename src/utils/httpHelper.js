import axios from 'axios'

export default {
  async makeGetRequest({ url, baseURL = process.env.BASE_URL, opt = {} }) {
    const headers = {
      Accept: 'application/json'
    }

    let options = {
      baseURL,
      headers,
      timeout: 100000,
      ...opt
    }
    const instance = axios.create(options)
    const result = await instance.get(url).catch((error) => {
      return this.errorHandler(error)
    })
    return result
  },

  errorHandler(error) {
    console.log(error, 'error')
    let response = { errorData: { message: error.message } }
    response.error = true
    response.status = error.response ? error.response.status : 'Network Error'
    return response
  }
}
