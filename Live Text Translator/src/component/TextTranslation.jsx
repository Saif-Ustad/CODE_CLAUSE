import "./TextTranslation.scss";

import { FaExchangeAlt } from "react-icons/fa";

import countries from "../data";
import { useEffect } from "react";

function TextEditor() {

    useEffect(() => {
        const fromText = document.querySelector(".from-text");
        const toText = document.querySelector(".to-text");

        const switchIcon = document.querySelector(".switch");
        const translateBtn = document.querySelector("button");

        const fromCopy = document.querySelector("#fromCopy");
        const toCopy = document.querySelector("#toCopy");

        const fromRead = document.querySelector("#fromRead");
        const toRead = document.querySelector("#toRead");
        
        const selectTag_L1 = document.querySelector(".lang_1");
        const selectTag_L2 = document.querySelector(".lang_2");


        for(let country_code in countries) {
            let selected = country_code === "en-GB" ? "selected" : "" ;
            let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
            selectTag_L1.insertAdjacentHTML("beforeend", option);
        }

        for(let country_code in countries) {
            let selected = country_code === "hi-IN" ? "selected" : "" ;
            let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
            selectTag_L2.insertAdjacentHTML("beforeend", option);
        }


        switchIcon.addEventListener("click", () => {
            let tempText = fromText.value;
            let tempLang = selectTag_L1.value;
            fromText.value = toText.value;
            toText.value = tempText;
            selectTag_L1.value = selectTag_L2.value;
            selectTag_L2.value = tempLang;
        });

        translateBtn.addEventListener("click", () => {
            let text = fromText.value.trim();
            let translateFrom = selectTag_L1.value;
            let translateTo = selectTag_L2.value;
            if (!text) return;
            toText.setAttribute("placeholder", "Translating...");
            let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
            fetch(apiUrl)
                .then((res) => res.json())
                .then((data) => {
                    toText.value = data.responseData.translatedText;
                });
        });

        fromCopy.addEventListener("click", () => {
            if(!fromText.value) return
            navigator.clipboard.writeText(fromText.value)
        })

        toCopy.addEventListener("click", () => {
            if(!toText.value) return
            navigator.clipboard.writeText(toText.value)
        })

        fromRead.addEventListener("click", () => {
            if(!fromText.value) return
            const synth = window.speechSynthesis;
            const utterThis = new SpeechSynthesisUtterance(fromText.value);
            utterThis.lang = selectTag_L1.value;
            synth.speak(utterThis);
        })

        toRead.addEventListener("click", () => {
            if(!toText.value) return
            const synth = window.speechSynthesis;
            const utterThis = new SpeechSynthesisUtterance(toText.value);
            utterThis.lang = selectTag_L2.value;
            synth.speak(utterThis);
        })

        fromText.addEventListener("keyup", () => {
            if (!fromText.value) {
                toText.value = "";
            }
        });


        }, []);
        return (
            <div className="TextTranslation-section">
                <div className="container">
                    <div className="content">
                        <div className="upper">
                            <div className="top-heading">
                                <div className="left-country">
                                    <select className="lang_1">

                                    </select>
                                </div>
                                <div className="switch">
                                    <FaExchangeAlt />
                                </div>
                                <div className="right-country">
                                    <select className="lang_2">

                                    </select>
                                </div>
                            </div>
                            <div className="editor-area">
                                <div className="left">
                                    <textarea className="from-text" spellCheck="false" placeholder="Enter your text here..."></textarea>
                                    <div className="icons">
                                        <i id="fromRead" className="fas fa-volume-up "></i>
                                        <i id="fromCopy" className="fas fa-copy "></i>
                                    </div>

                                </div>
                                <div className="right">
                                    <textarea className="to-text" spellCheck="false" placeholder="Translated text will appear here" readOnly></textarea>
                                    <div className="icons">
                                        <i id="toRead" className="fas fa-volume-up "></i>
                                        <i id="toCopy" className="fas fa-copy "></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lower">
                            <button>Translate Text</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default TextEditor;