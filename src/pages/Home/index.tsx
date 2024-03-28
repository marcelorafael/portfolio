import React, { ReactElement } from "react";

import { Link } from "react-router-dom";

import * as S from './styles'

import background from '../../assets/dark_background.jpg';
import linkdin from '../../assets/linkedin.png'
import whatsapp from '../../assets/whatsapp.png'
import github from '../../assets/github.png'

const linksData = [{ name: 'Início', route: '/' }, { name: 'Sobre', route: 'about' }, { name: 'Meus Projetos', route: 'projects' }]


const Home = () => {
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
                        <Link to={item.route} style={{ textDecoration: 'none', color: '#fff' }}>
                            <p>{item.name}</p>
                        </Link>
                    </div>
                ))}
            </S.Header>

            <S.CenterViewName
            >
                <S.FirstName>Marcelo</S.FirstName>
                <S.LastName>Azevedo</S.LastName>
            </S.CenterViewName>

            <S.Footer>
                <a href="https://api.whatsapp.com/send/?phone=91982016505&text&type=phone_number&app_absent=0" target="_blank">
                    <img src={whatsapp} alt="Contato de whatssap" style={{ width: 50, marginRight: 10, marginLeft: 15, cursor: 'pointer' }} />
                </a>
                <a href="https://www.linkedin.com/in/marcelorafael23/"  target="_blank">
                    <img src={linkdin} alt="Contato de Linkein" style={{ width: 50, cursor: 'pointer', marginRight: 10 }} />
                </a>
                <a href="https://github.com/marcelorafael"  target="_blank">
                    <img src={github} alt="Contato de GitHub" style={{ width: 50, cursor: 'pointer' }} />
                </a>
            </S.Footer>
        </S.Wraper>
    )
}

export default Home;