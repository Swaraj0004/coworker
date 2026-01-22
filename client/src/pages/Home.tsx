import { useEffect, useState } from "react";
import MapView from "../components/MapView";
import { fetchNearbySpaces } from "../services/api";
import type { Space } from "../types/space";

interface Coordinates {
  lat: number;
  lng: number;
}

function Home() {
  const [coords, setCoords] = useState<Coordinates | null>(null);
  const [spaces, setSpaces] = useState<Space[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async pos => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        setCoords({ lat, lng });

        try {
          const data = await fetchNearbySpaces(lat, lng);
          console.log("Spaces from backend:", data);
          setSpaces(data);
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      },
      () => {
        alert("Location permission required");
        setLoading(false);
      }
    );
  }, []);

  if (loading) return <p>Loading coworking spaces...</p>;
  if (!coords) return <p>Location unavailable</p>;

  return (
    <MapView
      lat={coords.lat}
      lng={coords.lng}
      spaces={spaces}
    />
  );
}

export default Home;
