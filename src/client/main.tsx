import { createRoot } from 'react-dom/client';
import { App } from './App';
import "./index.css";

const rootElement = document.getElementById('root');

if (rootElement === null) {
    console.error('Problem ze znalezieniem elementu root');
} else {
    const root = createRoot(rootElement);
    root.render(<App />);
}
