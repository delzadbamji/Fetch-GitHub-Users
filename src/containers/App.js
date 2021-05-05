import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
//import Button from 'react-bootstrap/Button'
import dummy from '../dummy';
//import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  constructor() {
    super()
    this.state = {
      gitUsers: [],
      searchfield: ''
    }
  }


/**
 * Created a default placeholder for dummies from a local file 
 * rather than fetching from https://jsonplaceholder.typicode.com/users
 * on the landing page
 */
  componentDidMount() {
      this.setState({ gitUsers: dummy});
  }


/**onchange update searchfield and then call the github API */
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value }, this.onSubmitting(event.target.value));
  }


/**
 * Fetch github users using the github rest API 
 */
  onSubmitting = (username)=>{
    //console.log(this.state.searchfield)
    if(username == "" || null){
      this.setState({ gitUsers: dummy});
      return;
    }
    
    fetch(`https://api.github.com/users/${username}`)
    .then(response=> response.json())
    .then(users => {
      let temp=[];
      temp.push(users);
      this.setState({ gitUsers: temp},console.log(this.state.gitUsers))  
    });
    
  };
/**
 * start with a loading page and then fill the dummy user-list till the client makes a search.
 * Update the search keys as the client types.
 * Make a call when the client clicks submit
 * 
 */
  render() {
    const { gitUsers, searchfield } = this.state;

    return !gitUsers.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>GitHub Users</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList users={gitUsers} />
          </Scroll>
        </div>
      );
  }
}

export default App;
