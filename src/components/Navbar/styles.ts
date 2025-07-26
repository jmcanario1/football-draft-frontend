import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #ec6724;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 2rem;
  padding: 0 1rem;

  .logo-and-title {
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .logo-image {
    justify-content: center;
  }
  
  .site-title {
    font-size: 4rem;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    gap: 1rem;
  }

  a {
    color: #0b2e44;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    padding: .5rem;
    font-size: 2rem;
  }

  li {
    &.active a {
      background-color: #777;
      color: white;
    }

    &:hover {
      background-color: #c9571fff;
    }
  }

  .logo {
  width: 64px;
  height: 64px;
  }
  `