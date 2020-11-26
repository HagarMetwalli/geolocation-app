var lat, lon, mylocation, mysepcs, myimg, loc, buttomid, mapbtn, imgid, detailid, detailbtn, inputs, accuracy, dategeo;

mapbtn = document.getElementById("mapbtn");
imgid = document.getElementById("imgid");
buttomid = document.getElementById("bottom");
detailid = document.getElementById("detailid");
detailbtn = document.getElementById("detailbtn");
inputs = document.getElementsByTagName("input");



mapbtn.addEventListener('click', getuserlocation);
detailbtn.addEventListener('click', function () {
    imgid.style.display = 'none';
    detailid.style.display = 'block';
    inputs[0].value = lat;
    inputs[1].value = lon;
    inputs[2].value = accuracy;
    inputs[3].value = dategeo;

});


function getuserlocation() {
    if (navigator.geolocation) {
        detailid.style.display = 'none';
        imgid.style.display = 'block';
        navigator.geolocation.getCurrentPosition(getposition, errorhandeler);
    }
    else {
        imgid.innerHTML = '<h1>Sorry , Update  your Broser And Try Again !</h1>';
    }
}
function getposition(position) {

    lat = position.coords.latitude;
    lon = position.coords.longitude;
    accuracy = position.coords.accuracy;
    dategeo = new Date(position.timestamp);
    mylocation = new google.maps.LatLng(lat, lon);
    mysepcs = { center: mylocation, zoom: 20 };
    myimg = new Image();
    myimg.src = new google.maps.Map(imgid, mysepcs);
}
function errorhandeler(error) {

    switch (error.code) {
        case error.PERMISSION_DENIED:
            imgid.innerText = 'PERMISSION_DENIED ITI';
            break;
        case error.POSITION_UNAVAIBALE:
            imgid.innerText = 'POSITION_UNAVAIBALE';
            break;
        case error.TIMEOUT:
            imgid.innerText = 'TIMEOUT';
            break;
        case error.UNKOWN_ERROR:
            imgid.innerText = 'UNKOWN_ERROR';
            break;
    }
}

