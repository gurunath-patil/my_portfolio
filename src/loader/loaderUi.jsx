import React from "react";
import "./style.css"

export default function Loader() {

    return (
        <div className="bg-light vh-100 wh-100" id="main-container">

            <div class="loader-wrap">
                <div class="loader loader-3">
                    <div></div><div></div><div></div>
                </div>
            </div>
        </div>
    )
}