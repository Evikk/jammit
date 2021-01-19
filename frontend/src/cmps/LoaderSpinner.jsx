import Loader from 'react-loader-spinner'
import React, { Component } from 'react'
 export class LoaderSpinner extends React.Component {
  //other logic
    render() {
     return(
    //   <Loader
    //      type="Puff"
    //      color="#00BFFF"
    //      height={100}
    //      width={100}
    //      timeout={3000} //3 secs
 
    //   />
      <Loader type="Audio" color="#00BFFF" height={80} width={80} timeout={3000} />
     );
    }
 }