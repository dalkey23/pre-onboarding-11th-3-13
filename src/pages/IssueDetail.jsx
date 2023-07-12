import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiRequest } from '../api/api';
import githubContext from "../contexts/Context";

function IssueDetail() {

    const {issueNumber} = useParams();
    const [issue, setIssue] = useState({});
    const value = useContext(githubContext)
 
    useEffect(() => {
        apiRequest(`repos/${value.owner}/${value.repo}/issues/${issueNumber}`, "get")
            .then((res) => {
                setIssue(res.data);
            })
            .catch((err)=>{
                console.log(err)
            });

        
    }, []);
    console.log(issue)
    return (
        <ul>
            <li>{issue.number}</li>
            <li>{issue.title}</li>
            <li>{issue.user.login}</li>
            <li>{issue.created_at}</li>
            <li>{issue.comments}</li>
            <li><img src={issue.user.avatar_url} /></li>
            <li dangerouslySetInnerHTML={{
                    __html: issue.body
                }} />
        </ul>
    );
}

export default IssueDetail;
