import IssueList from "./pages/IssueList";
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
            <IssueList />
        </githubContext.Provider>
    );
}

export default App;
