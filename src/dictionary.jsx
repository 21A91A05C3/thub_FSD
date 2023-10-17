import './App.css'
import React, { useState } from 'react'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/dictionary.css'

export default function Dictionary(){
  const [keyword,setKeyword] = useState("")
  const [result,setResult]=useState([])

  const [eror,setError]=useState("")

  const api='https://api.dictionaryapi.dev/api/v2/entries/en';

  var text,pos,def;
  async function handleSearch(){
    try{
        const res= await axios.get(`${api}/${keyword}`);
        

        text=(res.data[0].phonetics[0].text)

        pos=(res.data[0].meanings[0].partOfSpeech)

        def=(res.data[0].meanings[0].definitions[0].definition)

        setResult(tex=>[...tex,text])
        setResult(tex=>[...tex,pos])
        setResult(tex=>[...tex,def])
    }
    catch(e){
      setError("Not Available")
    }
  }

  function handleClear(){
    setKeyword("");
    setResult([])
    setError("")
  }
  return(
    <div className="dic">
      {/* <div className='card shadow box'>
        <h1>Free Dictionary</h1>
        <div className='card-body '>
          <input  value={keyword} onChange={(e)=>setKeyword(e.target.value)}/> &nbsp;

          <button type='submit' className='button submit' onClick={handleSearch}><span><i class="fa-solid fa-magnifying-glass"></i></span>&nbsp;&nbsp;Search</button>&nbsp;

          <button type='submit' className='button clear' onClick={handleClear}>Clear</button>

          {
              result.map((e)=>{
                return(
                  <h4 className="card-title">{e}</h4>
                )
              })
          }

          <h5>{eror}</h5>
        </div>
      </div> */}
    </div>
  )
}