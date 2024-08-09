import React, { useEffect } from 'react';

const Card = () => {

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
            .then(res => res.json())
            .then(json => console.log(json));
    }, [])

    return (
        <div className='mt-6'>

        </div>
    );
};

export default Card;