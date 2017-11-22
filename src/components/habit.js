import React from 'react';
import Day from './day'
import moment from 'moment'
import PropTypes from 'prop-types'

import Langle from 'react-icons/lib/fa/chevron-left'
import Rangle from 'react-icons/lib/fa/chevron-right'
import '../styles/App.css';

const visibleDays = 7

class Habit extends React.Component {

  constructor() {
    super()

    this.state = {
      days: this.getInitialDays(),
      lastDate: null
    }

    this.getInitialDays = this.getInitialDays.bind(this)
    this.renderDays = this.renderDays.bind(this)
    this.handleCompletion = this.handleCompletion.bind(this)
    this.handleLeft = this.handleLeft.bind(this)
    this.handleRight = this.handleRight.bind(this)
  }

  getInitialDays() {
    let endDate = moment().startOf('day')
    let startDate = endDate.clone().subtract(365, 'days')
    let days = []
    while (startDate <= endDate) {
      days.push({date: startDate, completion: 0})
      startDate = startDate.clone().add(1, "day")
    }
    return days
  }

  renderDays() {
    let lastDate = this.state.lastDate ? this.state.lastDate : this.state.days.length
    return (
      this.state.days.slice(lastDate - visibleDays, lastDate).map((day, i) =>
        <Day key={lastDate - visibleDays + i} day={day} onClick={() => this.handleCompletion(lastDate - visibleDays + i)}/>
      )
    )
  }

  handleCompletion(i) {
    let days = this.state.days
    days[i].completion = (days[i].completion + 1) % 3
    this.setState({days: days})
  }

  handleLeft() {
    let lastDate = this.state.lastDate ? this.state.lastDate - 1  : this.state.days.length - 1
    if (lastDate - visibleDays > 0) {
      this.setState({lastDate: lastDate})
    }
  }

  handleRight() {
    if (this.state.lastDate && this.state.lastDate < this.state.days.length) {
      this.setState({lastDate: this.state.lastDate + 1})
    }
  }

  render() {
    return (
      <div className="habit">
        <div className="habit-name">{this.props.name}</div>
        <Langle className="day-button left" onClick={this.handleLeft}/>
        <div className="day-list">
          {this.renderDays()}
        </div>
        <Rangle className="day-button right" onClick={this.handleRight}/>
      </div>
    );
  }
}

Habit.propTypes = {
  name: PropTypes.string,
}

export default Habit;
