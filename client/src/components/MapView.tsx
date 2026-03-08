import { CircleMarker, MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import type { Space } from "../types/space";
import SpacePopup from "./SpacePopup";
import { getMarkerIcon } from "../utils/getMarkerIcon";
import { useEffect } from "react";

interface MapViewProps {
  lat: number;
  lng: number;
  spaces: Space[];
}

function RecenterMap({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo([lat, lng], map.getZoom(), { animate: true, duration: 0.8 });
  }, [lat, lng, map]);

  return null;
}

function MapView({ lat, lng, spaces }: MapViewProps) {
  const center: LatLngExpression = [lat, lng];

  return (
    <MapContainer center={center} zoom={14} style={{ height: "100%", width: "100%" }}>
      <RecenterMap lat={lat} lng={lng} />

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />

      <CircleMarker
        center={[lat, lng]}
        radius={10}
        pathOptions={{ color: "#0369a1", fillColor: "#38bdf8", fillOpacity: 0.9 }}
      >
        <Popup>Your pinned current location</Popup>
      </CircleMarker>

      {spaces.map((space) => (
        <Marker
          key={space._id}
          position={[space.location.coordinates[1], space.location.coordinates[0]]}
          icon={getMarkerIcon(space)}
        >
          <Popup>
            <SpacePopup space={space} userLat={lat} userLng={lng} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;
