import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};
    //when someone changes text inside text box
    onInputChange(event){
        //event.target.value will contain text that user typed
        console.log(event.target.value);
    }

    // onFormSubmit = (event) =>{ // a way to bind this (arrow function)
    //     event.preventDefault(); //will prevent browser from automatically submiting form and refreshing whole page
    //     console.log(this.state.term);
    // }

    onFormSubmit = (event) => { // a way to bind this (arrow function)
        event.preventDefault(); //will prevent browser from automatically submiting form and refreshing whole page
        // console.log(this.state.term);

        //use this.props for class based component
        this.props.onSubmit(this.state.term);
    }

    //(e) => this.onFormSubmit(e) another way in form element
    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={(e) => this.setState({term: e.target.value})}
                        />
                    </div>
                </form>
                
            </div>
        );
    }
}
//we leave the parentheses off in this.onInputChange because we don't want the function to be called every time we render
//the text box but rather when user types something in it.
//<input type="text" onChange={this.onInputChange}></input>

export default SearchBar;