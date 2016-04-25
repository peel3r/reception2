var React = require('react');

var RoomReservations = React.createClass({
  getInitialState: function(){
    return {
    check_in_date: this.props.check_in_date,
    check_out_date: this.props.check_out_date,
    guest_name: this.props.guest_name,
    reservation_guest_id: this.props.reservation_guest_id
  }
  },
  render: function(){
    return (
      <div>
        <h3>reservation for {this.props.guest_name}</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>In Date</th>
                  <th>Out date</th>
                  <th>Reservation Id</th>
                  <th>Guest Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.props.check_in_date}</td>
                  <td>{this.props.check_out_date}</td>
                  <td>{this.props.reservation_guest_id}</td>
                  <td>{this.props.guest_name}</td>
                </tr>
              </tbody>
          </table>
      </div>
    )
  }
})

module.exports = RoomReservations;
