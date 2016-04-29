import React from 'react'
var Table = require('../components/iptv/Table')
import helpers from '../utils/helpers'


var Home = React.createClass({

  getInitialState: function() {
    return {
      rooms: []
    }
  },



  componentDidMount: function() {

    helpers.getIptvInfo(this.props.params.room)
    .then(function(data){
      this.setState({
        rooms: data.rooms,
      })
    }.bind(this))

  },


  render: function () {
    console.log('data from Home----->>',this.state.rooms)

    return (
      <div>
        <h2 className='text-center'>
          Search Hotel Rooms Above
        </h2>
        <div className='text-center'>
        <Table rooms={this.state.rooms}/>
        </div>
      </div>
    )
  }
})

module.exports = Home
