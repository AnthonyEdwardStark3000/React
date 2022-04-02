import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function Aboutpage() {
  return (
    <Card>
        <div className="about">
            <h1>About this Project</h1>
            <p>React application to leave Feedback for a Product or Service</p>
            <p>version 1.0.0</p>
            <p>
                <Link to="/">Back To Home</Link>
            </p>
        </div>
    </Card>
  )
}

export default Aboutpage