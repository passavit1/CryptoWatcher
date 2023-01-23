import { Carousel } from 'antd';

const TextSlide = () => {
  return (
    <Carousel
      effect="scrollx"
      rtl={true}
      autoplay
      autoplaySpeed={4000}
      speed={2000}
      dots={false}
    >
      <div>This is the text that will slide in from the right.</div>
      <div>This is the second text that will slide in from the right.</div>
    </Carousel>
  );
};

export default TextSlide;
