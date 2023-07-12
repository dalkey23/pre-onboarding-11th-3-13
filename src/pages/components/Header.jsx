import { useContext } from "react";
import githubContext from "../../contexts/Context";

function Header(){
    const value = useContext(githubContext)
    return <h1>{value.owner}/{value.repo}</h1>
}

export default Header;