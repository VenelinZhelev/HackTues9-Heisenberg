import React from "react";
import './style.css';

export default function Footer(){
    return(
        <div>
            <footer> 
                <div className="Heisenberg">
                    <img id="heisenberg" src="https://cdn.discordapp.com/attachments/498216881258496001/1083886099220402336/heisenberg.png" width={60} height={80} />
                    <a id="trademark">©2023 Team Heisenberg</a>
                </div>

                <div className="language">
                    <h6>Languages</h6>
                    <a href="/">English</a>
                    <br></br>
                    <a href="/bg-BG/">Bulgarian</a>
                </div>
                
            </footer>  
        </div>
    )
}