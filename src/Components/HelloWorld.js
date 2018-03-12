import React from 'react';

class HelloWorld extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.message}</h1>
            </div>
        );
    }
}

export default HelloWorld;