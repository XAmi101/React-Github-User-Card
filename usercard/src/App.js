import React from 'react';
import './App.css';
import UserCard from './UserCard';
import 'semantic-ui-css/semantic.min.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    console.log("First Render (mounting)");
    fetch('https://api.github.com/users/XAmi101')
      .then(res => res.json())
      .then(data => this.setState({ user:data }));
    fetch('https://api.github.com/users/XAmi101/followers')
      .then(res => res.json())
      .then(data => this.setState({ followers:data }));
  }

  componentDidUpdate () {
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <h1>REact Github UserCard</h1>
        <UserCard user={this.state.user} />
        {this.state.followers.map(follower => (
        <UserCard user={follower} key={follower.id} />
          ))}
    </div>
    );
  }
}

export default App;
