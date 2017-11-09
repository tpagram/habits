import React from 'react';
import Habit from './habit'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import '../styles/App.css';

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
      <div>
        <div className="habit-list">
          {this.state.habits.map((name,i) =>
            <Habit key={i} name={name}/>
          )}
        </div>
        <div className="footer">
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
      </div>
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
