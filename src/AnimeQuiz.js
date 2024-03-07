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

function AnimeQuiz()
{
    const [Qone, Qoneset] = useState("2003");
    const [Qtwo, Qtwoset] = useState("Ging freeces");
    const [Qthree, Qthreeset] = useState("Sweets");
    const [Qfour, Qfourset] = useState("100 pushups, 100 situps, 100 squats and 10km running");
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
    console.log(optionone);
/*
function options(answer)
{
optiononeSet(answer);
}*/
function results()
{
    if ((optionone === "D") && (optiontwo === "A") && (optionthree === "C") && (optionfour === "B") && (optionfive === "A"))
    {
        resultSet("Result:Well Done, Great Knowledge")
        Qoneset("2003 [correct option]");
        Qtwoset("Ging freeces [correct option]");
        Qthreeset("Sweets [correct option]");
        Qfourset("100 pushups, 100 situps, 100 squats and 10km running [correct option]");
        Qfiveset("True [correct option]");
        restartSet(<button type="button" className = "restartbtn"
        onClick = {restart}>Restart Quiz</button>);
    }
    else if 
    (
    ((optionone !== "D") && (optiontwo === "A") && (optionthree === "C") && (optionfour === "B") && (optionfive === "A"))||
    ((optionone === "D") && (optiontwo !== "A") && (optionthree === "C") && (optionfour === "B") && (optionfive === "A"))|| 
    ((optionone === "D") && (optiontwo === "A") && (optionthree !== "C") && (optionfour === "B") && (optionfive === "A"))|| 
    ((optionone === "D") && (optiontwo === "A") && (optionthree === "C") && (optionfour !== "B") && (optionfive === "A"))|| 
    ((optionone === "D") && (optiontwo === "A") && (optionthree === "C") && (optionfour === "B") && (optionfive !== "A"))|| 
    ((optionone !== "D") && (optiontwo !== "A") && (optionthree === "C") && (optionfour === "B") && (optionfive === "A")) ||
    ((optionone !== "D") && (optiontwo === "A") && (optionthree !== "C") && (optionfour === "B") && (optionfive === "A")) ||
    ((optionone !== "D") && (optiontwo === "A") && (optionthree === "C") && (optionfour !== "B") && (optionfive === "A")) ||
    ((optionone !== "D") && (optiontwo === "A") && (optionthree === "C") && (optionfour === "B") && (optionfive !== "A")) ||
    ((optionone === "D") && (optiontwo !== "A") && (optionthree !== "C") && (optionfour === "B") && (optionfive === "A")) ||
    ((optionone === "D") && (optiontwo !== "A") && (optionthree === "C") && (optionfour !== "B") && (optionfive === "A")) ||
    ((optionone === "D") && (optiontwo !== "A") && (optionthree === "C") && (optionfour === "B") && (optionfive !== "A")) ||
    ((optionone === "D") && (optiontwo === "A") && (optionthree !== "C") && (optionfour !== "B") && (optionfive === "A")) ||
    ((optionone === "D") && (optiontwo === "A") && (optionthree !== "C") && (optionfour === "B") && (optionfive !== "A")) ||
    ((optionone === "D") && (optiontwo === "A") && (optionthree === "C") && (optionfour !== "B") && (optionfive !== "A")))
    {
        resultSet("Result:Good Job, Can do better")
        Qoneset("2003 [correct option]");
        Qtwoset("Ging freeces [correct option]");
        Qthreeset("Sweets [correct option]");
        Qfourset("100 pushups, 100 situps, 100 squats and 10km running [correct option]");
        Qfiveset("True [correct option]");
        restartSet(<button type="button" className = "restartbtn"
        onClick = {restart}>Restart Quiz</button>);
    }
    else
    {
        resultSet("Result:Need to gain more knowledge")
        Qoneset("2003 [correct option]");
        Qtwoset("Ging freeces [correct option]");
        Qthreeset("Sweets [correct option]");
        Qfourset("100 pushups, 100 situps, 100 squats and 10km running [correct option]");
        Qfiveset("True [correct option]");
        restartSet(<button type="button" className = "restartbtn"
        onClick = {restart}>Restart Quiz</button>);
    }
}

function restart()
{
    resultSet("Result:")
    Qoneset("2003");
    Qtwoset("Ging freeces");
    Qthreeset("Sweets");
    Qfourset("100 pushups, 100 situps, 100 squats and 10km running");
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
            <Link to="/quiz"><h2 className='home'>Anime Quiz/Home</h2></Link><br></br>
    <h5>1Q. When was the Anime naruto released?</h5>
    <input type = "radio" name = "optionone" value = "A" onClick={()=>optiononeSet1("A")}/>
    <label>1999</label><br></br>
    <input type = "radio" name = "optionone" value = "B" onClick={()=>optiononeSet1("B")}/>
    <label>2007</label><br></br>
    <input type = "radio" name = "optionone" value = "C" onClick={()=>optiononeSet1("C")}/>
    <label>2008</label><br></br>
    <input type = "radio" name = "optionone" value = "D" onClick={()=>optiononeSet1("D")}/>
    <label>{Qone}</label><br></br><br></br>


    <h5>2Q. Who is the father of Gon freeces in hunter x hunter?</h5>
    <input type = "radio" name = "optiontwo" value = "A" onClick={()=>optiononeSet2("A")}/>
    <label>{Qtwo}</label><br></br>
    <input type = "radio" name = "optiontwo" value = "B" onClick={()=>optiononeSet2("B")}/>
    <label>Netero</label><br></br>
    <input type = "radio" name = "optiontwo" value = "C" onClick={()=>optiononeSet2("C")}/>
    <label>Leoreo</label><br></br>
    <input type = "radio" name = "optiontwo" value = "D" onClick={()=>optiononeSet2("D")}/>
    <label>Gang freeces</label><br></br><br></br>

    <h5>3Q. What does L usually eat in death note?</h5>
    <input type = "radio" name = "optionthree" value = "A" onClick={()=>optiononeSet3("A")}/>
    <label>Ramen</label><br></br>
    <input type = "radio" name = "optionthree" value = "B" onClick={()=>optiononeSet3("B")}/>
    <label>Burger</label><br></br>
    <input type = "radio" name = "optionthree" value = "C" onClick={()=>optiononeSet3("C")}/>
    <label>{Qthree}</label><br></br>
    <input type = "radio" name = "optionthree" value = "D" onClick={()=>optiononeSet3("D")}/>
    <label>Dumplings</label><br></br><br></br>


    <h5>4Q. Saitamas secret to become strongest man in one punch man?</h5>
    <input type = "radio" name = "optionfour" value = "A" onClick={()=>optiononeSet4("A")}/>
    <label>200 pushups, 50 situps, 80 squats and 15km running</label><br></br>
    <input type = "radio" name = "optionfour" value = "B" onClick={()=>optiononeSet4("B")}/>
    <label>{Qfour}</label><br></br>
    <input type = "radio" name = "optionfour" value = "C" onClick={()=>optiononeSet4("C")}/>
    <label>200 pushups, 200 situps, 200 squats and 20km running</label><br></br>
    <input type = "radio" name = "optionfour" value = "D" onClick={()=>optiononeSet4("D")}/>
    <label>300 pushups, 300 situps, 300 squats and 10km running</label><br></br><br></br>


    <h5>5Q. Is the creator of Mob psycho and one punch man the same?</h5>
    <input type = "radio" name = "optionfive" value = "A" onClick={()=>optiononeSet5("A")}/>
    <label>{Qfive}</label><br></br>
    <input type = "radio" name = "optionfive" value = "B" onClick={()=>optiononeSet5("B")}/>
    <label>False</label><br></br>
    <br></br>
    <button type="button" className = "resultbtn" onClick = {results}>Check Result</button>
    {reestart}
<h3>{result}</h3>
</div>
    </div>
    )
}

export default AnimeQuiz;