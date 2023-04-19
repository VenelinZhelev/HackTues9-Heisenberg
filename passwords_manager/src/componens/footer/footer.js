import React from "react";
import './style.css';

export default function Footer(){
    return(
        <div>
            <footer> 
                <div class="row">
                    <div className="col">
                        <img id="heisenberg" src="https://cdn.discordapp.com/attachments/498216881258496001/1083886099220402336/heisenberg.png" width={55} height={75} />
                        <a id="trademark">©2023 Team Heisenberg</a>
                    </div>

                    <div className="col">
                        <h6>Languages</h6>
                        <a href="/"> <img src="https://cdn-icons-png.flaticon.com/512/197/197374.png" width={15} height={15}/> English</a>
                        <br></br>
                        <a href="/bg-BG/"> <img src="https://cdn0.iconfinder.com/data/icons/world-flags-1/100/Bulgaria-2-512.png" width={15} height={15} /> Bulgarian</a>
                    </div>
                    <div className="col">
                        <h6>Links</h6>
                        <a href="https://github.com/VenelinZhelev/HackTues9-Heisenberg"> <img src="https://cdn.discordapp.com/attachments/498216881258496001/1098320985091997726/25231.png" width={20} height={20}/> Source Code</a>
                        <br></br>
                        <a href="./about"> About Us</a>
                    </div>
                </div>
            </footer>  
        </div>
    )
}