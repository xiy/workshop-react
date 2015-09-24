var React = require("react");
var Tickometer = require("tickometer");
var Timesheet = require("timesheet");

var Tick = React.createClass({
  getInitialState: function() {
    return {
      hours: 0,
      timeSheet: [
        ['Project 1', 0],
        ['Project 2', 0]
      ]
    }
  },
  handleUpdate: function(event) {
    this.setState({hours: event.target.value});
  },
  render: function() {
    return (
      <div id="tick">
        <h1>Tock!</h1>
        <h2>Don't tick the boss off.</h2>

        <Tickometer hours={this.state.hours} />

        <div id="tempInput">
          <input type="text" value={this.state.hours} onChange={this.handleUpdate} />
        </div>

        <Timesheet timeSheet={this.state.timeSheet} />
      </div>
    );
  }
});

React.render(<Tick />, document.getElementById("content"));
