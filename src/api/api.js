import http from './http'
import location from './location'
export default {
  get (data) {
    return http.get(location, data)
  },
  post (data) {
    return http.post(location, data)
  }
}
