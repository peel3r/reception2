var React = require('react');
import Time from 'react-time'
var RoomReservations = React.createClass({

  render: function () {

    var roomName = this.props.roomName
    var details = this.props.data.map(function(reservation, index){
    var indate = reservation.checkin[0]
    var outdate = reservation.checkout[0]
      if (reservation.room_name === roomName)

      return (
        <div  key={index}>
          <table className='table'>
            <thead>
            <tr>
              <th>check in</th>
              <th>check out</th>
              <th>Guests</th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <td>{reservation.checkin && <h4><Time value={indate} format='DD-MM-YYYY'/></h4>}</td>
                  <td>{reservation.checkout && <h4><Time value={outdate} format='DD-MM-YYYY'/></h4>}</td>


                <td>{reservation.guest_names && <h4>{reservation.guest_names.join()}</h4>}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    })
    return (
      <div>
        {details}
      </div>
    )
  }
})
module.exports = RoomReservations;
