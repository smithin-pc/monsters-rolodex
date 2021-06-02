import React , {Component} from 'react';
import './App.css';
import {CardList} from './Component/card-list/card-list.component.jsx';
import {SearchBox} from './Component/search-box/search-box.component.jsx';

class App extends Component
{
  constructor()
  {
    super();

    this.state = {
    monster : [],
    searchField : ''
  }
};

handleChange = e => {
  this.setState({searchField : e.target.value})
}
componentDidMount()
{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(users => users.json())
    .then(user => this.setState({monster : user}));
}

  render()
  {
    const {monster , searchField} = this.state;
    const filteredMonster = monster.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())    
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeHolder='search monster'
          handleChange = {this.handleChange}
        />       
       <CardList monster = {filteredMonster} />       
       </div>
    );
  }
}

export default App;
