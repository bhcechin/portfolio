import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Trabalhos from './Trabalhos';
import Home from './Home';
import '../App.scss';
import BhLink from './BhLink';

const NavBar = () => {
  const [backgroundColor, setBackgroundColor] = useState('PrimaryDark');

  const colors = [
    'PrimaryDark',
    'PrimaryLight',
    'SecondaryDark',
    'SecondaryLight',
  ];

  const changeSelectedColor = (color) => {
    setBackgroundColor(color);
    console.log(color);
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <BhLink to='/' description='Início' iconName='FaHome' />
            </li>
            <li>
              <BhLink
                to='/trabalhos'
                description='Trabalhos'
                iconName='FaFileAlt'
              />
            </li>
          </ul>

          <ul>
            <>
              {colors.map((color, index) => {
                return (
                  <li key={index} onClick={() => changeSelectedColor(color)}>
                    <div className={'Circle ' + color }></div>
                  </li>
                );
              })}

              <li className='code'><a href='https://github.com/bhcechin/portfolio' target='_blank' rel='noreferrer'>Ver Código</a></li>
            </>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route exact path='/'>
          <Home selectedColor={backgroundColor} />
        </Route>
        <Route path='/trabalhos'>
          <Trabalhos selectedColor={backgroundColor} />
        </Route>
      </Switch>
    </>
  );
};

export default NavBar;
