let el = document.getElementById("minicolorbook");
let colorClicked;
fetch('colorlay.svg')
    .then(r => r.text())
    .then(text => {
        el.innerHTML = text;
    
        let circle = document.querySelector("#circle");
        let triangle =document.querySelector("#triangle");
        let square =document.querySelector("#square");
            
        let red = document.querySelector("#red");
        let green =document.querySelector("#green");
        let yellow =document.querySelector("#yellow");


        circle.addEventListener("click", clickedPut);
        triangle.addEventListener("click", clickedPut);
       square.addEventListener("click", clickedPut);
       red.addEventListener("click", colorPicked);
       green.addEventListener("click", colorPicked);
      yellow.addEventListener("click", colorPicked);

        
      function colorPicked(){
        console.log(this.id + " was clicked");
            colorClicked= this.id;
            
        }
        function clickedPut(){
       
  
            console.log(this.id + " was clicked");
            this.firstChild.style.fill=colorClicked;

            console.log(colorClicked);
        }
    
    })
    .catch(console.error.bind(console));
    
    
    
