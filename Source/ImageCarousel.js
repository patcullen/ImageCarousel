/*
---
description: ImageCarousel, An image carousel class that is really easy to implement.

license: MIT-style

authors:
- Pat Cullen

requires:
- core/1.2.4: [Class, Class.Extras, Element, Element.Dimensions, DomReady, Fx.Tween, Request.JSON]

provides: [ImageCarousel]

...
*/

var ImageCarousel = new Class({
	Implements: [Options],
	options: {
		source: 'Images/Carousel/', // Location of image files. must end with /
		fileLister: 'ImageCarousel.php', // optional SS code that generates image file list
		showDuration: 3500,
		fadeDuration: 900,
		autoPlay: true,
		files: [] // not required if using fileLister
	},
	slide: [],
	number: [],
 
	initialize: function(options) {
		this.setOptions(options);
		this.options.element = $(this.options.element).grab(
			this.panel = new Element('div', { 'class': 'panel' })
		);
		this.dim = this.options.element.getSize();
		if ($defined(this.options.fileLister)) {
			new Request.JSON({
				url: this.options.source + this.options.fileLister, 
				secure: false, 
				onSuccess: function(file){
					this.setFiles(file);
					this.loadImage(0);
				}.bind(this)
			}).get();
		} else {
			this.setFiles(this.options.files);
			this.loadImage(0);
		}
		if (this.options.autoPlay) this.play();
	},
	
	play: function() {
		this.player = this.nextSlide.periodical(this.options.showDuration, this);
		return this;
	},
	
	stop: function() {
		$clear(this.player);
		return this;
	},
	
	setFiles: function(files) {
		this.options.files = files;
		this.options.files.each(function(f) {
			if ($defined(f)) {
				var slide = {
					file: f,
					element: new Element('div', {
						'class': 'slide',
						styles: {
							width: this.dim.x, height: this.dim.y,
							backgroundImage: 'url('+this.options.source+f+')',
							opacity: 0
						}
					})
				};
				this.options.element.grab(slide.element);
				slide.element.set('tween', {duration: this.options.fadeDuration})
				this.slide.push(slide);
			}
		}.bind(this));
		this.addNumbers();
		return this;
	},
	
	loadImage: function(i) {
		this.currentImage = i;
		this.slide.each(function(s, j) {
			this.number[j].removeClass('active');
			if (i == j) { // show this slide
				s.element.fade(1);
				this.number[j].addClass('active');
			} else { // else hide it
				s.element.fade(0);
			}
		}.bind(this));
	},
	
	addNumbers: function() {
		this.slide.each(function(s, i) {
			var n;
			this.panel.grab(
				n = new Element('div', {
					'class': 'number',
					events: {
						click: function() {
							this.loadImage(i);
							this.stop().play();
						}.bind(this)
					}
				}).grab(new Element('span', { text: (i+1) }))
			);
			this.number.push(n);
		}.bind(this));
	},
	
	nextSlide: function() {
		var t = this.currentImage + 1;
		if (t > this.slide.length - 1) t = 0;
		this.loadImage(t);
		return this;
	}
	
});

ImageCarousel.extend({
	speed: {
		fast: {
			showDuration: 2000,
			fadeDuration: 400
		},
		normal: {
			showDuration: 3500,
			fadeDuration: 900
		},
		slow: {
			showDuration: 5000,
			fadeDuration: 1300
		}
	}
});

window.addEvent('domready', function() {
	$$('.ImageCarousel.auto').each(function(e) {
		// detect speed
		var speed = ImageCarousel.speed.normal;
		if (e.hasClass('fast')) speed = ImageCarousel.speed.fast;
		if (e.hasClass('slow')) speed = ImageCarousel.speed.slow;
		
		// auto create carousel
		new ImageCarousel($merge({ 
			element: e,
			source: $defined(e.get('rel')) ? e.get('rel') : null
		}, speed));
	});
});
