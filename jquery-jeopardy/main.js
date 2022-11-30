//Query Selectors

let buttons100 = document.querySelectorAll(".buttons100");
let buttons200 = document.querySelectorAll(".buttons200");
let buttons400 = document.querySelectorAll(".buttons400");
let buttons600 = document.querySelectorAll(".buttons600");
let buttons800 = document.querySelectorAll(".buttons800");
let body = document.querySelector("#body");
let h2 = document.querySelector("h2");
let inputForm = document.querySelector("#inputForm");
let userInput = document.querySelector("#input");
let cash = document.querySelector("#cash");
buttons100.disabled = true;

let arr = [];
let score = 0;
cash.innerText = ` $0`


//function
let readJeopardyData = async () => {
    //retrieving data from json file
    let rawJeopardyData = await fetch('jeopardy.json');
    //Parse rawJeopardyData to be able to view in console
    let data = await rawJeopardyData.json();
    //viewing data
    //console.log(data);

    let groupData = _.groupBy(data, "value");
    //console.log(groupData);
    //console.log(groupData.$200);

        for(let i = 0; i < buttons100.length; i++){
            
            buttons100[i].addEventListener("click", () => {
                arr = [];
                arr.push(groupData.$100[Math.round(Math.random() * 100)]);

                let answer = arr[0].answer;
                h2.innerText = arr[0].question;

                buttons100[i].disabled = true
                buttons100[i].style.backgroundColor = "gray";
        })}
        
        for(let i = 0; i < buttons200.length; i++){
            
                buttons200[i].addEventListener("click", () => {
                    arr = [];
                    arr.push(groupData.$200[Math.round(Math.random() * 100)]);
    
                    answer = arr[0].answer;
                    h2.innerText = arr[0].question;
                    buttons200[i].disabled = true;
                    buttons200[i].style.backgroundColor = "gray";
                })
                
        for(let i = 0; i < buttons400.length; i++){
            
                    buttons400[i].addEventListener("click", () => {
                        arr = [];
                        arr.push(groupData.$400[Math.round(Math.random() * 100)]);
        
                        answer = arr[0].answer;
                        h2.innerText = arr[0].question;
                        buttons400[i].disabled = true;
                        buttons400[i].style.backgroundColor = "gray";
        })
        for(let i = 0; i < buttons600.length; i++){
                
                buttons600[i].addEventListener("click", () => {
                    arr = [];
                    arr.push(groupData.$600[Math.round(Math.random() * 100)]);

                    answer = arr[0].answer;
                    h2.innerText = arr[0].question;
                    buttons600[i].disabled = true;
                    buttons600[i].style.backgroundColor = "gray";
                    
    })
    }
        for(let i = 0; i < buttons800.length; i++){
                    
                buttons800[i].addEventListener("click", () => {
                    arr = [];
                    arr.push(groupData.$800[Math.round(Math.random() * 100)]);

                    answer = arr[0].answer;
                    h2.innerText = arr[0].question;
                    buttons800[i].disabled = true;
                    buttons800[i].style.backgroundColor = "gray";
        })}}

    

    }
    inputForm.addEventListener("submit", (event) =>{
        event.preventDefault();

        answer = arr[0].answer;
        h2.innerText = arr[0].question;
         
         if(userInput.value === answer){
            h2.innerText = `CONGRATULATIONS ! That is Correct`
            score += parseInt(arr[0].value.substr(1));
            cash.innerText = score
            
         } else {
            h2.innerText = `WRONG ! YOU SUCK THE CORRECT ANSWER IS "${answer}"`
         }
         userInput.value = "";


})
}
readJeopardyData();




