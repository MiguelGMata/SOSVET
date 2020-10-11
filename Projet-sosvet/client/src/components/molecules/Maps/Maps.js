import React from 'react';

import {
    GoogleMap,
    withScriptjs,
    withGoogleMap
} from 'react-google-maps';

const Map = (props) => {
    return (
        <GoogleMap defaultZoom={12}
            defaultCenter={{ lat: 48.858570, lng: 2.337799 }}
        />


    );
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)

/**lat: 48.869007, lng: 2.419402 */