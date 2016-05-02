var React = require('react')

var Guest = React.createClass({

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
              <h3 className="panel-title">Guest Names</h3>
            </div>
            <div class="panel-body">
              <div class="container">
              <p>{room.room_name === roomName && <div> Guestst 1:  <strong>{room.room_guests[0]}</strong></div>}</p>
              <p>{room.room_name === roomName && <div> Guestst 2:  <strong>{room.room_guests[1]}</strong></div>}</p>
            </div></div>
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
module.exports = Guest
