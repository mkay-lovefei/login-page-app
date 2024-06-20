
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import './App.css'

function App() {
    return (
        <div className={"App"}>
            <Header />
            <section className={"content-section"}>
                <h1>Please enter your User ID</h1>
            </section>
            <Footer />
        </div>
    );
}

export default App;