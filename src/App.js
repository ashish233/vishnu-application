import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      fname:'',
      result:''
    }
    this.submitdata = this.submitdata.bind(this)
  }

   splitFunction = (getIndex)=>{
    let temp = parseInt(getIndex)
    var sum =0;
    
    while(temp){
      let digit = temp%10;
        sum = sum +digit;
        temp = temp/10;
    }
     return sum;
 }

  submitdata(e) {
    e.preventDefault();
    let {fname:name } = this.state;
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var sum =0;
 
 for(var char in name){
    var getIndex = alphabet.indexOf(name[char])+1;
    if(getIndex/10 >= 1){
       var finalDigit = this.splitFunction(getIndex);
        sum = sum + Math.round(finalDigit)
    }
    else{
        sum = sum +getIndex;
    }


}
 
if(sum>20){
    var finalDigit =this.splitFunction(sum);
    sum = finalDigit;
}
else if(sum==19){
    sum = sum-4;
    console.log(sum)
}
this.setState({result:Math.round(sum)})
  }

  render() {
    return (
      <div className="App">
        <form>
          <div>
            <label>Enter Name</label>
            <input  type="text" id="f_name" onChange={e => this.setState({fname:e.target.value})}/>
            
          </div>
          <div>
            <button onClick={(e) => this.submitdata(e)}>Submit</button>
          </div>
        </form>
        {this.state.result &&
         <h5>
           congrats you get {this.state.result } rs discount ....
         </h5>
          }
      </div>
    );
  }
}

export default App;
