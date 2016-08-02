import React, { Component } from 'react';
import { Link } from 'react-router';
export default class Home extends Component{
  render(){
    return (
      <div className="text-xs-center">
        <h1>"Whats Up!"</h1>
        <Link className = "btn btn-primary" to="users/">See Users</Link>
      </div>
    );
  }
}
