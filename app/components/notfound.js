import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

export default class NotFound extends Component{
  render(){
    return(
      <div>
        <Helmet title="404 Not Found" />
        <div className="text-xs-center">
          <h1 className="text-danger">Oops! Page you're looking doesn't exist!</h1>
          <Link className="btn btn-link" to="/home">Back to Home</Link>
        </div>
      </div>
    );
  }
}
