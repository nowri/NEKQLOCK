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
	var that		= {},
		m			= moment(),
		$hh			= $("#js-hh"),
		$mm			= $("#js-mm"),
		$ss			= $("#js-ss"),
		$hhInvert	= $("#js-hh-invert"),
		$mmInvert	= $("#js-mm-invert"),
		$ssInvert	= $("#js-ss-invert"),
		hh,
		mm,
		ss,
		isNewYear,
		isRenderNewYear;

	function render() {

		m	= moment();

		var _hh	= m.hours(),
			_mm	= m.minutes(),
			_ss	= m.seconds();

        triggerBGM(_ss, ss);

		renderText($hh, _hh, hh);
		renderText($mm, _mm, mm);
		renderText($ss, _ss, ss, true);
		renderText($hhInvert, _hh, hh);
		renderText($mmInvert, _mm, mm);
		renderText($ssInvert, _ss, ss, true);



		hh	= _hh;
		mm	= _mm;
		ss	= _ss;
	}

    function triggerBGM(_ss, ss) {

        if(soundPlayer && ss !== _ss) {
            soundPlayer.playSound();
        }

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
		MAX_SLIDES		= 75,
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
var soundPlayer = (function(){

	var isMusicReady	= false,
        isMusicPlaying  = false,
		url				= 'music.mp3',
		item			= {src:url, id:"music"},
		queue			= new createjs.LoadQueue(),
		bgm;

	createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin, createjs.FlashPlugin]);
	queue.installPlugin(createjs.Sound);
	queue.addEventListener("complete", loadComplete);
	queue.loadFile(item, true);

	function loadComplete(evt) {
		bgm = createjs.Sound.createInstance("music");
        bgm.addEventListener("complete", function(){
            isMusicPlaying = false;
        });
        isMusicReady = true;
	}

	function playSound() {

		if(!isMusicReady || isMusicPlaying)return;
        bgm.play();
        isMusicPlaying = true;
	}

	return {
		playSound : playSound
	}
})();

// display manager
(function() {
	var $maskA	= $("#js-mask-clock"),
		$maskB	= $("#js-mask-clock-invert"),
		$maskP	= $("#js-mask-photo");

	$(timer)
		.on("update", function(e, sec){
			var isEven	= false,
				num		= sec%10;
			if(Math.floor(sec/10) % 2 == 0){
				isEven = true;
			}
			changeView(num, isEven);
		});

	function changeView(num, isEven) {

		if(!isEven) {
			switch (num) {
				case 1:
					changeZ($maskB, 5);
					reset($maskA, "width", "0%");
					reset($maskA, "height", "100%");
					changeZ($maskA);
					anim($maskA, "width", "100%");
					break;

				case 2:
					reset($maskB, "width", "100%");
					reset($maskB, "height", "0%");
					changeZ($maskB);
					anim($maskB, "height", "100%");
					break;

				case 3:
					reset($maskA, "width", "100%");
					reset($maskA, "height", "100%");
					anim($maskB, "width", "0%");
					break;

				case 4:
					changeZ($maskA);
					reset($maskB, "width", "100%");
					reset($maskB, "height", "100%");
					anim($maskA, "height", "0%");
					break;

				case 5:
					changeZ($maskA);
					reset($maskA, "width", "0%");
					reset($maskA, "height", "100%");
					anim($maskA, "width", "100%");
					gifManager.change();
					break;

				case 6:
					changeZ($maskA, 5);
					reset($maskP, "width", "100%");
					reset($maskP, "height", "0%");
					changeZ($maskP);
					anim($maskP, "height", "100%");
					break;

				case 7:
				case 8:
				case 9:
				case 0:
					break;
			}
		} else {
			switch (num) {
				case 1:
					changeZ($maskB, 5);
					changeZ($maskP);
					reset($maskB, "width", "100%");
					reset($maskB, "height", "100%");
					reset($maskP, "width", "100%");
					reset($maskP, "height", "100%");
					anim($maskP, "width", "0%");
					break;

				case 2:
					changeZ($maskB);
					changeZ($maskA, 5);
					reset($maskA, "width", "100%");
					reset($maskA, "height", "100%");
					anim($maskB, "height", "0%");
					break;

				case 3:
					changeZ($maskB);
					reset($maskB, "width", "0%");
					reset($maskB, "height", "100%");
					anim($maskB, "width", "100%");
					break;

				case 4:
					changeZ($maskA);
					changeZ($maskB, 5);
					reset($maskA, "width", "100%");
					reset($maskA, "height", "0%");
					anim($maskA, "height", "100%");
					break;

				case 5:
					reset($maskB, "width", "100%");
					reset($maskB, "height", "100%");
					anim($maskA, "width", "0%");
					gifManager.change();
					break;

				case 6:
					changeZ($maskB);
					changeZ($maskP, 5);
					reset($maskP, "width", "100%");
					reset($maskP, "height", "100%");
					anim($maskB, "height", "0%");
					break;

				case 7:
				case 8:
				case 9:
				case 0:
					break;
			}
		}
	}

	var $window = $(window);
	function anim($mask, key, value) {
		var obj = {},
			time = 333;
		obj[key] = value;

		$mask
			.stop()
			.animate(obj, time, "linear");
	}

	function changeZ($current, index) {
		index = index || 10;
		$(".z"+index).removeClass("z"+index);
		$current.addClass("z"+index);
	}

	function reset($mask, key, value){
		var obj = {};
		obj[key] = value;
		$mask.stop();
		$mask.css(obj);
	}

})();

// fit window on resize
(function(){
	var $window = $(window);
	$window.resize(_.throttle(function() {
		var w = $window.width(),
			h = $window.height();
		$(".js-full-resize")
			.css({
				width	: w+"px",
				height	: h+"px"
			});
	}, 100));
	$(function(){
		$window.trigger("resize");
	});
})();