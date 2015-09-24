var React = require("react");

module.exports = React.createClass({displayName: 'Tickometer',
  render: function() {
    var tickStatus;
    var hours = this.props.hours;
    switch (true) {
      case (hours > 1.5 && hours <= 3):
        tickStatus = 'crap';
        break;
      case (hours > 3 && hours <= 4.5):
        tickStatus = 'betterer';
        break;
      case (hours > 4.5 && hours <= 6):
        tickStatus = 'much-excite';
        break;
      case (hours > 6 && hours <= 7.5):
        tickStatus = 'almost-all-the-things';
        break;
      case (hours > 7.5):
        tickStatus = 'amazeballs';
        break;
      default:
        tickStatus = 'lazy-git';
        break;
    }

    return (
      <div>
      <div id="tickometer" className={tickStatus}> </div>
      <span id="hours">{hours} hours filled in.</span>
      </div>
    );
  }
});
