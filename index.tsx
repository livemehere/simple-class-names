import ReactDOM from 'react-dom/client';
import App from "./App";

const rootNode = document.querySelector('#root');
const root = ReactDOM.createRoot(rootNode as HTMLElement);
root.render(<App/>)
