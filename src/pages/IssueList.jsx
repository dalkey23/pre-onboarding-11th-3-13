import { useContext, useEffect, useState } from "react";
import { apiRequest } from '../api/api'
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
                    <ul key={issue.id}>
                        <li>{issue.number}</li>
                        <li>{issue.title}</li>
                        <li>{issue.user.login}</li>
                        <li>{issue.created_at}</li>
                        <li>{issue.comments}</li>
                    </ul>
                );
            })}
        </>
    );
}

export default IssueList;
