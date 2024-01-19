import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import BlogPost from './components/blogPost';
import DarkModeToggle from './components/darkModeToggle';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

const App = () => (
  <div className='App'>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={BlogPost} />
        <Route exact path='/darkMode' component={DarkModeToggle} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  </div>
);

export default App;
