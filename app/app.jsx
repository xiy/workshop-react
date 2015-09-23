var React = require("react");

var Tick = React.createClass({
  render: function() {
    return (
      <div id="tick">
        <h1>Tick Tock</h1>
      </div>
    );
  }
});

React.render(<Tick />, document.getElementById("content"));
