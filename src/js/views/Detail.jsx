import  React, {useContext, useEffect, useState} from 'react'
import { Context } from '../store/appContext'
import { useParams } from 'react-router-dom'; 

const Detail =()=>{
    const params = useParams()
    const [search , setSearch] = useState({})

    const { store } = useContext(Context)

    const details = () => {

      
        if (params.nature == "characters") { 
          const searchFind = store.Characters.find((item) => item._id == params.id); 
          setSearch(searchFind);
        } else {
          const searchFind = store.Planets.find((item) => item._id == params.id); 
          setSearch(searchFind);
        }
      };
      
    
      
useEffect(()=>{
    details() // revisar
},[])

  return(
    <>
    <h1/> {search?.properties?.name} <h1/>
    <h1/> {search?.properties?.gender} <h1/>
    </>
    )
}
export default Detail;