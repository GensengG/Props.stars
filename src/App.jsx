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
