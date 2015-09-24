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

  handleClick: function(event) {
    var hoursBox = React.findDOMNode(this.refs.hoursBox);
    var project = React.findDOMNode(this.refs.project);
    var selectedProject = parseInt(project.value);

    var ts = this.state.timeSheet;
    ts[selectedProject][1] = parseInt(hoursBox.value) + parseInt(ts[selectedProject][1])

    this.setState({
      hours: parseInt(hoursBox.value) + parseInt(this.state.hours),
      timeSheet: ts
    })

    console.log(this.state.hours)
  },

  render: function() {
    return (
      <div id="tick">
        <h1>Tick Tock</h1>
        <Tickometer hours={this.state.hours} />

        <div id="tempInput">
          <select ref="project" id="projects">
            <option value="0">Project 1</option>
            <option value="1">Project 2</option>
          </select>

          <input type="text" ref="hoursBox" />

          <button type="submit" onClick={this.handleClick}>Tick!</button>
        </div>

        <Timesheet timeSheet={this.state.timeSheet} />
      </div>
    );
  }
});

React.render(<Tick />, document.getElementById("content"));
