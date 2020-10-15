import React from 'react';

class GifSearch extends React.Component {
    state = {
        searchValue: ""
    }

    handleChange = event => {
        this.setState({
            searchValue: event.target.value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.props.submit(this.state.searchValue)}>
                    <div className="form-group">
                        <label for="search">Enter a search term... </label>
                        <input
                            id="search"
                            type="text"
                            name="search"
                            onChange={this.handleChange}
                            value={this.state.searchValue}
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">Find GIFs</button>
                </form>
            </div>
        )
    }
}

export default GifSearch