import React from 'react';

const ReviewCard = () => {
    return (
        <div className='mt-4'>
                <div className="card p-3 border">
                    <div className="emoji">
                        Hi
                    </div>
                    <div className="text">
                        <p className='text-[#6c6c6c] text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus deserunt obcaecati facilis repellendus officiis qui iusto impedit quam quae quia.</p>
                    </div>
                    <div className="customerPro flex space-x-4 mt-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQUXqMrzrmkxd3QpxGL5bzgxELsztrL1AgQ&usqp=CAU " className='rounded-full w-10 h-10' alt="" />
                        <div className="info">
                            <h1>Nessi</h1>
                            Brooklyn, NY
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ReviewCard;