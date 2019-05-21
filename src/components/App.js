import React from 'react';
import {BrowserRouter,Route}  from 'react-router-dom';
import StreamShow from './Streams/StreamShow';
import StreamList from './Streams/StreamList';
import StreamCreate from './Streams/StreamCreate';
import StreamEdit from './Streams/StreamEdit';
import StreamDelete from './Streams/StreamDelete';
import Header from './Header';

const  App = () =>  {
    return (
        <div className="ui container">
           
            <BrowserRouter>
                <Header />
                <div>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new"  exact component={StreamCreate} />
                    <Route path="/streams/edit"  exact component={StreamEdit} />
                    <Route path="/streams/delete"  exact component={StreamDelete} />
                    <Route path="/streams/show"  exact component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default  App; 