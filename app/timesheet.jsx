var React = require("react");

module.exports = React.createClass({displayName: 'Timesheet',
  render: function() {
    return (
      <ul id="timesheet">
      {
        this.props.timeSheet.map(function(timeEntry) {
          return <li>Task: {timeEntry[0]}, Hours: {timeEntry[1]}</li>
        })
      }
      </ul>
    );
  }
});
