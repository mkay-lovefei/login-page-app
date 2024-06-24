import Header from "../Components/Header/Header.tsx";
import Footer from "../Components/Footer/Footer.js";
import Title from "../Components/Title/Title.tsx";



const PageTemplate = ({title, children}) => {
    return (
        <div className={"page-template"}>
            <Header />
            <Title text={title} />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default PageTemplate;