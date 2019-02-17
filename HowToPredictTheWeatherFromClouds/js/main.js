$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();
    
    var tween1 = TweenMax.to('#title-text', 2, {
        delay: 3,
        opacity: 1
    });
    
    var tween2 = TweenMax.to('#sun', 2, {
        delay: 3,
        opacity: 1
    });
    
    var intro_text = TweenMax.to('#intro-text', 2, {
        opacity: 1,
        yoyo: true
    });
    
    var intro = new ScrollMagic.Scene({
		triggerElement: '#intro',
        reverse: true,
		triggerHook: '0.8'
	})
    .setClassToggle('#intro', 'fade-in')
	.addTo(controller);
    
    intro.setTween(intro_text);
    
    var scene01 = new ScrollMagic.Scene({
		triggerElement: '#slide01',
        reverse: true,
		triggerHook: '0.7'
	})
    .setClassToggle('#slide01', 'fade-in')
	.addTo(controller);
    
    var text1tween = TweenMax.fromTo('#case1_text', 2.5, {opacity: 0, scale: 0, yoyo: true}, {opacity: 1, scale:1, yoyo: true});
    
    //scene01.onLeave
    var scene1_tl = new TimelineLite();
    
    scene1_tl
        .to('#c_left', 5, {
        x: -550,
        scale: 1.5, yoyo: true})
        .to('#c_right', 5, {
        x: 550,
        scale: 1.5, yoyo: true}, '-=5');
    
    var scene01End = new ScrollMagic.Scene({
		triggerElement: '#slide02',
        reverse: true,
		triggerHook: 'onEnter'
	})
    .setTween(scene1_tl)
	.addTo(controller);
    
    //Scene02
    var scene02 = new ScrollMagic.Scene({
		triggerElement: '#slide02',
        reverse: true,
		triggerHook: 'onEnter'
	})
    .setClassToggle('#slide02', 'fade-in')
	.addTo(controller);
    
    //scene02.onLeave
    var scene2_tl = new TimelineLite();
    
    scene2_tl
        .to('#case2', 5, {
        x: -550,
        scale: 1.5, yoyo: true})
        .to('#case2_sun', 5, {
        x: 550,
        scale: 1.5, yoyo: true}, '-=5');
    
    var scene02End = new ScrollMagic.Scene({
		triggerElement: '#slide03',
        reverse: true,
		triggerHook: 'onEnter'
	})
    .setTween(scene2_tl)
	.addTo(controller);
    
    var scaling = TweenMax.fromTo('#case2_sun', 3, {scale: 1, repeat: -1, yoyo: true, repeatDelay: 0}, {scale: 0.8, repeat: -1, yoyo: true, repeatDelay: 0});
    scene01.setTween(scaling);
    
    //Scene03
    var scene03 = new ScrollMagic.Scene({
		triggerElement: '#slide03',
        reverse: true,
		triggerHook: 'onEnter'
	})
    .setClassToggle('#slide03', 'fade-in')
	.addTo(controller);
    
    //scene03.onLeave
    var scene3_tl = new TimelineLite();
    
    scene3_tl
        .to('#c3_left', 5, {
        x: -550,
        scale: 1.5, yoyo: true})
        .to('#c3_right', 5, {
        x: 550,
        scale: 1.5, yoyo: true}, '-=5');
    
    var scene03End = new ScrollMagic.Scene({
		triggerElement: '#slide04',
        reverse: true,
		triggerHook: 'onEnter'
	})
    .setTween(scene3_tl)
	.addTo(controller);
    
    //Scene04
    var scene04 = new ScrollMagic.Scene({
		triggerElement: '#slide04',
        reverse: true,
		triggerHook: 'onEnter'
	})
    .setClassToggle('#slide04', 'fade-in')
	.addTo(controller);
    
    //scene04.onLeave
    var scene4_tl = new TimelineLite();
    
    scene4_tl
        .to('#a4_top', 5, {
        x: -550,
        scale: 1.5, yoyo: true})
        .to('#a4_center', 5, {
        x: 550,
        scale: 1.5, yoyo: true}, '-=5')
    .to('#a4_bottom', 5, {
        x: -550,
        scale: 1.5}, '-=5');
    
    var scene04End = new ScrollMagic.Scene({
		triggerElement: '#slide05',
        reverse: true,
		triggerHook: 'onEnter'
	})
    .setTween(scene4_tl)
	.addTo(controller);
    
    //Scene05
    var scene05 = new ScrollMagic.Scene({
		triggerElement: '#slide05',
        reverse: true,
		triggerHook: 'onEnter'
	})
    .setClassToggle('#slide05', 'fade-in')
	.addTo(controller);
    
    //scene05.onLeave
    var scene5_tl = new TimelineLite();
    
    scene5_tl
        .to('#a5_left', 5, {
        x: -550,
        scale: 1.5, yoyo: true})
        .to('#a5_right', 5, {
        x: 550,
        scale: 1.5, yoyo: true}, '-=5');
    
    var scene05End = new ScrollMagic.Scene({
		triggerElement: '#slide06',
        reverse: true,
		triggerHook: 'onEnter'
	})
    .setTween(scene5_tl)
	.addTo(controller);
    
    //Scene06
    var scene06 = new ScrollMagic.Scene({
		triggerElement: '#slide06',
        reverse: true,
		triggerHook: 'onEnter'
	})
    .setClassToggle('#slide06', 'fade-in')
	.addTo(controller);
    
    var thunder = TweenMax.fromTo('#thunder', 2.5, {scale: 0.5, repeat: -1, yoyo: true, repeatDelay: 0}, {scale:1, repeat: -1, yoyo: true, repeatDelay: 0});
    
    var sceneThunder = new ScrollMagic.Scene({
        triggerElement: '#slide06',
        reverse: true,
        triggerHook: 'onEnter'
    })
    .setTween(thunder)
    .addTo(controller);
    
    //scene06.onLeave
    var scene6_tl = new TimelineLite();
    
    scene6_tl
        .to('#c6', 5, {
        x: -550,
        scale: 1.5, yoyo: true})
        .to('#thunder', 5, {
        x: 550,
        scale: 1.5, yoyo: true}, '-=5');
    
    var scene03End = new ScrollMagic.Scene({
		triggerElement: '#slide07',
        reverse: true,
		triggerHook: 'onEnter'
	})
    .setTween(scene6_tl)
	.addTo(controller);
    
    //Scene07
    var scene07 = new ScrollMagic.Scene({
		triggerElement: '#slide07',
        reverse: true,
		triggerHook: 'onEnter'
	})
    .setClassToggle('#slide07', 'fade-in')
	.addTo(controller);
    
    //scene07.onLeave
    var scene7_tl = new TimelineLite();
    
    scene7_tl
        .to('#s7', 5, {
        x: -550,
        scale: 1.5, yoyo: true});
    
    var scene07End = new ScrollMagic.Scene({
		triggerElement: '#slide08',
        reverse: true,
		triggerHook: 'onEnter'
	})
    .setTween(scene7_tl)
	.addTo(controller);
    
    //Scene08
    var scene08 = new ScrollMagic.Scene({
		triggerElement: '#slide08',
        reverse: true,
		triggerHook: 'onEnter'
	})
    .setClassToggle('#slide08', 'fade-in')
	.addTo(controller);
    
    //scene03.onLeave
    var scene8_tl = new TimelineLite();
    
    scene8_tl
        .to('#c8_left', 5, {
        x: -550,
        scale: 1.5, yoyo: true})
        .to('#c8_right', 5, {
        x: 550,
        scale: 1.5, yoyo: true}, '-=5');
    
    var scene03End = new ScrollMagic.Scene({
		triggerElement: '#slide09',
        reverse: true,
		triggerHook: 'onEnter'
	})
    .setTween(scene8_tl)
	.addTo(controller);
    
    //Scene09
    var scene09 = new ScrollMagic.Scene({
		triggerElement: '#slide09',
        reverse: true,
		triggerHook: 'onEnter'
	})
    .setClassToggle('#slide09', 'fade-in')
	.addTo(controller);
    
    //scene09.onLeave
    var scene9_tl = new TimelineLite();
    
    scene9_tl
        .to('#n9', 5, {
        x: -550,
        scale: 1.5, yoyo: true})
        .to('#rain', 5, {
        x: 550,
        scale: 1.5, yoyo: true}, '-=5');
    
    var scene09End = new ScrollMagic.Scene({
		triggerElement: '#slide10',
        reverse: true,
		triggerHook: 'onEnter'
	})
    .setTween(scene9_tl)
	.addTo(controller);
    
    //Scene10
    var scene10 = new ScrollMagic.Scene({
		triggerElement: '#slide10',
        reverse: true,
		triggerHook: 'onEnter'
	})
    .setClassToggle('#slide10', 'fade-in')
	.addTo(controller);
    
    //scene010.onLeave
    var scene10_tl = new TimelineLite();
    
    scene10_tl
        .to('#s10', 5, {
        x: -550,
        scale: 1.5, yoyo: true});
    
    var scene10End = new ScrollMagic.Scene({
		triggerElement: '#footer',
        reverse: true,
		triggerHook: '1'
	})
    .setTween(scene10_tl)
	.addTo(controller);
    
});