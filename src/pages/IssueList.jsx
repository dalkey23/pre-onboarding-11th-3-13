import { useContext, useEffect, useState } from "react";
import { apiRequest } from "../api/api";
import githubContext from "../contexts/Context";
import { IssueItem, AdItem } from "./components/IssueItem";

function IssueList() {
    const [issues, setIssues] = useState([]);
    const value = useContext(githubContext);

    useEffect(() => {
        apiRequest(`repos/${value.owner}/${value.repo}/issues?sort=comments`, "get")
            .then((res) => {
                setIssues(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            {issues.map((issue, i) => {
                return (
                    <>
                        { (i+1)%5 === 0 ? <AdItem /> : <IssueItem issue={issue} key={issue.number} />}
                    </>
                );
            })}
        </>
    );
}

export default IssueList;
