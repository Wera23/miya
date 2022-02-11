import { FC, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Popup } from 'react-leaflet';
import Marker from 'react-leaflet-enhanced-marker';

import { CircularProgress } from '@mui/material';
import { SingleRetriever } from '../..';

import { API_MAP_KEY, CENTER_LAT, CENTER_LONG } from '../../../constans';
import { Retriever } from '@miya-app/shared-types';
import { retrieverMapPointPng } from '../../../../assets/images';
import './MapWithAllRetrievers.scss';
import {
  useRetrieversActionsContext,
  useRetrieversContext,
} from '../../../context/RetrieversContext';

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

  const [latBrowser, setLatBrowser] = useState<any>(null);
  const [lngBroweser, setLngBrowser] = useState<any>(null);
  const [mapCenter, setMapCenter] = useState<number>(7);
  const [, setStatusBrowser] = useState<any>(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatusBrowser(
        'Geolokalizacja nie jest obsługiwana przez Twoją przeglądarkę'
      );
      setLatBrowser(CENTER_LAT);
      setLngBrowser(CENTER_LONG);
    } else {
      setStatusBrowser('Pobieranie Twojej lokalizacji...');
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatusBrowser(null);
          setMapCenter(10);
          setLatBrowser(position.coords.latitude);
          setLngBrowser(position.coords.longitude);
        },
        () => {
          setStatusBrowser('Nie można pobrać Twojej lokalizacji');
        }
      );
    }
  };

  useEffect(() => {
    getRetrievers();
    getLocation();
  }, [getRetrievers]);

  return (
    <div className="map">
      {latBrowser && lngBroweser ? (
        <MapContainer
          zoom={mapCenter}
          center={[latBrowser, lngBroweser]}
          zoomControl={true}
          scrollWheelZoom={true}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {retrievers?.map((retriever: Retriever, key: number) => (
            <RetrieverMarker data={retriever} key={key} />
          ))}
        </MapContainer>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default MapWithAllRetrievers;
