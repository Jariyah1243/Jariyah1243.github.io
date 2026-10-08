$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();
    toggleGrid();



    // TODO 2 - Create Platforms
      createPlatform(150, 650, 60, 20);
      createPlatform(300, 550, 60, 20);
      createPlatform(460, 450, 60, 20);
      createPlatform(600, 530, 50, 40);
      createPlatform(750, 430, 50, 20);
      createPlatform(900, 360, 140 , 20, "blue");




    // TODO 3 - Create Collectables
       createCollectable("diamond", 900, 330);
       createCollectable("grace", 150, 630);
       createCollectable("max", 460, 430);



    
    // TODO 4 - Create Cannons
    createCannon("top", 300, 1000);
    createCannon("bottom", 390, 1000);
    createCannon("top", 740, 1000);
    createCannon("bottom", 820, 700);
    createCannon("top", 300, 1000);
    

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
