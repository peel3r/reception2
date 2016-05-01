var React = require('react');
var Router = require('react-router');

var SearchGithub = React.createClass({
  mixins: [Router.History],
  getRef: function(ref){
    this.usernameRef = ref;
  },
  handleSubmit: function(){
    var roomname = this.usernameRef.value;
    this.usernameRef.value = '';
    this.history.pushState(null, "/room/" + roomname)
  },
  render: function(){
    return (
      <div className="col-sm-12">
        <div className='col-sm-4'>
        <div className='label label-defaylt'>
        <a href="file:///Users/pawel/Desktop/projects/newaya/areception2/public/index.html">Home</a>
        </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-4">
            <input type="text" className="form-control" ref={this.getRef} />
          </div>
          <div className="form-group col-sm-4">
            <button type="submit" className="btn btn-block btn-primary">Search Rooms</button>
          </div>
        </form>
      </div>
    )
  }
});

module.exports = SearchGithub;
