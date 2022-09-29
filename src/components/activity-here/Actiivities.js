import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import Activity from './../Activity/Activity';

const Actiivities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(()=>{
        fetch("fakeData.json")
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])
    return (
        <div className='grid grid-cols-[4fr,1fr]'>
            <div className='activities-here mx-auto my-32'>
                <h1 className='text-2xl lg:text-4xl md:text-3xl text-orange-600 font-bold  text-center'><FontAwesomeIcon icon={faChartLine}/> Activiy Things</h1>
                <h1 className='text-1xl lg:text-2xl md:text-xl text-violet-600 font-bold text-center'>Select Todays Plan</h1>
                <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5 mx-auto w-8/12 lg:w-10/12 md:w-9/12'>
                {
                    activities.map(activity => <Activity activity = {activity} /> )
                }
                </div>

            </div>
            <div className='info-here'></div>
            
        </div>
    );
};

export default Actiivities;