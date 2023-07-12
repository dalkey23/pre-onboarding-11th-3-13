import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { apiRequest } from '../api/api';
import githubContext from "../contexts/Context";

function IssueList() {
    const [issues, setIssues] = useState([]);
    const value = useContext(githubContext)
 
    useEffect(() => {
        apiRequest(`repos/${value.owner}/${value.repo}/issues`, "get")
            .then((res) => {
                setIssues(res.data);
            })
            .catch((err)=>{
                console.log(err)
            });
    }, []);

    return (
        <>         
            {issues.map((issue) => {
                return (
                    <Link to={`/detail/${issue.number}`} key={issue.id}>
                        <ul>
                            <li>{issue.number}</li>
                            <li>{issue.title}</li>
                            <li>{issue.user.login}</li>
                            <li>{issue.created_at}</li>
                            <li>{issue.comments}</li>
                        </ul>
                        <hr />
                    </Link>
                );
            })}
        </>
    );
}

export default IssueList;
