import React from 'react'
import loading from './loading.gif'
const Loader = () => {
    return (
        <div className='text-center my-3'>
            <img className="my-3" src={loading} alt="loading"></img>
        </div>
    )
}
export default Loader;