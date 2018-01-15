import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component{
    render(){
        return (
            <div>
                <h1>Hello world</h1>
                <p>这是一个react的demo</p>
            </div>
        );
    }
}

ReactDOM.render(<Hello />,document.getElementById('content'));