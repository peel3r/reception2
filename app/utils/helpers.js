import axios from 'axios'

function getRooms () {
  return axios.get(`http://localhost:3009/api/reception/v1/rooms.json`)
}

function getReservations (username) {
  return axios.get(`http://localhost:3009/api/reception/v1/reservations`)
}

var helpers = {
  getIptvInfo: function () {
    return axios.all([getRooms(), getReservations()]).then(function(arr){
      return {
        rooms: arr[0].data,
        reservations: arr[1].data
      }
  })
}
}

module.exports = helpers
