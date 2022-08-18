import React from 'react';
import logo from '../T-C_ins__1_-removebg-preview.png'


export default function Footer() {

    return (
        <footer className="Footer">
            <div className='FooterContent'>
                <div className="FooterEsquerda">
                    <img className="Logo" src={logo} alt="" />
                    <div className="FooterDireitos">
                        <p>T-coins 2022</p>
                        <p>Todos os direitos reservados</p>
                    </div>
                </div>
                <div className="FooterDireita">
                    <nav className='FooterNav'>
                        <ul className='FooterLista'>
                            <span className='ListaTitulo ItemFooter'>Planos</span>
                            <li className='ListaItem'>Básico</li>
                            <li className='ListaItem'>Padrão</li>
                            <li className='ListaItem'>Padrão múltiplo</li>
                            <li className='ListaItem'>Premium</li>
                        </ul>
                        <ul className='FooterLista'>
                            <span className='ListaTitulo ItemFooter'>Quem somos?</span>
                            <li className='ListaItem'>Informações da empresa</li>
                            <li className='ListaItem'>Localização</li>
                            <li className='ListaItem'>Clientes</li>
                        </ul>
                        <ul className='FooterLista'>
                            <span className='ListaTitulo ItemFooter'>Dúvidas</span>
                            <li className='ListaItem'>FAQ</li>
                            <li className='ListaItem'>TELEFONES</li>
                            <li className='ListaItem'>CHAT</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="SocialMedia">

            </div>

        </footer>
    )
}
