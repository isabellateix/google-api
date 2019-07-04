  function initMap() {
  	const	moodev = {lat: -31.762193, lng: -52.342067}

    const map = new google.maps.Map(document.getElementById('map'), {
      center: moodev,
      zoom: 18
    });

    const marker = new google.maps.Marker({
	    position: moodev,
	    map: map,
	    title:"Moodev!"
		});
  }