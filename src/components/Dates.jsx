import React from 'react';

const Dates = ({date}) => {

    const myDateVar = new Date(date)

    return (
        <div className='Header__fecha' >{myDateVar.toLocaleDateString()}</div>

    );
};

export default Dates;