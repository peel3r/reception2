var React = require('react')
var NotesList = require('./NotesList')
var AddNote = require('./AddNote')

var GuestMessages = React.createClass({

  render: function () {
    console.log('GuestMessages---->', this.props.data)
    return (
      <div>
        <p>{this.props.data}</p>,
      </div>
    )
  }
})

module.exports = GuestMessages
