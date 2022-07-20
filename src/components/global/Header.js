import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.div`
  .navbar {
    background-color: rgba(250, 250, 250, 0.15);
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  a {
    transition: 0.2s;
    font-size: ${(props) => props.theme.fontSize};
  }
  a,
  .has-dropdown:hover {
    color: ${(props) => props.theme.secondaryColor} !important;
    background-color: transparent;
  }
  .navbar-link:not(.is-arrowless)::after {
    border-color: white;
  }
`;

const Header = () => {
  return (
    <Nav>
      <nav className="section navbar is-fixed-top">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item is-size-4 has-text-weight-semibold is-uppercase has-text-white">
              Edu Meeting
            </a>
          </Link>
          <div
            className="navbar-burger"
            data-target="navbarExampleTransparentExample">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-end">
            <Link href="/">
              <a className="navbar-item has-text-weight-medium is-uppercase has-text-white">
                Home
              </a>
            </Link>
            <Link href="/post">
              <a className="navbar-item has-text-weight-medium mx-3 is-uppercase has-text-white">
                Meetings
              </a>
            </Link>
            <Link href="/about">
              <a className="navbar-item has-text-weight-medium mx-3 is-uppercase has-text-white">
                Apply Now
              </a>
            </Link>

            <div className="navbar-item has-dropdown is-hoverable is-uppercase">
              <Link href="#contact">
                <a className="navbar-link has-text-white">Pages</a>
              </Link>
              <div className="navbar-dropdown is-boxed">
                <Link href="#contact">
                  <a className="navbar-item has-text-white">
                    Upcoming Meetings
                  </a>
                </Link>
                <hr className="navbar-divider" />
                <Link href="#contact">
                  <a className="navbar-item has-text-white">Meeting Details</a>
                </Link>
              </div>
            </div>

            <Link href="#contact">
              <a className="navbar-item has-text-weight-medium mx-3 is-uppercase has-text-white">
                Courses
              </a>
            </Link>
            <Link href="#contact">
              <a className="navbar-item has-text-weight-medium is-uppercase has-text-white">
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </Nav>
  );
};

export default Header;
