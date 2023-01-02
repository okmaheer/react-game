import { Component } from 'react';
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
    const { monsters,  searchField } = this.state;
    const { onSearchChanged } = this;
    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })
    return (
      <div className='App'>
        <input className='search-box' type='search' placeholder='Search Monster' onChange={onSearchChanged} />
        {filteredMonster.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>
                {monster.name}
              </h1>
            </div>
          );
        })}
      </div>
    )
  }
}

export default App;
