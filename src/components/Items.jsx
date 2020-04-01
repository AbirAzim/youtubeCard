import React from 'react';
import './items.css';

const Links = props => {
  console.log(props);
  return (
    //<div className='collapse navbar-collapse' id='navbarText'>
    <ul>
      {props.links.map(link => {
        return (
          <li
            className='mr-2 p-2'
            style={{ display: 'inline', float: 'left' }}
            key={link.id}
          >
            <i
              className={link.linkIcon}
              style={{ color: 'white' }}
              aria-hidden='true'
            ></i>
            <a href={link.linkUrl}>{link.linkName}</a>
          </li>
        );
      })}
    </ul>
    //</div>
  );
};

export default Links;
