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
    "Brown", "Brazil", "Bell", "Brown",
    "Call", "Car", "Canada", "Allow",

]
//    {option1:"Argentina",option2: "Aruba", option3:"Antactica"} 
   
   

  
 
     const nextFlag = () =>{
         
        index++;
        if(index >= flags.length){
            index = 0;
        }
        img.src = flags[index];
    };

    next.addEventListener('click',nextFlag);


    // const nextCountry = () =>{
         
    //     index++;
    //     if(countryIndex >= countries.length){
    //         countryIndex = 0;
    //     }
    //     console.log('hehehe',countries[0]);
    //       option1.innerHTML = countries[0];
    //      option2.innerHTML = countries[1];
    //     option3.innerHTML = countries[2];
    // };

    // next.addEventListener("click", function(){
    //     slideIndex++;
    //     if(slideIndex >= frameworkArray.length){
    //         slideIndex = 0;
    //     }
    //     h2.innerText = frameworkArray[slideIndex];
    // });



    // next.addEventListener('click',nextCountry);

    

// click function on start     

// start.addEventListner(start)

start.addEventListener('click',function(){
    // console.log('hello',options[option1]);
    console.log('hello',countries[0]);
   option1.innerHTML = countries[0];
   option2.innerHTML = countries[1];
   option3.innerHTML = countries[2];

})