import PropTypes  from "prop-types";

function Header({ text }) {
  return (
    <header>
    <div className="container">
        {/* <h2>FeedBack UI</h2> static output*/}
        <h2>{text}</h2>
    </div>
    </header>
  )
}

Header.defaultProps ={
    text: 'Hola',
}

Header.propTypes ={
    text: PropTypes.string,
}

export default Header