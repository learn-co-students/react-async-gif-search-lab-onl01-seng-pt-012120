import React from 'react'

class GifSearch extends React.Component {

    state = {
        searchTerm: ""
    }

    changeHandler = (e) => {
        this.setState({ searchTerm: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state.searchTerm)
        this.setState({ searchTerm: "" })
    }
    render() {
        return (
            <div>
                <br />
                <form class="form-inline active-cyan-3 active-cyan-4" onSubmit={this.submitHandler}>
                    <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" value={this.state.searchTerm} onChange={this.changeHandler} />
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <br />
            </div>
        )
    }
}


export default GifSearch