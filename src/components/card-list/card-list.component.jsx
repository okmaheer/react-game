import { Component} from 'react';


class CardList extends Component {

  render(){
    console.log('render in card list');
       const { filteredMonster} = this.props
    return(
       filteredMonster.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>
                {monster.name} 
              </h1>
            </div>

          );
        })
    )
  }
}

export default CardList;