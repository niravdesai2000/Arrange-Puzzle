import logo from './logo.svg';
import './App.css';
import React, {useState}from 'react';


function App() {
  const [value1, newvalue1]= useState('1');
  const [value2, newvalue2]= useState('2');
  const [value3, newvalue3]= useState('3');
  const [value4, newvalue4]= useState('4');
  const [value5, newvalue5]= useState('5');
  const [value6, newvalue6]= useState('6');
  const [value7, newvalue7]= useState('7');
  const [value8, newvalue8]= useState(' ');
  const [value9, newvalue9]= useState('8');
  
  const one=()=>{
    if( value2==' ')
    {
      newvalue1(value2);
      newvalue2(value1);
      document.getElementById('one').className='n_btn';
      document.getElementById('two').className='btn';
    }

  }
  const two=()=>{
    if( value3==' ')
    {
      newvalue3(value2);
      newvalue2(value3);
      document.getElementById('two').className='n_btn';
      document.getElementById('three').className='btn';
    }
    if( value1==' ')
    {
      newvalue1(value2);
      newvalue2(value1);
      document.getElementById('two').className='n_btn';
      document.getElementById('one').className='btn';
    }
    if( value5==' ')
    {
      newvalue5(value2);
      newvalue2(value5);
      document.getElementById('two').className='n_btn';
      document.getElementById('five').className='btn';
    }

  }
  const three=()=>{
    if(value6 == ' ')
    {
      newvalue3(value6);
      newvalue6(value3);
      document.getElementById('three').className='n_btn';
      document.getElementById('six').className='btn';

    }
    if(value2 == ' ')
    {
      newvalue2(value3);
      newvalue3(value2);
      document.getElementById('three').className='n_btn';
      document.getElementById('two').className='btn';

    }
    

  }
  const four=()=>{
    if(value5 == ' ')
    {
      newvalue5(value4);
      newvalue4(value5);
      document.getElementById('four').className='n_btn';
      document.getElementById('five').className='btn';

    }

  }
  const five=()=>{
    if( value6== " ")
    {
      newvalue6(value5);
      newvalue5(value6);
      document.getElementById('five').className='n_btn';
      document.getElementById('six').className='btn';
    }
    if( value2== " ")
    {
      newvalue2(value5);
      newvalue5(value2);
      document.getElementById('five').className='n_btn';
      document.getElementById('two').className='btn';
    }
    if( value4== " ")
    {
      newvalue4(value5);
      newvalue5(value4);
      document.getElementById('five').className='n_btn';
      document.getElementById('four').className='btn';
    }
    if( value8== " ")
    {
      newvalue8(value5);
      newvalue5(value8);
      document.getElementById('five').className='n_btn';
      document.getElementById('eight').className='btn';
    }

  }
  const six=()=>{
    if(value9 == " ")
    {
      newvalue6(value9);
      newvalue9(value6);
      document.getElementById('six').className='n_btn';
      document.getElementById('nine').className='btn';
    }
    if(value3 == " ")
    {
      newvalue3(value6);
      newvalue6(value3);
      document.getElementById('six').className='n_btn';
      document.getElementById('three').className='btn';
    }
    if(value5 == " ")
    {
      newvalue5(value6);
      newvalue6(value5);
      document.getElementById('six').className='n_btn';
      document.getElementById('five').className='btn';
    }

  }
  const seven=()=>{
    if(value8 == " ")
    {
      newvalue8(value7);
      newvalue7(value8);
      document.getElementById('seven').className='n_btn';
      document.getElementById('eight').className='btn';
    }

  }
  const eight=()=>{
    if(value9 == " ")
    {
      newvalue8(value9);
      newvalue9(value8);
      document.getElementById('eight').className='n_btn';
      document.getElementById('nine').className='btn';
    }
    if(value5 == " ")
    {
      newvalue5(value8);
      newvalue8(value5);
      document.getElementById('eight').className='n_btn';
      document.getElementById('five').className='btn';
    }
    if(value7 == " ")
    {
      newvalue8(value7);
      newvalue7(value8);
      document.getElementById('eight').className='n_btn';
      document.getElementById('seven').className='btn';
    }

  }
  const nine=()=>{
    if( value8==' ')
    {
      newvalue8(value9);
      newvalue9(value8);
      document.getElementById('nine').className='n_btn';
      document.getElementById('eight').className='btn';
    }
    if( value6==' ')
    {
      newvalue6(value9);
      newvalue9(value6);
      document.getElementById('nine').className='n_btn';
      document.getElementById('six').className='btn';
    }

  }
  if(value1 =="1" &&  value2 =="2" && value3 =="3" &&  value4 =="4" &&  value5 =="5" && value6== "6" && value7=="7" && value8=="8" && value9 == ' ')
  {
    document.getElementById("ten").innerHTML="Winner";
    document.getElementById('one').disabled=true;
    document.getElementById('two').disabled=true;
    document.getElementById('three').disabled=true;
    document.getElementById('four').disabled=true;
    document.getElementById('five').disabled=true;
    document.getElementById('six').disabled=true;
    document.getElementById('seven').disabled=true;
    document.getElementById('eight').disabled=true;
    document.getElementById('nine').disabled=true;

    
  }


  return (
    <div className="App">
      <table border="0" >
        <tr>
     <td><input type="button" value={value1} onClick={one} id='one'></input></td>
     <td><input type="button" value={value2} onClick={two} id='two'></input></td>
     <td><input type="button" value={value3} onClick={three} id='three'></input></td></tr>
     <tr><td><input type="button" value={value4} onClick={four} id='four'></input></td>
    <td><input type="button" value={value5} onClick={five} id='five'></input></td> 
     <td><input type="button" value={value6} onClick={six} id='six'></input></td></tr>
     <tr><td><input type="button" value={value7} onClick={seven} id='seven'></input></td>
     <td><input type="button" value={value8} onClick={eight}id='eight' className='n_btn'></input></td>
     <td><input type="button" value={value9}  onClick={nine}  id='nine'></input></td></tr></table>
     <h3 id='ten'></h3>

    </div>
  );
}

export default App;
