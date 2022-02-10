import Marker from 'react-leaflet-enhanced-marker';
import { MapContainer, TileLayer, Popup } from 'react-leaflet';

import { SingleRetriever } from '../..';

import { Retriever } from '@miya-app/shared-types';
import { retrieverMapPointPng } from '../../../../assets/images';
import './MapWithAllRetrievers.scss';
import {
  useRetrieversActionsContext,
  useRetrieversContext,
} from '../../../context/RetrieversContext';
import { useRetrieverContext } from '../../../context';
import { FC, useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { API_MAP_KEY } from '../../../constans';

interface RetrieverMarkerProps {
  data: Retriever;
}

const RetrieverMarker: FC<RetrieverMarkerProps> = ({ data }) => {
  const [lat, setLat] = useState<number>();
  const [long, setLong] = useState<number>();

  useEffect(() => {
    if (data && !!data.city) {
      const location = `http://api.openweathermap.org/geo/1.0/direct?q=${data?.city}&limit=5&appid=${API_MAP_KEY}`;

      fetch(location)
        .then((response) => response.json())
        .then((data) => {
          setLat(data[0].lat);
          setLong(data[0].lon);
        });
    }
  }, [data]);

  if (lat === undefined || long === undefined) return <CircularProgress />;

  return (
    <div>
      {!!lat && !!long && (
        <div key={data.id}>
          <Marker
            position={[lat, long]}
            icon={
              <img
                className="point"
                src={retrieverMapPointPng}
                alt={data.name}
              />
            }
          >
            <Popup>
              <SingleRetriever singleRetriever={data} />
            </Popup>
          </Marker>
        </div>
      )}
    </div>
  );
};

const MapWithAllRetrievers: React.FC = () => {
  const { retrievers } = useRetrieversContext();
  const { getRetrievers } = useRetrieversActionsContext();
  const { retriever } = useRetrieverContext();

  // function Geocoder({ address }) {
  //   const map = useMap();

  //   ELG.geocode()
  //     .text(address)
  //     .run((err, results, response) => {
  //       console.log(results.results[0].latlng);
  //       const { lat, lng } = results.results[0].latlng;
  //       map.setView([lat, lng], 12);
  //     });

  //   return null;
  // }

  useEffect(() => {
    getRetrievers();
  }, [getRetrievers]);

  return (
    <div className="map">
      <MapContainer
        zoom={7}
        center={[51.95, 20.18]}
        zoomControl={true}
        scrollWheelZoom={true}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {retrievers?.map((retriever: Retriever, key: number) => (
          <RetrieverMarker data={retriever} key={key} />
        ))}
      </MapContainer>
    </div>
  );
};

export default MapWithAllRetrievers;
