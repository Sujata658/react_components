import { useState } from "react";
import pictures from "./const.carousel"
import { icons } from "./const.carousel";


export default function Carousel() {
    const [active, setActive] = useState(0);
  
    const handleLeftClick = () => {
      setActive((prevActive) => (prevActive === 0 ? pictures.length - 1 : prevActive - 1));
    };
  
    const handleRightClick = () => {
      setActive((prevActive) => (prevActive === pictures.length - 1 ? 0 : prevActive + 1));
    };
  
    return (
      <>
        <h1>Carousel</h1>
        <div className='carousel-container'>
          <div key={pictures[active].id} className="image-container">
            <img src={pictures[active].src} alt={pictures[active].id} />
          </div>
  
          <button onClick={handleLeftClick}>{icons.left}</button>
          
            {pictures.map((_, i) => (
              <span key={i} onClick={() => setActive(i)} className='circles'>
                {i === active ? icons.filledCircle : icons.hollowCircle}
              </span>
            ))}
       
          <button onClick={handleRightClick}>{icons.right}</button>
        </div>
      </>
    );
  }
  