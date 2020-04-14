import React from 'react'

export default function MediaPosition(props) {

    let len=props.positions.length;
    let padding=165-(len*10)



    return (     
        <div className='mediaPosition'>
            <div id='mediaPadding' style={{width:padding}}></div>
            {props.positions.map((elem,index)=>
                <p style={{backgroundColor: props.currentPosition===index?'rgba(5, 115, 224, 0.74)':'white'}} className={'mediaPosDot'} key={index}></p>
            )}
        </div>
    )
}
