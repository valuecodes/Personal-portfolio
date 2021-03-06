import React from 'react'

export default function MediaPosition(props) {

    let len=props.positions.length;
    let padding=185-(len*10)



    return (     
        <div className='mediaPosition'>
            <div id='mediaPadding' style={{width:padding}}></div>
            {props.positions.map((elem,index)=>
                <p style={{backgroundColor: props.currentPosition===index?'rgb(0, 0, 0)':'transparent'}} className={'mediaPosDot'} key={index}></p>
            )}
        </div>
    )
}
