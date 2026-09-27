export type Place = { name: string; address: string; distance: string; icon: string };
export type RouteOption = { id: string; label: string; eta: string; distance: string; detail: string; traffic: string; tolls: boolean; tone: "primary" | "mint" | "amber" };
export type Trip = { id: string; date: string; from: string; to: string; distance: string; duration: string; time: string };

export const places: Place[] = [
  { name: "Vijay Nagar", address: "Indore, Madhya Pradesh", distance: "2.8 km", icon: "building" },
  { name: "Rajwada Palace", address: "Rajwada, Indore", distance: "6.4 km", icon: "landmark" },
  { name: "Devi Ahilya Bai Holkar Airport", address: "Aerodrome Road, Indore", distance: "12.4 km", icon: "plane" },
  { name: "Palasia", address: "New Palasia, Indore", distance: "1.7 km", icon: "pin" },
  { name: "Bhanwarkuan", address: "AB Road, Indore", distance: "5.9 km", icon: "pin" },
];

export const routes: RouteOption[] = [
  { id: "fast", label: "Fastest", eta: "24 min", distance: "12.4 km", detail: "Via AB Road · 5 min faster", traffic: "Moderate traffic", tolls: false, tone: "primary" },
  { id: "balanced", label: "Balanced", eta: "27 min", distance: "11.8 km", detail: "Via Race Course Road", traffic: "Light traffic", tolls: false, tone: "mint" },
  { id: "quiet", label: "Less traffic", eta: "29 min", distance: "14.1 km", detail: "Via Super Corridor", traffic: "Clear roads", tolls: true, tone: "amber" },
];

export const trips: Trip[] = [
  { id: "t1", date: "Today", from: "Vijay Nagar", to: "Rajwada", distance: "14.8 km", duration: "32 min", time: "6:42 PM" },
  { id: "t2", date: "Yesterday", from: "Home", to: "Office", distance: "11.2 km", duration: "26 min", time: "9:08 AM" },
  { id: "t3", date: "This week", from: "Palasia", to: "Airport", distance: "13.6 km", duration: "34 min", time: "Fri, 4:20 PM" },
];
