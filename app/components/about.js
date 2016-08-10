import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

export default class About extends Component{
  render(){
    const imgUrl = '../image/Optimized-DSCN7542.JPG';
    var divStyle = {
      background: 'linear-gradient(180deg, #00FFFF, #E6E6FA)',
      backgroundSize:'100% 100%',
      height:'100vh'
    };

    return(
      <div style={divStyle}>
        <Helmet title="About"/>
        <div className="text-xs-left" style={{margin:'5px'}}>
          <h4>This is the research project about React and Redux with Server Side Rendering</h4>
          <strong>References:</strong>
          <ul>
            <li>Modern React with Redux</li>
            <li>Laravel 5 Fundamentals on Laracasts</li>
            <li><a href="https://github.com/reactjs/react-router/blob/master/docs/guides/ServerRendering.md">https://github.com/reactjs/react-router/blob/master/docs/guides/ServerRendering.md</a></li>
            <li><a href="https://github.com/reactjs/react-router/blob/master/docs/API.md#match-routes-location-history-options--cb">https://github.com/reactjs/react-router/blob/master/docs/API.md#match-routes-location-history-options--cb</a></li>
            <li><a href="https://ifelse.io/2015/08/27/server-side-rendering-with-react-and-react-router/">https://ifelse.io/2015/08/27/server-side-rendering-with-react-and-react-router/</a></li>
          </ul>
        </div>

        <div className="text-xs-center">
          <Link className="btn btn-primary btn-sm" to="/home">Home</Link>
          <Link className="btn btn-primary btn-sm" to="/photos">Photos</Link>
          <Link className="btn btn-primary btn-sm" to="/users">Users</Link>
        </div>

      </div>
    );
  }
}
