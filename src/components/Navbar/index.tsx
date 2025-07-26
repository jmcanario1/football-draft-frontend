import { Nav } from './styles';

export default function Navbar() {
  return <Nav className='nav'>
    <div className="logo-and-title">
      <img className='logo-image' src='/assets/draftool.ico' alt='logo' height='32'/>
      <a href="/" className="site-title">DrafTool</a>
    </div>
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