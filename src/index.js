import React from 'react';
import ReactDOM from 'react-dom';


class President extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show:true,
         
            brand: "Xi Jinping",

            color: "President of China",
            year:2013
          };
        }
        
   
    render() {
        return (
            <div className="President">
            <header className="President-header">
            {
                  this.state.show? <div><h1>Hide and Show</h1></div> : null
              }
              <button onClick={()=>{this.setState({show:!this.state.show})}}>{ this.state.show? 'Hide' : 'Show'} Div</button>
              </header>
                <img src="images/Chineese president.jpg" alt=""/>
                <h1> {this.state.brand}</h1>
                <p>
                    {this.state.color}

                    {this.state.year}.

                </p>
    
</div>
        );
    }
  
  }  






ReactDOM.render(<President />, document.getElementById('root'))