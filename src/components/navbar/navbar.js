import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops';

export class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            active:'Home'
        }
    }


    buttonClicked(page){
        this.props.changePage(page);
    }

    render() {
     
        return (
            <div id='navBar'>
                <div className='buttonContainer'>
                    <button onClick={this.buttonClicked.bind(this,'Home')} className='navButton'>Home</button>
                    <button onClick={this.buttonClicked.bind(this,'Portfolio')} className='navButton'>Portfolio</button>
                    <button onClick={this.buttonClicked.bind(this,'Contact')} className='navButton'>Contact</button>                
                </div>
            </div>
        )
    }
}

export default Navbar
