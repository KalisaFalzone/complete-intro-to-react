var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () { // same as render: function ()...
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
})

var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    //these three lines work the same the last two are just shorter hand
    React.createElement(MyTitle, {title: 'Use props everywhere', color: 'papayawhip'}),
    MyTitleFact({title: 'Props are great', color: 'rebeccapurple'}),
    ce(MyTitle, {title: 'Props are the best!', color: 'mediumaquamarine'})
  )
)
ReactDOM.render(MyFirstComponent, document.getElementById('app'))