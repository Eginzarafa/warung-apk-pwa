import React from 'react';
import { Carousel, Image } from 'antd';




const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '350px',
  color: '#fff',
  lineHeight: '350px',
  textAlign: 'center',
  background: '#364d79',
};

const CarouselComponent: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel autoplay afterChange={onChange}>
      <div>
      <Image
          src= "assets/images/palang.png" 
          alt="Slide 1"
          width={600}
          height={160}
          style={{ width: '100%', height: 'auto' }}
        />
         {/* <h3 style={contentStyle}>Slide 1</h3> */}
      </div>
      {/* {/* <div>
        <h3 style={contentStyle}>Slide 2</h3>
      </div> */}
      <div>
        <h3 style={contentStyle}>Slide 3</h3>
      </div>
     
    </Carousel>
  );
};

export default CarouselComponent;
