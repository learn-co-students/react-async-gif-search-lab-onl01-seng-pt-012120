import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    state = {
        gifs: [],
    }
    

    render() {
        return (
            <div>
                <GifSearch fetchGifs={this.fetchGifs}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

    fetchGifs = (search) => {
    
        const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=ChUzxeVXaofCX1Wtt6XxNdQyFjsaE9sh&rating=g`
        fetch(url)
        .then(resp => resp.json())
        .then(({data}) => {
            this.setState({ gifs: data.slice(0,3).map( gif => ({ url: gif.images.original.url }) ) })
          })
            
    
}   

componentDidMount() {
    this.fetchGifs()
}
    
    
}
export default GifListContainer;