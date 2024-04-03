import React from 'react'
import { useState , useEffect } from 'react'

interface Data {
  message: string;
}
const NodeApi: React.FC =  () => {
const [data , setData] = useState<Data | null>(null);

/* array useEffect vide peut travailler le componentDidMount et componentDidUpdate */
/* array useEffect plein peut travailler le componentWillUnMount  */

useEffect(() => {
  fetch("http://localhost:3001/api/data")
  .then(response => response.json())  
  .then((data : Data) => setData(data))
  .catch(error => console.error('Erreur : ' ,error))

 
}, [])

  return (

  

    <div>{data ? data.message : 'chargement ...'}</div>
  )
}

export default NodeApi