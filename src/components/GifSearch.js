import React from 'react';

class GifSearch extends React.Component {

    state = {
        search: ""
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            search: event.target.value
        })

        this.props.fetchGifs(this.state.search)
        
        console.log(event.target.name)
        console.log(event.target.value)
        console.log(this.state.search)
        
    }

    handleChange = event => {
        this.setState({
            search: event.target.value
        })
    }
    

    render() {
        return (
            <div> 
                <form onSubmit={event => this.handleSubmit(event)}> 
                    <input type="text" name="search" value={this.state.search} onChange={event => this.handleChange(event)} />
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}
export default GifSearch;