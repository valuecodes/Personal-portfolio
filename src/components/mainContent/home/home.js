import React, { Component } from 'react'
import ProfilePicture from '../../../images/ProfilePicture.png'

export class Home extends Component {

    constructor() {
        super();
        this.state = {
            selected:true,
        }
    }

    static getDerivedStateFromProps(props, state) {
        if(props.currentPage==='Home'){
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
        console.log(this.state)
        return (
            <div className='pageElement'style={{display:this.state.selected?'':'none'}}>
                <h1 className='pageHeader'>Home Page</h1>
                <div id='homePageContent'>
                    <div id='introduction'>
                        <div className='infoContainer'>
                            <h2 className='infoContainerHeader'>Inroduction</h2>
                            <h2 className='infoHeader'>Name</h2>
                            <h1 className='infoValue'>Juha Kangas</h1>
                            <h2 className='infoHeader'>Age</h2>
                            <h1 className='infoValue'>24</h1>
                            <h2 className='infoHeader'>Education</h2>
                            <h1 className='infoValue'>Bachelor of Business Administration</h1>
                            <h2 className='infoHeader'>Job experience</h2>
                            <h1 className='infoValue'>Assistant Controller, Payroll Assistant</h1>
                        </div>
                        <div className='infoContainer'>
                            <h2 className='infoContainerHeader'>Web Development skills</h2>
                            <h2 className='infoHeader'>Specialised</h2>
                            <h1 className='infoValue'>Javascript, React, React Spring, Node.js, and Mysql</h1>
                            <h2 className='infoHeader'>Interests</h2>
                            <h1 className='infoValue'>Financial markets and automation</h1>
                            <h2 className='infoHeader'>Goals</h2>
                            <h1 className='infoValue'>To become Full Stack Developer</h1>
                        </div>
                    </div>
                   <div id='pictureContainer'>
                        <img id='profilePicture' src={ProfilePicture} />
                    </div> 
                </div>
                
            </div>
        )
    }
}

export default Home
