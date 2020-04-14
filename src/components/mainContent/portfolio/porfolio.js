import React, { Component } from 'react'
import {Technologies} from './technologies'
import {Media} from './media'
import GitLogo from './../../../images/github.png';
import CodeSandLogo from './../../../images/codesandbox.png';

export class Portfolio extends Component {

    constructor() {
        super();
        this.state = {
            selected:true,
            divcaltech:['Javascript','React','Node.js','React Spring','chart.js 2','Mysql','Fetch API'],
            dataTech:['Javascript','React','Node.js','Mysql','Fetch API'],
            typeofWord:['Javascript','chart.js'],
            active:1,
        }
    }

    static getDerivedStateFromProps(props, state) {
        // console.log(props);
        if(props.currentPage==='Portfolio'){
            return{
                selected:true
            }
        }
        return{
            selected:false
        }
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextState.selected!==this.state.selected && nextProps.currentPage!==this.props.currentPage){
            return true
        }
        return false;
    }


    render() {
        return (
            <div className='pageElement' style={{display:this.state.selected?'':'none'}}>
                <h1 className='pageHeader' >Portfolio</h1>
                <div id='projectPage'>
                    <div className='projectContainer'>
                        <h2 className='infoContainerHeader'>Dividend Calendar</h2>
                        <h1 className='projectInfo'>Website to track dividends, analyze long term company data and compare portfolio of stocks</h1>
                        <div className='links'>
                            <a className='projectLink' href="https://f5viz.csb.app/" target="_blank" className='linkButton'>
                                <img className='projectLinkImg' src={CodeSandLogo}/>
                                <h2 className='linkInfo'>View Live Version</h2>
                            </a>
                            <a href="https://github.com/valuecodes/Dividend-Calendar-demo" target="_blank" className='linkButton'>
                                <img className='projectLinkImg' src={GitLogo}/>
                                <h2 className='linkInfo'>Code in Github</h2>
                            </a>
                        </div>
                        <div className='technologies'>
                            <h2 className='techHeader'>Technologies used</h2>
                            {this.state.divcaltech.map((tech,index) =>
                                <Technologies key={index} tech={tech}/>
                            )}                            
                        </div>
                        <Media projectNum={0}/>
                    </div>
                    <div className='projectContainer'>
                        <h2 className='infoContainerHeader'>Data Pusher</h2>
                        <h1 className='projectInfo'>Gather financial data from different websites and push it to the local Mysql server. Data will then be used in the Dividend Calendar website.</h1>
                        <div className='links'>
                            {/* <h2 className='linkInfo'>Test in CodeSandbox</h2>
                            <button className='linkButton'>Here</button> */}
                            <a href="https://github.com/valuecodes/Data-pusher" target="_blank" className='linkButton'>
                            <img className='projectLinkImg' src={GitLogo}/>
                            <h2 className='linkInfo'>Code in Github</h2>
                            </a>                           
                        </div>
                        <div className='technologies'>
                            <h2 className='techHeader'>Technologies used</h2>
                            {this.state.dataTech.map((tech,index) =>
                                <Technologies key={index} tech={tech}/>
                            )}                            
                        </div>
                        <Media projectNum={1}/>
                    </div>
                    <div className='projectContainer'>
                        <h2 className='infoContainerHeader'>Type of Word</h2>
                        <h1 className='projectInfo'>Converts English words and phrases to type of words.</h1>
                        <div className='links'>                            
                            <a href="https://codepen.io/valuecodes/full/qMwoPB" target="_blank" className='linkButton'>
                            <img className='projectLinkImg' src={CodeSandLogo}/>
                            <h2 className='linkInfo'>View Live Version</h2>
                            </a>  
                            <a href="https://github.com/valuecodes/typeOfwordConverter" target="_blank" className='linkButton'>
                            <img className='projectLinkImg' src={GitLogo}/>
                            <h2 className='linkInfo'>Code in Github</h2>
                            </a>                             
                        </div>
                        <div className='technologies'>
                            <h2 className='techHeader'>Technologies used</h2>
                            {this.state.typeofWord.map((tech,index) =>
                                <Technologies key={index} tech={tech}/>
                            )}                             
                        </div>
                        <Media projectNum={2}/>
                    </div>         
                </div>

                
                {/* <h1>Portfolio</h1> */}
            </div>
        )
    }
}

export default Portfolio
