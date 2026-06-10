import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styled from 'styled-components';
import logo from '@images/logo.png';

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-navy);
  z-index: 99;

  .logo-wrapper {
    width: 220px;
    clip-path: inset(0 100% 0 0);
    img {
      display: block;
      width: 100%;
      filter: invert(1);
      user-select: none;
    }
  }
`;

const Loader = ({ finishLoading }) => {
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: '.logo-wrapper',
        delay: 300,
        duration: 1800,
        easing: 'easeInOutQuart',
        clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
      })
      .add({
        targets: '.loader',
        delay: 500,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <StyledLoader className="loader">
      <Helmet bodyAttributes={{ class: `hidden` }} />

      <div className="logo-wrapper">
        <img src={logo} alt="Mere" />
      </div>
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
