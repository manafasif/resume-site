import styles from "./styles/mystyle.module.css";

const HEADER_COLOR = "rgb(0, 5, 36)";

function Nav() {
  return (
    <nav id="nav-wrap" >
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn" href="#home" title="Hide navigation">
        Hide navigation
      </a>

      <ul id="nav" className="nav">
        <MenuElem name="Home" link="#home" current={true} />
        <MenuElem name="About" link="#about" />
        <MenuElem name="Resume" link="#resume" />
        {/* <MenuElem name="Works" link="#portfolio"/> */}
        <MenuElem name="Contact" link="#contact" />
      </ul>
    </nav>
  )
}

function MenuElem(props) {
  const componentBody = (
    <a className="smoothscroll" href={props.link}>
      {props.name}
    </a>
  )
  if (props.current) {
    return (
      <li className="current">
        {componentBody}
      </li>
    )
  } else {
    return (
      <li>
        {componentBody}
      </li>
    )
  }
}

export default Nav;