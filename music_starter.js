
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  colorMode(HSL, 255 , 255 ,255);

   let pinkColour = color 	(315, 100, 82)
   let purpleColour = color (277, 65, 19)

   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;


   
  let saturation = map(song.currentTime(), 151, 206, 0, 255);

  fill(30, saturation, 255)
  
  for ( let i = 0; i < 1080; i++){
   let gradientAmount = map(i, 0, 1080, 0, 1)
   let strokeColour = lerpColor(pinkColour , purpleColour , gradientAmount)

   stroke(strokeColour)
   line(0, 100+i, width, 100+i)
}

   // vocal bar is red
   stroke(180, 100, 70);
   noFill()

 let vocalHeight = height / 2;
 let vocalWave = map (vocal, 5, 100, 20, 100)
 let vocalwHeight = vocalWave;
 let vocalwFreq=2;

   beginShape()
   for( let iii= 0; iii <width; iii++ ){
      vertex(iii, vocalHeight - vocalwHeight *sin(vocalwFreq*iii))
   }
   endShape()


  
 
    // drum bar 
    fill(325, 98, 50)
    if (drum > 50) {
      ellipse(50,50,50)
  }
 
   // bass bar 
   stroke(180, 100, 70);
   noFill()

 let bassHeight = height / 2;
 let bassWave = map (bass, 0, 100, 20, 100)
 let waveHeight = bassWave;
 let waveFreq=2;

   beginShape()
   for( let ii= 0; ii <width; ii++ ){
      vertex(ii, bassHeight - waveHeight *sin(waveFreq*ii))
   }
   endShape()


  
}