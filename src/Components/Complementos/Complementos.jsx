import "./Complementos.scss"

export default function Complementos() {
    return (
        <section>
            <h3>Complementos</h3>
            
            <ol class="olComplementos">
                <li>Espaçador:</li>
                    <ul>
                        <li>Standers 2mm, 300 peças (R$ <span class="preco">50,00</span>)</li>
                    </ul>
                <li>Argamassa:</li>
                    <ul>
                        <li>Axton Branca 20kg (R$ <span class="preco">40,00</span>)</li>
                    </ul>
                <li>Rejunte:</li>
                    <ul>
                        <li>Axton Marfim 1kg (R$ <span class="preco">17,00</span>)</li>
                    </ul>
                <li>Rodapé:</li>
                    <ul>
                        <li>Moldufarma MDF Nogueira 10cm x 2,40m (R$ <span class="preco">35,00</span>)</li>
                        <li>Santa Luzia Poliestireno 10cm x 2,40m (R$ <span class="preco">78,00</span>)</li>
                    </ul>
                <li>Cola para Moldura:</li>
                    <ul>
                        <li>Santa Luzia 400g (R$ <span class="preco">47,00</span>)</li>
                    </ul>
            </ol>
        </section>
    )
}