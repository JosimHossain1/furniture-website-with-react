import React from 'react';
import {BsTelephone} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";
import {FaFacebookSquare, FaTwitterSquare} from "react-icons/fa";
import {GrInstagram} from "react-icons/gr";

const Footer = () => {

    const footerAbout = [
        { id : 1, Text : 'Our story'},
        { id : 2, Text : 'Design'},
        { id : 3, Text : 'Creaftsmanship'},
        { id : 4, Text : 'Sustainability'},
        
    ];
    
    const footerSupport =[
        { id : 1, Text : "FAQ's" },
        { id : 2, Text : "Shipping & Returns" },
        { id : 3, Text : "Care guide"},
        { id : 4, Text : "Warranty"}
    ]

    return (
        <div className='footer bg-[#464242]
        py-10 px-7 w-full text-white'>
            <div className="footer-wrapper md:flex justify-between space-x-4">
                <div className="mt-10">
                    <h1 className='text-4xl my-4 font-bold'>Parabot</h1>
                    <p className='w-[60%]'>625 E Franklink Ave, Minneapolis, MN 550404, USA</p>
                    <p className='mt-14 text-lg'>&cpoy; 2022 Parabot. All Rights Reserved </p>
                   
                </div>

                 <div className="mt-10">
                    <div>
                        <h1 className="text-xl mb-8">About us</h1>
                        {
                            footerAbout.map((list, index) =>(
                                <p className='block mt-3 text-gray-300 hover:text-white' key={index}>{list.Text}</p>
                            ))
                        }
                    </div>
                </div>   

                 
                 <div className="about  mt-10">
                    <div>
                        <h1 className='text-xl mb-8'>Support</h1>
                        { footerSupport.map((list, index) =>(
                                <p className='block mt-3 text-gray-300 hover:text-white' key={list.index}> {list.Text}</p>
                            ))}
                    </div>
                </div>

                <div className="about  mt-10">
                    <div>
                        <h1 className='text-xl'>Contact us</h1>
                        
                        <ul className=' mt-5 sm:space-y-3'>
                            <p href=""> <BsTelephone className="inline mr-3" /> +01325121411</p>
                            <p href=""> <AiOutlineMail className="inline mr-3"/> cloneJosim@gmail.com</p>
                        </ul>
                        <div className="social-media flex sm:space-x-10 mt-20 text-2xl">
                            <FaFacebookSquare className=" cursor-pointer" />
                            <GrInstagram className="cursor-pointer" />
                            <FaTwitterSquare className="cursor-pointer" />
                        </div>
                    </div>
                </div>  

            </div>
            {/* Botoom Footer */}
            <div className="bottom-footer mt-5 text-center">                
               <span className="text-[#a0a0a0]"> Clone By Josim Hossain  </span>              
            </div>
        </div>
    );
};

export default Footer;