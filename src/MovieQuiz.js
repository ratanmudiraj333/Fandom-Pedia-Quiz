import React, { useState } from 'react';
import {Link } from "react-router-dom";
import "./AnimeQuiz_css.css";
//import ReactDOM from 'react-dom';
//var optionone;
//var oponee = "";

/*function opone(value1)
{
    oponee = value1;
    console.log(oponee);
}*/
//console.log(optionone);

function MovieQuiz()
{
    const [Qone, Qoneset] = useState("1976");
    const [Qtwo, Qtwoset] = useState("Rami Malek");
    const [Qthree, Qthreeset] = useState("John Cena");
    const [Qfour, Qfourset] = useState("Tom Holland");
    const [Qfive, Qfiveset] = useState("True");
    const [optionone, optiononeSet1] = useState("");
    const [optiontwo, optiononeSet2] = useState("");
    const [optionthree, optiononeSet3] = useState("");
    const [optionfour, optiononeSet4] = useState("");
    const [optionfive, optiononeSet5] = useState("");
    const [result, resultSet] = useState("Result");
    const [reestart, restartSet] = useState(
        <button type="button" className = "restartbtn" style={{ display: "none" }}
         onClick = {restart}>Restart Quiz</button>
            );
    //console.log(optionfour);
/*
function options(answer)
{
optiononeSet(answer);
}*/
function results()
{
    if ((optionone === "A") && (optiontwo === "D") && (optionthree === "D") && (optionfour === "B") && (optionfive === "A"))
    {
        resultSet("Result:Well Done, Great Knowledge")
        Qoneset("1976 [correct option]");
        Qtwoset("Rami Malek [correct option]");
        Qthreeset("John Cena [correct option]");
        Qfourset("Tom Holland [correct option]");
        Qfiveset("True [correct option]");
        restartSet(<button type="button" className = "restartbtn"
        onClick = {restart}>Restart Quiz</button>);
        /*setTimeout(function () {

            window.location.reload();
          
            }, 5000);*/
    }
    else if 
    (
    ((optionone !== "A") && (optiontwo === "D") && (optionthree === "D") && (optionfour === "B") && (optionfive === "A"))||
    ((optionone === "A") && (optiontwo !== "D") && (optionthree === "D") && (optionfour === "B") && (optionfive === "A"))|| 
    ((optionone === "A") && (optiontwo === "D") && (optionthree !== "D") && (optionfour === "B") && (optionfive === "A"))|| 
    ((optionone === "A") && (optiontwo === "D") && (optionthree === "D") && (optionfour !== "B") && (optionfive === "A"))|| 
    ((optionone === "A") && (optiontwo === "D") && (optionthree === "D") && (optionfour === "B") && (optionfive !== "A"))|| 
    ((optionone !== "A") && (optiontwo !== "D") && (optionthree === "D") && (optionfour === "B") && (optionfive === "A")) ||
    ((optionone !== "A") && (optiontwo === "D") && (optionthree !== "D") && (optionfour === "B") && (optionfive === "A")) ||
    ((optionone !== "A") && (optiontwo === "D") && (optionthree === "D") && (optionfour !== "B") && (optionfive === "A")) ||
    ((optionone !== "A") && (optiontwo === "D") && (optionthree === "D") && (optionfour === "B") && (optionfive !== "A")) ||
    ((optionone === "A") && (optiontwo !== "D") && (optionthree !== "D") && (optionfour === "B") && (optionfive === "A")) ||
    ((optionone === "A") && (optiontwo !== "D") && (optionthree === "D") && (optionfour !== "B") && (optionfive === "A")) ||
    ((optionone === "A") && (optiontwo !== "D") && (optionthree === "D") && (optionfour === "B") && (optionfive !== "A")) ||
    ((optionone === "A") && (optiontwo === "D") && (optionthree !== "D") && (optionfour !== "B") && (optionfive === "A")) ||
    ((optionone === "A") && (optiontwo === "D") && (optionthree !== "D") && (optionfour === "B") && (optionfive !== "A")) ||
    ((optionone === "A") && (optiontwo === "D") && (optionthree === "D") && (optionfour !== "B") && (optionfive !== "A")))
    {
        resultSet("Result:Good Job, Can do better")
        Qoneset("1976 [correct option]");
        Qtwoset("Rami Malek [correct option]");
        Qthreeset("John Cena [correct option]");
        Qfourset("Tom Holland [correct option]");
        Qfiveset("True [correct option]");
        restartSet(<button type="button" className = "restartbtn"
        onClick = {restart}>Restart Quiz</button>);
        /*setTimeout(function () {

            window.location.reload();
          
            }, 5000);*/
    }
    else
    {
        resultSet("Result:Need to gain more knowledge")
        Qoneset("1976 [correct option]");
        Qtwoset("Rami Malek [correct option]");
        Qthreeset("John Cena [correct option]");
        Qfourset("Tom Holland [correct option]");
        Qfiveset("True [correct option]");
        restartSet(<button type="button" className = "restartbtn"
        onClick = {restart}>Restart Quiz</button>);
        /*setTimeout(function () {

            window.location.reload();
          
            }, 5000);*/
    }
}

function restart()
{
    resultSet("Result:")
    Qoneset("1976");
    Qtwoset("Rami Malek");
    Qthreeset("John Cena");
    Qfourset("Tom Holland");
    Qfiveset("True");
    optiononeSet1("");
    optiononeSet2("");
    optiononeSet3("");
    optiononeSet4("");
    optiononeSet5("");
    setTimeout(function () {

        window.location.reload();
      
        }, 1000);
}
    return(
        <div className='quizzbg'>
        <h1 className='head1'>FANDOM QUIZ</h1>
<h4 className='head2'>Test your fandom knowledge</h4>

            <div className = "quizcontainer1">
            <Link to="/quiz"><h2 className='home'>Movie Quiz/Home</h2></Link><br></br>
    <h5>1Q. Which year was the movie Rocky released?</h5>
    <input type = "radio" name = "optionone" value = "A" onClick={()=>optiononeSet1("A")}/>
    <label>{Qone}</label><br></br>
    <input type = "radio" name = "optionone" value = "B" onClick={()=>optiononeSet1("B")}/>
    <label>1980</label><br></br>
    <input type = "radio" name = "optionone" value = "C" onClick={()=>optiononeSet1("C")}/>
    <label>1975</label><br></br>
    <input type = "radio" name = "optionone" value = "D" onClick={()=>optiononeSet1("D")}/>
    <label>1973</label><br></br><br></br>


    <h5>2Q. Who portrayed Freddie Mercury in the movie Bohemian Rhapsody?</h5>
    <input type = "radio" name = "optiontwo" value = "A" onClick={()=>optiononeSet2("A")}/>
    <label>Chris Evans</label><br></br>
    <input type = "radio" name = "optiontwo" value = "B" onClick={()=>optiononeSet2("B")}/>
    <label>Bradley Cooper</label><br></br>
    <input type = "radio" name = "optiontwo" value = "C" onClick={()=>optiononeSet2("C")}/>
    <label>Andrew Garfield</label><br></br>
    <input type = "radio" name = "optiontwo" value = "D" onClick={()=>optiononeSet2("D")}/>
    <label>{Qtwo}</label><br></br><br></br>

    <h5>3Q. Professional Wrestler turned actor?</h5>
    <input type = "radio" name = "optionthree" value = "A" onClick={()=>optiononeSet3("A")}/>
    <label>Jason Mamoa</label><br></br>
    <input type = "radio" name = "optionthree" value = "B" onClick={()=>optiononeSet3("B")}/>
    <label>Vin Diesel</label><br></br>
    <input type = "radio" name = "optionthree" value = "C" onClick={()=>optiononeSet3("C")}/>
    <label>Jackie Chan</label><br></br>
    <input type = "radio" name = "optionthree" value = "D" onClick={()=>optiononeSet3("D")}/>
    <label>{Qthree}</label><br></br><br></br>


    <h5>4Q. Select the actor who portrayed the role of spider man?</h5>
    <input type = "radio" name = "optionfour" value = "A" onClick={()=>optiononeSet4("A")}/>
    <label>Tom Hardy</label><br></br>
    <input type = "radio" name = "optionfour" value = "B" onClick={()=>optiononeSet4("B")}/>
    <label>{Qfour}</label><br></br>
    <input type = "radio" name = "optionfour" value = "C" onClick={()=>optiononeSet4("C")}/>
    <label>Tom cruise</label><br></br>
    <input type = "radio" name = "optionfour" value = "D" onClick={()=>optiononeSet4("D")}/>
    <label>Tom Hanks</label><br></br><br></br>


    <h5>5Q. John Wicks nickname is BabaYaga?</h5>
    <input type = "radio" name = "optionfive" value = "A" onClick={()=>optiononeSet5("A")}/>
    <label>{Qfive}</label><br></br>
    <input type = "radio" name = "optionfive" value = "B" onClick={()=>optiononeSet5("B")}/>
    <label>False</label><br></br>
    <br></br><br></br>
    <button type="button" className = "resultbtn" onClick = {results}>Check Result</button>
    {reestart}
<h3>{result}</h3>
</div>
    </div>
    )
}

export default MovieQuiz;