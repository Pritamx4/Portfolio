import ReactDom from 'react-dom/client';
import App from './App.jsx';
import Lottie from 'lottie-web';
import {defineElement} from "@lordicon/element";
import './index.css';

defineElement(Lottie.loadAnimation);

ReactDom.createRoot(document.getElementById('root')).render(<App />);
