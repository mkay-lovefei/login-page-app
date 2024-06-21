
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import LoginPageContent from './Pages/LoginPage/LoginPageContent.js';
import PageTemplate from "./Pages/PageTemplate.js";

function App() {
    return (
        <div className={"App"}>
            <PageTemplate
                title={"Please enter your User ID"}
                children={<LoginPageContent />}
            />
        </div>
    );
}

export default App;