import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.div`
  .bg-transparent {
    background-color: rgba(250, 250, 250, 0.15) !important;
    .navbar-burger span {
      background-color: white !important;
    }
    @media screen and (max-width: 768px) {
      .clr-black-mobile {
        color: black !important;
      }
    }
  }
  .has-background-white {
    .navbar-item,
    .navbar-link {
      color: black !important;
    }
    .navbar-link:not(.is-arrowless)::after {
      border-color: black;
    }
  }
  a,
  .navbar-item {
    transition: 0.2s;
    font-size: ${(props) => props.theme.fontSize};
    :hover {
      color: ${(props) => props.theme.secondaryColor} !important;
      background-color: transparent !important;
    }
  }
  a.has-text-white:focus {
    color: ${(props) => props.theme.secondaryColor} !important;
  }
  .navbar-item.has-dropdown:hover .navbar-link {
    background-color: transparent !important;
  }
  .navbar-link {
    :hover {
      color: ${(props) => props.theme.secondaryColor} !important;
      background-color: transparent !important;
    }
  }
  .navbar-link:not(.is-arrowless)::after {
    border-color: white;
  }
  .navbar-dropdown {
    border-radius: 0;
  }
  .hover-margin:hover {
    margin-left: 0.5rem;
  }
  ${
    '' /* .navbar-burger span {
    background-color: white !important;
  } */
  }
`;

const Header = ({ post }) => {
  const [open, setOpen] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window?.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window?.addEventListener('scroll', changeNavbarColor);
  return (
    <Nav>
      <nav
        className={`section is-fixed-top navbar py-4 ${
          colorChange ? 'has-background-white' : 'bg-transparent'
        }`}>
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item is-size-3 has-text-weight-semibold is-uppercase has-text-white">
              Edu Meeting
            </a>
          </Link>
          <button
            type="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarExampleTransparentExample"
            onClick={() => {
              setOpen(!open);
            }}>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <div
          id="navbarExampleTransparentExample"
          className={`navbar-menu ${open ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <Link href="/">
              <a className="navbar-item clr-black-mobile has-text-weight-medium mx-3 is-uppercase has-text-white">
                Home
              </a>
            </Link>
            <Link href="/meeting">
              <a className="navbar-item clr-black-mobile has-text-weight-medium mx-3 is-uppercase has-text-white">
                Meetings
              </a>
            </Link>
            <Link href="/#aboutEdu">
              <a className="navbar-item clr-black-mobile has-text-weight-medium mx-3 is-uppercase has-text-white">
                Apply Now
              </a>
            </Link>

            <div className="navbar-item has-dropdown is-hoverable is-uppercase">
              <Link href="/#contact">
                <a className="navbar-link clr-black-mobile mx-3 has-text-white">
                  Pages
                </a>
              </Link>
              <div className="navbar-dropdown is-boxed">
                <Link href="/meeting">
                  <a className="navbar-item clr-black-mobile has-text-black hover-margin">
                    Upcoming Meetings
                  </a>
                </Link>
                <hr className="navbar-divider" />
                <Link href={`/meeting/${post?.slug}`}>
                  <a className="navbar-item clr-black-mobile has-text-black hover-margin">
                    Meeting Details
                  </a>
                </Link>
              </div>
            </div>

            <Link href="/#courses">
              <a className="navbar-item clr-black-mobile has-text-weight-medium mx-3 is-uppercase has-text-white">
                Courses
              </a>
            </Link>
            <Link href="/#contact">
              <a className="navbar-item clr-black-mobile has-text-weight-medium mx-3 is-uppercase has-text-white">
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
