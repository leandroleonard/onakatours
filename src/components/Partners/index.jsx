import { Link } from "react-router-dom";
import partners1 from '../../assets/images/icons/parceiros/airfrance.png'
import partners2 from '../../assets/images/icons/parceiros/amadeus.png'
import partners3 from '../../assets/images/icons/parceiros/brussels.png'
import partners4 from '../../assets/images/icons/parceiros/emirates.png'
import partners5 from '../../assets/images/icons/parceiros/lufthansa.png'
import partners6 from '../../assets/images/icons/parceiros/taag-01.png'
import partners7 from '../../assets/images/icons/parceiros/TAP.png'
const Partners = () => {
    return (
        <div style={{ position: 'absolute', bottom: '0', margin: '1rem', zIndex: 9, display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className="container-xl container-lg-fluid container">
                <div className="row footer-meta">
                    <div className="col">
                        <Link to="#"><img src={partners1} style={{ height: 25 }} alt="Air France" /></Link>
                    </div>
                    <div className="col">
                        <Link to="#"><img src={partners2} style={{ height: 10 }} alt="Amadeus" /></Link>
                    </div>
                    <div className="col">
                        <Link to="#"><img src={partners3} style={{ height: 25 }} alt="Brussels" /></Link>
                    </div>
                    <div className="col">
                        <Link to="#"><img src={partners4} style={{ height: 20 }} alt="Emirates" /></Link>
                    </div>
                    <div className="col">
                        <Link to="#"><img src={partners5} style={{ height: 20 }} alt="Lufthansa" /></Link>
                    </div>
                    <div className="col">
                        <Link to="#"><img src={partners6} style={{ height: 40 }} alt="TAAG" /></Link>
                    </div>
                    <div className="col">
                        <Link to="#"><img src={partners7} style={{ height: 25 }} alt="TAP" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Partners;