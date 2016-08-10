import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

export default class Home extends Component{
  render(){
    var divStyle = {
      background: 'linear-gradient(180deg, #F0F8FF, #E6E6FA)',
      backgroundSize:'100% 100%',
      height:'100vh'
    };

    return (
      <div style={divStyle}>
        <Helmet title="Home" />
        <div className="text-xs-center">
          <h1>Welcome to Radit-SSR Website!</h1>
          <br/> <br/> <br/>
          <h2>Example of React-Redux Server-Side Rendering with ExpressJS</h2>
          <Link className = "btn btn-primary btn-sm" to="users/">See Users</Link>
          <Link className = "btn btn-primary btn-sm" to="photos/">See Photos</Link>
          <br />
          <Link className = "btn btn-info btn-sm" to="about/">About</Link>
        </div>

        <footer className="text-xs-center footer">
            <div className="text-info">
                Alfonsus Raditya Arsadjaja <br />
                GDP Intern Summer 2016 <br />
                Copyright (c) 2016 <br />
            </div>
        </footer>
      </div>
    );
  }
}
