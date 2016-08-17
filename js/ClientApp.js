var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () { // same as render: function ()...
    return (
      div(null,
        h1(null, 'Check out this other thing.')
      )
    )
  }
})

var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    //these three lines work the same the last two are just shorter hand
    React.createElement(MyTitle, null),
    MyTitleFact(null),
    ce(MyTitle, null)
  )
)
ReactDOM.render(MyFirstComponent, document.getElementById('app'))