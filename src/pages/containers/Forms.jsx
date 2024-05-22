import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgrounds from '../../data/backgrounds';
import './style.css'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

// import required modules
import { EffectFade, Autoplay } from 'swiper/modules';

import serra from '../../assets/images/backgrounds/serra.jpg'
import one from '../../assets/images/backgrounds/1.png'
import two from '../../assets/images/backgrounds/2.png'
import three from '../../assets/images/backgrounds/3.png'
import four from '../../assets/images/backgrounds/4.png'
import five from '../../assets/images/backgrounds/6.png'
import six from '../../assets/images/backgrounds/7.png'
import seven from '../../assets/images/backgrounds/11.png'
import eight from '../../assets/images/backgrounds/12.png'


const defaultTheme = createTheme();

const Forms = ({ children }) => {


    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh', width: '100%' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={false}
                    md={7}
                >
                    <Swiper xs={false} sm={false}
                        spaceBetween={30}
                        effect={'fade'}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        speed={7000}
                        modules={[EffectFade, Autoplay]}
                        className="mySwiper"
                        autoplay={{
                            enable: false,
                            display: 10000,
                            waitForTransition: false,
                            disableOnInteraction: true,
                            pauseOnMouseEnter: true,
                            running: true,
                            pause: false
                        }}
                        style={{ height: '100vh' }}
                    >

                        <SwiperSlide>
                            <img src={serra} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={one} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={two} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={three} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={four} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={five} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={six} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={seven} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={eight} />
                        </SwiperSlide>
                    </Swiper>

                </Grid>

                <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square>
                    {children}
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default Forms;