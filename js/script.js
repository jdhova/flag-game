

const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const start = document.querySelector('.start');
const next = document.querySelector('.next');
const img = document.querySelector("img");



let index = 0;
let countryIndex = 0;


const flags = [ 
    "images/argentina.jpeg",
    "images/brazil.jpeg",
    "images/canada.jpeg",
    "images/denmark.jpeg",
    // "images/js.png",
    // "images/vue.jpeg",
];

const countries =  [
    "Argentina", "Aruba,","Antactica" ,
    "Brown", "Brazil", "Belgium", 
    "Call", "Car", "Canada", 
    "Dreamland", "Denmark", "Djibouti",

]

const answer1 = 'Argentina';
const answer2 = 'Brazil';
const answer3 = 'Canada';
const answer4 = 'Denmark';
//    {option1:"Argentina",option2: "Aruba", option3:"Antactica"} 
   

 
     const nextFlag = () =>{
         
        index++;
        if(index >= flags.length){
            index = 0;
        }
        img.src = flags[index];
    };


    const nextCountry = () =>{
         
        index++;
        if(countryIndex >= countries.length){
            countryIndex = 0;
        }
        // console.log('hehehe',countries[0]);
          option1.innerHTML = countries[0];
         option2.innerHTML = countries[1];
        option3.innerHTML = countries[2];
        option3.innerHTML = countries[3];
    };

   function loadOptionsB(){
         option1.innerHTML = countries[3];
        option2.innerHTML = countries[4];
        option3.innerHTML = countries[5];
        nextFlag();
    }

    function loadOptionsC(){
    option1.innerHTML = countries[6];
       option2.innerHTML = countries[7];
       option3.innerHTML = countries[8];
       nextFlag();
   }

   function loadOptionsD(){
    option1.innerHTML = countries[9];
       option2.innerHTML = countries[10];
       option3.innerHTML = countries[11];
       nextFlag();
   }


    
   
// START GAME
start.addEventListener('click',function(){
   
    // console.log('hello',countries[0]);
   option1.innerHTML = countries[0];
   option2.innerHTML = countries[1];
   option3.innerHTML = countries[2];

})


// checking for options to display wrong answer message

function checkOpt2(){
    option2.addEventListener('click',function(){
        if(option2.innerHTML !== answer1){
            console.log('wrong');
        } 
      }) 
}

function checkOpt3(){
    option3.addEventListener('click',function(){
        if(option3.innerHTML !== answer1){
            console.log('wrong');
        } 
      }) 
}
   
   

// Adding event listeners to options for option 1
option1.addEventListener('click',function(){
    if(option1.innerHTML === answer1){
        console.log('correct'); 
        loadOptionsB()
        console.log('option B loaded');
     
    }else{
       

    }
})
// Checking for other options
function checkOpt1(){
    option1.addEventListener('click',function(){
        if(option3.innerHTML !== answer1){
            console.log('wrong');
        } 
      }) 
}
   

checkOpt2();
checkOpt3();

// Adding event listeners to options 2 and 3
option2.addEventListener('click',function(){
       if(option2.innerHTML == answer2){
            console.log('correct');
            loadOptionsC()
            console.log('option C loaded');
        }
})

checkOpt1();
checkOpt3();

option3.addEventListener('click',function(){
    if(option3.innerHTML == answer3){
         console.log('correct');
         loadOptionsD()
         console.log('option D loaded');
     }
})

checkOpt1();
checkOpt2();

option2.addEventListener('click',function(){
    if(option2.innerHTML == answer4){
         console.log('denmark correct');
        //  loadOptionsD()
         console.log('option E will be loaded');
     }
})


// stopped here so i can work on the next part wanted to test if i could get the next Denmark flag to load with option 2  I am still working on the repeted errors console.log'wrong message' and bugs
checkOpt1();
checkOpt2();






















    
      //next.addEventListener('click',nextCountry);

    // next.addEventListener("click", function(){
    //     slideIndex++;
    //     if(slideIndex >= frameworkArray.length){
    //         slideIndex = 0;
    //     }
    //     h2.innerText = frameworkArray[slideIndex];
    // });



    // next.addEventListener('click',nextCountry);

    

// click function on start    