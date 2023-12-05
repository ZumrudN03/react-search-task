import React, { useState } from 'react'
import { useEffect } from 'react'
import './index.scss'

const SearchTask = () => {
const [product, setProduct] = useState([])
const [search, setSearch] = useState("")

useEffect(()=>{
    fetch("https://northwind.vercel.app/api/products/")
    .then(res=>res.json())
    .then(data=>setProduct(data))
},[])

function handleCearch(e) {
    setSearch(e.target.value)
}
  return (
    <div className='searchTask'>
       <input className='inp' type="text" onChange={handleCearch}/>
       <div className='buttons'>
        <button>A-Z</button>
        <button>Z-A</button>
       </div>
       {product
       .filter((x)=>x.name.toLowerCase().includes(search.toLowerCase()))
       .map((x)=><li>{x.name}</li>)
       }
    </div>
  )
}

export default SearchTask