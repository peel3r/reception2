var React = require('react')

var RoomDetails = React.createClass({
  getInitialState: function(){
    return {
    room_name: this.props.room_name,
    site_id: this.props.site_id,
    site_name: this.props.site_name,
    room_id: this.props.id
  }
  },
  render: function () {
console.log(this.props)
    return (
      <div>
        <h3> Name "{this.props.room_name}"</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Room Name</th>
              <th>Room Id</th>
              <th>Site Name</th>
              <th>Site Id</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.site_id}</td>
              <td>{this.props.site_name}</td>
              <td>{this.props.id}</td>

            </tr>
          </tbody>
      </table>
      </div>
    )
  }
})

module.exports = RoomDetails
