import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Resume = () => {
    const [displayedContent, setDisplayedContent] = useState('');
    const resumeContent = `
    class Resume:
    .. def __init__(self):
    .... self.name = 'Yden Da'
    .... self.email = 'yden.business@gmail.com'
        
    .. def experience():
    .... return {
    ........ '2020 - 2022' : 'Web Applications Developer at Iowa State University',
    ........ '2019 - 2020' : 'Student Worker at Iowa State University Dining',
    ........ '2018': 'Express Clerk at HyVee, Inc.'
    ........ '2017': 'Call Center Rep at RuffaloCody, LLC.
    ....}
        
    .. def skills():
    .... return [
    ........ 'Python', 'JavaScript', 'PHP', 'Java', 'HTML/CSS', 'React.js',
    ........ 'Material UI', 'Bootstrap', 'Django', 'Laravel',
    .... ]
    
    .. def hobbies():
    .... return [
    ........ 'Weightlifting', 'Build web apps', 'Video games', 'Hiking',
    ........ 'Basketball', 'Watch movies', 'Running',    
    .... ]`;
        
    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
        setDisplayedContent((prevContent) => prevContent + resumeContent[index]);
        index++;
        if (index === resumeContent.length - 1) {
            clearInterval(intervalId);
        }
    }, 15);

        return () => {
            clearInterval(intervalId);
            setDisplayedContent("");
        };

    }, [])
    return (
        <div className="content">
            <div className="resume" id="resume">
                <h1>My Resume 📑</h1><br/>
                <pre className="code">{displayedContent}</pre>
            </div>   
        </div>
    )
}