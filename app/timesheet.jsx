var React = require("react");

module.exports = React.createClass({displayName: 'Timesheet',
  render: function() {
    return (
      <div id="timesheet">
        <h3>Logged today:</h3>
        <ul>
        {
          this.props.timeSheet.map(function(timeEntry) {
            return <li><p><strong>{timeEntry[0]}:</strong> {timeEntry[1]}</p></li>
          })
        }
        </ul>
      </div>
    );
  }
});
