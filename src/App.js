import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar'
import MainPage from './components/mainContent/mainPage'
// import {Background} from './components/mainContent/background/background'


export class App extends Component {
  constructor() {
    super();
    this.state = {
        currentPage:'Home'
    }
}

  changePage(page){
    this.setState({currentPage:page});
  }

  render() {
    return (
      <div className="app">
        {/* <Background/> */}
        <Navbar changePage={this.changePage.bind(this)}/>
        <MainPage currentPage={this.state.currentPage}/>
      </div>
    )
  }
}

export default App
