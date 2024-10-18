import fruit from "../assets/fruit.png"
import port from "../assets/port.png"

const Work = () => {
  return (
    <div id="mywork" className="work">
      <h1 className="green-text">My Work</h1>
      <div className="slide">
        <a href="https://fruits-online.netlify.app/" target="_blank"><img src={fruit} alt="Fruit" /></a>

        <a href="https://fruits-online.netlify.app/"><img src={port} alt="Portfolio" /></a>
      </div>
    </div>
  )
}

export default Work