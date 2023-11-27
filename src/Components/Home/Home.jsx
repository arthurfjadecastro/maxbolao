import React, { Component } from 'react'
import "./home.css"
import Navbar from './Navbar/navbar'

export default class Home extends Component {
  render() {
    return (
      <div className='backgroundpage'>
        <Navbar />
      </div>
    )
  }
}
