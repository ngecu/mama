var mymap = L.map('mapid').setView([0.500511, 37.845085], 6);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

L.geoJSON(abs, {
    
}).addTo(map);

