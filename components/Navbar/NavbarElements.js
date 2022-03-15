import styled from "styled-components";
import Link from 'next/link'

export const Container = styled.header.attrs({
  className: ''
})`
  background-color: black;
  position: fixed;
  z-index: 400;
  top: 0;
  left: 0;
  width: 100%;
  height: 108px;
  display: flex;
  justify-content: center;
  max-width: 100vw;

  &.scrolled {
    height: 88px;
    @media screen and (max-width: 960px) {
        height: 73px;
    }
  }

  @media screen and (max-width: 1200px) {
        height: 73px;
    }
`;

export const ContainerTr = styled.header`
  width: 100%;
  height: 108px;
  background-color: transparent;
  position: fixed;
  z-index: 400;

  @media screen and (max-width: 960px) {
        height: 73px;
    }
`;

export const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;

  @media screen and (max-width: 960px) {
        width: 85%;
    }
`;

export const LogoContainer = styled.img`
    display: flex;
    align-items: center;
    height: 4.5em;
    cursor: pointer;

    @media screen and (max-width: 1200px) {
        height: 3em;
        padding: 0.2em 0;
    }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  @media screen and (max-width: 960px) {
    display: ${({ open }) => (open ? "none" : "flex")}; //Import;
    background-color: $headerblack;
    position: absolute;
    top: 73px;
    left: 0;
    width: 100%;
    height: 145px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
    padding-bottom: 0.5em;
  }
`;

export const MenuItem = styled.li`
  height: 100%;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0rem 0.75rem;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
    transition: 0.5s all ease;
    opacity: 0.85;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff!important;
    text-decoration: none;

    &:hover {
      opacity: 1;
    }
    @media screen and (max-width: 1200px) {
    font-size: 0.8rem;
    }

    @media screen and (max-width: 960px) {
      opacity: 1;
      font-size: 0.8em;
      justify-content: flex-start;
      padding-left: 1.2em;
    }
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

export const Prod = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: 1rem;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: 0.5s all ease;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin: 0!important;
    svg {
      fill: #fff;
      margin-left: 0.1em!important;
      height: 1.2em!important
    }
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 0;
    margin: 0;
    padding-left: 0.8em;
    opacity: 1;

    a {
      justify-content: flex-start;
      font-size: 0.8em;
    }
    svg {
      display: flex;
      fill: #e0792a;
    }
  }
`;

export const MenuItemLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0rem 1rem;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: 0.5s all ease;
  opacity: 0.85;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff!important;
  text-decoration: none;
  &:hover {
    opacity: 1;
  }
  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    svg {
      display: none;
      fill: #e0792a;
      margin-right: 0.5rem;
    }
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 0;
    margin: 0;
    a {
      width: 85%;
      justify-content: left;
      font-size: 0.8em;
    }
  }
`;


export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 1em;
  }
`;

export const DropdownMenu = styled.ul `
    position: absolute;
    margin-left: -34em;
    top: 4.8em;
    display: flex;
    height: auto;
    width: auto;
    background-color: #fff;
    border-radius: 5px;
    padding: 5px;
    padding-right: 50px;
    opacity: 1;

`

export const DropLi = styled.li `
    width: 100%;
    cursor: pointer;
    padding-left: 1em;
    line-height: 10px;
    opacity: 1;
    color: black;
    list-style: none;
`

export const DropLink = styled.a `
    width: 100%;
    flex-wrap: nowrap;
    font-size: 0.8em;
    font-weight: 600;
    color: black;
    white-space: nowrap;
    opacity: 0.86;

    &:hover {opacity: 1;}
`