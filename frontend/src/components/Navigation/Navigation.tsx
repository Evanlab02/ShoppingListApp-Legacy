import { Routes, Route } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';


export default function Nav() {
    const namespace = import.meta.env.VITE_REACT_NAMESPACE ?? "shopping";

    return (
        <Routes>
            <Route path={`${namespace}/dashboard/`} element={<Dashboard />} />
        </Routes>
    );
}