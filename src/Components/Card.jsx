import React, { useEffect, useState } from 'react';
import starIcon from "../assets/Star_fill.svg"
import starEmptyIcon from "../assets/Star.svg"

const Card = () => {
    let [coffeeItems, setCoffeeItems] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
            .then(res => res.json())
            .then(json => setCoffeeItems(json));
    }, []);

    console.log(coffeeItems);

    return (
        <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                coffeeItems.map((coffee =>
                    <div>
                        <img className='rounded-2xl object-cover' src={coffee.image} alt="" />
                        <div className='flex justify-between items-center mt-2'>
                            <p className='text-white font-bold text-[16px]'>
                                {coffee.name}
                            </p>

                            <p className='px-2 py-1 font-bold rounded-md text-[#1B1D1F] bg-[#BEE3CC] text-[13px]'>
                                {coffee.price}
                            </p>
                        </div>

                        <div className='flex gap-2 mt-2'>
                            <img src={starIcon} alt="" />
                            <div className='flex gap-1'>
                                <p className='text-white font-bold text-[16px]'>
                                    {coffee.rating}
                                </p>

                                <p className='text-[#6F757C] font-bold text-[16px]'>
                                    ({coffee.votes} votes)
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Card;