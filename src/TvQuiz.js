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

function TvQuiz()
{
    const [Qone, Qoneset] = useState("True");
    const [Qtwo, Qtwoset] = useState("Heisenberg");
    const [Qthree, Qthreeset] = useState("2010");
    const [Qfour, Qfourset] = useState("Cyber Security Engineer");
    const [Qfive, Qfiveset] = useState("Bryan Cranston");
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
    console.log(optionone);
/*
function options(answer)
{
optiononeSet(answer);
}*/
function results()
{
    if ((optionone === "A") && (optiontwo === "A") && (optionthree === "A") && (optionfour === "B") && (optionfive === "B"))
    {
        resultSet("Result:Well Done, Great Knowledge")
        Qoneset("True [correct option]");
        Qtwoset("Heisenberg [correct option]");
        Qthreeset("2010 [correct option]");
        Qfourset("Cyber Security Engineer [correct option]");
        Qfiveset("Bryan Cranston [correct option]");
        restartSet(<button type="button" className = "restartbtn"
        onClick = {restart}>Restart Quiz</button>);
    }
    else if 
    (
    ((optionone !== "A") && (optiontwo === "A") && (optionthree === "A") && (optionfour === "B") && (optionfive === "B"))||
    ((optionone === "A") && (optiontwo !== "A") && (optionthree === "A") && (optionfour === "B") && (optionfive === "B"))|| 
    ((optionone === "A") && (optiontwo === "A") && (optionthree !== "A") && (optionfour === "B") && (optionfive === "B"))|| 
    ((optionone === "A") && (optiontwo === "A") && (optionthree === "A") && (optionfour !== "B") && (optionfive === "B"))|| 
    ((optionone === "A") && (optiontwo === "A") && (optionthree === "A") && (optionfour === "B") && (optionfive !== "B"))|| 
    ((optionone !== "A") && (optiontwo !== "A") && (optionthree === "A") && (optionfour === "B") && (optionfive === "B")) ||
    ((optionone !== "A") && (optiontwo === "A") && (optionthree !== "A") && (optionfour === "B") && (optionfive === "B")) ||
    ((optionone !== "A") && (optiontwo === "A") && (optionthree === "A") && (optionfour !== "B") && (optionfive === "B")) ||
    ((optionone !== "A") && (optiontwo === "A") && (optionthree === "A") && (optionfour === "B") && (optionfive !== "B")) ||
    ((optionone === "A") && (optiontwo !== "A") && (optionthree !== "A") && (optionfour === "B") && (optionfive === "B")) ||
    ((optionone === "A") && (optiontwo !== "A") && (optionthree === "A") && (optionfour !== "B") && (optionfive === "B")) ||
    ((optionone === "A") && (optiontwo !== "A") && (optionthree === "A") && (optionfour === "B") && (optionfive !== "B")) ||
    ((optionone === "A") && (optiontwo === "A") && (optionthree !== "A") && (optionfour !== "B") && (optionfive === "B")) ||
    ((optionone === "A") && (optiontwo === "A") && (optionthree !== "A") && (optionfour === "B") && (optionfive !== "B")) ||
    ((optionone === "A") && (optiontwo === "A") && (optionthree === "A") && (optionfour !== "B") && (optionfive !== "B")))
    {
        resultSet("Result:Good Job, Can do better")
        Qoneset("True [correct option]");
        Qtwoset("Heisenberg [correct option]");
        Qthreeset("2010 [correct option]");
        Qfourset("Cyber Security Engineer [correct option]");
        Qfiveset("Bryan Cranston [correct option]");
        restartSet(<button type="button" className = "restartbtn"
        onClick = {restart}>Restart Quiz</button>);
    }
    else
    {
        resultSet("Result:Need to gain more knowledge")
        Qoneset("True [correct option]");
        Qtwoset("Heisenberg [correct option]");
        Qthreeset("2010 [correct option]");
        Qfourset("Cyber Security Engineer [correct option]");
        Qfiveset("Bryan Cranston [correct option]");
        restartSet(<button type="button" className = "restartbtn"
        onClick = {restart}>Restart Quiz</button>);
    }
}

function restart()
{
    resultSet("Result:")
    Qoneset("True");
    Qtwoset("Heisenberg");
    Qthreeset("2010");
    Qfourset("Cyber Security Engineer");
    Qfiveset("Bryan Cranston");
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
            <Link to="/quiz"><h2 className='home'>Tv series Quiz/Home</h2></Link><br></br>
    <h5>1Q. Cobra Kai series sequel to Karate Kid film series?</h5>
    <input type = "radio" name = "optionone" value = "A" onClick={()=>optiononeSet1("A")}/>
    <label>{Qone}</label><br></br>
    <input type = "radio" name = "optionone" value = "B" onClick={()=>optiononeSet1("B")}/>
    <label>False</label><br></br><br></br>


    <h5>2Q. Walter White's underworld name in breaking bad?</h5>
    <input type = "radio" name = "optiontwo" value = "A" onClick={()=>optiononeSet2("A")}/>
    <label>{Qtwo}</label><br></br>
    <input type = "radio" name = "optiontwo" value = "B" onClick={()=>optiononeSet2("B")}/>
    <label>Walter Sr</label><br></br>
    <input type = "radio" name = "optiontwo" value = "C" onClick={()=>optiononeSet2("C")}/>
    <label>Hartwell White</label><br></br>
    <input type = "radio" name = "optiontwo" value = "D" onClick={()=>optiononeSet2("D")}/>
    <label>Walter Blanco</label><br></br><br></br>

    <h5>3Q. Which year did the TV series Walking dead started?</h5>
    <input type = "radio" name = "optionthree" value = "A" onClick={()=>optiononeSet3("A")}/>
    <label>{Qthree}</label><br></br>
    <input type = "radio" name = "optionthree" value = "B" onClick={()=>optiononeSet3("B")}/>
    <label>2011</label><br></br>
    <input type = "radio" name = "optionthree" value = "C" onClick={()=>optiononeSet3("C")}/>
    <label>2014</label><br></br>
    <input type = "radio" name = "optionthree" value = "D" onClick={()=>optiononeSet3("D")}/>
    <label>2008</label><br></br><br></br>


    <h5>4Q. Elliot's occupation in the series Mr. Robot?</h5>
    <input type = "radio" name = "optionfour" value = "A" onClick={()=>optiononeSet4("A")}/>
    <label>Web Designer</label><br></br>
    <input type = "radio" name = "optionfour" value = "B" onClick={()=>optiononeSet4("B")}/>
    <label>{Qfour}</label><br></br>
    <input type = "radio" name = "optionfour" value = "C" onClick={()=>optiononeSet4("C")}/>
    <label>Salesmen</label><br></br>
    <input type = "radio" name = "optionfour" value = "D" onClick={()=>optiononeSet4("D")}/>
    <label>Robotics</label><br></br><br></br>


    <h5>5Q. Which actor won Golden Globe best actor award Tv series category?</h5>
    <input type = "radio" name = "optionfive" value = "A" onClick={()=>optiononeSet5("A")}/>
    <label>Rami Malek</label><br></br>
    <input type = "radio" name = "optionfive" value = "B" onClick={()=>optiononeSet5("B")}/>
    <label>{Qfive}</label><br></br>
    <input type = "radio" name = "optionfive" value = "C" onClick={()=>optiononeSet5("C")}/>
    <label>Andrew Lincoln</label><br></br>
    <input type = "radio" name = "optionfive" value = "D" onClick={()=>optiononeSet5("D")}/>
    <label>Charlie Cox</label><br></br>

    <br></br><br></br>
    <button type="button" className = "resultbtn" onClick = {results}>Check Result</button>
    {reestart}
<h3>{result}</h3>
</div>
    </div>
    )
}

export default TvQuiz;