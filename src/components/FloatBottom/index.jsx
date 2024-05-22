import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import LuggageIcon from '@mui/icons-material/Luggage';
import ArticleIcon from '@mui/icons-material/Article';

import './style.css'
import { Link, useNavigate } from 'react-router-dom';

const actions = [
    { icon: <HomeIcon />, name: 'Home', link: '' },
    { icon: <LuggageIcon />, name: 'Reservar Viagem', link: '/reservar-viagem' },
    { icon: <PhoneIcon />, name: 'Contactos', link: '/contacto' },
    { icon: <ArticleIcon />, name: 'Midia', link: '/docs' },
];

export default function FloatButtom() {
    const navigate = useNavigate()

    return (
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }} className="btnFloat">
            <SpeedDial
                ariaLabel="Menu"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >
                
                <SpeedDialAction
                    icon={<HomeIcon />}
                    tooltipTitle="Home"
                    onClick={() => {
                        navigate("/")
                    }}
                >
                </SpeedDialAction>

                
                <SpeedDialAction
                    icon={<LuggageIcon />}
                    tooltipTitle="Reservar Viagem"
                    onClick={() => {
                        navigate("/reservar-viagem")
                    }}
                >
                </SpeedDialAction>

                
                <SpeedDialAction
                    icon={<PhoneIcon />}
                    tooltipTitle="Contactos"
                    onClick={() => {
                        navigate("/contacto")
                    }}
                >
                </SpeedDialAction>

                
                <SpeedDialAction
                    icon={<ArticleIcon />}
                    tooltipTitle="Midia"
                    onClick={() => {
                        navigate("/docs")
                    }}
                >
                </SpeedDialAction>


            </SpeedDial>
        </Box>
    );
}