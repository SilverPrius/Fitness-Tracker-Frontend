import { Carousel } from 'react-bootstrap';

export default function BootstrapCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="https://images.livemint.com/img/2022/05/06/1140x641/Health_Fitness_Tips_1651837318632_1651837330285.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="https://www.health.com/thmb/3fXtS46hftCjJF8TyVjSweeZlSM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Fitness-Goals-GettyImages-1320506857-2000-932849f7953943408f74c732a3ab5926.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="https://www.mensjournal.com/wp-content/uploads/2015/08/RunningBenefitsMain1.jpg?w=900&h=506&crop=1&quality=86&strip=all"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="https://www.eatright.org/-/media/images/eatright-landing-pages/physicalactivitylp_804x482.jpg?h=482&w=804&hash=9BCD2F871952C5AD6ADECE8C4F88A5F5"
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
