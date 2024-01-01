import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-primary text-white px-6 py-1">
      <div>
        <img src="/Logo(2).png" alt="logo" />
      </div>
      <div className="flex items-center space-x-6">
        <div>
          <img src="/Notifications.png" alt="notification" />
        </div>
        <div>
          <img src="/user image.png" alt="profile" />
        </div>
        <div className='flex flex-col justify-center'>
          <p className='font-medium'>Lisa</p>
          <p className='text-sm font-thin'>Operator</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar
