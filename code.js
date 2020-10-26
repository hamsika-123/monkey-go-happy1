var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","79cdc522-d573-49e0-9fcb-36392d41b026","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","9ce858df-6f03-4d52-8362-b02026688693","c68a537f-1dd3-41df-bbaf-4e165bc613dc","bcc7a8f8-dc45-4832-bc07-212258d5f743"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":12,"version":"MtmT7I0TVlETkFYRc2BvQ7ohF__eosOg","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"79cdc522-d573-49e0-9fcb-36392d41b026":{"name":"monkey_collide","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":1,"looping":true,"frameDelay":12,"version":"O07f1FBUxjhp2qnWt0JSPbiN9pHs7RSU","loadedFromSource":true,"saved":true,"sourceSize":{"x":560,"y":614},"rootRelativePath":"assets/79cdc522-d573-49e0-9fcb-36392d41b026.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"v9YkrkO_d3HJUT5dc.yVg0jMtZcnTiL4","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"vJ8VYNU3OySUk0Gvo0XksS.fMTT_J5Zd","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"},"9ce858df-6f03-4d52-8362-b02026688693":{"name":"ground2","sourceUrl":"assets/v3/animations/T5UvCVOPSrfSBf_6FS2Auj0xGjoqMHVGUPDDEddlBus/9ce858df-6f03-4d52-8362-b02026688693.png","frameSize":{"x":2377,"y":12},"frameCount":1,"looping":true,"frameDelay":4,"version":"v6qUA_.EObP0DJCVSDqs0qgZHqLfVjw0","loadedFromSource":true,"saved":true,"sourceSize":{"x":2377,"y":12},"rootRelativePath":"assets/v3/animations/T5UvCVOPSrfSBf_6FS2Auj0xGjoqMHVGUPDDEddlBus/9ce858df-6f03-4d52-8362-b02026688693.png"},"c68a537f-1dd3-41df-bbaf-4e165bc613dc":{"name":"gameOver","sourceUrl":"assets/v3/animations/T5UvCVOPSrfSBf_6FS2Auj0xGjoqMHVGUPDDEddlBus/c68a537f-1dd3-41df-bbaf-4e165bc613dc.png","frameSize":{"x":381,"y":21},"frameCount":1,"looping":true,"frameDelay":4,"version":"rTgWgzSA2f_bfGikKKrg76Xcw6z8zS9i","loadedFromSource":true,"saved":true,"sourceSize":{"x":381,"y":21},"rootRelativePath":"assets/v3/animations/T5UvCVOPSrfSBf_6FS2Auj0xGjoqMHVGUPDDEddlBus/c68a537f-1dd3-41df-bbaf-4e165bc613dc.png"},"bcc7a8f8-dc45-4832-bc07-212258d5f743":{"name":"restart","sourceUrl":"assets/v3/animations/T5UvCVOPSrfSBf_6FS2Auj0xGjoqMHVGUPDDEddlBus/bcc7a8f8-dc45-4832-bc07-212258d5f743.png","frameSize":{"x":75,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"p2zwEDZTU0ckfYOFsURTmMxIdb5Jsi_E","loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":64},"rootRelativePath":"assets/v3/animations/T5UvCVOPSrfSBf_6FS2Auj0xGjoqMHVGUPDDEddlBus/bcc7a8f8-dc45-4832-bc07-212258d5f743.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//create terex 
var trex = createSprite(50,300,10,10);
trex.setAnimation("monkey");
trex.debug=false;
trex.setCollider("circle",0,0,180);


//set the size of trex
trex.scale=0.159;

//create ground
var ground=createSprite(200,380,2000,10);
ground.setAnimation("ground2");
ground.scale=1;

var invisibleground= createSprite(200,380,400,5);
//make the ground invisiable        
invisibleground.visible=false;
var cloudsgroup=createGroup()

var obstaclesgroup=createGroup();
var gamestate="play";

var score=0;

    var i=createSprite(200,200)
    i.setAnimation("gameOver")
    var h = createSprite(200,250);
    h.setAnimation("restart");

function draw() {
  background(255);
  
  text(score,374,27);
  
 if(gamestate=="play"){
  //for moving the ground 
  ground.velocityX=-4; 
  trex.setAnimation("monkey");
  
  //for making infinite ground  
  if(ground.x<0){
   ground.x=ground.width/2;
  }
  
   //making the trex jump
  if(keyDown("space")&&trex.y>=280){
    playSound("jump.mp3", false);
    trex.velocityY=-20;
  }
  
  //for gravity effect to trex
  trex.velocityY= trex.velocityY+1;
  
  spawnClouds(); 
  spawnObstacles();
  
   if(obstaclesgroup.isTouching(trex)){
   gamestate="end";
   trex.setAnimation("monkey_collide");
 playSound("die.mp3", false);
     
  }
  
  h.visible=false; 
  i.visible=false;
 }
 
 else if(gamestate=="end"){
    ground.velocityX=0;
    obstaclesgroup.setVelocityXEach(0);
    cloudsgroup.setVelocityXEach(0);
    cloudsgroup.setLifetimeEach(-1);
    obstaclesgroup.setLifetimeEach(-1);
    h.visible=true; 
    i.visible=true;
 
 }
 
 
 if(mousePressedOver(h)){
    h.visible=false; 
    i.visible=false;
    obstaclesgroup.destroyEach();
    cloudsgroup.destroyEach();
    score=0;
    gamestate="play"
    }
  createEdgeSprites();
  
  //making trex stand on sprite:ground 
  trex.collide(invisibleground);
  trex.collide(bottomEdge);
  
  if(cloudsgroup.isTouching(trex))  {
    score=score+1;
    cloudsgroup.destroyEach();
  }
  
  drawSprites();
}


function spawnClouds(){
  if(frameCount%160==0){
     var cloud= createSprite(400,randomNumber(200,300),10,10);
     cloud.velocityX=-4;
     cloud.setAnimation("Banana");
     cloud.lifetime=400/4;
     trex.depth=cloud.depth+1
     cloudsgroup.add(cloud);
     cloud.scale=0.075
  }
}

function spawnObstacles(){
if(frameCount%80==0){
  if(score%10==0){
 playSound("checkPoint.mp3", false);
        
  }
  var obstacle=createSprite(400,355);
  obstacle.setAnimation("Stone");
  obstacle.velocityX=-4;
  obstacle.scale=0.2;
  obstaclesgroup.add(obstacle);
  obstacle.debug=false;
  obstacle.setCollider("circle",0,0,150);
}
}
  
  




  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
