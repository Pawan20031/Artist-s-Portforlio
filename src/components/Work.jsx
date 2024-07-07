import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
// import data from "../assests/data.json";
import dataC from "../assests/data copy.json";

const Work = () => {
  return (
    <div id='work'>
      <h2>Work</h2>
      <section>
        <article>
            <Carousel 
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={1500}
            infiniteLoop={true}
            autoPlay={true}
            >
                {
                    dataC.projects.map((i)=>(
                        <div key={i.title} className='workItem'>
                            <img src={i.imgSrc} alt={i.title}/>
                            <aside>
                                <h1>{i.title}</h1>
                                <p>{i.description}</p>
                                <a href="#contact" target='blank'>Contact Me</a>
                            </aside>
                        </div>
                    ))
                }
            </Carousel>
        </article>
      </section>
    </div>
  )
}

export default Work
