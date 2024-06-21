
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header.tsx';
import Footer from './Components/Footer/Footer.tsx';
import './App.css'
import Content from "./Components/Content/Content.tsx";
import Title from "./Components/Title/Title.tsx";

function App() {
    return (
        <div className={"App"}>
            <Title text={"Please enter your User ID"}/>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default App;