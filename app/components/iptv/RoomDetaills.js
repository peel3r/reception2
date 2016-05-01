var React = require('react')

var RoomDetails = React.createClass({
  propTypes: {
    roomName: React.PropTypes.string.isRequired,
    rooms: React.PropTypes.array.isRequired
  },
  getInitialState: function () {

    return {
      roomName: []
    }
  },
  handleChange: function () {

  },

  componentDidMount: function () {
    this.setState({
      roomName: this.props.roomName


    })
  },


  render: function () {

    var roomName = this.state.roomName
    var details = this.props.rooms.map(function(room, index){
      if (room.room_name === roomName)
      return (
        <div  key={index}>
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Room Details</h3>
            </div>
          <div className="panel-body">
            {room.room_name === roomName && <div>Name:  <strong>{room.room_name}</strong></div>}
            {room.room_name === roomName && <div>Guestst:  <strong>{room.room_guests.join()}</strong></div>}
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
module.exports = RoomDetails
