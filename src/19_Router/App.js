import React from 'react';
//import ReactDOM from 'react-dom';
import Lesson from './Lesson';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import Contacts from './components/contacts/contacts';
import Posts from './components/posts/posts';
import Post from './components/post/post';
import Error from './components/error/error';

const App = () => (
  <BrowserRouter>
    <Lesson>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contacts' component={Contacts} />
        <Route exact path='/posts' component={Posts} />
        <Route path='/posts/:id' component={Post} />
        <Route path='*' component={Error} />
      </Switch>
    </Lesson>

  </BrowserRouter>
)

export default App;