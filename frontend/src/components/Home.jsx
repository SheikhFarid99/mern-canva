import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom'
import {FaTrash} from 'react-icons/fa'
const Home = () => {

    const [show, setShow] = useState(false)
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mdtablet: {
            breakpoint: { max: 992, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 4
        }
    };
    return (
        <div className='pt-5'>
            <div className='w-fll flex justify-center items-center h-[250px] bg-gradient-to-r from-[#4c76cf] to-[#552ab8] relative rounded-md overflow-hidden'>
                <button onClick={() => setShow(!show)} className='px-4 py-2 text-[15px] overflow-hidden text-center bg-[#8b3dffad] text-white rounded-[3px] font-medium hover:bg-[#8b3dffd3] absolute top-3 right-3'>Custom size</button>
                <div className={`absolute top-16 right-3 gap-3 bg-[#252627] w-[250px] p-4 text-white ${show ? 'visible opacity-100' : 'invisible opacity-50'} transition-all duration-500`}>
                    <div className='grid grid-cols-2 pb-4 gap-3'>
                        <div className='flex gap-2 justify-center items-start flex-col'>
                            <label htmlFor="width">Width</label>
                            <input type="number" name='width' className='w-full outline-none px-2 py-[4px] bg-[#1b1a1a] border border-[#404040] rounded-md' id='width' />
                        </div>
                        <div className='flex gap-2 justify-center items-start flex-col'>
                            <label htmlFor="height">Height</label>
                            <input type="number" name='height' className='w-full outline-none px-2 py-[4px] bg-[#1b1a1a] border border-[#404040] rounded-md' id='height' />
                        </div>
                    </div>
                    <button className='px-4 py-2 text-[13px] overflow-hidden text-center bg-[#8b3dffad] text-white rounded-[3px] font-medium hover:bg-[#8b3dffd3] w-full'>Create new design</button>
                </div>
                <div>
                    <h2 className='text-3xl pb-10 pt-6 font-semibold text-white'>What will you design today?</h2>
                </div>
            </div>
            <div>
                <h2 className='text-xl py-6 font-semibold text-white'>Your recent designs</h2>
                <div>
                    <Carousel
                        autoPlay={true}
                        infinite={true}
                        responsive={responsive}
                        transitionDuration={500}
                    >
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8].map((d, i) => <div className='relative group w-full h-[150px] px-2' key={i}>
                                <Link className='w-full h-full block bg-[#ffffff12] p-4 rounded-md'>
                                    <img className='w-full h-full rounded-md overflow-hidden' src="http://localhost:5173/project.png" alt="" />
                                </Link>
                                <div className='absolute hidden cursor-pointer top-1 right-2 text-red-500 p-2 transition-all duration-500 group-hover:block'><FaTrash/></div>
                            </div>)
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Home