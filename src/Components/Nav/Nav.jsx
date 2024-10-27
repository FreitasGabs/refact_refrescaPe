import "./Nav.scss"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Apresentacao from "../Apresentacao/Apresentacao"
import Porcelanatos from "../Porcelanatos/Porcelanatos"
import Complementos from "../Complementos/Complementos"
import Pedidos from "../Pedidos/Pedidos"

export default function Nav() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Apresentação</Link>
                    </li>
                    <li>
                        <Link to="/porcelanatos">Porcelanatos</Link>
                    </li>
                    <li>
                        <Link to="/complementos">Complementos</Link>
                    </li>
                    <li>
                        <Link to="/pedidos">Pedidos</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Apresentacao/>} />
                <Route path="/porcelanatos" element={<Porcelanatos/>} />
                <Route path="/complementos" element={<Complementos/>} />
                <Route path="/pedidos" element={<Pedidos/>} />
            </Routes>
        </BrowserRouter>
    )
}