import { Nav } from './styles';


export default function Navbar() {
  return <Nav className='nav'>
    <a href="/" className="site-title">DrafTool</a>
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