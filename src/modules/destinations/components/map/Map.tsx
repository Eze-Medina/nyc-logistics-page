import "leaflet/dist/leaflet.css";
import "./leafletIcon";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import style from "./map.module.css";

interface Props {
  position: [number, number];
}

const central: [number, number] = [-31.671109598007572, -60.778863317857876];

const ChangeView = ({ position }: Props) => {
  const map = useMap();

  const isCentral = position[0] === central[0] && position[1] === central[1];
  const zoom = isCentral ? 15 : 13;

  useEffect(() => {
    map.flyTo(position, zoom, {
      duration: 1.5
    });
  }, [position, zoom, map]);

  return null;
};

export const Map = ({ position }: Props) => {

  const isCentral = position[0] === central[0] && position[1] === central[1];

  return (
    <MapContainer
      center={central}
      zoom={15}
      className={style.map}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ChangeView position={position} />

      {isCentral && (
        <Marker position={position}>
          <Popup>Destino seleccionado</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};