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
		snd_m		= moment(),
		$hh			= $("#js-hh"),
		$mm			= $("#js-mm"),
		$ss			= $("#js-ss"),
		$hhInvert	= $("#js-hh-invert"),
		$mmInvert	= $("#js-mm-invert"),
		$ssInvert	= $("#js-ss-invert"),
		hh,
		mm,
		ss,
		snd_hh,
		snd_mm,
		snd_ss,
		isNewYear,
		isRenderNewYear;

	function render() {

		m	= moment();

		var _hh	= m.hours(),
			_mm	= m.minutes(),
			_ss	= m.seconds();

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
            soundPlayer.playSound(_ss);
			soundPlayer.playSignal(_ss);
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


	//sound timer

	function renderSound() {
		snd_m	= moment();

		var _hh	= snd_m.hours(),
			_mm	= snd_m.minutes(),
			_ss	= snd_m.seconds();

		triggerBGM(_ss, snd_ss);

		snd_hh	= _hh;
		snd_mm	= _mm;
		snd_ss	= _ss;

		setTimeout(renderSound, 8);
	}

	// start loop
	renderSound();


	return that;
})(this, jQuery);

// GIF manager
gifManager = (function(window, $) {

	var API				= "http://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC&limit=100",
		CACHE_LIMIT_H	= 1,
		MAX_SLIDES		= 75,
		nowMS			= moment().toDate().getTime(),
		limitMS			= Number(localStorage.getItem("limitMS")),
		current			= -1,
		that			= {},
		$photo			= $("#js-photo"),
		shouldLoad,
		playList;

	if(limitMS !== null && (limitMS+"").match(/^-?[0-9]+$/)){
		if(limitMS > nowMS) {
			shouldLoad = false;
		} else {
			shouldLoad = true;
		}
	} else {
		shouldLoad = true;
	}

	if(shouldLoad){
		loadList();
	} else {
		readyPhoto();
	}

	// Methods
	function loadList() {
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
				readyPhoto();
			}
		});
	}

	function readyPhoto(){
		var photoList,
			cueFirst,
			cueBackground;

		playList		= [];
		photoList		= photoList || strToArr(localStorage.getItem("photoList"));
		photoList		= _.first(_.shuffle(photoList), MAX_SLIDES);
		cueFirst		= _.first(photoList, 3);
		cueBackground	= _.last(photoList, photoList.length - 3);


		loadPhotos(cueFirst, function(){
			loadPhotos(cueBackground);
			that.isReady = true;
		});

	}

	function loadPhotos(list, callback) {

		function fileloadHandler(evt) {
			playList.push(evt.item.src);
		}

		function completeHandler(evt) {
			loader.removeEventListener("fileload", fileloadHandler);
			loader.removeEventListener("complete", completeHandler);
			if(typeof callback === "function")callback();
		}

		var loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", fileloadHandler);
		loader.addEventListener("complete", completeHandler);

		loader.loadManifest(list);
	}



	function change(){
		if(!that.isReady)return;
		current++;
		if(current == playList.length){
			current = 0;
		}

		$photo.css({
			backgroundImage:'url('+ playList[current] +')'
		});

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
		isMusicPlaying	= false,
		manifest		= [
			{src:"music.mp3",	id:"music"},
			{src:"sine500.mp3",	id:"s500"},
			{src:"sine1000.mp3",	id:"s1000"},
			{src:"sine2000.mp3",	id:"s2000"}
		],
		queue			= new createjs.LoadQueue(),
		$soundBtn		= $(".js-sound-btn"),
		bgm,
		s500,
		s1000,
		s2000;

	createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin, createjs.FlashPlugin]);
	queue.installPlugin(createjs.Sound);
	queue.addEventListener("complete", loadComplete);
	queue.loadManifest(manifest);


	function loadComplete(evt) {
		s500	= createjs.Sound.createInstance("s500");
		s1000	= createjs.Sound.createInstance("s1000");
		s2000	= createjs.Sound.createInstance("s2000");
		bgm		= createjs.Sound.createInstance("music");
        bgm.addEventListener("complete", function(){
            isMusicPlaying = false;
        });
        isMusicReady = true;

		s500.setVolume(0.8);
		s1000.setVolume(0.8);
		s2000.setVolume(0.8);
		bgm.setVolume(0.7);

		configureSoundBtn();
	}

	function configureSoundBtn() {
		$soundBtn
			.click(function(){
				var mute = !bgm.getMute();
				s500.setMute(mute);
				s1000.setMute(mute);
				s2000.setMute(mute);
				bgm.setMute(mute);
				changeSoundBtnView(mute);
			});
	}

	function changeSoundBtnView(isMute) {
		if(isMute){
			$soundBtn.removeClass("glyphicon-volume-down");
			$soundBtn.addClass("glyphicon-volume-off");
		} else {
			$soundBtn.removeClass("glyphicon-volume-off");
			$soundBtn.addClass("glyphicon-volume-down");
		}

	}

	function playSound(sec) {
		if(!isMusicReady || isMusicPlaying || sec !== 0)return;
		bgm.play();
		isMusicPlaying = true;
	}

	function playSignal(sec) {

		if(!isMusicReady)return;

		switch (sec) {
			case 0:
			case 10:
			case 20:
			case 30:
			case 40:
			case 50:
				s1000.play();
				break;

			case 57:
			case 58:
			case 59:
				s500.play();
				break;

			default:
				s2000.play();
				break;
		}

	}

	return {
		playSound	: playSound,
		playSignal	: playSignal
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
			time = 500;
		obj[key] = value;
		if(key === "height"){
			time = time/$window.width()*$window.height();
		}
		$mask
			.stop()
			.animate(obj, time, "easeOutExpo");
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


// fullscreen
(function() {
	var $btn = $(".js-fullscreen-btn"),
		isFull = false;

	function requestFullscreen(element){
		if(!(element.requestFullscreen)){
			var requestFullscreen = element.webkitRequestFullScreen ||
				element.mozRequestFullScreen ||
				element.oRequestFullScreen ||
				element.msRequestFullScreen;
			element.requestFullscreen = requestFullscreen;
		}
		element.requestFullscreen();
	}


	function exitFullscreen() {
		if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else {
			document.exitFullscreen();
		}
	}

	$btn.click(function(){
		if(isFull){
			exitFullscreen();
			$btn.removeClass("glyphicon-resize-small");
			$btn.addClass("glyphicon-fullscreen");
		} else {
			requestFullscreen($("article").get(0));
			$btn.removeClass("glyphicon-fullscreen");
			$btn.addClass("glyphicon-resize-small");
		}
		isFull = !isFull;
	});
})();

// fit window on resize
(function(){
	var $window = $(window);
	$window.resize(_.throttle(function() {
		var w = $window.width(),
			h = $window.height();
		$(".js-full-resize")
			.css({
				width	: w + "px",
				height	: h + "px"
			});
	}, 100));
	$(function(){
		$window.trigger("resize");
	});
})();