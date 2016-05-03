var React = require('react')
var TableRow = require('./TableRow')

var Table = React.createClass({


  render: function () {
    console.log('table props', this.props.rooms)
    return (
      <div>
        <table>
        <thead>
          <tr>
            <th>Room Name</th>
            <th>Guests</th>
            <th>Check In</th>
            <th>Check Out</th>
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
    )
  },

})

module.exports = Table
