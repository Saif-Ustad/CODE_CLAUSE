import "./Text_Editor.scss";

import { FaUndo } from "react-icons/fa";
import { FaRedo } from "react-icons/fa";
import { FaBold } from "react-icons/fa";
import { FaUnderline } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaStrikethrough } from "react-icons/fa";
import { FaSubscript } from "react-icons/fa";
import { FaSuperscript } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa";
import { FaAlignCenter } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { FaListOl } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaUnlink } from "react-icons/fa";

import { useState } from "react";



function Text_Editor() {
    const [selectedFont, setSelectedFont] = useState("Arial"); // Use state to track selected font


    function formatText(cmd, value = null) {
        if (value) {
            document.execCommand(cmd, false, value);
        } else {
            document.execCommand(cmd);
        }
    }

    

    return (
        <div className="text-editor-section">
            <div className="text-editor-container">
                <div className="text-editor-content">
                    <div className="editor_btns">
                        <div className="upper">
                            <select id="file">
                                <option value="">File</option>
                                <option value="new">New file</option>
                                <option value="txt">Save as txt</option>
                                <option value="pdf">Save as pdf</option>
                            </select>

                            <select id="font" onChange={(event) => setSelectedFont(event.target.value)}>
                                <option value="Arial">Arial</option>
                                <option value="verdana">verdana</option>
                                <option value="Times-New-Roman">Times New Roman</option>
                                <option value="Garamond">Garamond</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Courier-New">Courier New</option>
                                <option value="cursive">cursive</option>
                            </select>

                            <select id="font-size" onChange={(event) => formatText('fontSize', event.target.value)} defaultValue="4">
                                <option value="1">10</option>
                                <option value="2">12</option>
                                <option value="3">14</option>
                                <option value="4">16</option>
                                <option value="5">18</option>
                                <option value="6">20</option>
                                <option value="7">22</option>
                            </select>

                            <select id="size" onChange={(event) => formatText('fontSize', event.target.value)} defaultValue="3">
                                <option value="1">Extra small</option>
                                <option value="2">Small</option>
                                <option value="3">Regular</option>
                                <option value="4">Medium</option>
                                <option value="5">Large</option>
                                <option value="6">Extra Large</option>
                                <option value="7">Big</option>
                            </select>

                            <div className="font-color-selection">
                                <p>Color</p>
                                {/* <div className="circle" ></div> */}
                                <input type="color" onChange={(event) => formatText('foreColor', event.target.value)} />
                            </div>
                            <div className="background-color-selection">
                                <p>background</p>
                                {/* <div className="circle" ></div> */}
                                <input type="color" onChange={(event) => formatText('backColor', event.target.value)} />
                            </div>
                        </div>
                        <div className="lower">
                            <button onClick={() => formatText("undo")}><FaUndo /></button>
                            <button onClick={() => formatText("redo")}><FaRedo /></button>
                            <button onClick={() => formatText("bold")}><FaBold /></button>
                            <button onClick={() => formatText("underline")}><FaUnderline /></button>
                            <button onClick={() => formatText("italic")}><FaItalic /></button>
                            <button onClick={() => formatText("strikeThrough")}><FaStrikethrough /></button>
                            <button onClick={() => formatText("subscript")}><FaSubscript /></button>
                            <button onClick={() => formatText("superscript")}><FaSuperscript /></button>
                            <button onClick={() => formatText("justifyLeft")}><FaAlignLeft /></button>
                            <button onClick={() => formatText("justifyCenter")}><FaAlignCenter /></button>
                            <button onClick={() => formatText("justifyRight")}><FaAlignRight /></button>
                            <button onClick={() => formatText("justifyFull")}><FaAlignJustify /></button>
                            <button onClick={() => formatText("insertOrderedList")}><FaListOl /></button>
                            <button onClick={() => formatText("insertUnorderedList")}><FaListUl /></button>
                            <button ><FaLink /></button>
                            <button ><FaUnlink /></button>

                        </div>
                    </div>
                    <div className="editor-part" contentEditable="true" spellCheck="false" style={{ fontFamily: selectedFont }}>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Text_Editor;