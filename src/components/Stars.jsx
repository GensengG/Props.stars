// import { App } from '../App.jsx';
import { Star } from './Star.jsx';

export const Stars = (isStars) => {

let {count} = isStars; 
let starsArr = [];
function starsFunk(count){
    starsArr = [];
    for(let i = 0; i < count; i += 1){
        starsArr.push(<Star />);
    }
};

if(count < 6 && count > 0){
    starsFunk(count);
    return (
        <ul className="card-body-stars u-clearfix">
            {starsArr}
        </ul>
    );
} else if (count === NuN && count === undefined) {
    return (
        <ul className="card-body-stars u-clearfix">
        </ul>
    )
} else {
    return (
        <ul className="card-body-stars u-clearfix">
        </ul>
    )
}

}
