var React = require('react')
import Time from 'react-time'
import Guest from './Guest'
var RoomReservations = React.createClass({
  propTypes: {
    roomName: React.PropTypes.string.isRequired,
    data: React.PropTypes.array.isRequired
  },
  render: function () {


    var roomName = this.props.roomName
    var details = this.props.data.map(function(reservation, index){
      var indate = reservation.checkin[0]
      var outdate = reservation.checkout[0]
      if (reservation.room_name === roomName)

      return (
        <div  key={index}>
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Reservation Dates</h3>
            </div>
            <div className="panel-body">
              <table className='table'>
                <thead>
                  <tr>
                    <th>check in</th>
                    <th>check out</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{reservation.checkin && <h4><Time value={indate} format='DD-MM-YYYY'/></h4>}</td>
                    <td>{reservation.checkout && <h4><Time value={outdate} format='DD-MM-YYYY'/></h4>}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
