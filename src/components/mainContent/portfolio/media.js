import React, { Component } from 'react'
import Img from './pictures/images.js'
import { Spring } from 'react-spring/renderprops';
import MediaPosition from './mediaPosition'

export class Media extends Component {

    constructor() {
        super();
        this.state = {
            currentPosition:0,
            lastPosition:0,
            maxPosition:0,
            mediaPositions:[],
        }
    }

    componentDidMount(){
        let mediaPositions=[]
        Img[this.props.projectNum].forEach((pos,index)=>{
            mediaPositions.push({id:index});
        })
        let maxPosition=Img[this.props.projectNum].length;
        this.setState({mediaPositions:mediaPositions,maxPosition:maxPosition-1});

        this.interval = setInterval(() => this.setState({currentPosition:
            (Math.round(Math.random() * this.state.maxPosition))})
            , 7000) ;

            
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    changePicture(type){
        clearInterval(this.interval);
        let currentPosition=this.state.currentPosition;
        let newPosition;
        let maxPosition=this.state.maxPosition;
        switch(type) {
            case '-':
                newPosition=currentPosition===0?0:currentPosition-1;
                break;
            case '+':
                newPosition=currentPosition===maxPosition?maxPosition:currentPosition+1;
              break;
            default:
          }
        this.setState({currentPosition:newPosition,lastPosition:currentPosition})
    }

    render() {
        return (
            <div >
                <div className='media'>
                <button style={{visibility:this.state.currentPosition===0?'hidden':'visible'}} onClick={this.changePicture.bind(this,'-')} className='mediaButtons left'><p className='arrow arrowLeft'></p></button>
                <button style={{visibility:this.state.currentPosition===this.state.maxPosition?'hidden':'visible'}} onClick={this.changePicture.bind(this,'+')} className='mediaButtons right'><p className='arrow arrowRight'></p></button> 
                <Spring
                        from={{
                            marginLeft:-(this.state.lastPosition*466)
                        }}
                        to={{
                            marginLeft:-(this.state.currentPosition*466)
                        }}
                        config={{mass:3, tension:540, friction:85}}
                        key={this.state.active}
                    >
                        {props => (
                            <div style={props}>
                                <div  className='mediaPictureContainer'>
                                    {Img[this.props.projectNum].map((elem,index)=>
                                        
                                            <img alt='description' key={index} className='mediaPicture' src={elem}/>
                                    )}
                                </div>                                
                            </div>

                        )}
                </Spring>  
  
                </div>
                {/* <div className='over'> */}
                    <MediaPosition positions={this.state.mediaPositions} currentPosition={this.state.currentPosition}/>
                {/* </div> */}
                
            </div>
        )
    }
}

export default Media
