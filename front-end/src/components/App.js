import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import Home from './Home';
import About from './About';
import Contact from './ContactForm';
import Blog from './Blog/Blog.js';
import Create from './Blog/Create.js';
import Edit from './Blog/Edit.js';
import Delete from './Blog/Delete';
import AboutUs from './AboutUs';
import DeleteComment from './Blog/Comment/DeleteComment';

import Jenn from './userModals/Jenn';
import Art from './userModals/Art';
import Jon from './userModals/Jon';


const App = () => {
  return(
    <div className="ui container">
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/aboutus" exact component={AboutUs} />
            <Route path="/aboutus/jenn" component={Jenn} />
            <Route path="/aboutus/jon" component={Jon} />
            <Route path="/aboutus/art" component={Art} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/blog/create" component={Create} />
            <Route path="/blog/edit" component={Edit} />
            <Route path="/blog/delete" component={Delete} />
            <Route path="/blog/comment/delete" component={DeleteComment} />
          </Switch>
      </div>
    </Router>
  </div>
  );
}

export default App;
