import React, { Component } from 'react'
import BackgroundImage from './../../../images/background.png'
// import { Spring } from 'react-spring/renderprops';

export class Background extends Component {
    render() {
        return (
            <div>

                {/* <Spring
                        from={{
                            opacity:0,
                            transform: `perspective(1500px) rotate(0deg)`,
                        }}
                        to={{
                            opacity:1,
                            transform: `perspective(1500px) rotate(180deg)`,
                        }}
                        config={{mass:1, tension:60, friction:1800}}
                        // config={{mass:1, tension:600, friction:610}}
                        // key={this.state.currentPage}
                    >
                        {props => (
            
                                <img style={props} className='backgroundImage' src={BackgroundImage}/>
                            
                        )}
                </Spring> */}


                
            </div>
        )
    }
}

export default Background
