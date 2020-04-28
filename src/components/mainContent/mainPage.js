import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import {Home} from './home/home';
import {Portfolio} from './portfolio/porfolio';
import {Contact} from './contact/contact';
import GithubLogo from './../../images/github.png';
import LinkeInLogo from './../../images/linkedIn.png';
import CodeSandBoxLogo from './../../images/codesandbox.png';
import TopBar from './container/topBar'

export class MainPage extends Component {
    
    constructor() {
        super();
        this.state = {
            currentPage:'Home',
            lastPosition:1,
            newPosition:1,
            initial:true
        }
    }

    static getDerivedStateFromProps(props, state) {
        if(props.currentPage!==state.currentPage){
            let position=state.lastPosition;
            let lastPosition=state.newPosition;
            switch(props.currentPage){
                case 'Home':
                    position=1;
                    break;
                case 'Portfolio':
                    position=2;
                    break;
                case 'Contact':
                    position=3;
                    break;
                default:
                    break
            }
            return{
                currentPage:props.currentPage,
                lastPosition:lastPosition,
                newPosition:position,
                initial:false
            }
        }
        return false;
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.currentPage!==this.state.currentPage) {
            
            return true;
        }
        return false;
    }

    render() {
        return (
            <div className='mainContainer'>
                <TopBar position={this.state.newPosition} lastPosition={this.state.lastPosition}/>
                <div className='screen'>
                <Spring
                        from={{
                            marginLeft:(100-(100*this.state.lastPosition))+'%'
                        }}
                        to={{
                            marginLeft: (100-(100*this.state.newPosition))+'%'
                        }}
                        config={{mass:5, tension:600, friction:80}}
                        // config={{mass:1, tension:600, friction:610}}
                        key={this.state.currentPage}
                    >
                        {props => (
                            <div style={props} className='mainPages'>
                                {/* <PageElement/>
                                <PageElement/>
                                <PageElement/> */}
                                <Home currentPage={this.state.currentPage}/>
                                <Portfolio currentPage={this.state.currentPage}/>
                                <Contact currentPage={this.state.currentPage}/>
                            </div>
                        )}
                </Spring>

                {/* <Spring
                        from={{
                            opacity:this.state.initial?1:0.8,
                            transform: `perspective(1500px) rotateY(${this.state.initial?-180:0}deg)`,
                        }}
                        to={{
                            opacity:1,
                            transform: `perspective(1500px) rotateY(${this.state.newPosition>this.state.lastPosition?180:-180}deg)`,
                        }}
                        config={{mass:1, tension:600, friction:180}}
                        // config={{mass:1, tension:600, friction:610}}
                        key={this.state.currentPage}
                    >
                        {props => (
                            <div style={props} className='mainPages'>
                                <Home currentPage={this.state.currentPage}/>
                                <Portfolio currentPage={this.state.currentPage}/>
                                <Contact currentPage={this.state.currentPage}/>
                            </div>
                        )}
                </Spring> */}
                </div>
                <div className='bottomBar'>                
                    <div className='contactLogos'>
                        <div></div>
                        <a href="https://github.com/valuecodes" target="_blank" rel="noopener noreferrer">
                            <img  className='contactLogo githublogo' src={GithubLogo} alt="description"/>
                        </a>
                        <a href="https://www.linkedin.com/in/juha-kangas-287454158/" target="_blank" rel="noopener noreferrer" >
                            <img alt="description" className='contactLogo' src={LinkeInLogo}/>
                        </a>
                        <a href="https://codesandbox.io/u/valuecodes" target="_blank" rel="noopener noreferrer" >
                            <img alt="description" className='contactLogo' src={CodeSandBoxLogo}/>
                        </a>
                        <div></div>
                    </div> 
                </div>                   
            </div>
        )
    }
}

export default MainPage
