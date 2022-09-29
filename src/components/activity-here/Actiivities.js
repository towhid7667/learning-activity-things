import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import Activity from './../Activity/Activity';
import Info from './../Info/Info';


const Actiivities = () => {
    const [activities, setActivities] = useState([]);
    const [newTime, setNewTime] = useState([]);
    
    
    

    useEffect(()=>{
        fetch("fakeData.json")
        .then(res => res.json())
        .then(data => setActivities(data))
    }, []);

    const addTime = (activity) =>{
        const timeshere = [...newTime, activity]
        setNewTime(timeshere);
    }

   

    return (
        <div className='grid grid-cols-[4fr,1fr] bg-slate-200'>
            <div className='activities-here my-28 mx-auto'>
                <h1 className='text-2xl lg:text-4xl md:text-3xl text-orange-600 font-bold  lg:text-center  mx-10 md:mx-32  lg:mx-0'><FontAwesomeIcon icon={faChartLine}/> Activiy Things</h1>
                <h1 className='text-1xl lg:text-2xl md:text-xl text-violet-600 font-bold lg:text-center  mx-14 lg:mx-0 md:mx-40'>Select Todays Plan</h1>
                <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5 lg:mx-auto md:mx-6 mx-5 w-8/12 lg:w-10/12 md:w-9/12 my-5'>
                {
                    activities.map(activity => <Activity activity = {activity} addTime= {addTime}/> )
                }
                </div>

            </div>
            <div className='info-here w-3/12 md:w-4/12 lg:w-3/12 bg-white px-20 py-8 absolute right-0 flex flex-col items-center justify-center'>
                <Info newTime = {newTime} />
            </div>
            
        </div>
    );
};

export default Actiivities;