
// vocal, drum, bass, and other are volumes ranging from 0 to 100
   let drumValue= 50
   let changePosition= true
   let drumCircleX= 0
   let drumCircleY= 0

function draw_one_frame(words, vocal, drum, bass, other, counter) {

  colorMode(HSL, 255 , 255 ,255);

  let saturation = map(song.currentTime(), 151, 206, 0, 255);

  fill(30, saturation, 255)

   let pinkColour = color 	(315, 100 * saturation, 82)
   let purpleColour = color (277, 65* saturation, 19)
   let vocalColour = color (180, 222* saturation, 191)
   let drumColour = color (222, 200* saturation, 180)
   let bassColour = color (207, 180* saturation, 222)


  //background
//   for ( let i = 0; i < 1080; i++){
//    let gradientAmount = map(i, 0, 1080, 0, 1)
//    let strokeColour = lerpColor(pinkColour , purpleColour , gradientAmount)

//    stroke(strokeColour)
//    line(0, 1+i, width, 1+i)
// }
   // other

   for ( let i = 0; i < 1080; i++){
      let gradientAmount = map(other, 20, 100, 0, 1)
      let strokeColour = lerpColor(pinkColour , purpleColour , gradientAmount)
   
      stroke(strokeColour)
      line(0, 1+i, width, 1+i)
   }

   // vocal 

   strokeWeight(5)
   stroke(vocalColour);
   noFill()

   let vocalRadius = map(vocal, 50, 100, 50, 400 )

   ellipse(960, 540, vocalRadius)


  
 
    // drum 


    fill(drumColour)

    if (drum > 75) {
      
      if (changePosition){

            drumCircleX = random([100],[1000])
            drumCircleY = random([100],[800])

            changePosition = false;

      }

      ellipse(drumCircleX, drumCircleY, 50, 50)
  }
  else{
   changePosition= true
  }
   // bass  

   strokeWeight(1)
   stroke(bassColour);
   noFill()

 let bassHeight = height / 1.25;
 let bassWave = map (bass, 5, 100, 20, 100)
 let waveHeight = bassWave;
 let waveFreq=1;

   beginShape()
   for( let ii= 0; ii <width; ii++ ){
      vertex(ii, bassHeight - waveHeight *sin(waveFreq*ii))
   }
   endShape()



}