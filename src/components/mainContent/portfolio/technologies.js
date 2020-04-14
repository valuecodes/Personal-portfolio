import React, { Component } from 'react'

export class Technologies extends Component {
    render() {
        return (
            <div className='techElem'>
                {this.props.tech}
            </div>
        )
    }
}

export default Technologies
