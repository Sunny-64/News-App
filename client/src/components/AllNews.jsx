import {React, useState, useEffect} from 'react'
import EverythingCard from './EverythingCard'

function AllNews() {

  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/all-news')
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
  }, [])

  return (
    <div className='cards grid lg:place-content-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1 xs:gap-4 md:gap-10 lg:gap-14 md:px-16 xs:p-3 '>
      {data.map((element, index) => {
        return <EverythingCard 
           title ={element.title} description = {element.description} imgUrl ={element.urlToImage}
        publishedAt = {element.publishedAt} url ={element.url} author={element.author} 
        source={element.source.name} key={index}
      />
      })}
    </div>
  )
}

export default AllNews
