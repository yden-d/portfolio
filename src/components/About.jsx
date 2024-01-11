import React from "react";
import { useEffect, useState } from "react";

export const About = () => {
    const [displayedContent, setDisplayedContent] = useState('');
    const content = `
    I am a web developer based in Rockville, Maryland.
    With over 2 years of experience in web development, I've found
    passion in creating visually appealing and interactive web applications. 
    
                Click here 👇🏾 to learn more about me.
    `;

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
        setDisplayedContent((prevContent) => prevContent + content[index]);
        index++;
        if (index === content.length - 1) {
            clearInterval(intervalId);
        }
    }, 15);

        return () => {
            clearInterval(intervalId);
            setDisplayedContent("");
        };

    }, [])
    return (
        <div className="about" id="about">
            <h2><i>(It's pronounced "E-Dine")</i></h2>
            <h3>Hello! My name is Yden Da. </h3>
            <pre className="about-text">
                {displayedContent}
            </pre>
        </div>
    )
}