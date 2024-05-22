import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
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
import eight from '../../assets/images/backgrounds/8.png'
import Navbar from '../../components/Navbar';
import FloatButtom from '../../components/FloatBottom';
import { Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import Partners from '../../components/Partners';
import Countries from '../Countries';


const defaultTheme = createTheme();

const Home = () => {
    const navigate = useNavigate();

    return (
        <ThemeProvider theme={defaultTheme}>
            <Navbar />
            <FloatButtom />
            <Grid container component="main" sx={{ height: '100vh', width: '100%' }}>
                <CssBaseline />
                <Grid
                    item
                    md={12}
                >
                    <Swiper
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

                        <SwiperSlide className='d-flex align-items-center justify-content-end'>
                            <img src={serra} style={{ zIndex: "-1", position: 'absolute' }} />

                            <div className="row" style={{ width: '40%' }}>
                                <div className="col-12" style={{ borderLeft: '3px solid white', padding: '0 0 0 1rem' }}>
                                    <h1 className='display-5 text-white m-0 mb-2' style={{ fontWeight: 700 }}>Pacotes</h1>
                                    <Typography component="p" className='text-white m-0 mb-2'>Planeamos os melhores pacotes para si.</Typography>
                                    <Button variant="contained" size="medium" onClick={() => { navigate('/contacto') }}>
                                        Contactos
                                    </Button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='d-flex align-items-center justify-content-end'>
                            <img src={seven} style={{ zIndex: "-1", position: 'absolute' }} />

                            <div className="row" style={{ width: '40%' }}>
                                <div className="col-12" style={{ borderLeft: '3px solid white', padding: '0 0 0 1rem' }}>
                                    <h1 className='display-5 text-white m-0 mb-2' style={{ fontWeight: 700 }}>Concierge</h1>
                                    <Typography component="p" className='text-white m-0 mb-2'>Reconhecemos que o tempo é um recurso valioso dos nossos clientes. Tratamos tudo para si.</Typography>
                                    <Button variant="contained" size="medium" onClick={() => { navigate('/contacto') }}>
                                        Contactos
                                    </Button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='d-flex align-items-center justify-content-end'>
                            <img src={six} style={{ zIndex: "-1", position: 'absolute' }} />

                            <div className="row" style={{ width: '40%' }}>
                                <div className="col-12" style={{ borderLeft: '3px solid white', padding: '0 0 0 1rem' }}>
                                    <h1 className='display-5 text-white m-0 mb-2' style={{ fontWeight: 700 }}>Rent-a-car</h1>
                                    <Typography component="p" className='text-white m-0 mb-2'>Escolha o carro e nós lhe entregamos a chave.</Typography>
                                    <Button variant="contained" size="medium" onClick={() => { navigate('/contacto') }}>
                                        Contactos
                                    </Button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='d-flex align-items-center justify-content-end'>
                            <img src={two} style={{ zIndex: "-1", position: 'absolute' }} />

                            <div className="row" style={{ width: '40%' }}>
                                <div className="col-12" style={{ borderLeft: '3px solid white', padding: '0 0 0 1rem' }}>
                                    <h1 className='display-5 text-white m-0 mb-2' style={{ fontWeight: 700 }}>Transfers</h1>
                                    <Button variant="contained" size="medium" onClick={() => { navigate('/contacto') }}>
                                        Contactos
                                    </Button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='d-flex align-items-center justify-content-end'>
                            <img src={three} style={{ zIndex: "-1", position: 'absolute' }} />

                            <div className="row" style={{ width: '40%' }}>
                                <div className="col-12" style={{ borderLeft: '3px solid white', padding: '0 0 0 1rem' }}>
                                    <h1 className='display-5 text-white m-0 mb-2' style={{ fontWeight: 700 }}>Reservas de Hóteis.</h1>
                                    <Typography component="p" className='text-white m-0 mb-2'>Reserve Hotel a nível Nacional e Internacional</Typography>
                                    <Button variant="contained" size="medium" onClick={() => { navigate('/reservar-viagem') }}>
                                        Reserva
                                    </Button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='d-flex align-items-center justify-content-end'>
                            <img src={five} style={{ zIndex: "-1", position: 'absolute' }} />

                            <div className="row" style={{ width: '40%' }}>
                                <div className="col-12" style={{ borderLeft: '3px solid white', padding: '0 0 0 1rem' }}>
                                    <h1 className='display-5 text-white m-0 mb-2' style={{ fontWeight: 700 }}>Tratamento de Visto.</h1>
                                    <Button variant="contained" size="medium" onClick={() => { navigate('/solicitar-visto') }}>
                                        Contactos
                                    </Button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='d-flex align-items-center justify-content-end'>
                            <img src={one} style={{ zIndex: "-1", position: 'absolute' }} />

                            <div className="row" style={{ width: '40%' }}>
                                <div className="col-12" style={{ borderLeft: '3px solid white', padding: '0 0 0 1rem' }}>
                                    <h1 className='display-5 text-white m-0 mb-2' style={{ fontWeight: 700 }}>Seguros</h1>
                                    <Typography component="p" className='text-white m-0 mb-2'>Contrate todo tipo de Seguro connosco.</Typography>
                                    <Button variant="contained" size="medium" onClick={() => { navigate('/solicitar-seguro') }}>
                                        Contactos
                                    </Button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='d-flex align-items-center justify-content-end'>
                            <img src={eight} style={{ zIndex: "-1", position: 'absolute' }} />

                            <div className="row" style={{ width: '40%' }}>
                                <div className="col-12" style={{ borderLeft: '3px solid white', padding: '0 0 0 1rem' }}>
                                    <h1 className='display-5 text-white m-0 mb-2' style={{ fontWeight: 700 }}>Check-in online</h1>
                                    <Typography component="p" className='text-white m-0 mb-2'>Fazemos o Chec-in para si. Basta Ligar.</Typography>
                                    <Button variant="contained" size="medium" onClick={() => { navigate('/contacto') }}>
                                        Contactos
                                    </Button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='d-flex align-items-center justify-content-end'>
                            <img src={four} style={{ zIndex: "-1", position: 'absolute' }} />

                            <div className="row" style={{ width: '40%' }}>
                                <div className="col-12" style={{ borderLeft: '3px solid white', padding: '0 0 0 1rem' }}>
                                    <h1 className='display-5 text-white m-0 mb-2' style={{ fontWeight: 700 }}>Bilhete de Passagem</h1>
                                    <Typography component="p" className='text-white m-0 mb-2'>Emitimos bilhetes para todas companias do mundo.</Typography>
                                    <Button variant="contained" size="medium" onClick={() => { navigate('/reservar-viagem') }}>
                                        Contactos
                                    </Button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </Grid>
            </Grid>

            <Partners />

            <Countries />
        </ThemeProvider>
    );
}

export default Home;