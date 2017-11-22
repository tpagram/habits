import React from 'react';
import Habit from './habit'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import {TransitionGroup} from 'react-transition-group'
import FadeRight from '../animations/fadeRight.js'
import '../styles/App.css';

// const FadeRight = ({ children, ...props }) => (
//   <CSSTransition
//     {...props}
//     timeout={1000}
//     classNames="fade-right"
//   >
//     {children}
//   </CSSTransition>
// );

class HabitList extends React.Component {

  constructor() {
    super()
    this.state = {
      habits: ["Example Habit"],
      newHabitName: "",
      newHabitError: ""
    }

    this.addHabit = this.addHabit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  render() {
    return (
      [
        <TransitionGroup className="habit-list" key="habit-list">
          {this.state.habits.map((name,i) =>
            <FadeRight key={name}>
              <Habit key={i} name={name}/>
            </FadeRight>
          )}
        </TransitionGroup>,
        <div className="footer" key="footer">
          <form className = "add-habit" onSubmit={this.addHabit}>
            <TextField
              hintText="New habit"
              errorText={this.state.newHabitError}
              value={this.state.newHabitName}
              onChange={this.handleNameChange}
            />
            <FloatingActionButton type="submit" mini="true" className="add-habit-button">
              <ContentAdd/>
            </FloatingActionButton>
          </form>
        </div>
      ]
    );
  }
  handleNameChange(e) {
    this.setState({newHabitError: ""})
    this.setState({newHabitName: e.target.value})
  }

  addHabit(e) {
    e.preventDefault()
    if (this.state.newHabitName) {
      this.setState({habits: [...this.state.habits, this.state.newHabitName]})
      this.setState({newHabitName: ""})
    }
    else {
      this.setState({newHabitError: "Please give a name for your habit"})
    }
  }
}

export default HabitList;
