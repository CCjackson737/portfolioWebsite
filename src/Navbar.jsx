import { Link, useMatch,  useResolvedPath} from "react-router-dom"
export default function Navbar() {
    return (
    <nav className='nav'>
        <Link to="/" className="site-title">Cameron Jackson</Link>
        <ul>
            <CustomLink to="/about">About</CustomLink>
        </ul>
    </nav>
    )
}
//custom component that allows the className to switch to active if found in the path this highlights the route of the navbar that is selected
function CustomLink({to,children,...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path : resolvedPath.pathname, end: true })
    //end true to show that the path ends there and doesn't just contain path in "path/foo/bar"
    return(
    <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
            {children}
            </Link>
    </li>
    )
}