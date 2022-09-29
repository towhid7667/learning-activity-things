import React from 'react';

const Answer = () => {
    return (
        <div>
        <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto lg:w-10/12 md:w- 8/12 w-6/12 gap-10'>
            <div className='text-center p-10'>
                <h1 className='text-xl font-bold'>How useEffects Works?</h1>
                <p>By using this Hook, we tell React that our component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</p>
            </div>
            <div className='text-center p-10'>
            <h1 className='text-xl font-bold'>Difference between props and state?</h1>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div className='text-center p-10'>
            <h1 className='text-xl font-bold'>how does react work?</h1>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>

        </div>
    </div>
    );
}

export default Answer;