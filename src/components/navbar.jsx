import React, { Component } from 'react';

class Counter extends Component {
    
    render() { 
        return <div><nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Virus info </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Dashboard <span class="sr-only">(current)</span></a>
            </li>
            
            
          </ul>
          <span class="navbar-text">
            
          </span>
        </div>
      </nav></div>;
    }
    formatCount(){
        return this.state.count === 0 ? "Zero" : this.state.count;
    }
}
 
export default Counter;