
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import './App.css'
import Content from "./Content";

function App() {
    return (
        <div className={"App"}>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default App;