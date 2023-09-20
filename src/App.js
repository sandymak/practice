import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './navigation/Sidebar'

export default function App() {
    return (
        <>
            <header>Header</header>
            <div className="columns">
                <Router>
                    <nav>
                        <Sidebar />
                    </nav>
                    <main>Main</main>
                    <aside>Sidebar</aside>
                </Router>
            </div>
            <footer>Footer</footer>
        </>
    )
}
