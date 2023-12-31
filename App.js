
import React, { useState } from 'react';
export default function Project2() {
  const [image, setImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbR4n6lzmBoQRRGCjICBBU7g5m4FSl_rniwg&usqp=CAU");
  function handleclick() {
    setImage("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Freflection%2F&psig=AOvVaw3QObuRBAB98KYhQiYh5gMK&ust=1704116538933000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJit6PrmuYMDFQAAAAAdAAAAABAD");
  }
  return (
    <div>
      <img src={image} alt="imagedisp" />
      <br></br>
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <button onClick={handleclick}>CHANGE PHOTO</button>
    </div>
  );
}