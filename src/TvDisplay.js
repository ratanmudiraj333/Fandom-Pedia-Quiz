import React, { useState } from 'react';
import {Link } from "react-router-dom";
import AnimeCard from './AnimeCard';
import {TData,TData1,TData2,TData3,TData4} from './AnimeData';
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



function TvDisplay()
{
    const [show, setShow] = useState("");
function display1()
{
    setShow(TData1.map(CreateAnime));
/*<div>
{show && <h1>Anime</h1>}
</div>*/
}
function display2()
{
    setShow(TData2.map(CreateAnime));
}

function display3()
{
    setShow(TData3.map(CreateAnime));
}

function display4()
{
    setShow(TData4.map(CreateAnime));
}

function blank()
{
setShow("");
}
const [search, setSearch] = useState("");
console.log(search);
/*
const display3 = () =>
{
<div>
<h1>Anime</h1>
{AData1.map(CreateAnime)};
</div>
alert("Mob Psycho");
}*/
/*
function SearchAnime()
{
    if (search.toLowerCase() === "")
    {
        
    }
    else
{
    SearchAnime.name.toLowerCase().includes(search)
}   
    }*/


    return(
        <div className='fanbg'>
        <h1 className = "head1">Fandom Pedia</h1>
        <h4 className = "head2">Explore information regarding your favourite characters</h4>
    <div className = "acontainer">
<div className = "acontainer1">
<Link to="/menu"><h3 className = "LA">List of TV/Home</h3></Link>
<div className="btn-group-vertical" role="group" aria-label="Vertical button group">
  <button type="button" className="btn btn-primary bta" onClick = {display1}>Breaking Bad</button>
  <button type="button" className="btn btn-primary bta" onClick = {display2}>The Walking Dead</button>
  <button type="button" className="btn btn-primary bta" onClick = {display3}>Mr Robot</button>
  <button type="button" className="btn btn-primary bta" onClick = {display4}>Cobra Kai</button>
</div>
</div>
<div className = "acontainer2">
<input className = "search" type = "text" placeholder="Search Any TV Character Name" onChange={(e)=>setSearch(e.target.value)} onClick={blank}/>

{TData.filter((CreateAnime) =>
{ return search.toLowerCase() === "" ? ""
 : CreateAnime.name.toLowerCase().includes(search)}).map(CreateAnime)}

<p>{show}</p>
</div>
</div>
</div>
);
}

export default TvDisplay;



/*
<div><button onClick = {display1}>Naruto</button></div>
<div><button onClick = {display2}>One punch</button></div>
<div><button onClick = {display3}>Mob Psycho</button></div>
<div><button onClick = {display4}>Hunter x Hunter</button></div>
*/