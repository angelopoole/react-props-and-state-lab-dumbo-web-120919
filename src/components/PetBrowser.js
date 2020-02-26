import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  createPetsOnPage = () => {
    let newPetArray = this.props.pets
    let mappedPetArray = newPetArray.map(pet => {
      return <Pet
      pet={pet}
      key={pet.id}
      onAdoptPet={this.props.onAdoptPet}
      />
    })
    return mappedPetArray
  }


  render() {
    return <div className="ui cards">{this.createPetsOnPage()}</div>
  }
}

export default PetBrowser
