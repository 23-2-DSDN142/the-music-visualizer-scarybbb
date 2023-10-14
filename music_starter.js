
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

   let pinkColour = color 	(315, 100 * saturation, 82)
   let purpleColour = color (277, 65* saturation, 19)
   let anotherColour = color (0,255*saturation)
   let vocalColour = color (180, 222* saturation, 191)
   let drumColour = color (222, 200* saturation, 180)
   let bassColour = color (207, 180* saturation, 222)


  //background
   for ( let i = 0; i < 1080; i++){
    let gradientAmount = map(i, 0, 1080, 0, 1)
    let strokeColour = lerpColor(pinkColour , purpleColour , gradientAmount)

   stroke(strokeColour)
   line(0, 1+i, width, 1+i)
 }
   // other

   for ( let i = 0; i < 1080; i++){
      let otherMap = map(other, 20, 100, 0, 1)
       let otherColour = lerpColor(pinkColour , anotherColour , otherMap)

       stroke(otherColour)
       line(0, 1+i, width, 1+i)
      }
    

   // vocal 

   strokeWeight(5)
   stroke(vocalColour);
   noFill()

      if (map(song.currentTime(),113,123,0,255) ){
        vocalTimer= true

      }
      else{
        vocalTimer= false

      }
 

      if (vocalTimer= false) {

        let vocalRadius = map(vocal, 30, 150, 160, 500 )
        ellipse(960, 540, vocalRadius)

      }


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