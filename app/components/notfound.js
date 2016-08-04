import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NotFound extends Component{
  render(){
    return(
      <div>
        <div className="text-xs-center">
          <h1 className="text-danger">Oops! Page you're looking doesn't exist!</h1>
          <Link className="btn btn-link" to="/home">Back to Home</Link>
        </div>
      </div>
    );
  }
}
