import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import App from './containers/app';
import UsersIndex from './containers/users_index';
import UsersNew from './containers/users_new';
import UsersDetail from './containers/users_detail';
import Home from './components/home';
import About from './components/about'

export default(
<Route path="/" component = {App} >
    <IndexRedirect to="home"/>
    <Route path="home" component = {Home} />
    <Route path="users" component = {UsersIndex} />
    <Route path="users/new" component = {UsersNew} />
    <Route path="users/:id" component = {UsersDetail} />
    <Route path="about" component= {About} />
</Route>
);
