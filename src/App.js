import './App.css';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';
import Skills from './components/skills/Skills';
import { ThemeContext } from './context';
import { useContext } from 'react';


export default function App() {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    
    return (

        <div style={{backgroundColor:darkMode ? "#222" : "white", color: darkMode && "white"}}>
            <Toggle />
            <Intro />
            <About />
            <Skills />
            <ProductList />
            <Contact />
        </div>
    );
}

