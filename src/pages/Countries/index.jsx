import CardCountry from "../../components/CardCountry";
import SelectModal from "../../components/SelectModal";
import { featuredCountries } from "../../data/featuredCountries";
import SlideCountries from "./components/SlideCountries";

const Countries = () => {
    const listCountries = featuredCountries.map(country =>
        <div className="col-lg-3 mb-3" key={country.id}>
            <CardCountry props={country} />
        </div>
    )

    return (
        <div className="w100" style={{ height: '100vh' }}>
            <SlideCountries />

            <div className="row p-3">
                <div className="col-md-12">
                    <div className="row">
                        <SelectModal />
                    </div>
                    <div className="row">
                        {listCountries}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Countries;