var React = require('react')
var TableRow = require('./TableRow')

var Table = React.createClass({

  render: function () {
    return (
      <div>
        this is table view
        <TableRow />

      </div>
    )
  }
})

module.exports = Table
