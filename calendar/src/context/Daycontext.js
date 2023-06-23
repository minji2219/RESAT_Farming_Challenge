import { createContext, useMemo, useState } from "react";
import Month from "../components/Month";

export const MyContext = createContext()

export default function ContextProvider(){
  const [month,setMonth] = useState(new Date().getMonth()+1)

  const minusMonth = ()=>{
    setMonth(month-1)
  }
  const plusMonth = ()=>{
    setMonth(month+1)
  }
//  const value=[
//   month,
//   plusMonth,
//   minusMonth,]
//   console.log(value)
  return(
    <MyContext.Provider value={{month, minusMonth, plusMonth}}>
      <Month/>
    </MyContext.Provider>
  )
}