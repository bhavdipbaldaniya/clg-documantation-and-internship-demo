const main = document.getElementById('main');
const adduserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showmillionaireBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculatewealthBtn = document.getElementById('calculate-wealth');

getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();

let data = [];

//fatch rendom user and add money
async function getRandomUser(){
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();

    const User = data.results[0];
    const newUser = {
        name: `${User.name.first} ${User.name.last}`,
        money: Math.floor(Math.random() * 1000000),
    };

    // console.log(newUser);

      addData(newUser);
}

//dobul money
function doubleMoney(){
    data = data.map((User) => {
        return{...User, money: User. money * 2 };
        });

   updateDOM();

}

//filter only millionres
function showMillionaires(){
    data = data.filter((User) => User.money > 1000000);

    updateDOM();
}

//sort by richest

function sortByRichest(){
    data.sort((a, b) => b.money - a.money);
    updateDOM();
}




//add new obj to data arr

function addData(obj){
    data.push(obj);

    updateDOM();
}

//calculate wealth
function calculatewealth(){
    const wealth = data.reduce((acc, User) => (acc += User.money),0);

    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>total wealth: <strong>${formetmoney(wealth)}  </strong>  </h3>`;
    main.appendChild(wealthEl);
}



//update Dom
function updateDOM (providedData = data){
     //clear main dive
      main.innerHTML = '<h2><strong>person</strong>wealth</h2>';

      providedData.forEach(item => {
       const element = document.createElement('div');
       element.classList.add('person');
       element.innerHTML = `<strong>${item.name}</strong>${formetmoney(item.money)}`
       main.appendChild(element);
      });
    }



    //formet number as a money
    function formetmoney(number){

        return `$` + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67

    }

    //event listner
    adduserBtn.addEventListener('click', getRandomUser);
    doubleBtn.addEventListener('click', doubleMoney);
    showmillionaireBtn.addEventListener('click', showMillionaires);
    sortBtn.addEventListener('click', sortByRichest);
    calculatewealthBtn.addEventListener('click', calculatewealth);





