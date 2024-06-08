import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function MyCarousel() {
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showIndicators={true}
      showThumbs={false}
      infiniteLoop={true}
      useKeyboardArrows={true}
      autoPlay={true}
      stopOnHover={true}
      swipeable={true}
      dynamicHeight={true}
    >
      <div className='carousel'>
        <img
          src='https://res.cloudinary.com/dzajrh9z7/image/upload/v1662770531/samples/ecommerce/leather-bag-gray.jpg'
          alt='Slide 1'
        />
        <p className='legend'>Slide 1</p>
      </div>
      <div className='carousel'>
        <img
          src='http://res.cloudinary.com/dzajrh9z7/image/upload/v1703633412/J-Cassy/skoinfk5hcuqn7hjumkw.jpg'
          alt='Slide 2'
        />
        <p className='legend'>Slide 2</p>
      </div>
      <div className='carousel'>
        <img
          src='http://res.cloudinary.com/dzajrh9z7/image/upload/v1703633023/J-Cassy/ltmjiweekcupmp7nom49.jpg'
          alt='Slide 3'
        />
        <p className='legend'>Slide 3</p>
      </div>
    </Carousel>
  );
}

export default MyCarousel;
