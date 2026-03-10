export interface CityItem {
  name: string;
  state: string;
  avgPrice: number;
  spaces: number;
  lat: number;
  lng: number;
}

export const indiaCities: CityItem[] = [
  { name: "Mumbai", state: "Maharashtra", avgPrice: 13500, spaces: 145, lat: 19.076, lng: 72.8777 },
  { name: "Delhi", state: "Delhi", avgPrice: 12800, spaces: 132, lat: 28.6139, lng: 77.209 },
  { name: "Bengaluru", state: "Karnataka", avgPrice: 12000, spaces: 168, lat: 12.9716, lng: 77.5946 },
  { name: "Hyderabad", state: "Telangana", avgPrice: 10600, spaces: 121, lat: 17.385, lng: 78.4867 },
  { name: "Chennai", state: "Tamil Nadu", avgPrice: 9900, spaces: 98, lat: 13.0827, lng: 80.2707 },
  { name: "Pune", state: "Maharashtra", avgPrice: 9600, spaces: 104, lat: 18.5204, lng: 73.8567 },
  { name: "Ahmedabad", state: "Gujarat", avgPrice: 7200, spaces: 58, lat: 23.0225, lng: 72.5714 },
  { name: "Jaipur", state: "Rajasthan", avgPrice: 6600, spaces: 49, lat: 26.9124, lng: 75.7873 },
  { name: "Lucknow", state: "Uttar Pradesh", avgPrice: 6400, spaces: 45, lat: 26.8467, lng: 80.9462 },
  { name: "Nagpur", state: "Maharashtra", avgPrice: 5800, spaces: 31, lat: 21.1458, lng: 79.0882 },
  { name: "Indore", state: "Madhya Pradesh", avgPrice: 6200, spaces: 36, lat: 22.7196, lng: 75.8577 },
  { name: "Coimbatore", state: "Tamil Nadu", avgPrice: 6100, spaces: 29, lat: 11.0168, lng: 76.9558 },
  { name: "Kochi", state: "Kerala", avgPrice: 6900, spaces: 33, lat: 9.9312, lng: 76.2673 },
  { name: "Bhubaneswar", state: "Odisha", avgPrice: 6000, spaces: 27, lat: 20.2961, lng: 85.8245 }
];
