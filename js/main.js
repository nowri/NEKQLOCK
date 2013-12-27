//timer
var timer = (function(window, $) {



	// requestAnimationFrame
	var lastTime = 0;
	var vendors = [ 'ms', 'moz', 'webkit', 'o' ];
	for( var x = 0, limit = vendors.length; x < limit && !window.requestAnimationFrame; ++x ) {
		window.requestAnimationFrame = window[ vendors[ x ]+'RequestAnimationFrame' ];
		window.cancelAnimationFrame = window[ vendors[ x ]+'CancelAnimationFrame' ] || window[ vendors[ x ]+'CancelRequestAnimationFrame' ];
	}

	if ( !window.requestAnimationFrame ) {
		window.requestAnimationFrame = function( callback ) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
			var id = window.setTimeout( function() { callback( currTime + timeToCall ); }, timeToCall );
			lastTime = currTime + timeToCall;
			return id;
		};
	}

	if ( !window.cancelAnimationFrame ) {
		window.cancelAnimationFrame = function( id ) {
			clearTimeout( id );
		};
	}


	// initialize
	var that	= {},
		m		= moment(),
		$hh		= $("#js-hh"),
		$mm		= $("#js-mm"),
		$ss		= $("#js-ss"),
		hh,
		mm,
		ss;

	function render() {

		m	= moment();

		var _hh	= m.hours(),
			_mm	= m.minutes(),
			_ss	= m.seconds();

		renderText($hh, _hh, hh);
		renderText($mm, _mm, mm);
		renderText($ss, _ss, ss, true);

		hh	= _hh;
		mm	= _mm;
		ss	= _ss;
	}

	function renderText($dom, num, oldNum, isDispatch){

		if(num !== oldNum){
			$dom.text(zeroFormat(num, 2));

			if(isDispatch){
				$(that).trigger("update", [num])
			}
		}
	}

	function zeroFormat(num, n){// ZeroFormat(1,3) => "001"
		var ret=""+num;
		while(ret.length < n){
			ret = "0" + ret;
		}
		return ret;
	}


	// start loop
	(function animloop(){
		window.requestAnimationFrame(animloop);
		render();
	})();

	return that;
})(this, jQuery);

// GIF manager
gifManager = (function(window, $) {

	var API				= "http://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC&limit=100",
		CACHE_LIMIT_H	= 1,
		MAX_SLIDES		= 25,
		nowMS			= moment().milliseconds(),
		limitMS			= localStorage.getItem("limitMS"),
		current			= -1,
		that			= {},
		shouldLoad,
		photoList,
		$photos;

	if(limitMS !== null && limitMS.match(/^-?[0-9]+$/)){
		if(limitMS > nowMS) {
			shouldLoad = false;
		} else {
			shouldLoad = true;
		}
	} else {
		shouldLoad = true;
	}

	if(shouldLoad){
		load();
	} else {
		renderPhotoList();
	}

	// Methods
	function load() {
		$.getJSON(API, function(data) {
			var list = _.pluck(
				_.pluck(
					_.pluck(data.data, "images"),
					"original"),
				"url");
			if(list && list.length == 100) {
				localStorage.setItem("limitMS", Math.floor(nowMS + CACHE_LIMIT_H * 60 * 60 * 1000));
				localStorage.setItem("photoList", arrToStr(list));
				photoList = list;
				renderPhotoList();
			}
		});
	}

	function renderPhotoList(){
		var template	= _.template($("#js-photo-list-template").text()),
			html		= "",
			$photoList	= $("#js-photo-list"),
			part;
		photoList = photoList || strToArr(localStorage.getItem("photoList"));
		photoList = _.first(_.shuffle(photoList), MAX_SLIDES);
		_.each(photoList, function(el, i) {
			part = template({
				sty:el
			});
			html += part;
		});
		$photoList.html(html);
		$photos = $photoList.find(".photo");
		setTimeout(function(){
			that.isReady = true;
		}, 1000);
	}

	function change(){
		if(!$photos || !$photos.length)return;
		current++;
		if(current == MAX_SLIDES){
			current = 0;
		}
		$photos.addClass("hidden");
		$photos.eq(current).removeClass("hidden");
	}


	// Utilities
	function strToArr(str) {
		return str.split(",");
	}

	function arrToStr(ar) {
		return ar.join(",");
	}
	that.change = change;
	return that;

})(this, jQuery);

//sound player
(function(){

	function BufferLoader(context, urlList, callback) {
		this.context = context;
		this.urlList = urlList;
		this.onload = callback;
		this.bufferList = new Array();
		this.loadCount = 0;
	};
	BufferLoader.prototype.loadBuffer = function(url, index){
		// Load buffer asynchronously
		var request = new XMLHttpRequest();
		request.open("GET", url, true);
		request.responseType = "arraybuffer";
		var loader = this;
		request.onload = function() {
			// Asynchronously decode the audio file data in request.response
			loader.context.decodeAudioData(
				request.response,
				function(buffer) {
					if (!buffer) {
						alert('error decoding file data: ' + url);
						return;
					}
					loader.bufferList[index] = buffer;
					if (++loader.loadCount == loader.urlList.length) {
						loader.onload(loader.bufferList);
					}
				}
			);
		}
		request.onerror = function() {
			alert('BufferLoader: XHR error');
		};
		request.send();
	};
	BufferLoader.prototype.load = function(){
		for (var i = 0; i < this.urlList.length; ++i) {
			this.loadBuffer(this.urlList[i], i);
		}
	};

	var context = new webkitAudioContext(),
		url = 'music.mp3',
		bufferLoader = new BufferLoader(context, [url], function(bufferList){
			for (var i = 0; i < bufferList.length; i++) {
				var source = context.createBufferSource();
				source.buffer = bufferList[i];
				source.loop = true;
				source.connect(context.destination);
				source.noteOn(0);
			}
		});
	bufferLoader.load();

})();

// display manager
(function() {

	var $clock = $("#js-clock");
	$(timer)
		.on("update", function(e, sec){
			var num = sec%10;
			if(num == 1){
				showClock();
			} else
			if(num == 5){
				gifManager.change();
			} else
			if(num == 6){
				hideClock();
			}
		});

	function showClock(){
		$clock.fadeIn(400);
	}

	function hideClock(){
		if(gifManager.isReady)$clock.fadeOut(400);
	}
})();