import React, { Fragment } from 'react';

const NavBrand = props => {
  //   console.log(props);
  return (
    <Fragment>
      <span className='navbar-brand '>
        <i
          className='fa fa-bars mr-2'
          style={{ color: 'white' }}
          aria-hidden='true'
        ></i>
        <span className='text-warning'>{props.navBrandName}</span>
      </span>
    </Fragment>
  );
};

export default NavBrand;
