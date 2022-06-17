import React from 'react'
import './style.css';


const ImgSection = () => {
    return (
        <div>
            <div className='bg-image img1 '>
                <div class="row height d-flex justify-content-center align-items-center">
                    <div class="col-md-8 mt-3">
                        <div class="search mt-5">
                            <i class="fa fa-search"></i>
                            <input type="text" class="form-control" placeholder="Search food or Restaurant" />
                            <button class="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImgSection