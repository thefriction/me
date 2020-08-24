import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a computer grad student from GGSIPU with CSE as my major. I love to provide elegant solutions to problems and improve the lives of people around the world.</p>
                    <p>I am an eternal optimist who believes there's always light at the end of the tunnel. Lately i have been learning Guitar but i'm afraid you block me if i start singing :P.</p>
                    <p>I love to play chess, football, run and watch UFC !</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-6 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building websites using NodeJs, JavaScript,React,HTML,CSS</p>
                </div>
                </div>
            </div>
            <div className="col-md-6 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>Coming from the CS background, I have good grasp over fundamental concepts of DSA</p>
                </div>
                </div>
            </div>
            <div className="col-md-6 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>4G LTE</h3>
                    <p>I am working at Azcom Technologies as protocol stack developer and working with tools like Raspberry Pi, Eclipse, eNodeB's among other things. </p>
                </div>
                </div>
            </div>
            <div className="col-md-6 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Machine learning</h3>
                    <p>I have built projects leveraging NLP,Scikit learn, SVD, Cosine similarity among other machine learning concepts</p>
                </div>
                </div>
            </div>
           
           </div>
        </div>
        </section>
      </div>
    )
  }
}
