var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var div = React.DOM.div

var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    // these three lines work the same the last two are just shorter hand
    React.createElement(MyTitle, {title: 'Use props everywhere', color: 'papayawhip'}),
    MyTitleFact({title: 'Props are great', color: 'rebeccapurple'}),
    ce(MyTitle, {title: 'Props are the best!', color: 'mediumaquamarine'})
  )
)
ReactDOM.render(MyFirstComponent, document.getElementById('app'))
