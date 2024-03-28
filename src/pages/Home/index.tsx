import React, { ReactElement, useState } from "react";

import { Link } from "react-router-dom";

import * as S from './styles'

import ExpenseListy from '../../assets/ExpenseListy.webp';
import ExpenseListy2 from '../../assets/ExpenseListy2.webp';
import ExpenseListy3 from '../../assets/ExpenseListy3.webp';
import ExpenseListy4 from '../../assets/ExpenseListy4.webp';
import ExpenseListy5 from '../../assets/ExpenseListy5.webp';
import ExpenseListy6 from '../../assets/ExpenseListy6.webp';
import euIMG from '../../assets/eu1.jpeg';
import background from '../../assets/dark_background.jpg';
import linkdin from '../../assets/linkedin.png'
import whatsapp from '../../assets/whatsapp.png'
import github from '../../assets/github.png'

const linksData = [{ name: 'Início', route: 1 }, { name: 'Sobre', route: 2 }, { name: 'Meus Projetos', route: 3 }]


const Home = () => {
    const [route, setRoute] = useState(1);

    return (
        <S.Wraper

            style={{
                backgroundImage: `url(${background})`,
                height: "100vh",
                marginTop: "-0.5px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <S.Header>
                {linksData.map((item: any) => (
                    <div style={{
                        minWidth: 80
                    }}>
                        <Link to={item.route} style={{ textDecoration: 'none', color: '#fff' }} onClick={() => setRoute(item.route)}>
                            <p>{item.name}</p>
                        </Link>
                    </div>
                ))}
            </S.Header>

            {route === 1 && (
                <S.CenterViewName
                >
                    <S.FirstName>Marcelo</S.FirstName>
                    <S.LastName>Azevedo</S.LastName>
                    {/* <img src={ExpenseListy} alt="ExpenseListy" style={{width: 50}} /> */}
                </S.CenterViewName>
            )}

            {route === 2 && (
                <S.CenterViewName
                    style={{ flexDirection: 'row' }}
                >
                    <img src={euIMG} alt="Contato de Linkein" style={{ width: 200, cursor: 'pointer', marginRight: 10, borderRadius: 10 }} />
                    <p style={{ color: '#fff', textAlign: 'left', marginLeft: 10 }}>
                        Programador desde 2021, com experiência no desenvolvimento web e mobile com as tecnologias ReactJS, NextsJS e React Native.
                        <br /><br />
                        Já atuei na componentização e criação de aplicações desde o setor a aviação até A.I para negócio.
                        Nestas oportunidades pude atuar com as tecnologias:<br />
                        - ReactJS e NextJS, para o desenvolvimento web;<br /><br />
                        - React Native, para desenvolvimento mobile;<br /><br />
                        - Storybook, para componentização;<br /><br />
                        - Jest/Testing library, para aplicação de testes;<br /><br />
                        - Firebase, para banco de dados não relacional;<br /><br />
                        - Scrum, metodologia ágil;<br /><br />
                        Sou um entusiasta da programação front-end, autodidatismo e dedicação é algo que trago no sangue. Aprender com os companheiros
                        de equipe e ajuda-los no crescimento profissional é uma atitude que tenho prazer em ter, afinal, trabalhar em equipe é isso.
                    </p>

                </S.CenterViewName>
            )}

            {route === 3 && (
                <S.CenterViewName
                >
                    <p style={{ color: '#fff', marginBottom: 12, textAlign:'left' }}>
                        ExpenseListy é um projeto que nasceu de uma necessidade pessoal, eu e minha esposa tinhamos o desejo de salvar
                        nossas listas de compras do mercado, separando por valores, categorias e a soma total de cada compra mensal, não 
                        encontrando um aplicativo que realizasse esta tarefa da forma como queríamos, resolvi desenvolver um do zero. O app
                        começou simples, porém fui desenvolvendo e atualmente estou colocando novas funções para mehlor atender a outras pessoas
                        que queiram utiliza-lo.
                        <br />
                        Para desenvolver este utilizei as tecnologias:<br /><br />
                        - React Native;<br /><br />
                        - TypeScript; <br /><br />
                        - Stotybook; <br /><br />
                        - Styled-components;  <br /><br />
                        - RealmDB;
                    </p>
                    <a href="https://play.google.com/store/apps/details?id=com.shoplisty_app" target="_blank" style={{ textDecoration: 'none', color: '#fff', cursor: 'pointer' }}>
                        <img src={ExpenseListy} alt="Contato de Linkein" style={{ width: 100, cursor: 'pointer', marginRight: 10 }} />
                        <img src={ExpenseListy2} alt="Contato de Linkein" style={{ width: 100, cursor: 'pointer', marginRight: 10 }} />
                        <img src={ExpenseListy3} alt="Contato de Linkein" style={{ width: 100, cursor: 'pointer', marginRight: 10 }} />
                        <img src={ExpenseListy4} alt="Contato de Linkein" style={{ width: 100, cursor: 'pointer', marginRight: 10 }} />
                        <img src={ExpenseListy5} alt="Contato de Linkein" style={{ width: 100, cursor: 'pointer', marginRight: 10 }} />
                        <img src={ExpenseListy6} alt="Contato de Linkein" style={{ width: 100, cursor: 'pointer', marginRight: 10 }} />
                    </a>

                </S.CenterViewName>
            )}

            <S.Footer>
                <a href="https://api.whatsapp.com/send/?phone=91982016505&text&type=phone_number&app_absent=0" target="_blank">
                    <img src={whatsapp} alt="Contato de whatssap" style={{ width: 50, marginRight: 10, marginLeft: 15, cursor: 'pointer' }} />
                </a>
                <a href="https://www.linkedin.com/in/marcelorafael23/" target="_blank">
                    <img src={linkdin} alt="Contato de Linkein" style={{ width: 50, cursor: 'pointer', marginRight: 10 }} />
                </a>
                <a href="https://github.com/marcelorafael" target="_blank">
                    <img src={github} alt="Contato de GitHub" style={{ width: 50, cursor: 'pointer' }} />
                </a>
            </S.Footer>
        </S.Wraper>
    )
}

export default Home;