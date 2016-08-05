import React, { Component } from 'react';
import { Link } from 'react-router';
import PhotoItem from './photo_item';
export default class Photo extends Component{

  render(){
    return(
      <div>
        <h1 className="text-info" style={{margin:'5px'}}>Gallery</h1>
        <PhotoItem name='Optimized-DSCN7727.JPG' />
        <PhotoItem name='Optimized-DSCN7542.JPG' />
        <PhotoItem name='orig_73582.jpg' />
        <br />
        <Link className="btn btn-primary btn-sm" to="/">Go to Home</Link>
        <br />
        <Link className="btn btn-primary" to="/users">Go to Users</Link>
      </div>
    );
  }
}
