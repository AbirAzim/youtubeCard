import React from 'react';
import NavBrand from './NavBrand';
import SearchBar from './SearchBar';
import Items from './Items';

const NavBarMain = props => {
  const {
    navBarMainStyle: { navBrandIconColor, navBrandName },
    links
  } = props;

  console.log(links);

  return (
    <nav className='navbar sticky-top' style={{ backgroundColor: 'black' }}>
      <NavBrand
        navBrandIconColor={navBrandIconColor}
        navBrandName={navBrandName}
      />
      <SearchBar />
      <Items links={links} />
    </nav>
  );
};

export default NavBarMain;
