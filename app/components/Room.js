import React from 'react'
import Router from 'react-router'
import RoomReservations from './iptv/RoomReservations'
import RoomDetails from './iptv/RoomDetaills'
import RoomMessages from './iptv/RoomMessages'
var $ = require ('jquery')

var Room = React.createClass({


  getInitialState: function() {
    return {
      room_name:             '',
      site_id:               '',
      site_name:             '',
      id:                    '',
      check_in_date:         '',
      check_out_date:        '',
      guest_name:            '',
      reservation_guest_id:  '',
    }
  },



  componentDidMount: function() {
    this.serverRequest = $.get('http://localhost:3009/api/reception/v1/rooms.json', function (result){
      var room = result[0]
      this.setState({
        room_name: room.room_name,
        site_id: room.site_id,
        id: room.id,
        site_name: room.site_name,
        check_in_date: room.check_in_date,
        check_out_date: room.check_out_date,
        guest_name: room.guest_name,
        reservation_guest_id: room.reservation_guest_id
      })
    }.bind(this))

  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  handleAddReservation: function (newReservation) {

  },
  render: function(){
    console.log('data props---->>',this.state.room_name)
    return (
      <div className="row">
        <div className="col-md-4">
          <RoomDetails
            roomname={this.props.params.roomname}
            room_name={this.state.room_name}
            site_name={this.state.site_name}
            site_id={this.state.site_id}
            id={this.state.id}
            />
        </div>
        <div className="col-md-4">
          <RoomReservations
            check_in_date={this.props.params.check_in_date}
            check_out_date={this.state.check_out_date}
            check_in_date={this.state.check_in_date}
            guest_name={this.state.guest_name}
            reservation_guest_id={this.state.reservation_guest_id}
            />
        </div>
      </div>
    )
  }
})

module.exports = Room;
