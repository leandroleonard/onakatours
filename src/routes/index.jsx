import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import BookTrip from '../pages/BookTrip';
import VisaForm from '../pages/VisaForm';
import ContactForm from '../pages/Contact'
import SafeForm from '../pages/SafeForm';
import Countries from '../pages/Countries';

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" Component={Home} />
                <Route path="/reservar-viagem" Component={BookTrip} />
                <Route path="/solicitar-visto" Component={VisaForm} />
                <Route path="/solicitar-seguro" Component={SafeForm} />
                <Route path="/contacto" Component={ContactForm} />
                <Route path="/slides" Component={Countries} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoute;
