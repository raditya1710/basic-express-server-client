import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component{
  render(){

    return (
      <div>
        <div className="text-xs-center">
          <h1>"Whats Up!"</h1>
          <Link className = "btn btn-primary" to="users/">See Users</Link>
          <br/><br/><br/><br/><br/>

          <footer>
            <Link className = "btn btn-info" to="about/">About </Link>
          </footer>
        </div>
      </div>
    );
  }
}
