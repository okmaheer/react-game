import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
    console.log('contructor')
  }

  async componentDidMount() {
    console.log('componentDidMount')
    const respone = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await respone.json()
    this.setState(() => {
      return {
        monsters: data
      }
    }, () => {
      console.log(this.state)
    })
  }
  onSearchChanged = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return {
        searchField
      }
    })

  }
  render() {
    console.log('render')
    const { monsters, searchField } = this.state;
    const { onSearchChanged } = this;
    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })
    return (
      <div className='App'>
        <h1 className='app-tittle'>Monster Game</h1>
        <SearchBox className='monster-search-box' onChangedHandler={onSearchChanged} placeholder='Search Monsters' />
        <CardList filteredMonster={filteredMonster} />
      </div>
    )
  }
}

export default App;
