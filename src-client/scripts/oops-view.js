const React = require('react')
const ReactDOM = require('react-dom')

const OopsView = React.createClass({

  render: function() {
    return (
      <div>
        <h1 className="oops-header">OOPS!!</h1>
        <h2 className="oops-comment">Nice try bro....</h2>
        <h2 className="oops-comment">Try again.</h2>
      </div>
    )
  }
});

module.exports = OopsView
