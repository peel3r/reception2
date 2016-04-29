var React = require('react')


var TableRow = React.createClass({

  render: function () {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.room_name}</td>
        <td>{this.props.data.check_in_date}</td>
        <td>{this.props.data.check_out_date}</td>
        <td>{this.props.data.room_guests}</td>
        <td>{this.props.data.site_name}</td>
      </tr>
    )
  }
})

module.exports = TableRow
