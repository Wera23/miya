import { MapContainer, TileLayer, Popup } from 'react-leaflet';

import Marker from 'react-leaflet-enhanced-marker';

import { retrieverMapPoint, retrieverMapPointPng } from '../../../assets/images';

import './MapWithAllRetrievers.scss';
import useNestRetrievers from '../../hooks/useNestRetrievers';
import { Retriever } from '@miya-app/shared-types';
import { SingleRetriever } from '..';

const MapWithAllRetrievers = () => {
  const { retrievers } = useNestRetrievers();

  const listOfRetievers = Object.keys(retrievers).map(function (key: any) {
    return retrievers[key];
  });

  return (
    <div className="map">
      <MapContainer zoom={7} center={[50.09, 19.01]} scrollWheelZoom={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {listOfRetievers.map((retriever: Retriever, key: number) => (
          <div>
            {retriever?.lat && retriever?.long && (
              <div key={key}>
                <Marker
                  position={[retriever.lat, retriever.long]}
                  icon={<img className="point" src={retrieverMapPointPng} alt=""/>}
                >
                  <Popup>
                    <SingleRetriever singleRetriever={retriever} />
                  </Popup>
                </Marker>
              </div>
            )}
          </div>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapWithAllRetrievers;
