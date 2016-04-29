var React = require('react')
var TableRow = require('./TableRow')

var Table = React.createClass({

  getInitialState: function() {
    return {
      rooms: this.props.rooms
    }
  },

  render: function () {

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
        {this.props.rooms.map(function (room, i) {
          return <TableRow key={i} data={room} />
        })
      }
</tbody>
      </table>
    </div>
    </div>
    )
  }
})

module.exports = Table
