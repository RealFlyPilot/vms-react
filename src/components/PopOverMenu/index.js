import React from 'react';

const PopOverMenu = () => {
    return (<div className='jsx-795186102 module'>
  <div >
    <div className='jsx-3608530722 popover up'>
      <div
        className='jsx-3608530722 triangle'
        
      >
        <svg
          width='24'
          height='12'
          viewBox='0 0 24 12'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill='#fff'
            stroke-width='1px'
            stroke='#fff'
            fill-rule='evenodd'
            d='M20 12l-8-8-12 12'
          />
        </svg>
      </div>
      <div className='jsx-3608530722 menu'>
        <div className='jsx-1613897119 item active'>Dashboard</div>
        <div className='jsx-2066073613 line ' />
        <div className='jsx-1613897119 item'>
          <a href='/'>My Teams</a>
        </div>
        <div className='jsx-1613897119 item'>
          <a href='/'>Create Team</a>
          <div className='jsx-1613897119 icon'>
            <svg
              width='14'
              height='14'
              viewBox='174 112 11 12'
              xmlns='http://www.w3.org/2000/svg'
              fill='#000'
            >
              <path d='M179.5 113v10M174.5 118h10' stroke='#000' />
            </svg>
          </div>
        </div>
        <div className='jsx-2066073613 line ' />
        <div className='jsx-1613897119 item'>
          <a href='/'>Account Settings</a>
          <div className='jsx-1613897119 icon'>
            <span className='jsx-545344292 badge'>2</span>
          </div>
        </div>
        <div className='jsx-1613897119 item'>
          <a href='/'>Logout</a>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
 
export default PopOverMenu;