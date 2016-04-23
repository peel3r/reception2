var React = require('react')
var Router = require('react-router')
var Repos = require('./github/Repos')
var UserProfile = require('./github/UserProfile')
var Notes = require('./notes/Notes')
var ReactFireMixin = require('reactfire')
var Firebase = require('firebase')
var helpers = require('../utils/helpers');

var Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function () {
    return {
      notes: [1, 2, 3],
      bio: {
        name: 'Tyler McGinnis'
      },
      repos: ['a', 'b', 'c']
    }
  },
  componentDidMount: function () {
    this.ref = new Firebase('https://glaring-fire-4669.firebaseio.com/')
    var childRef = this.ref.child(this.props.params.username);
    this.bindAsArray(childRef, 'notes');

    helpers.getGithubInfo(this.props.params.username)
      .then(function(data){
        this.setState({
          bio: data.bio,
          repos: data.repos
        })
      }.bind(this))
  },
  componentWillUnmount: function () {
    this.unbind('notes')
  },
  handleAddNote: function (newNote) {
    this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote)
  },
  render: function () {
    console.log('Prifile props -----> ', this.props)
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes
            username={this.props.params.username}
            notes={this.state.notes}
            addNote={this.handleAddNote} />
        </div>
      </div>
    )
  }
})

module.exports = Profile;
