import styled from "styled-components";

export const Nav = styled.nav`
  background-color: white;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 2rem;
  padding: 0 1rem;

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
      background-color: #0b2e4480;
    }
  }

  .logo {
  width: 64px;
  height: 64px;
  }
  `