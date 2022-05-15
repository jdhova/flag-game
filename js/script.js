// 1 add photos and imput out photos to html
// 2 have a answer for each file and then compare the inner.html with . click 

// option1.addEventListner(click,function(){
//     if(option1.innerText === answer){
//         function here
//     }
// })

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
    // "images/js.png",
    // "images/vue.jpeg",
];

const countries =  [
    "Argentina", "Aruba,","Antactica" ,
    "Brown", "Brazil", "Belgium", 
    "Call", "Car", "Canada", "Allow",

]

const answer1 = 'Argentina';
const answer2 = 'Brazil';
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
        console.log('hehehe',countries[0]);
          option1.innerHTML = countries[0];
         option2.innerHTML = countries[1];
        option3.innerHTML = countries[2];
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

    
   

// start.addEventListner(start)

start.addEventListener('click',function(){
   
    console.log('hello',countries[0]);
   option1.innerHTML = countries[0];
   option2.innerHTML = countries[1];
   option3.innerHTML = countries[2];

})

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
   
   


option1.addEventListener('click',function(){
    if(option1.innerHTML === answer1){
        console.log('correct'); 
        console.log('wrong')
        loadOptionsB()
        console.log('option B loaded');

        
     
    }else{
        console.log('correct')

        console.log('wrong');
        checkOpt2();

    }
})

checkOpt2();
checkOpt3();

option2.addEventListener('click',function(){
       if(option2.innerHTML == answer2){
            console.log('correct');
            loadOptionsC()
            console.log('option C loaded');
        }
})

//checkOpt2();
checkOpt3();




















    
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