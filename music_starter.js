
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  let waveHeight= baseWave ;
  let waveFreq = 2
  
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;

  
   
  map(colorMode(HSL), song.currentTime(0), song.currentTime(150),song.currentTime(150), song.currentTime(206))
   // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(252, 3, 148)
  //  var ballSize = 50

  //  var drumHeight = map(drum, 50 , 100 , height, 0+ballSize/2)

  //  ellipse(width/2,drumHeight, ballSize)
 
   // bass bar 
   fill(40, 92, 82);

  let baseWave = map(bass, 0, 100, 20, 100)

   beginShape()
   for( let i= 0; i <width; i++ ){
      vertex(i, bassHeight/2, -waveHeight*sin(waveFreq*i))
   }
   endShape()


   // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
   //textSize(vocal);
   //text(words, width/2, height/3);
}