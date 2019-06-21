import React from 'react';
import ReactDOM from 'react-dom';
import Lesson from './Lesson';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import Contacts from './components/contacts/contacts';
import Posts from './components/posts/posts';



const App = () => (
  <BrowserRouter>
    <Lesson>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/posts' component={Posts} />
      </Switch>
    </Lesson>

  </BrowserRouter>
)

export default App;