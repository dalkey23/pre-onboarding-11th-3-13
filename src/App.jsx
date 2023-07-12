import { BrowserRouter, Route, Routes } from "react-router-dom";
import IssueList from "./pages/IssueList";
import IssueDetail from "./pages/IssueDetail";
import Header from "./pages/components/Header";
import githubContext from "./contexts/Context";

function App() {
    return (
        <githubContext.Provider
            value={{
                owner: "facebook",
                repo: "react",
            }}>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<IssueList />}/>
                    <Route path="/detail/:issueNumber" element={<IssueDetail />}/>
                </Routes>
            </BrowserRouter>
        </githubContext.Provider>
    );
}

export default App;
