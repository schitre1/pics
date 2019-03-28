import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = { images: []};

     onSearchSubmit = async (term) => {
        console.log(term);

        const response = await unsplash.get('/search/photos', {
            params: { query: term}
        });
        console.log(this);
       this.setState({images: response.data.results});

        //with promises
        // axios.get('https://api.unsplash.com/search/photos', {
        //     params: { query: term},
        //     headers: {
        //         Authorization: 'Client-ID 680b63a5ae3e9178ce0faad47cb1385121ffb27e93cf7a9227f5aba0f19f1f27'
        //     }
        // }).then((resp) => {
        //     console.log(resp.data.results);
        // });
    }
    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}> 
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found {this.state.images.length} images
            </div>
        );
    }
}
//the onSubmit on SearchBar could be called something else too
//cannot do same thing to normal jsx ele like form input etc.

export default App;