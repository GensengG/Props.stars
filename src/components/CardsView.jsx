// import { App } from "../App.jsx";

export const CardsView = (toExport) => {

    const {cards} = toExport;

    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
      }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
      }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];

    let cardsArray = [];

    function ShopCard(products) {
        if(cards === "card"){
            products.forEach(obg => {
                cardsArray.push(
                    [
                        <div className="card__list">
                            <div className="card__name">{obg.name}</div> 
                            <div className="card__color">{obg.color}</div> 
                            <img src={obg.img} className="card__image" /> 
                            <div className="card__price">{obg.price}</div> 
                        </div>
                    ]
                )
            })
        } 

        return (
            <>
            <div className="cards__view">
                {cardsArray}
            </div>
            </>
        );
    };

    // ShopCard(cards);

    // return (
    //     <>
    //     <div className="cards__view">
    //         {cardsArray}
    //     </div>
    //     </>
    // );
    
}