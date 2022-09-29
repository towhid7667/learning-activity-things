import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const Info = () => {
    return (
        <div>
            <div className='profile-area lg:flex lg:gap-3 lg:items-center  md:items-center my-10 '>
                <div className="avatar online">
                    <div className="w-24 rounded-full">
                         <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' />
                    </div>
                 </div>
                 <div className=''>
                    <h1 className='text-2xl font-bold'>Towhidul</h1>
                    <h1 className='text-xl'><FontAwesomeIcon icon={faLocationArrow}/> Dhaka, Bangladesh</h1>
                 </div> 
            </div>
            <div className="profile-info lg:flex  text-center gap-5 bg-slate-200 px-5 py-3 rounded-lg">
                <div>
                    <h1 className="lg:text-xl font-bold">8.5</h1>
                    <h1 className='text-1xl'>Speaking</h1>
                </div>
                <div>
                    <h1 className="lg:text-xl font-bold">7.5</h1>
                    <h1 className='text-1xl'>Listening</h1>
                </div>
                <div>
                    <h1 className="lg:text-xl font-bold">7.0</h1>
                    <h1 className='text-1xl'>Reading</h1>
                </div>
                <div>
                    <h1 className="lg:text-xl font-bold">7.5</h1>
                    <h1 className='text-1xl'>Writting</h1>
                </div>


            </div>

            <div className="times-here">
                <h1 className='lg:text-2xl md:text-2xl text-xl font-bold my-5'>Add Break Time</h1>
                <div className="b-Times lg:flex  bg-slate-200 rounded-lg gap-4 py-5 px-5 justify-center items-center text-center">
                    <button className='rounded-[50%]  bg-white p-3 hover:bg-violet-400 hover:text-white font-bold my-3 lg:my-0 md:my-3'>10s</button>
                    <button className='rounded-[50%]  bg-white p-3 hover:bg-violet-400 hover:text-white font-bold my-3 lg:my-0 md:my-3'>20s</button>
                    <button className='rounded-[50%]  bg-white p-3 hover:bg-violet-400 hover:text-white font-bold my-3 lg:my-0 md:my-3'>30s</button>
                    <button className='rounded-[50%]  bg-white p-3 hover:bg-violet-400 hover:text-white font-bold my-3 lg:my-0 md:my-3'>40s</button>
                    <button className='rounded-[50%]  bg-white p-3 hover:bg-violet-400 hover:text-white font-bold my-3 lg:my-0 md:my-3'>50s</button>
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-bold my-5'>Activity Details</h1>
                <div className='lg:flex  bg-slate-200 px-4 py-3 rounded-lg justify-around my-5 text-center items-center'>
                    <h1 className='text-xl font-bold'>Activity Time</h1>
                    <p className='font-bold my-3'>200s</p>
                </div>
                <div className='lg:flex  bg-slate-200 px-4 py-3 rounded-lg justify-around my-5 text-center items-center'>
                    <h1 className='text-xl font-bold'>Break Time</h1>
                    <p className='font-bold my-3'>200s</p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
            <button className='bg-purple-700 text-xl lg:text-2xl md:text-2xl text-white font-bold lg:px-10 px-4 py-3 rounded-lg hover:bg-purple-900'>Completed</button>
            </div>
            
        </div>
    );
};

export default Info;