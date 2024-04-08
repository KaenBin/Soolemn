import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import defaultImg from "@/assets/Background.jpg";
import { ProductContainer } from "@/components/product";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export const CustomCarousel = (props) => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      // showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      // autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={"desktop"}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {props.list.map((item, idx) => {
        return <ProductContainer idx={idx} />;
      })}
    </Carousel>
  );
};
