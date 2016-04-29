var React = require('react');

var RoomReservations = React.createClass({

  render: function(){
    console.log('room reservation data',this.props.reservations)
    return (
      <div>
        <div className='table-responsive'>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>Room Id</th>
            <th>Room Name</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Guest Name</th>
            <th>Site Name</th>
          </tr>

        </thead>
      <tbody>
</tbody>
      </table>
    </div>
    </div>
    )
  }
})

module.exports = RoomReservations;
