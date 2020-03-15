import React, { Component } from 'react'
import "./App.css"
import Navbar from './components/NavBar/NavBar'

import TourList from './components/TourList'

class App extends Component {
  render() {
    return (
      <main>
        <Navbar/>
        <TourList/>
      </main>
    )
  }
}



export default App
