import { Nav } from './styles';

export default function Navbar() {
  return <Nav className='nav'>
    <a href="/" className="site-title">
      <img src="/assets/draftool.ico" alt="DrafTool Logo" className="logo" />
      DrafTool</a>
    <ul>
      <li>
        <a href="/players"> Jogadores </a>
      </li>
      <li>
        <a href="/teams"> Times </a>
      </li>
      <li>
        <a href="/draft"> Draft </a>
      </li>
    </ul>
  </Nav>
}