interface Location {
    id: string;
    name: string;
    coords: {
        lat: number;
        lng: number;
    };
}

export const officeLocations: Location[] = [
    {
        id: "aoe-office",
        name: "AOE Office",
        coords: {
            lat: 50.07880461391119,
            lng: 8.23773857724569
        }
    },
    {
        id: "seibert-media-office",
        name: "Seibert Media Office",
        coords: {
            lat: 50.07914039909929,
            lng: 8.238780329979205
        }
    },
    {
        id: "weltenbauer-office",
        name: "Weltenbauer Office",
        coords: {
            lat: 50.079871530322244,
            lng: 8.246327391504607
        }
    },
    {
        id: "computerra-office",
        name: "Computerra Office",
        coords: {
            lat: 50.07793034586181,
            lng: 8.237990349420933
        }
    }
]
