import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import LoaderGif from "./Loader.gif";
const Image = lazy(() => import("./Image"))

function Product({id,image,title,price,category}) {
  return(
    <div className="four wide column" key={id}>
    <Link to={`product/${id}`} >
      <div className="ui links cards">
        <div className="card">
        <Suspense fallback={<img src={LoaderGif} alt={title}/>}>
          <div className="image">
              <Image src={image} alt={title}/>
          </div>
          </Suspense>
          <div className="content">
            <div className="header">{title}</div>
            <div className="meta price">$ {price}</div>
            <div className="meta">{category}</div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default Product;

