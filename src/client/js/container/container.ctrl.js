(function () {
  angular
      .module('divkick.container', [])
      .controller('ContainerCtrl', ContainerCtrl);

  /* @ngInject */
  function ContainerCtrl() {
    /* jshint validthis: true */
    var main = this;
    main.title = 'div kick';

    var renderer = new PIXI.WebGLRenderer(900, 600);
    document.body.appendChild(renderer.view);
    var stage = new PIXI.Container();

    var dudeTexture = PIXI.Texture.fromImage('assets/dude.png');
    var dude = new PIXI.Sprite(dudeTexture);
    dude.interactive = true;
    dude.buttonMode = true;

    // Setup the position and scale of the dude
    dude.position.x = 200;
    dude.position.y = 400;

    dude.anchor.x= .5;
    dude.anchor.y= .5;

    dude.scale.x = .15;
    dude.scale.y = .15;

    dude.mousedown = dude.touchstart = function(data)
    {
      ///tween jump
    TweenLite.to(dude, .5, {y:(dude.position.y-30)});  
    };

    // Add the dude to the scene.
    stage.addChild(dude);
    //start render loop
    animate();
    function animate() {
       
        requestAnimationFrame(animate);
        dude.rotation += 0.01;
        renderer.render(stage);
    }

    activate();
    ////////////////
    function activate() {
      console.log(main.title);
      console.log(stage);
    }
  }
})();