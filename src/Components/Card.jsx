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
                        <div className='relative'>
                            {
                                coffee.popular === true &&
                                <div className='bg-[#F6C768] rounded-2xl px-3 py-1 text-[#1B1D1F] text-[10px] absolute top-2 left-2 font-semibold'>
                                    Popular
                                </div>
                            }
                            <img className='rounded-2xl object-cover' src={coffee.image} alt="" />
                        </div>
                        <div className='flex justify-between items-center mt-2'>
                            <p className='text-white font-bold text-[16px]'>
                                {coffee.name}
                            </p>

                            <p className='px-2 py-1 font-bold rounded-md text-[#1B1D1F] bg-[#BEE3CC] text-[13px]'>
                                {coffee.price}
                            </p>
                        </div>

                        <div className='flex justify-between items-center  mt-2'>
                            <div className='flex gap-2'>
                                <div>
                                    {
                                        coffee.rating === null ?
                                            <img src={starEmptyIcon} alt="" />
                                            :
                                            <img src={starIcon} alt="" />
                                    }
                                </div>
                                <div className='flex gap-1'>
                                    {
                                        coffee.rating === null ?
                                            <p className='text-[#6F757C] font-bold text-[16px]'>
                                                No Rating
                                            </p>
                                            :
                                            <p className='text-white font-bold text-[16px]'>
                                                {coffee.rating}
                                            </p>
                                    }

                                    <div>
                                        {
                                            coffee.votes === 0 ?
                                                ""
                                                :
                                                <p className='text-[#6F757C] font-bold text-[16px]'>
                                                    ({coffee.votes} votes)
                                                </p>
                                        }
                                    </div>
                                </div>
                            </div>

                            {
                                coffee.available === false &&
                                <p className='text-[#ED735D] font-bold text-[16px]'>
                                    Sold Out
                                </p>
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Card;