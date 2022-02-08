import Marker from 'react-leaflet-enhanced-marker';
import { MapContainer, TileLayer, Popup } from 'react-leaflet';

import { SingleRetriever } from '../..';

import { Retriever } from '@miya-app/shared-types';
import { retrieverMapPointPng } from '../../../../assets/images';
import './MapWithAllRetrievers.scss';
import { useRetrieversContext } from '../../../context/RetrieversContext';

const MapWithAllRetrievers: React.FC = () => {
  const { retrievers } = useRetrieversContext();

  // const listOfRetievers = Object.keys(retrievers).map(function (key: any) {
  //   return retrievers[key];
  // });

  return (
    <div className="map">
      <MapContainer zoom={7} center={[51.95, 20.18]} scrollWheelZoom={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {retrievers?.map((retriever: Retriever, key: number) => (
          <div key={key}>
            {retriever?.lat && retriever?.long && (
              <div key={retriever.id}>
                <Marker
                  position={[retriever.lat, retriever.long]}
                  icon={
                    <img
                      className="point"
                      src={retrieverMapPointPng}
                      alt={retriever.name}
                    />
                  }
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
