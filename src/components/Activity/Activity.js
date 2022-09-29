import React from 'react';

const Activity = (props) => {
    const {img, name, Days, Time} = props.activity;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{Days} Days</p>
    <p className='text-orange'>{Time}</p>
    <div className="card-actions">
      <button className="btn btn-primary w-full capitalize">Add Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Activity;