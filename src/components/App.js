import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (e) => {
    // let filter = this.state.filters.type
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }

  setPetsState = (pets) => {
    this.setState({ pets: pets })
  }

  onAdoptPet = (petId) => {
    console.log(petId)
    let pets = this.state.pets.map(pet => {
      return pet.id === petId ? {...pet, isAdopted: true} : pet;
    });
    this.setState({pets: pets})
    // pet.isAdopted = !pet.isAdopted


  }



  render() {

    // console.log(this.state.pets)

    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={(e) => this.onChangeType(e)} setPetsState={this.setPetsState} currentFilterState={this.state.filters.type} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={(e) => this.onAdoptPet(e)} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App
