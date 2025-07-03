export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <a href='#'>Dashboard</a>
        </li>
        <li className="nav-item">
          <a href="#">Widgets</a>
        </li>
        <li className="nav-item">
          <button aria-expanded="false">Apps</button>
          <ul className="sub-menu" aria-label="Apps">
            <li><a href="Calendar">Calendar</a> </li>
            <li><a href="Chat">Chat</a> </li>
            <li><a href="Email">Email</a> </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
