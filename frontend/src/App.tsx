import { Outlet } from 'react-router-dom'
import Nav from './components/Navigation/Navigation'
import './styles/App.scss'

// App.jsx
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.8.0/cdn/');


export default function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
    </div>
  )
}
