import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import type { Space } from "../types/space";
import SpacePopup from "./SpacePopup";
import { getMarkerIcon } from "../utils/getMarkerIcon";

interface MapViewProps {
  lat: number;
  lng: number;
  spaces: Space[];
}

function MapView({ lat, lng, spaces }: MapViewProps) {
  const center: LatLngExpression = [lat, lng];

  return (
    <MapContainer
      center={center}
      zoom={14}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />

      {spaces.map(space => (
        <Marker
          key={space._id}
          position={[
            space.location.coordinates[1],
            space.location.coordinates[0]
          ]}
          icon={getMarkerIcon(space)}   
        >
          <Popup>
            <SpacePopup
              space={space}
              userLat={lat}
              userLng={lng}
            />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;
