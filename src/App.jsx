import React from 'react';
import {Route, Routes} from "react-router-dom";
import Orders from "./Pages/Orders/Orders";
import Header from "./Widgets/Header/Header";
import Advertisements from "./Pages/Advertisements/Advertisements";
import AdvertisementPage from "./Pages/Advertisements/AdvertisementPage/AdvertisementPage";

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Header />}>
                    <Route path="/advertisements" element={<Advertisements />}/>
                    <Route path="/advertisements/:advertisementId" element={<AdvertisementPage />}/>
                    <Route path="/orders" element={<Orders />}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;