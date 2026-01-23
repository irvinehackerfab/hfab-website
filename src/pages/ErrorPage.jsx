import React from 'react';
import styles from "./ErrorPage.module.css";
import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <>
            <div className='PageContainer'>
                <div className='TextContainer'>
                    <h1>404 - Page Not Found</h1>
                    <p className='BodyText'>The page you are looking for does not exist.</p>

                </div>
                
            </div>
            <Link className={`${styles.learnMoreButton}`} to={"/"}>
                Learn More
            </Link>
            <br></br>
        </>


    );
}

export default ErrorPage;