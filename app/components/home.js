import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component{
  render(){
    const imgUrl = '../image/orig_73582.jpg';
    var divStyle = {
      background: 'url(' + imgUrl + ')',
      backgroundSize:'100% 100%',
      height:'100vh'
    };

    return (
      <div style={divStyle}>
        <div className="text-xs-center">
          <h1>GDP Intern Database Project!</h1>
          <Link className = "btn btn-primary btn-sm" to="users/">See Users</Link>
          <Link className = "btn btn-primary btn-sm" to="photos/">See Photos</Link>
          <br />
          <Link className = "btn btn-info btn-sm" to="about/">About</Link>
        </div>
      </div>
    );
  }
}
