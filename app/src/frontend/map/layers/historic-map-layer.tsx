import * as React from 'react';
import { TileLayer } from 'react-leaflet';
import { useDisplayPreferences } from '../../displayPreferences-context';

export function HistoricMapLayer() {
    const { historicMap } = useDisplayPreferences();
    if(historicMap == "enabled") {
        return <>
                <TileLayer
                    url="https://mapseries-tilesets.s3.amazonaws.com/london_1890s/{z}/{x}/{y}.png"
                    attribution='historical map: &copy; CC BY 4.0 - Reproduced with the permission of the <a href="https://maps.nls.uk/">National Library of Scotland</a>'
                />
            </>
	} else {
        return null;
    }
}

