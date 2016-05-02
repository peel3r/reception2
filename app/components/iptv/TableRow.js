var React = require('react')
import Time from 'react-time'

var TableRow = React.createClass({

  render: function () {
    return (
      <tr>

        <td>{this.props.data.id}</td>
        <td><a href={`file:///Users/pawel/Desktop/projects/newaya/areception2/public/index.html?#/room/${this.props.data.room_name}`} > {this.props.data.room_name} </a></td>
        <td><Time value={this.props.data.check_in_date} format='DD-MM-YYYY'/></td>
        <td><Time value={this.props.data.check_out_date} format='DD-MM-YYYY'/></td>
        <td>
          <div className='label label-primary'>{this.props.data.room_guests[0]}</div>
          <br />
          <div className='label label-primary'>{this.props.data.room_guests[1]}</div>
        </td>
        <td>{this.props.data.site_name}</td>
      </tr>
    )
  }
})

module.exports = TableRow
