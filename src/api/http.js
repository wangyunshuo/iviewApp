import axios from 'axios'
import qs from 'qs'
export default {
  get (url, data) {
    return axios({
      method: 'GET',
      url: url,
      data: data
    })
  },
  post (url, data) {
    return axios({
      method: 'POST',
      url: url,
      data: qs.stringify(data)
    })
  }
}
