window.onload = function(){
    var mymap = L.map('mapid').setView([50.4418,2.7244], 10);
    var tileStreet = L.tileLayer('https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey={apikey}', {
        attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
        apikey: '960bc4af29f849709e7b9ad97ce8fde7'
    });
    tileStreet.addTo(mymap);

    var marker = L.marker([50.4418,2.7244]).addTo(mymap);
};