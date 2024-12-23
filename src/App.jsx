// import './App.css';
// import { IconSwitch } from "./components/IconSwitch.jsx";
// import { ListView } from "./components/ListView.jsx";
// import { CardsView } from "./components/CardsView.jsx";
// import { useState } from 'react';

// function App() {
  // const products = [{
  //   name: "Nike Metcon 2",
  //   price: "130",
  //   color: "red",
  //   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  // }, {
  //   name: "Nike Metcon 2",
  //   price: "130",
  //   color: "green",
  //   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  // }, {
  //   name: "Nike Metcon 2",
  //   price: "130",
  //   color: "blue",
  //   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  // }, {
  //   name: "Nike Metcon 2",
  //   price: "130",
  //   color: "black",
  //   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  // }, {
  //   name: "Nike free run",
  //   price: "170",
  //   color: "black",
  //   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  // }, {
  //   name: "Nike Metcon 3",
  //   price: "150",
  //   color: "green",
  //   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  // }];

  // const product = [{
  //   title: "Nike Metcon 2",
  //   count: "130",
  //   clr: "red",
  //   image: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  // }, {
  //   title: "Nike Metcon 2",
  //   count: "130",
  //   clr: "green",
  //   image: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  // }, {
  //   title: "Nike Metcon 2",
  //   count: "130",
  //   clr: "blue",
  //   image: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  // }, {
  //   title: "Nike Metcon 2",
  //   count: "130",
  //   clr: "black",
  //   image: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  // }, {
  //   title: "Nike free run",
  //   count: "170",
  //   clr: "black",
  //   image: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  // }, {
  //   title: "Nike Metcon 3",
  //   count: "150",
  //   clr: "green",
  //   image: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  // }];

  // const card = "card";
  // const list = "list";
  // const valueCard = "Переключаем на карточки";
  // const valueList = "Переключаем на листы";

  // let initialStateSwitch = {
  //   status: true,
  //   value: valueList,
  // };

  // let buttonValue = "Переключаем на листы";
  // const [stateSwitch, setStateSwitch] = useState(initialStateSwitch);

  // const clicker = () => {
  //   if(stateSwitch.value){
  //     buttonValue = "Переключаем на карточки";
  //     setStateSwitch(stateSwitch.status = false);
  //   } else {
  //     buttonValue = "Переключаем на листы";
  //     setStateSwitch(stateSwitch.status = true);
  //   }

  //   console.log(stateSwitch);
  // }

  // let toExport = stateSwitch.status;

  // return (
    // <>    
    //   <button onClick={clicker}>
    //       {buttonValue}
    //   </button>
    //   <div>
    //     <CardsView cards={toExport}/>
    //     <ListView item={toExport}/>
    //   </div>
    // </>
//     <>

//     </>
//   );
// }

// export default App;

import './App.css';
import { Stars } from './components/Stars.jsx';
import { Star } from './components/Star.jsx';

function App() {
    
let isStars = 4;

return (
    <Stars count={isStars}/>
);

}

export default App;