
// vocal, drum, bass, and other are volumes ranging from 0 to 100
  
   let drumValue= 50
   let drumPosition1= true
   let drumPosition2= true
   let drumPosition3= true
   let drumPosition4= true
   let drumPosition5= true
   let drumCircleX= 0
   let drumCircleY= 0
   let imgRun= true
   let flyImg


function draw_one_frame(words, vocal, drum, bass, other, counter) {
clear();


  //image 
  if (imgRun){
    flyImg = loadImage ('test.png');
   
    imgRun = false
  }
  image(flyImg, 875, 480)

  colorMode(HSL, 360 , 100 ,100);

  let saturation = map(song.currentTime(), 1, 151, 0, 206);
  //let saturation = map(song.currentTime(), 151, 206, 0, 255);


  fill(30, saturation, 255)

   let purplebackColour = color (271, 39 * saturation, 17)
   let bluebackColour = color (185, 4 * saturation, 44)
   let clearColour = color (10, 255 * saturation, 44)
   let vocalColour = color  (307, 76 * saturation, 93)
   let drumColour = color  (276, 54 * saturation, 75)
   let bassColour = color (181, 82 * saturation, 87)


  //background
  let otherMap = map(other, 1, 100, 0, 1)
  let otherColour = lerpColor(purplebackColour , purplebackColour , otherMap);
  
  for ( let i = 0; i < 1080; i++){        
    let gradientAmount = map(i, 0, 1080, 0, 1)
    let strokeColour = lerpColor(otherColour , bluebackColour , gradientAmount)
    console.log(strokeColour)
    stroke(strokeColour)
    line (0, i, width, i)
    line(0, 1+i, width, 1+i)
    }


   // vocal 
   strokeWeight(5)
   stroke(vocalColour);
   noFill()

      if (song.currentTime()>113 && song.currentTime()< 123) {
        vocalTimer= true

      }
      else{
        vocalTimer= false

      }
 

      if (vocalTimer==false) {

        let vocalRadius = map(vocal, 30, 150, 160, 500 )
        ellipse(960, 540, vocalRadius)

      }


    // drum 
    strokeWeight(0)
    fill(drumColour)

    if (drum > 50 && drum < 60) {      
        if (drumPosition1)
        {
          if (random(1) < 0.5)
      {
        drumCircleX = random(100,600)
      }
      else
      {
        drumCircleX = random(1200,1800)
      }
        drumCircleY = random(100,800)
        drumPosition1 = false;

      }
      ellipse(drumCircleX, drumCircleY, 50, 50)
    }
  else
  {
    drumPosition1= true
  }
  
  if (drum > 60 && drum < 70) {
      
    if (drumPosition2){

           if (random(1) < 0.5){

            drumCircleX = random(150,500)

          }
          else{

            drumCircleX = random(1250,1600)

          }
          
          drumCircleY = random(100,600)

          drumPosition2 = false;

    }
    
    ellipse(drumCircleX, drumCircleY, 50, 50)
}
else{
  drumPosition2= true
}

if (drum > 70 && drum < 80) {
      
  if (drumPosition3){

         if (random(1) < 0.5){

          drumCircleX = random(200,400)

        }
        else{

          drumCircleX = random(1300,1500)

        }
        
        drumCircleY = random(100,500)

        drumPosition3 = false;

  }
  
  ellipse(drumCircleX, drumCircleY, 50, 50)
}
else{
  drumPosition3= true
}
if (drum > 80 && drum < 90) {
      
  if (drumPosition4){

         if (random(1) < 0.5){

          drumCircleX = random(200,400)

        }
        else{

          drumCircleX = random(1300,1500)

        }
        
        drumCircleY = random(100,500)

        drumPosition4 = false;

  }
  
  ellipse(drumCircleX, drumCircleY, 50, 50)
}
else{
  drumPosition4= true
}
if (drum > 90) {
      
  if (drumPosition5){

         if (random(1) < 0.5){

          drumCircleX = random(200,400)

        }
        else{

          drumCircleX = random(1300,1500)

        }
        
        drumCircleY = random(100,500)

        drumPosition5 = false;

  }
  
  ellipse(drumCircleX, drumCircleY, 50, 50)
}
else{
  drumPosition5= true
}

strokeWeight(1)
stroke(drumColour);
noFill()

let drumHeight = height / 1.25;
let drumWave = map (drum, 20, 150, 20, 250)
let wave2Height = drumWave;
let wave2Freq=.5;

beginShape()
for( let ii= 10; ii <width; ii++ ){
   vertex(ii, drumHeight - wave2Height * sin(wave2Freq*ii))
}
endShape()



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
   beginShape()
   for( let ii= 10; ii < width; ii++ ){
     vertex(ii, bassHeight + waveHeight * sin(wave2Freq*ii))
   }
   endShape()






}