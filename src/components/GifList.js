import React from 'react'

const GifList = (props) => {
  const renderGifs = () => {

    return props.gifs.map((gif,idx) => {
      return <li key={gif.id}>
        <img src={gif.images.original.url} alt="gif"/>
            </li>
    })
  }

  return(
    <ul>
      {renderGifs()}
    </ul>
  )
} 
export default GifList;
