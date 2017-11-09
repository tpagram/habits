import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HabitList from 'components/habit_list'
import 'styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <header className="App-header">
            <h1 className="App-title">Habits!</h1>
          </header>
          <HabitList/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
