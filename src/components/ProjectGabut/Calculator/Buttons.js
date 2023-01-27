import React from "react";
import "./css/Buttons.css";
import { CgMathEqual } from "react-icons/cg"
// import CALCULATOR_BUTTONS from "./CalculatorButtons";

const Buttons = ({ inputHandler, clearInput, backspace, changePlusMinus, calculateAns }) =>
{
    document.addEventListener("keydown", function (event)
    {
        if (event.key === "Enter")
        {
            event.preventDefault();
            document.getElementById("equalbtn").click();
        }
    });

    return (
        <div className="show-btn">
            <button className="btnt exp" onClick={inputHandler}>
                ^
            </button>
            <button className="btnt exp" onClick={inputHandler}>
                (
            </button>
            <button className="btnt exp" onClick={inputHandler}>
                )
            </button>
            <button className="btnt exp" onClick={inputHandler}>
                √
            </button>
            <button className="btnt exp" onClick={inputHandler}>
                x<sup>2</sup>
            </button>
            <button className="btnt clr" onClick={clearInput}>
                AC
            </button>
            <button className="btnt clr" onClick={backspace}>
                ⌫
            </button>
            <button className="btnt exp" onClick={inputHandler}>
                log
            </button>
            <button className="btnt exp" onClick={inputHandler}>
                ÷
            </button>
            <button className="btnt exp" onClick={inputHandler}>
                %
            </button>
            <button className="btnt" onClick={inputHandler}>
                7
            </button>
            <button className="btnt" onClick={inputHandler}>
                8
            </button>
            <button className="btnt" onClick={inputHandler}>
                9
            </button>
            <button className="btnt exp" onClick={inputHandler}>
                x
            </button>
            <button className="btnt exp" onClick={inputHandler}>
                x<sup>3</sup>
            </button>
            <button className="btnt" onClick={inputHandler}>
                4
            </button>
            <button className="btnt" onClick={inputHandler}>
                5
            </button>
            <button className="btnt" onClick={inputHandler}>
                6
            </button>
            <button className="btnt exp" onClick={inputHandler}>
                -
            </button>
            <button className="btnt exp" onClick={inputHandler}>
                <sup>3</sup>√
            </button>
            <button className="btnt" onClick={inputHandler}>
                1
            </button>
            <button className="btnt" onClick={inputHandler}>
                2
            </button>
            <button className="btnt" onClick={inputHandler}>
                3
            </button>
            <button className="btnt exp" onClick={inputHandler}>
                +
            </button>
            <button className="btnt exp" onClick={inputHandler}>
                !
            </button>
            <button className="btnt exp" onClick={changePlusMinus}>
                ±
            </button>
            <button className="btnt" onClick={inputHandler}>
                0
            </button>
            <button className="btnt exp" onClick={inputHandler}>
                .
            </button>
            <button className="btnt exp equal" id="equalbtn" onClick={calculateAns}>
                <CgMathEqual />
            </button>
        </div>
    );
};

export default Buttons;