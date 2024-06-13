import React from "react";

const reviewPage = (
    {params}: {
        //type of the params(like struct)
        params: {
            userId: number,
            reviewId: string,
        }        
    }

) => {
    return (
        <div>Review from user: {params.userId}  Review num: {params.reviewId}</div>
    )
}

export default reviewPage