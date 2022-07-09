import React from 'react';
import Button from '../../Button/Button';
const Design = () => {

    const content = [
        {title : "Discover the interior design of your dreams", des : "From mixing and matching woods to understanding which coffee table are best for diffrent types of sectionals, styling a room is an art."}
    ]

    return (
        <div className='grid md:grid-cols-2 lg:px-24 md:space-x-3 px-5 py-20 items-center bg-gray-300'>
            <div className="left">
                <img src="https://dl.airtable.com/.attachmentThumbnails/530c07c5ade5acd9934c8dd334458b86/cf91397f?ts=1656250552&userId=usrQMwWEPx18KgLcP&cs=48043faaa4d7132a" className="lg:w-[90%]" alt="" />
            </div>
            <div className="right">
                {
                    content.map((items)=>(
                       <div>
                        <h1 className=' text-3xl lg:text-5xl mt-5 md:mt-0 font-semibold mb-5'>{items.title}</h1>
                        <p className='text-lg lg:pr-32 text-gray-500 mb-5'>{items.des}</p>
                       </div> 
                    ) )
                }
                <Button text="Get inspired" />

                <img src="https://dl.airtable.com/.attachmentThumbnails/a6119fabf7256049cc0e8dbcdf536c9c/b0153f66?ts=1656250552&userId=usrQMwWEPx18KgLcP&cs=c185973c361fb2e2" alt="" className='mt-5 lg:w-[50%] shadow-lg' />

            </div>   
        </div>
    );
};

export default Design;