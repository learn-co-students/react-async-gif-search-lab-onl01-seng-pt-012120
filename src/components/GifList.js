import React from 'react'

function GifList(props) {
    let gifArray = props.gifs.map((gifObj) => <li key ={gifObj.images.original.url} ><img src={gifObj.images.original.url} alt={gifObj.images.original.url} /></li>)
    console.log("gif array: ", gifArray)
    return (
        <ul>
            {gifArray}
        </ul>
    )
}

export default GifList