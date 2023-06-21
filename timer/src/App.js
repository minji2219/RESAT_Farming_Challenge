import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [hour,setHour] = useState(0);
  const [sec,setSec] = useState(0);
  const [min,setMin] = useState(0);
  const [disabled,setDisabled] = useState(true)
  const [start,setStart] =useState(false);
  useEffect(()=>{

  },[sec])

  const reset = ()=>{
    setHour(0);
    setMin(0);
    setSec(0);
    clearInterval(ref.current)
  }
  const ref = useRef(null)

  const secInt = ()=>{
    ref.current = setInterval(()=>{
      setSec(c=>c-1)
      console.log(sec)
    },1000)}

  const clearSecond = ()=>{
    clearInterval(ref.current)
  }
if (start){
  if(sec==0 && min>=1){
    setSec(59)
    setMin(c=>c-1)
  }
  if(min==0 && hour>=1){
    setMin(59)
    setHour(c=>c-1)
  }
  if(sec==0 && min==0 && hour==0){
    clearInterval(ref.current)
  }
}
  return (
    <div className="bigbox">
      <div className='smallbox'>
        <button className='plus' onClick={()=>setDisabled(false)}>+</button>
        <input className='hour' value={hour} disabled={disabled} onChange={(e)=>{setHour(e.target.value)}}/>
          <div className='bet'>:</div>
        <input className='minutes'value={min} disabled={disabled} onChange={(e)=>{setMin(e.target.value)}}/>
          <div className='bet'>:</div>
        <input className='seconds' value={sec} disabled={disabled} onChange={(e)=>{setSec(e.target.value)}}/>
      </div>
      <div className='btnbox'>
        <button className='start' onClick={()=>{secInt(); setStart(true); setDisabled(true)}}>START</button>
        <button className='stop' onClick={()=>{clearSecond()}}>STOP</button>
        <button className='reset' onClick={()=>reset()}>RESET</button>
      </div>
    </div>
  );
}

export default App;
