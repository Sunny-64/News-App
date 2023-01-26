import { React, useState, useEffect } from "react";

function TopHeadlines() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/top-headlines")
      .then((response) => {
        if (response.ok) {
          // console.log(response.clone().json());
          return response.clone().json();
        }
      })
      .then((json) => {
        // console.log(json)
        setData(json.data.sources);
      });
  }, []);

  return (
    <div className="cards grid lg:place-content-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1 xs:gap-4 md:gap-10 lg:gap-14 md:px-16 xs:p-3 ">
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
    </div>
  );
}

export default TopHeadlines;
