import React, { ReactElement } from "react";

import { Link } from "react-router-dom";

import * as S from './styles'



const Home = () => {
    return (
        <S.Wraper>
            <S.Header>
                {[{ name: 'Início' }, { name: 'Sobre' }, { name: 'Meus Projetos' }].map((item: any) => (
                    <div style={{
                        minWidth: 80
                    }}>
                        <Link to='/' style={{ textDecoration: 'none', color:'#fff' }}>
                            <p>{item.name}</p>
                        </Link>
                    </div>
                ))}
            </S.Header>
            <S.CenterView>
                <p>Home</p>
            </S.CenterView>
        </S.Wraper>
    )
}

export default Home;