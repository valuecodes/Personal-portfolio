import React, { Component } from 'react'
// import { useSpring, animated } from 'react-spring'

  
  export class homeAnimation extends Component {

    constructor() {
        super();
        this.state = {
            selected:true,
            graphic:[]
        }
    }

    componentDidMount(){

        let graph=this.createGraph();

        this.setState({graphic:graph})
    }

    createGraph(){
        let graph=[]
        for(var i=0;i<62;i++){
            graph.push({degree:((365/62)*i),height:getRandomInt(10)});
        }
        return graph;
    }


      render() {
          return (
            
                <div className='boxCenter'>
                    <div className='center'>
                        {this.state.graphic.map((elem,index)=>
                            <div className='innerBox'
                            style={{
                            transform:'rotate('+elem.degree+'deg)',
                            }}>
                            <div className='paddi'></div>
                        </div>
                            
                        )}
                        
                    </div>
                    <div className='overBox'></div>
                </div>
            
          )
      }
  }
  
  export default homeAnimation
  
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }