import { React, useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import EverythingCard from './EverythingCard'


function TopHeadlines() {
  const params = useParams(); 
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1); 
  const [totalResults, setTotalResults] = useState(0);

  function handlePrev(){
    setPage(page -1)
  }
  function handleNext(){
    setPage(page + 1)
  }
  let pageSize = 15; 
  useEffect(() => {
    fetch(`http://localhost:3000/top-headlines?language=en&category=${params.category}&page=${page}&pageSize=${pageSize}`)
      .then((response) => {
        if (response.ok) {
          // console.log(response.clone().json());
          return response.clone().json();
        }
      })
      .then((json) => {
        console.log(json)
        setTotalResults(json.data.totalResults)
        setData(json.data.articles);
      });
  }, [page]);

  return (
    <>
    {/* <div className="my-10 cards grid lg:place-content-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1 xs:gap-4 md:gap-10 lg:gap-14 md:px-16 xs:p-3 ">
      {data.map((element, index) => {
        return (
          <div key={index} className="everything-card flex flex-col p-5 gap-3 mb-5">
            <p className="title font-medium mb-2">{element.name}</p>
            <div className="description">
              <p className="description-text leading-7">
                {element.description}
              </p>
            </div>
            <div className="info">
              <p className="url mb-2">
                <span className="font-semibold">url : </span>
                <a href={element.url} target="_blank" className="link underline">
                  {element.url}
                </a>
              </p>
              <div className="origin flex justify-between flex-wrap">
                <p>
                  <span className="font-semibold">Category : </span>
                  <span className="capitalize">{element.category}</span>
                </p>
                <p>
                  <span className="font-semibold">Country : </span>
                  <span className="uppercase">{element.country}</span>
                </p>
              </div>
              <p><span className="font-semibold ">Language : </span><span className="uppercase">{element.language}</span></p>
            </div>
          </div>
        );
      })}
    </div> */}
    <div className='my-10 cards grid lg:place-content-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1 xs:gap-4 md:gap-10 lg:gap-14 md:px-16 xs:p-3 '>
      {data.map((element, index) => {
        return <EverythingCard 
           title ={element.title} description = {element.description} imgUrl ={element.urlToImage}
        publishedAt = {element.publishedAt} url ={element.url} author={element.author} 
        source={element.source.name} key={index}
      />
      })}  
    </div>
    <div className="pagination flex justify-center gap-14 my-10 items-center">
      <button disabled={page <= 1} className='btn' onClick={() => handlePrev()}>Prev</button>
      <p className='font-semibold opacity-80'>{page} of {Math.ceil(totalResults/15)}</p>
      <button className='btn' disabled={page > Math.ceil(totalResults/15)} onClick={() => handleNext()}>Next</button>
    </div>
    </>
  );
}

export default TopHeadlines;
