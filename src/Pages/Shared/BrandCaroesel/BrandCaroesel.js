import Carousel from 'react-bootstrap/Carousel';
import brand1 from '../../../assets/images/Brand1.png'
import brand2 from '../../../assets/images/Brand2.png'
const BrandCaroesel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={brand1}
                    alt="First slide"
                    style={{ height: '150px' }}
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={brand2}
                    alt="Second slide"
                    style={{ height: '150px' }}
                />


            </Carousel.Item>

        </Carousel>
    );
}

export default BrandCaroesel;