import React from "react";
import test from "./../assets/test.webp";

function Card(props) {
  return (
    // <div className='everything-card flex flex-col p-5 gap-3 mb-5'>
    //     <p className="title font-medium mb-2">{props.title}</p>
    //     <div className="everything-card-img mx-auto">
    //       <img className="" src={props.imgUrl} alt="img" />
    //     </div>
    //     <div className="description">
    //       <p className="description-text leading-7">{props.description}</p>
    //     </div>
    //     <div className="info">
    //       <p className="url mb-2"><span className='font-semibold'>url : </span><span className="link underline">{props.url}</span></p>
    //       <div className="origin flex justify-between">
    //         <p><span className='font-semibold'>Source :</span>{props.source}</p>
    //         <p><span className="font-semibold">Author :</span>{props.author}</p>
    //       </div>
    //       <p className="date opacity-60">({props.publishedAt})</p>
    //     </div>
    // </div>

    <div className="everything-card flex flex-col p-5 gap-3 mb-5">
      <p className="title font-medium mb-2">
        14 Gadgets From CES 2023 You Can Buy Now: Headphones, Cameras, Toys
      </p>
      <div className="everything-card-img mx-auto">
        <img className="" src={props.imgUrl} alt="img" />
      </div>
      <div className="description">
        <p className="description-text leading-7">
          From gaming headsets to electric in-line skates, here’s everything
          announced at the tech trade show that you can actually order today.
        </p>
      </div>
      <div className="info">
        <p className="url mb-2">
          <span className="font-semibold">url : </span>
          <span className="link underline">http://www.abc.net.au/news</span>
        </p>
        <div className="origin flex justify-between">
          <p>
            <span className="font-semibold">Source :</span> Lifehacker.com
          </p>
          <p>
            <span className="font-semibold">Author :</span> Brenda Stolyar
          </p>
        </div>
        <p className="date opacity-60">(2023-01-07)</p>
      </div>
    </div>
  );
}

export default Card;
