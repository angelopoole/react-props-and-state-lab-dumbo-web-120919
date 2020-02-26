import React from 'react'
// import 

class Filters extends React.Component {


  handleOption = (params) => {

  }

  handleFindPetsClick = (e) => {
    let type = this.props.currentFilterState
    let animal;
    // let API = `/api/pets`
    if (type === 'all') {
      animal = ""
    }
    if (type === "cat") {
      animal = `?type=cat`
    }
    if (type === "dog") {
      animal = `?type=dog`
    }
    if (type === "micropig") {
      animal = `?type=micropig`
    }

    fetch(`/api/pets${animal}`)
      .then(r => r.json())
      .then(resp => this.props.setPetsState(resp))

    // e.target.value
    // fetch(`/api/pets${e.target.value}`)
  }




  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.props.onChangeType} value={this.currentFilterState} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={(e) => this.handleFindPetsClick(e)} >Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
