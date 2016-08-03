import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component{
  render(){
    const imgUrl = '../image/DSCN7542.JPG';
    var divStyle = {
      backgroundImage: 'url(' + imgUrl + ')'
    };
    return (
      <div style={divStyle} className="text-xs-center">
        <h1>"Whats Up!"</h1>
        <Link className = "btn btn-primary" to="users/">See Users</Link>
        <br/><br/><br/><br/><br/>
        <Link className = "btn btn-info" to="about/">About </Link>
      </div>
    );
  }
}
