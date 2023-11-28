import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './common/MainPage'
import routesConfig from './navigation/routesConfig'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<MainPage id="default" />} />
                {routesConfig.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={<MainPage id={route.id} />}
                    />
                ))}
            </Routes>
        </Router>
    )
}
