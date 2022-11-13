import { Link } from 'react-router-dom'
import './error.css'
const Error404 = () => {
  return (
    <div className="error">
      <h1>Eror 404</h1>
      <p>Page not found!</p>
      <button> <Link to ={'inmobiliaria/'}>Back to home</Link></button>
    </div>
  )
}

export default Error404