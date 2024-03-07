import React, { useState } from 'react';
import {Link } from "react-router-dom";
import AnimeCard from './AnimeCard';
import {AData1,AData2,AData3,AData4,AData5,AData6} from './AnimeData';
import "./Ratan_anime_css.css";

function CreateAnime(data)
{
    return (
        <AnimeCard
        key = {data.id}
        name = {data.name}
        image = {data.image}
        description = {data.description}
    />
    );
}

/*
function AnimeDisplay()
{
   return(
<div>
<h1>Anime</h1>
{AData.map(CreateAnime)};
</div>
);
}

function click()
{
    return(<div>
<h3>list of Anime</h3>
<button onClick = {AnimeDisplay}>Naruto</button>
</div>
);
}*/



function AnimeDisplay()
{
    const [show, setShow] = useState(0);
function display1()
{
    setShow(AData1.map(CreateAnime));
/*<div>
{show && <h1>Anime</h1>}
</div>*/
}
function display2()
{
    setShow(AData2.map(CreateAnime));
}

function display3()
{
    setShow(AData3.map(CreateAnime));
}

function display4()
{
    setShow(AData4.map(CreateAnime));
}

function display5()
{
    setShow(AData5.map(CreateAnime));
}

function display6()
{
    setShow(AData6.map(CreateAnime));
}
/*
const display3 = () =>
{
<div>
<h1>Anime</h1>
{AData1.map(CreateAnime)};
</div>
alert("Mob Psycho");
}*/


    return(<div className = "acontainer">
<div className = "acontainer1">
<Link to="/menu"><h3 className = "LA">List of Anime/Home</h3></Link>
<div className="btn-group-vertical" role="group" aria-label="Vertical button group">
  <button type="button" className="btn btn-primary bta" onClick = {display1}>Naruto</button>
  <button type="button" className="btn btn-primary bta" onClick = {display2}>One punch man</button>
  <button type="button" className="btn btn-primary bta" onClick = {display3}>Mob Psycho</button>
  <button type="button" className="btn btn-primary bta" onClick = {display4}>Hunter x Hunter</button>
  <button type="button" className="btn btn-primary bta" onClick = {display5}>Death Note</button>
  <button type="button" className="btn btn-primary bta" onClick = {display6}>Demon Slayer</button>
</div>
</div>
<div className = "acontainer2">
<p>{show}</p>
</div>
</div>
);
}

export default AnimeDisplay;



/*
<div><button onClick = {display1}>Naruto</button></div>
<div><button onClick = {display2}>One punch</button></div>
<div><button onClick = {display3}>Mob Psycho</button></div>
<div><button onClick = {display4}>Hunter x Hunter</button></div>
*/