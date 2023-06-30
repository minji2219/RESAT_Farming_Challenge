import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const fakeId = "aabb";
  const fakePw = "1234";

  const [id,setId] =useState("")
  const [pw,setPw] = useState("")
  const [msg,setMsg] = useState("정보를 입력하세요")
  const [login,setLogin] = useState(false)
  const handleId = (e)=>{
    setId(e.target.value)
  }
  const handlePw = (e)=>{
    setPw(e.target.value)
  }
  const handleSubmit = ()=>{
    if(fakeId !== id){
      setId("")
      setPw("")
      setMsg("아이디를 잘못 입력하셨습니다.")
    }
    else if(fakeId == id && fakePw !== pw){
      setMsg("pw를 잘못 입력하셨습니다.")
      setPw("")
    }else{
      setMsg("로그인 성공")
      setLogin(true)
    }
  }
  return (
    <div className="App">
      {login
      ?<>{msg}</>
      :<>
        <div className='group'>
        <div className='input_group'>
        ID: <input type='text' value={id} onChange={(e)=>handleId(e)}/>
          PW: <input type='password' value={pw} onChange={(e)=>handlePw(e)} />
        </div>
          <button type='submit' onClick={handleSubmit}>확인</button>
        </div>
        {msg}
      </>}
    </div>
  );
}

export default App;
