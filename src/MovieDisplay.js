import React, { useState } from 'react';
import {Link } from "react-router-dom";
import AnimeCard from './AnimeCard';
import {MData,MData1,MData2,MData3,MData4,MData5,MData6,MData7} from './AnimeData';
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



function MovieDisplay()
{
    const [show, setShow] = useState("");
    //const [show1, setShow1] = useState("");
    //const [search, setSearch] = useState("");
//console.log(search);

function display1()
{

/*<div>
{show && <h1>Anime</h1>}
</div>*/
setShow(MData1.map(CreateAnime));

}
function display2()
{
    setShow(MData2.map(CreateAnime));
    //setShow1("");
}

function display3()
{
    setShow(MData3.map(CreateAnime));
}

function display4()
{
    setShow(MData4.map(CreateAnime));
}

function display5()
{
    setShow(MData5.map(CreateAnime));
}

function display6()
{
    setShow(MData6.map(CreateAnime));
}

function display7()
{
    setShow(MData7.map(CreateAnime));
}

function blank()
{
setShow("");
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
const [search, setSearch] = useState("");
console.log(search);


return(
    <div className='fanbg'>
        <h1 className = "head1">Fandom Pedia</h1>
        <h4 className = "head2">Explore information regarding your favourite characters</h4>
<div className = "acontainer">
<div className = "acontainer1">
<Link to="/menu"><h3 className = "LA">List of Movie/Home</h3></Link>
<div className="btn-group-vertical" role="group" aria-label="Vertical button group">
  <button type="button" className="btn btn-primary bta" onClick = {display1}>Spider Man</button>
  <button type="button" className="btn btn-primary bta" onClick = {display2}>Justice League</button>
  <button type="button" className="btn btn-primary bta" onClick = {display3}>Harry Potter</button>
  <button type="button" className="btn btn-primary bta" onClick = {display4}>Space Jam</button>
  <button type="button" className="btn btn-primary bta" onClick = {display5}>Rocky</button>
  <button type="button" className="btn btn-primary bta" onClick = {display6}>John Wick</button>
  <button type="button" className="btn btn-primary bta" onClick = {display7}>Fast and the furious</button>
</div>
</div>
<div className = "acontainer2">
<input className = "search" type = "text" placeholder="Search Any Movie Character Name" onChange={(e)=>setSearch(e.target.value)} onClick={blank}/>

{MData.filter((CreateAnime) =>
{ return search.toLowerCase() === "" ? ""
 : CreateAnime.name.toLowerCase().includes(search)}).map(CreateAnime)}

<p>{show}</p>

</div>
</div>
</div>
);
}

export default MovieDisplay;

/* 
    return(<div className = "acontainer">
<div className = "acontainer1">
<Link to="/menu"><h3 className = "LA">List of Movie/Home</h3></Link>
<div className="btn-group-vertical" role="group" aria-label="Vertical button group">
  <button type="button" className="btn btn-primary bta" onClick = {display1}>Spider Man</button>
  <button type="button" className="btn btn-primary bta" onClick = {display2}>Justice League</button>
  <button type="button" className="btn btn-primary bta" onClick = {display3}>Harry Potter</button>
  <button type="button" className="btn btn-primary bta" onClick = {display4}>Space Jam</button>
  <button type="button" className="btn btn-primary bta" onClick = {display5}>Rocky</button>
  <button type="button" className="btn btn-primary bta" onClick = {display6}>John Wick</button>
  <button type="button" className="btn btn-primary bta" onClick = {display7}>Fast and the furious</button>
</div>
</div>
<div className = "acontainer2">
<p>{show1}</p>
<p>{show}</p>
</div>
</div>
);
*/

/*
    const [search, setSearch] = useState("");
console.log(search);

    return(
    
    <div>

    
   <input type = "text" placeholder="Enter Post Title" onChange={(e)=>setSearch(e.target.value)}/>

{AData1.filter((CreateAnime) =>
{ return search.toLowerCase() === "" ? CreateAnime
 : CreateAnime.name.toLowerCase().includes(search)}).
 map(CreateAnime)}

</div>
);
*/


/*
<div><button onClick = {display1}>Naruto</button></div>
<div><button onClick = {display2}>One punch</button></div>
<div><button onClick = {display3}>Mob Psycho</button></div>
<div><button onClick = {display4}>Hunter x Hunter</button></div>
*/