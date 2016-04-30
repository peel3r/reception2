var React = require('react')
import Time from 'react-time'

var TableRow = React.createClass({

  render: function () {
    return (
      <tr>

        <td>{this.props.data.id}</td>
        <td>{this.props.data.room_name}</td>
        <td><Time value={this.props.data.check_in_date} format='DD-MM-YYYY'/></td>
        <td><Time value={this.props.data.check_out_date} format='DD-MM-YYYY'/></td>
        <td>{this.props.data.room_guests}</td>
        <td>{this.props.data.site_name}</td>
      </tr>
    )
  }
})

module.exports = TableRow
