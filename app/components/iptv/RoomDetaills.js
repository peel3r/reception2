var React = require('react')

var RoomDetails = React.createClass({
  getInitialState: function () {

    propTypes: {
      roomName: React.PropTypes.string.isRequired
      rooms: React.PropTypes.object.isRequired
    }
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
          <table className='table'>
            <thead>
              <tr>
                <th>Room Name</th>
                <th>Guests</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{room.room_name === roomName && <h4>{room.room_name}</h4>}</td>
                <td>{room.room_name === roomName && <h4>{room.room_guests.join()}</h4>}</td>
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
module.exports = RoomDetails
