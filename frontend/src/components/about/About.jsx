import React from 'react'
import "./AboutStyle.css"
import about1 from "../../assets/about1.jpg"
import about2 from "../../assets/about2.jpg"


const About = () => {
    return (
        <div>
            <div className="container-about container text-light">
                <div className="row pb-4">
                    <div className="col">
                        <img class='about-img mb-5' src={about1} alt="" />
                        <h3>
                            Accurate and reliable  statistics day per day
                        </h3>
                        <p>
                            we calculate every thing for you we calculate every thing for youwe calculate every thing for youwe calculate every thing for youwe calculate every thing for youwe calculate every thing for youwe calculate every thing for youwe calculate every thing for youwe calculate every thing for youwe calculate every thing for youwe calculate every thing for youwe calculate every thing
                        </p>
                    </div>
                    <div className="col ">
                        <h3>
                            we calculate every thing for you
                        </h3>
                        <p class="pb-5">
                            we calculate every thing for you we calculate every thing for youwe calculate every thing for youwe calculate every thing for youwe calculate every thing for youwe calculate every thing for youwe calculate every thing for youwe calculate every thing for youwe calculate every thing for youwe calculate every thing for youwe calculate every thing for youwe calculate every thing
                        </p>
                        <img class='about-img mt-5 about-img2' src={about2} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
