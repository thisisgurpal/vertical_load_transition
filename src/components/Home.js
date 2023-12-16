import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Home = () => {
    const progressBarRef = useRef(null);

    const handleClick = (e) => {
        console.log("hello")
        e.preventDefault();
        const destination = e.currentTarget.getAttribute('href');
        gsap.set(".load_grid", { display: "grid" });
        gsap.to(".load-grid-bar", {
            height: '100%',
            duration: 1,
            backgroundColor: 'blue',
            stagger: { amount: 0.7, from: "random" },
            ease: 'power2.inOut',
            onComplete: () => {
                window.location = destination;
            },
        });
    };

    useEffect(() => {
        gsap.set(".load_grid", { display: "grid" });
        gsap.to(".load-grid-bar", {
            height: '0%',
            duration: 1,
            backgroundColor: 'blue',
            stagger: { amount: 0.7, from: "random" },
            ease: 'power2.inOut',
            onComplete: () => {
                gsap.set(".load_grid", { display: "none" });
            },
        });
    }, []); // Empty dependency array to run the effect only once on mount


    return (
        <>
            <div className='home_hero_section'>
                <div className='home_hero_content'>
                    <h1 className='major_heading'>Hello</h1>
                    <Link to='/about' onClick={handleClick}>Click me</Link>
                </div>
                <div className='load_grid'>
                    <div className='load_grid_item'>
                        <div ref={progressBarRef} className="load-grid-bar"></div>
                    </div>
                    <div className='load_grid_item'>
                        <div ref={progressBarRef} className="load-grid-bar"></div>
                    </div>
                    <div className='load_grid_item'>
                        <div ref={progressBarRef} className="load-grid-bar"></div>
                    </div>
                    <div className='load_grid_item'>
                        <div ref={progressBarRef} className="load-grid-bar"></div>
                    </div>
                    <div className='load_grid_item'>
                        <div ref={progressBarRef} className="load-grid-bar"></div>
                    </div>
                    <div className='load_grid_item'>
                        <div ref={progressBarRef} className="load-grid-bar"></div>
                    </div>
                    <div className='load_grid_item'>
                        <div ref={progressBarRef} className="load-grid-bar"></div>
                    </div>
                    <div className='load_grid_item'>
                        <div ref={progressBarRef} className="load-grid-bar"></div>
                    </div>
                    <div className='load_grid_item'>
                        <div ref={progressBarRef} className="load-grid-bar"></div>
                    </div>
                    <div className='load_grid_item'>
                        <div ref={progressBarRef} className="load-grid-bar"></div>
                    </div>
                    <div className='load_grid_item'>
                        <div ref={progressBarRef} className="load-grid-bar"></div>
                    </div>
                    <div className='load_grid_item'>
                        <div ref={progressBarRef} className="load-grid-bar"></div>
                    </div>
                </div>
            </div>
            <div className='home-second-section'>
                <div className='home-second-content'>
                    <h1 className='major_heading'>Hello again</h1>
                </div>
            </div>
        </>

    );
};

export default Home;