var React = require('react');

var RoomMessages = React.createClass({

  render: function(){
    return (
      <div>
        <h3>Room Messages</h3>
        <p>Messages: {this.props.data.name}</p>
      </div>
    )
  }
})

module.exports = RoomMessages;
