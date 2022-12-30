import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      monsters:[],
    };
  }

  async componentDidMount() {
    const respone = await fetch('http://jsonplaceholder.typecode.com/users')
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
    return (
      <div className='App'>
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
