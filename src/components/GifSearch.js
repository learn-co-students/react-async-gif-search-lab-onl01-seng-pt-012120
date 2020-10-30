import React from 'react'

class GifSearch extends React.Component {
  state = {
    input: ''
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render(){
    return(
      <form onSubmit={(e) => this.props.handleSubmit(e)}>
        <input
          name="input"
          type="text"
          placeholder="search"
          value={this.state.input}
          onChange={(e) => this.handleChange(e)}
        ></input>
        <input type="submit"></input>
      </form>
    )
  }
} 

export default GifSearch;