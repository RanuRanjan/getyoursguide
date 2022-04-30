import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AllTopAttraction from './AllTopAttraction';
import styles from './TopAttration.module.css'
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };


export default function TopAttration() {


  return (
    <div className={styles.Carousel1}>
      <h1>Top attractions worldwide</h1>
      <Carousel 
      swipeable={true}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      
    //   autoPlaySpeed={4000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={1000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px">
        <AllTopAttraction imgUrl={"https://cdn.getyourguide.com/img/location/60096cd94f74e.jpeg/87.webp"} title='Niagara Falls' desc="37 tours & activities" />
        <AllTopAttraction imgUrl={"https://cdn.getyourguide.com/img/location/60096cee5881e.jpeg/87.webp"} title='Niagara Falls' desc="37 tours & activities" />
        <AllTopAttraction imgUrl={"https://cdn.getyourguide.com/img/location/5d399514af74d.jpeg/87.webp"} title='Niagara Falls' desc="37 tours & activities" />
        <AllTopAttraction imgUrl={"https://cdn.getyourguide.com/img/location/60096e254549c.jpeg/87.webp"} title='Niagara Falls' desc="37 tours & activities" />
        <AllTopAttraction imgUrl={"https://cdn.getyourguide.com/img/location/60096f9321c31.jpeg/87.webp"} title='Niagara Falls' desc="37 tours & activities" />
        <AllTopAttraction imgUrl={"https://cdn.getyourguide.com/img/location/55798cb73c0a6.jpeg/87.webp"} title='Niagara Falls' desc="37 tours & activities" />
        <AllTopAttraction imgUrl={"https://cdn.getyourguide.com/img/location/5e170e38b8bcf.jpeg/87.webp"} title='Niagara Falls' desc="37 tours & activities" />
        <AllTopAttraction imgUrl={"https://cdn.getyourguide.com/img/location/5b2126b103f6f.jpeg/87.webp"} title='Niagara Falls' desc="37 tours & activities" />
             
        </Carousel>
    </div>
  )
}
