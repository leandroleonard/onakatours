import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

// import required modules
import { EffectFade, Autoplay } from 'swiper/modules';

import serra from '../../../../assets/images/backgrounds/serra.jpg'
import one from '../../../../assets/images/backgrounds/1.png'
import two from '../../../../assets/images/backgrounds/2.png'
import three from '../../../../assets/images/backgrounds/3.png'
import four from '../../../../assets/images/backgrounds/4.png'
import five from '../../../../assets/images/backgrounds/6.png'
import six from '../../../../assets/images/backgrounds/7.png'
import seven from '../../../../assets/images/backgrounds/11.png'
import eight from '../../../../assets/images/backgrounds/8.png'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

import { featuredCountries } from '../../../../data/featuredCountries';

import './style.css'

import { useNavigate } from 'react-router-dom';

const SlideCountries = () => {
    const navigate = useNavigate();

    const featured = featuredCountries.map(country =>
        <SwiperSlide key={country.id}>
            <div className="content">
                <img src={country.img} />
                <div className="caption">
                    <div className="caption-row">
                        <p className="info">{country.country}</p>
                        <p className="sub">Desde</p>
                    </div>
                    <div className="caption-row">
                        <p className="sub">Ida e volta</p>
                        <p className="info">{country.price}</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    );

    return (
        <div className="p-3">
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                loop={true}
                speed={3500}
                autoplay={{
                    enable: true,
                    display: 5000,
                    waitForTransition: false,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                    running: true,
                    pause: false
                }}
                modules={[Autoplay]}
                className="swiperCountries"
                style={{ height: 200 }}
            >
                {featured}

            </Swiper>
        </div>
    );
}

export default SlideCountries;