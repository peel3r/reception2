var React = require('react')
var Main = require('../components/Main')
var Home = require('../components/Home')
var Room = require('../components/Room')
var Router = require('react-router')
var Route = Router.Route
var IndexRoute = Router.IndexRoute

module.exports = (

  <Route path="/" component={Main}>
    <Route path="room/:roomname" component={Room} />
    <IndexRoute component={Home} />
  </Route>
);
