import React from 'react';
import {Link } from "react-router-dom";
import "./AnimeQuiz_css.css";

function MenuQuiz()
{
 return(   
<div className='quizbg'>
<h1 className='head1'>Fandom Quiz</h1>
<h3 className='head2'>Test your fandom knowledge</h3>
<div className = "quizcontainermenu">
            <Link to="/menu"><h2 className='home'>Select Quiz Type/ Home</h2></Link><br></br>
            <Link to="/moviequiz"><button type="button" className="btn btn-primary qbt">Movies</button></Link><br></br>
            <Link to="/animequiz"><button type="button" className="btn btn-primary qbt">Anime</button></Link><br></br>
            <Link to="/tvquiz"><button type="button" className="btn btn-primary qbt">Tv Series</button></Link>
            <br></br>        
</div>
</div>
 );
 }

 export default MenuQuiz;
