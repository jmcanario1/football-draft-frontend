import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #333;
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
    font-size: 2rem;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    gap: 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    padding: .25rem;
  }

  li {
    &.active a {
      background-color: #777;
      color: white;
    }

    &:hover {
      background-color: #555;
    }
  }
  `