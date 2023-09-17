/**
 * Get animations from https://lottiefiles.com/
 */

import React from "react"
import {useRouteError} from "react-router-dom"
import Lottie from 'lottie-react';
import cat404 from '../../assets/animations/cat404.json'

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error)
    const containerStyle = {
        width: "50%"
    }

    return (
        <div id = "error-page">
            <center>
                <Lottie
                    style={containerStyle}
                    animationData={cat404}
                />
            </center>

        </div>
    );
}