import React from 'react';
import {Link } from "react-router-dom";
import Ratan_wiki_img1 from "./images/Ratan_wiki_img1.png";
import Ratan_wiki_img2 from "./images/Ratan_wiki_img2.webp";
import Ratan_wiki_img3 from "./images/Ratan_wiki_img3.jpg";
import "./Ratan_wiki_css.css";
/*
<h5 className = "Menu">Menu</h5>
<h5 className = "Movies">Movies</h5>
<h5 className = "Anime">Anime</h5> 
<h5 className = "Tv">TV/Web Series</h5>
<h5 className = "Quiz">Quiz (Test your knowledge)</h5>    */

function Menu()
{
   return(
    <div className='fanmenubg'>
    <h1 className = "head1">Fandom Pedia</h1>
    <h4 className = "head2">Explore information regarding your favourite characters</h4>
   <div className = "container">
<div className = "container1">
<h5 className = "Menu">Menu</h5>
<div className="btn-group-vertical" role="group" aria-label="Vertical button group">

<Link to="/movie"><button type="button" className="btn btn-primary bt2 Movies">Movies</button></Link>
  <Link to="/anime"><button type="button" className="btn btn-primary bt3 Anime">Anime</button></Link>
  <Link to="/tv"><button type="button" className="btn btn-primary bt4 Tv">TV/Web Series</button></Link>
  <Link to="/quiz"><button type="button" className="btn btn-primary bt4 Quiz">Quiz (Test your knowledge)</button></Link>
</div>   
</div>

<div className = "container2">
<div className ="card card1">
    <img src={Ratan_wiki_img1} className ="card-img-top" alt="..."/>
    <div className ="card-body">
      <p className ="card-text">Learn about many movie characters by going
         through our wide range of intel present about different movies.</p>
    </div>
  </div>
</div>

<div className = "container3">
    <div className ="card card2">
        <img src={Ratan_wiki_img2} className ="card-img-top" alt="..."/>
        <div className ="card-body">
          <p className ="card-text">Learn about many Anime characters by going
            through our wide range of intel present about different Anime.</p>
        </div>
      </div>
    </div>

    <div className = "container4">
        <div className ="card card3">
            <img src={Ratan_wiki_img3} className ="card-img-top" alt="..."/>
            <div className ="card-body">
              <p className ="card-text">Learn about many TV series characters by going
                through our wide range of intel present about different TV series.</p>
            </div>
          </div>
        </div>           

</div>
</div>
   );
}

export default Menu;