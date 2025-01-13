let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: { lat: 36.374167, lng: 127.365833 },
        zoom: 8,
    });
}

initMap();