var React = require('react')
import Time from 'react-time'
import helpers from '../../utils/helpers'

var TableRow = React.createClass({
  getInitialState: function () {
    return {
      check_in_date: this.props.data.check_in_date,
      check_out_date: this.props.data.check_out_date,
      room_guests: this.props.data.room_guests,
      site_name: this.props.data.site_name,
      room_name: this.props.data.room_name,
      textChanged: false
    }
  },
  handleTextChange: function(event) {
   this.setState({
     room_guests: event.target.value,

     textChanged: true
   });
 },
 handleSaveClick: function() {
    this.setState({textChanged: false});
  },
  handleUndoClick: function() {
    this.setState({
      room_guests: this.props.data.room_guests,
      check_in_date: this.props.data.check_in_date,
      check_out_date: this.props.data.check_out_date,
      textChanged: false
    });
  },
  handleDeleteClick: function() {
    this.setState({
      room_guests: '',
      check_in_date: '',
      check_out_date: ''
    })
  },
 changesButtons: function() {
    if(!this.state.textChanged) {
      return null
    } else {
      return [
        <button
          onClick={this.handleSaveClick}
          className="btn btn-default"
          >
          Save
        </button>,
        <button
          onClick={this.handleUndoClick}
          className="btn btn-default"
          >
          Undo
        </button>
      ]
    }
  },
  render: function() {
    return (
      <tr>
        <td><input type="text"
          disabled={true}
          className="form-control"
          value={this.state.room_name}
          /></td>
          <td><input type="text"
            className="form-control"
            value={this.state.room_guests}
            onChange={this.handleTextChange}
            /></td>
        <td><input type="text"
          className="form-control"
          value={this.state.check_in_date}

          /></td>
        <td><input type="text"
          className="form-control"
          value={this.state.check_out_date}

          /></td>
        <td><span className="input-group-btn">
          {this.changesButtons()}
          <button
            onClick={this.handleDeleteClick}
            className="btn btn-primary"
            >
            Delete
          </button>
        </span></td>
      </tr>
    )
  }

  // render: function () {
  //   return (
  //
  //     <tr>
  //       <td>{this.props.data.id}</td>
  //       <td><a href={`file:///Users/pawel/Desktop/projects/newaya/areception2/public/index.html?#/room/${this.props.data.room_name}`} > {this.props.data.room_name} </a></td>
  //
  //     <td><Time value={this.props.data.check_in_date} format='DD-MM-YYYY'/></td>
  //       <td><Time value={this.props.data.check_out_date} format='DD-MM-YYYY'/></td>
  //       <td>
  //         <div className='label label-primary'>{this.props.data.room_guests[0]}</div>
  //         <br />
  //         <div className='label label-primary'>{this.props.data.room_guests[1]}</div>
  //       </td>
  //       <td>{this.props.data.site_name}</td>
  //     </tr>
  //
  //   )
  // }
})

module.exports = TableRow
