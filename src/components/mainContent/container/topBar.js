import React from 'react'
import { Spring } from 'react-spring/renderprops';


export default function TopBar(props) {
    return (
        <div className='topBar'>
            
            <div></div>
            <Spring
                from={{
                    marginLeft:(5+(33*(props.lastPosition-1)))+'%'
                }}
                to={{
                    marginLeft:(5+(30*(props.position-1)))+'%'
                }}
                config={{mass:5, tension:600, friction:80}}
                
                key={props.position}
            >
                {props => (
                    <div style={props} className='topStyle'>
                                </div>
                )}
        </Spring>
        <div></div>
        </div>
    )
}

