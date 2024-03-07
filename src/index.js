import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, BrowserRouter, Routes, Route} from 'react-router-dom';
//import './AnimeQuiz_css.css';
//import "./Ratan_wiki_css.css";
//import "./Ratan_anime_css.css";
import Menu from "./Menu.js";
import AnimeDisplay from "./AnimeDisplay.js"
import MovieDisplay from "./MovieDisplay.js"
import TvDisplay from "./TvDisplay.js"
import MenuQuiz from "./MenuQuiz.js"
import AnimeQuiz from "./AnimeQuiz.js"
import TvQuiz from "./TvQuiz.js"
import MovieQuiz from "./MovieQuiz.js"
//import Ratan_wiki_img1 from "./Ratan_wiki_img1.png";
//import Ratan_wiki_img2 from "./Ratan_wiki_img2.webp";
//import Ratan_wiki_img3 from "./Ratan_wiki_img3.jpg";
//import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";
//<h1 className = "head1">Welcome to Fandom Pedia</h1>
//<h6 className = "head2">Explore information regarding your favourite characters</h6>
function Home()
{
    return(
        <HashRouter>
            <Routes>
<Route path = "/" element = {<Menu />} />
<Route path = "menu" element = {<Menu />} />
<Route path = "anime" element = {<AnimeDisplay />} />
<Route path = "movie" element = {<MovieDisplay />} />
<Route path = "tv" element = {<TvDisplay />} />
<Route path = "quiz" element = {<MenuQuiz />} />
<Route path = "animequiz" element = {<AnimeQuiz />} />
<Route path = "tvquiz" element = {<TvQuiz />} />
<Route path = "moviequiz" element = {<MovieQuiz />} />
            </Routes>
        </HashRouter>
    )
}

ReactDOM.render(<div>
 <Home />
 </div>
 ,document.getElementById("root"));

/*
ReactDOM.render(<div>
   <h1 className = "head1">Welcome to Fandom Pedia</h1>
<h6 className = "head2">Explore information regarding your favourite characters</h6>
<Menu />

</div>
,document.getElementById("root"));
*/
//import './index.css';
//import App from './App';

//import reportWebVitals from './reportWebVitals';


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

