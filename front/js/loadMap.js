function initMap() {

    var city = '<?php echo $city_id;?>';

    var lati = '<?php echo $lat;?>';

    var longi = '<?php echo $long;?>';

    if (city == '0') {

        var zoomval = 5;

        var map_url = '<?php echo base_url();?>front/home/get_map_data/100';

    } else {

        var zoomval = 11;

        var map_url = '<?php echo base_url();?>front/home/get_map_data/' + city;

    }


    var map1 = new google.maps.Map(document.getElementById('map1'), {

        center: new google.maps.LatLng(lati, longi),

        zoom: zoomval,

        mapTypeId: 'roadmap'

    });

    var infoWindow = new google.maps.InfoWindow;


    // Change this depending on the name of your PHP or XML file

    downloadUrl(map_url, function (data) {

        var xml = data.responseXML;

        var markers = xml.documentElement.getElementsByTagName('marker1');

        Array.prototype.forEach.call(markers, function (markerElem) {

            var name = markerElem.getAttribute('name');

            var address = markerElem.getAttribute('address');

            var phone = markerElem.getAttribute('phone');

            var call = markerElem.getAttribute('call');

            var imgurl = markerElem.getAttribute('url');

            var imgname = markerElem.getAttribute('media_name');

            var center_img = markerElem.getAttribute('center_img');


            var point = new google.maps.LatLng(
                parseFloat(markerElem.getAttribute('lat')),

                parseFloat(markerElem.getAttribute('lng')));


            var infowincontent = document.createElement('div');


            var infowincontent1 = document.createElement('div');

            infowincontent1.style.float = 'left';

            infowincontent1.style.marginRight = '10px';

            infowincontent.appendChild(infowincontent1);


            var img = document.createElement('img');

            img.src = '<?php echo base_url();?>' + imgurl + '/' + imgname;

            img.width = '50';

            infowincontent1.appendChild(img);


            var infowincontent2 = document.createElement('div');

            infowincontent.appendChild(infowincontent2);


            var strong = document.createElement('strong');

            strong.textContent = name

            infowincontent2.appendChild(strong);

            infowincontent2.appendChild(document.createElement('br'));


            var text = document.createElement('text');

            text.textContent = address

            infowincontent2.appendChild(text);

            infowincontent2.appendChild(document.createElement('br'));


            var text = document.createElement('text');

            text.textContent = 'Call: ' + phone

            infowincontent2.appendChild(text);


            var contentString = '<div id="content">' +

                '<div style="float:left;padding-right:15px;"><img src="' + center_img + '"></div>' +

                '<h4 id="firstHeading" class="firstHeading">' + name + '</h4>' +

                '<div id="bodyContent">' +

                '<p style="padding-bottom:0 !important;"><strong>' + address + '</strong></p>' +

                '<p><strong>Call: <a href="tel:' + call + '" style="color:blue;">' + phone + '</a><strong></p>' +

                '</div>' +

                '</div>';


            var iconBase = '<?php echo base_url();?>front/images/icons/';

            var icon = iconBase + 'ic-map-pin.svg';

            var marker = new google.maps.Marker({

                map: map1,

                position: point,

                icon: icon

            });

            marker.addListener('click', function () {

                infoWindow.setContent(contentString);

                infoWindow.open(map, marker);

            });

        });

    });


    $(document).on('click', '.pan-to', function (e) {

        e.preventDefault();

        $('.pan-to-marker').removeClass('active')

        $(this).closest('.pan-to-marker').addClass('active');

        var position, lat, lng, $index;

        $index = $(this).data('marker-index');


        // Change this depending on the name of your PHP or XML file

        downloadUrl('<?php echo base_url();?>front/home/get_map_data_center/' + $index, function (data) {


            var xml = data.responseXML;

            var markers = xml.documentElement.getElementsByTagName('marker1');

            Array.prototype.forEach.call(markers, function (markerElem) {

                var name = markerElem.getAttribute('name');

                var address = markerElem.getAttribute('address');

                var phone = markerElem.getAttribute('phone');

                var call = markerElem.getAttribute('call');

                var imgurl = markerElem.getAttribute('url');

                var imgname = markerElem.getAttribute('media_name');

                var center_img = markerElem.getAttribute('center_img');


                var point = new google.maps.LatLng(
                    parseFloat(markerElem.getAttribute('lat')),

                    parseFloat(markerElem.getAttribute('lng')));


                map1.setCenter(point);

                map1.setZoom(17);


                var infowincontent = document.createElement('div');


                var infowincontent1 = document.createElement('div');

                infowincontent1.style.float = 'left';

                infowincontent1.style.marginRight = '10px';

                infowincontent.appendChild(infowincontent1);


                var img = document.createElement('img');

                img.src = '<?php echo base_url();?>' + imgurl + '/' + imgname;

                img.width = '50';

                infowincontent1.appendChild(img);


                var infowincontent2 = document.createElement('div');

                infowincontent.appendChild(infowincontent2);


                var strong = document.createElement('strong');

                strong.textContent = name

                infowincontent2.appendChild(strong);

                infowincontent2.appendChild(document.createElement('br'));


                var text = document.createElement('text');

                text.textContent = address

                infowincontent2.appendChild(text);

                infowincontent2.appendChild(document.createElement('br'));


                var text = document.createElement('text');

                text.textContent = 'Call: ' + phone

                infowincontent2.appendChild(text);


                var contentString = '<div id="content">' +

                    '<div style="float:left;padding-right:15px;"><img src="' + center_img + '"></div>' +

                    '<h4 id="firstHeading" class="firstHeading">' + name + '</h4>' +

                    '<div id="bodyContent">' +

                    '<p style="padding-bottom:0 !important;"><strong>' + address + '</strong></p>' +

                    '<p><strong>Call: <a href="tel:' + call + '" style="color:blue;">' + phone + '</a><strong></p>' +

                    '</div>' +

                    '</div>';


                var iconBase = '<?php echo base_url();?>front/images/icons/';

                var icon = iconBase + 'ic-map-pin.svg';

                var marker = new google.maps.Marker({

                    map: map1,

                    position: point,

                    icon: icon

                });

                marker.addListener('click', function () {

                    infoWindow.setContent(contentString);

                    infoWindow.open(map, marker);

                });

            });

        });
    });


    var map = new google.maps.Map(document.getElementById('map'), {

        center: new google.maps.LatLng(14.0583, 108.2772),

        zoom: 4

    });

    var infoWindow = new google.maps.InfoWindow;


    // Change this depending on the name of your PHP or XML file

    downloadUrl('<?php echo base_url();?>front/home/get_map_data', function (data) {

        var xml = data.responseXML;

        var markers = xml.documentElement.getElementsByTagName('marker');

        Array.prototype.forEach.call(markers, function (markerElem) {

            var name = markerElem.getAttribute('name');

            var address = markerElem.getAttribute('address');

            var phone = markerElem.getAttribute('phone');

            var call = markerElem.getAttribute('call');

            var imgurl = markerElem.getAttribute('url');

            var imgname = markerElem.getAttribute('media_name');

            var center_img = markerElem.getAttribute('center_img');


            var point = new google.maps.LatLng(
                parseFloat(markerElem.getAttribute('lat')),

                parseFloat(markerElem.getAttribute('lng')));


            var infowincontent = document.createElement('div');


            var infowincontent1 = document.createElement('div');

            infowincontent1.style.float = 'left';

            infowincontent1.style.marginRight = '10px';

            infowincontent.appendChild(infowincontent1);


            var img = document.createElement('img');

            img.src = '<?php echo base_url();?>' + imgurl + '/' + imgname;

            img.width = '50';

            infowincontent1.appendChild(img);


            var infowincontent2 = document.createElement('div');

            infowincontent.appendChild(infowincontent2);


            var strong = document.createElement('strong');

            strong.textContent = name

            infowincontent2.appendChild(strong);

            infowincontent2.appendChild(document.createElement('br'));


            var text = document.createElement('text');

            text.textContent = address

            infowincontent2.appendChild(text);


            var contentString = '<div id="content">' +

                '<div style="float:left;padding-right:15px;"><img src="' + center_img + '"></div>' +

                '<h4 id="firstHeading" class="firstHeading">' + name + '</h4>' +

                '<div id="bodyContent">' +

                '<p style="padding-bottom:0 !important;"><strong>' + address + '</strong></p>' +

                '<p><strong>Call: <a href="tel:' + call + '" style="color:blue;">' + phone + '</a><strong></p>' +

                '</div>' +

                '</div>';


            var iconBase = '<?php echo base_url();?>front/images/icons/';

            var icon = iconBase + 'ic-map-pin.svg';

            var marker = new google.maps.Marker({

                map: map,

                position: point,

                icon: icon

            });

            marker.addListener('click', function () {

                infoWindow.setContent(contentString);

                infoWindow.open(map, marker);

            });

        });

    });
}


function downloadUrl(url, callback) {

    var request = window.ActiveXObject ?

        new ActiveXObject('Microsoft.XMLHTTP') :

        new XMLHttpRequest;


    request.onreadystatechange = function () {

        if (request.readyState == 4) {

            request.onreadystatechange = doNothing;

            callback(request, request.status);

        }

    };


    request.open('GET', url, true);

    request.send(null);

}


function doNothing() {
}


function set_lang(lang) {

    $.ajax({

        type: 'POST',

        url: "<?php echo base_url(); ?>front/home/set_language",

        data: {language: lang},

        success: function (data, textStatus, jqXHR) {

            if (data == 1) {

                window.location.reload();

            }

        }

    });

}