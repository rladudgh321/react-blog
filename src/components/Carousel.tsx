import { useState } from "react";

export default function Carousel() {
  const [activeImage, setActiveImage] = useState(1);
  const img_url_1 = 'https://images.unsplash.com/photo-1706872286099-b10b657b3fb3?q=80&w=1597&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const img_url_2 ='https://images.unsplash.com/photo-1682687220795-796d3f6f7000?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const img_url_3= 'https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return (
    <>
      <div className="carousel">
        <ul className="carousel__slides">
          {/* 첫번째 캐루셀 */}
          <input 
            type="radio" 
            id="img-1"
            name="radio-buttons"
            checked={activeImage === 1}
            readOnly
          />
          <li className="carousel__slide-container">
            <div className="carousel__slide-img">
              <img alt="1" src={img_url_1} />
            </div>
            <div className="carousel__controls">
              <label
                className="carousel__slide-prev"
                onClick={() => setActiveImage(3)}
              >
                <span>&lsaquo;</span>
              </label>
              <label
                className="carousel__slide-next"
                onClick={() => setActiveImage(2)}
              >
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          {/* 두번째 캐루셀 */}
          <input 
            id="img-2"
            name="radio-buttons"
            type="radio" 
            checked={activeImage === 2}
            readOnly
          />
          <li className="carousel__slide-container">
            <div className="carousel__slide-img">
              <img alt="2" src={img_url_2} />
            </div>
            <div className="carousel__controls">
              <label
                className="carousel__slide-prev"
                onClick={() => setActiveImage(1)}
              >
                <span>&lsaquo;</span>
              </label>
              <label
                className="carousel__slide-next"
                onClick={() => setActiveImage(3)}
              >
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          {/* 세번째 캐루셀 */}
          <input 
            id="img-3"
            name="radio-buttons"
            type="radio" 
            checked={activeImage === 3}
            readOnly
          />
          <li className="carousel__slide-container">
            <div className="carousel__slide-img">
              <img alt="1" src={img_url_3} />
            </div>
            <div className="carousel__controls">
              <label
                className="carousel__slide-prev"
                onClick={() => setActiveImage(2)}
              >
                <span>&lsaquo;</span>
              </label>
              <label
                className="carousel__slide-next"
                onClick={() => setActiveImage(1)}
              >
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          {/* 캐루셀 점 */}
          <div className="carousel__dots">
            <label
              onClick={() =>setActiveImage(1)}
              className="carousel__dot"
              id="img-dot-1"
            ></label>
            <label
              onClick={() =>setActiveImage(2)}
              className="carousel__dot"
              id="img-dot-2"
            ></label>
            <label
              onClick={() =>setActiveImage(3)}
              className="carousel__dot"
              id="img-dot-3"
            ></label>
          </div>
        </ul>
      </div>
    </>
  );
}