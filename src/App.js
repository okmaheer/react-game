import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      monsters:[],
    };
    console.log('contructor')
  }

  async componentDidMount() {
    console.log('componentDidMount')
    const respone = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await respone.json()
    this.setState(()=> {
      return {
        monsters:data
      }
    },()=>{
      console.log(this.state)
    })
  }

  render(){
    console.log('render')
    return (
      <div className='App'>
        <input className='search-box' type='search' placeholder='Search Monster' onChange={()=>{}}  />
        { this.state.monsters.map((monster)=>{
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
