import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaFileAlt } from 'react-icons/fa';

const BhLink = (props) => {
  const { iconName, description, to } = props;

  const icons = {
    FaHome: FaHome,
    FaFileAlt: FaFileAlt,
  };

  const LinkIcon = icons[iconName];

  return (
    <Link to={to} className='link'>
      {iconName ? (
        <div style={{ padding: '2px 8px 2px 0' }}>
          <LinkIcon color='#F78D94' fontSize='1rem' />
        </div>
      ) : (
        ''
      )}

      {description}
    </Link>
  );
};

export default BhLink;
