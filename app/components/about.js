import React, { Component } from 'react';
import { Link } from 'react-router';


export default class About extends Component{
  render(){
    const imgUrl = '../image/DSCN7542.JPG';
    var divStyle = {
      background: 'url(' + imgUrl + ')',
      backgroundSize:'100% 100%',
      height:'100vh'
    };

    return(
      <div style={divStyle}>
        <div className="text-xs-center">
            <div className="text-info">
                Alfonsus Raditya Arsadjaja <br />
                GDP Intern Summer 2016 <br/>
                Copyright (c) 2016 <br />
            </div>
            <br/> <br/>
            <Link className="btn btn-primary" to="/home">Home</Link>
            <Link className="btn btn-primary" to="/users">Users</Link>
        </div>
      </div>
    );
  }
}
