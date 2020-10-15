import React from 'react';

class GifList extends React.Component {
    makeGifList = () => {
        // console.log(this.props.gifs)
        return this.props.gifs.map(gif => <li><img src={gif.images.original.url} alt="gif" ></img></li>)
    }

    render(){
        return (
            <div>
                <ul>
                    {this.makeGifList()}
                </ul>
            </div>
        )
    }
}

export default GifList