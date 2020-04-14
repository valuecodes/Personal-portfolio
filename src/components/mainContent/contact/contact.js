import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops';
import Logos from './../../../images/logos'
export class Contact extends Component {

    constructor() {
        super();
        this.state = {
            selected:true,
            copied:false
        }
    }

    static getDerivedStateFromProps(props, state) {
        if(props.currentPage==='Contact'){
            return{
                selected:true,
                copied:false
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

    updateClipboard() {
        navigator.clipboard.writeText('juhakangas55@gmail.com')
      }


    render() {
        console.log(this.state)
        return (
            <div className='pageElement contactPage' style={{display:this.state.selected?'':'none'}}>
                <h1 className='pageHeader'>Contact</h1>
                
                <div className='contactContainer'>
                    <div className='contactInfo'>
                        <div className='contactLink cmail'>
                            <img className='contactLinkImg linkedInCImg' src={Logos.gmail}/>
                            <h2 className='contactlinkInfo'>Gmail</h2>
                            <p className='contactEmail'>juhakangas55@gmail.com</p>
                            <button onClick={this.updateClipboard} className='copyClipBoard'>
                                <img className='contactLinkImg clipBoard' src={Logos.clipboard}/>
                            </button>
                        </div>

                        <a className='contactLink' href="https://www.linkedin.com/in/juha-kangas-287454158/" target="_blank">
                            <img className='contactLinkImg linkedInCImg' src={Logos.linkedIn}/>
                            <h2 className='contactlinkInfo'>LinkedIn</h2>
                        </a>

                        <a className='contactLink' href="https://github.com/valuecodes" target="_blank">
                            <img className='contactLinkImg' src={Logos.github}/>
                            <h2 className='contactlinkInfo'>Github</h2>
                        </a>

                        <a className='contactLink' href="https://f5viz.csb.app/" target="_blank"linkButton>
                                <img className='contactLinkImg' src={Logos.codesandbox}/>
                                <h2 className='contactlinkInfo'>Codesandbox</h2>
                        </a>
                        
                    </div>
                    <div className='contactForm'>
                        <div></div>
                        <iframe className='googleForm' src="https://docs.google.com/forms/d/e/1FAIpQLSflHbBp7fZOfHVZamTuxBDUqZUkf-tKiWnQv66f1TzN4P7SZw/viewform?embedded=true" width="740" height="420" frameborder="0" marginheight="0" marginwidth="0">Ladataan…</iframe>
                    </div>
                </div> 
                
            </div>
        )
    }
}

export default Contact
