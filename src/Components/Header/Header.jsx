import "./Header.scss"

export default function Header() {
    return (
        <header>
            <img src="/src/assets/RefrescaPeTopo.png" alt="Logotipo da empresa fictícia Refesca Pé Pisos Frios, sendo um pé e com o nome da empresa" />

            <ul>
                <li>Rua da Olaria, 3º Piso</li>
                <li>Tel: (21) 98881-2244</li>
                <li><a href="mailto:contato@refrescape.com.br">contato@refrescape.com.br</a></li>
            </ul>
        </header>
    )
}