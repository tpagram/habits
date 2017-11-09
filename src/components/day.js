import React from 'react';
import PropTypes from 'prop-types'
import '../styles/App.css';

class Day extends React.Component {

  constructor(props) {
    super(props)

    this.cycles = {
      0: "blank",
      1: "complete",
      2: "incomplete"
    }
  }

  render() {
    return (
      <button className={"day hvr-sweep-to-right " + this.cycles[this.props.day.completion]} onClick={this.props.onClick}>
        <div className="day-text">
          {this.props.day.date.format('D/M')}
        </div>
      </button>
    );
  }
}

Day.propTypes = {
  day: PropTypes.object,
  onClick: PropTypes.func
}
export default Day;
