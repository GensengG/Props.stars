// import { App } from "../App";

export const ListView = (toExport) => {

    const {item} = toExport;
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

    let itemsArray = [];

    function ShopItem(products) {
        products.forEach(elem => {
            if(item === "list"){
                itemsArray.push(
                    [
                        <div className="item__list">
                            <img src={elem.image} className="item__image" /> 
                            <div className="item__name">{elem.title}</div> 
                            <div className="item__color">{elem.clr}</div> 
                            <div className="item__price">{elem.count}</div> 
                        </div>
                    ]
                )
            }
        })

        return (
            <div className="list__view">
                {itemsArray}
            </div>
        );
    };

    // ShopItem(item);

    // return (
    //     <div className="list__view">
    //         {itemsArray}
    //     </div>
    // );

}
