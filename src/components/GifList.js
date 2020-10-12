import React from 'react'

function GifList(props) {
    let gifArray = props.gifs.map((gifObj) => <li key ={gifObj.id} ><img src={gifObj.images.original.url} alt={gifObj.title} /></li>)
    console.log("gif array: ", gifArray)
    return (
        <ul>
            {gifArray}
        </ul>
    )
}

export default GifList