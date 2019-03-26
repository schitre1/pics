import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term){
        console.log(term);
    }
    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}> 
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}
//the onSubmit on SearchBar could be called something else too
//cannot do same thing to normal jsx ele like form input etc.

export default App;