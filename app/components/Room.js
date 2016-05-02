import React from 'react'
import Router from 'react-router'
import RoomReservations from './iptv/RoomReservations'
import RoomDetails from './iptv/RoomDetaills'
import RoomMessages from './iptv/RoomMessages'
import helpers from '../utils/helpers'
import Guest from './iptv/Guest'

var Room = React.createClass({


  getInitialState: function() {
    return {
      rooms: [],
      reservations: []
    }
  },



  componentDidMount: function() {

    helpers.getIptvInfo(this.props.params.room)
    .then(function(data){
      console.log('data----->>',data.reservations)
      this.setState({
        rooms: data.rooms,
        reservations: data.reservations
      })
    }.bind(this))

  },
  componentWillUnmount: function() {
  },
  // handleAddReservation: function (newReservation) {
  //
  // },
  render: function(){
    console.log('data props-reservations--->>>>>>',this.state.reservations)
    return (
      <div className="row">
        <div className="col-md-2">
          <RoomDetails
            roomName={this.props.params.roomname}
            rooms={this.state.rooms}
            />
        </div>
        <div className="col-md-5">
          <Guest
            roomName={this.props.params.roomname}
            rooms={this.state.rooms}
            />
        </div>
        <div className="col-md-5">
          <RoomReservations
            roomName={this.props.params.roomname}
            data={this.state.reservations}
            />
        </div>
      </div>
    )
  }
})

module.exports = Room;
