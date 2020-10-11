import React from 'react';
import Map from './Maps';
import credentials from './credentials';

require('./_carte.scss');


const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`


export const Carte = () => {
    return <section>
        <Map
            googleMapURL={mapURL}
            containerElement={<div className='carte' />}
            mapElement={<div style={{ height: '95%' }} />}
            loadingElement={<p>Cargando</p>}
        />
    </section>;
};
export default Carte;