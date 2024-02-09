const map = L.map('map').setView([51.505, -0.09], 13); // Example coordinates
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    const sampleGeoJSON = {
      type: 'Feature',
      properties: {
        name: 'Sample Point'
      },
      geometry: {
        type: 'Point',
        coordinates: [-0.09, 51.505]
      } // Example coordinates
    };
    L.geoJSON(sampleGeoJSON).addTo(map);
    const bufferedPoint = turf.buffer(sampleGeoJSON, 0.1, {
      units: 'kilometers'
    });
    L.geoJSON(bufferedPoint, {
      color: 'red'
    }).addTo(map);
    let url =
      "https://services9.arcgis.com/oMFQlUUrLd1Uh1bd/arcgis/rest/services/Niagara_Falls_Cemetery/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson";
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        L.geoJSON(data).addTo(map);
      });