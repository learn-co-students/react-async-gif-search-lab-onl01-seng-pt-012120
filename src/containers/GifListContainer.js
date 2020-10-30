  
import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
  state = {
    gifs: [],
    query: ''
  }

  componentDidMount(){
    this.callFetch()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      query: e.target.input.value
    }, this.callFetch)
  }

  callFetch = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(res =>
      this.setState({
        gifs: res.data.slice(0,3)
      })
    )
  }

  render(){
    return(
      <div>
        < GifSearch handleSubmit={this.handleSubmit}/>
        < GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}

export default GifListContainer;