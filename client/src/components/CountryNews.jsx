import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import EverythingCard from './EverythingCard'

function CountryNews() {
  const params = useParams();
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch(`http://localhost:3000/country/${params.iso}`
    , {
    method : "get",  
    header : {
      "content-type" : "application/json"
    }
    }
    )
    .then(response=> {
      // console.log(response) 
      if(response.ok){
        // console.log(response.clone().json());
        return response.clone().json();
      }
    })
    .then(myJson=> {
      // console.log(myJson)
      setData(myJson.data.articles)})
  },[data])

  return (
    <div className='cards grid lg:place-content-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1 xs:gap-4 md:gap-10 lg:gap-14 md:px-16 xs:p-3 '>
      {data.map((element, index) => {
        return <EverythingCard 
           title ={element.title} description = {element.description} imgUrl ={element.urlToImage}
        publishedAt = {element.publishedAt} url ={element.url} author={element.author} 
        source={element.source.name} key={index}
      />
      })}

      {/* <EverythingCard 
           title ="tt" description = "dd" imgUrl ="url"
        publishedAt = "date" url ="url" author="auth"
        source="sos" key={1}
      /> */}
    </div>
  )
}

export default CountryNews
