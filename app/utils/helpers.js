import axios from 'axios'

function getRooms () {
  return axios.get(`http://localhost:3009/api/reception/v1/rooms.json`)
}

function getReservations () {
  return axios.get(`http://localhost:3009/api/reception/v1/reservations`)
}
function getGuestMessages () {
  return axios.get(`http://localhost:3009/api/reception/v1/guest_messages.json`)
}

var helpers = {
  getIptvInfo: function () {
    return axios.all([getRooms(), getReservations(), getGuestMessages()]).then(function(arr){
      return {
        rooms: arr[0].data,
        reservations: arr[1].data,
        messages: arr[2].data
      }
  })
}
}

module.exports = helpers
