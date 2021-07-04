import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends Component.React {

    state = { images : [] };

    onSearchSubmit = async(term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params : {
                query : term
            },
            headers : {
                Authorization: 'Client-ID e5fc57a48891287706ff730b87a4c8f29b5de621fd378bc8ebd952e37a0cd478'
            }

        });

        this.setState({ images : response.data.results });
    }
    
    render(){
        return(
            <div className="ui container" style={{marginTop : '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found {this.state.images.length} images!
            </div>
        );
    }
}

export default App;