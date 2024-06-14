'use client'
import React from "react";


const ErrorPage = ({error}:{
    error: Error
}) => {
    return (
        <div>ERROR MSG: {error.message}</div>
    )
}

export default ErrorPage