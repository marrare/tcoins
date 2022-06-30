import React from 'react';
import logo from '../T-C_ins__1_-removebg-preview.png'


export default function Footer() {

    return (
        <div className="Footer">
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
                            <span className='ListaTitulo'>Planos</span>
                            <li className='ListaItem'>Standard</li>
                            <li className='ListaItem'>Intermediary</li>
                            <li className='ListaItem'>Advanced</li>
                        </ul>
                        <ul className='FooterLista'>
                            <span className='ListaTitulo'>Quem somos?</span>
                            <li className='ListaItem'>Lorem</li>
                            <li className='ListaItem'>Lorem</li>
                            <li className='ListaItem'>Lorem</li>
                        </ul>
                        <ul className='FooterLista'>
                            <span className='ListaTitulo'>Dúvidas</span>
                            <li className='ListaItem'>Lorem</li>
                            <li className='ListaItem'>Lorem</li>
                            <li className='ListaItem'>Lorem</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="SocialMedia">

            </div>

        </div>
    )
}
