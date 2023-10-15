
// vocal, drum, bass, and other are volumes ranging from 0 to 100
  
   let drumValue= 50
   let changePosition= true
   let drumCircleX= 0
   let drumCircleY= 0
   let flyImg
   
function draw_one_frame(words, vocal, drum, bass, other, counter) {

  colorMode(HSL, 255 , 255 ,255);

  let saturation = map(song.currentTime(), 151, 206, 0, 255);
 

  fill(30, saturation, 255)

   let purplebackColour = color 	(271, 39 * saturation, 17)
   let bluebackColour = color (185, 43* saturation, 44)
   let anotherColour = color (0,255*saturation)
   let vocalColour = color  (307, 76* saturation, 93)
   let drumColour = color  (276, 54* saturation, 75)
   let bassColour = color (181, 82 * saturation, 87)


  //background
   for ( let i = 0; i < 1080; i++){
    let gradientAmount = map(i, 0, 1080, 0, 1)
    let strokeColour = lerpColor(purplebackColour , bluebackColour , gradientAmount)

   stroke(strokeColour)
   line(0, 1+i, width, 1+i)
 }
   // other

   for ( let i = 0; i < 1080; i++){
      let otherMap = map(other, 20, 100, 0, 1)
       let otherColour = lerpColor(purplebackColour , anotherColour , otherMap)

       stroke(otherColour)
       line(0, 1+i, width, 1+i)
      }
    

   // vocal 

   strokeWeight(5)
   stroke(vocalColour);
   noFill()

     // if (map(song.currentTime(),113,123,0,255) ){
    //    vocalTimer= true

   //   }
    //  else{
     //   vocalTimer= false

    //  }
 

      //if (vocalTimer= false) {

        let vocalRadius = map(vocal, 30, 150, 160, 500 )
        ellipse(960, 540, vocalRadius)

     // }


    // drum 

    strokeWeight(0)
    fill(drumColour)

    if (drum > 50) {
      
      if (changePosition){

             if (random(1) < 0.5){

              drumCircleX = random(100,600)

            }
            else{

              drumCircleX = random(1200,1800)

            }
            
            drumCircleY = random(100,800)

            changePosition = false;

      }
      
      ellipse(drumCircleX, drumCircleY, 50, 50)
  }
  else{
   changePosition= true
  }
  
  if (drum > 70) {
      
    if (changePosition){

           if (random(1) < 0.5){

            drumCircleX = random(100,600)

          }
          else{

            drumCircleX = random(1200,1800)

          }
          
          drumCircleY = random(100,800)

          changePosition = false;

    }
    
    ellipse(drumCircleX, drumCircleY, 50, 50)
}
else{
 changePosition= true
}

if (drum > 90) {
      
  if (changePosition){

         if (random(1) < 0.5){

          drumCircleX = random(100,600)

        }
        else{

          drumCircleX = random(1200,1800)

        }
        
        drumCircleY = random(100,800)

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
 let bassWave = map (bass, 20, 150, 20, 250)
 let waveHeight = bassWave;
 let waveFreq=.5;

   beginShape()
   for( let ii= 10; ii <width; ii++ ){
      vertex(ii, bassHeight - waveHeight *sin(waveFreq*ii))
   }
   endShape()


//Image

flyImg = loadImage ('test.png');

image(flyImg, 500, 500)


}