var React = require("react");

var Tick = React.createClass({
  render: function() {
    return (
      <div id="tick">
        <h1>Tock!</h1>
        <h2>Don't tick the boss off.</h2>
      </div>
    );
  }
});

React.render(<Tick />, document.getElementById("content"));
