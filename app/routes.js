import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import App from './containers/app';
import UsersIndex from './containers/users_index';
import UsersNew from './containers/users_new';
import UsersDetail from './containers/users_detail';
import Home from './components/home';
import About from './components/about';
import Photos from './components/photos';
import NotFound from './components/notfound';

export default(
<Route path="/" component = {App} >
    <IndexRedirect to="home"/>
    <Route path="home" component = {Home} />
    <Route path="users" component = {UsersIndex} />
    <Route path="users/new" component = {UsersNew} />
    <Route path="users/:id" component = {UsersDetail} />
    <Route path="about" component= {About} />
    <Route path="photos" component={Photos} />

    {/* Optional, catching all routes }*/}
    <Route path="*" component={NotFound} />
</Route>
);
