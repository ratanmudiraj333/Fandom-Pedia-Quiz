import React from 'react';

function AnimeCard(props)
{
   return(
<div className ="card cardcolor">
<div className ="card-body cardcolor">
  <h2 className ="card-text">{props.name}</h2>
  <img src={props.image} className ="image1" alt="..."/>
  <p className ="card-text text1">{props.description}</p>
</div>
</div>
   );
}

export default AnimeCard;

