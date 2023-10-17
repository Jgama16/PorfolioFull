import * as React from 'react';
import { Image } from 'react-bootstrap';
import styles from './estudios.modules.css'

export const Study =() =>{

    return (
        <>
        <h2 className='study'>
        Mis estudios
        </h2>
        <div className="contenedor_estudio">
                <div className="lectura">
                        <h2>
                        Los Estudios que el logrado alcanzar en estos años 
                        </h2>
                        <h2>
                        -Voy en 4 semestre de la universidad abierta a distancia estudiando ingenieria de sistemas
                        </h2>
                        <h2>
                        -Termine un semillero en devtolls de 6 meses en el que vimos todas las ramas necesarias para iniciar a trabajar y desarrollar sitios  web luego profundice en desarrolo fron end aprendiendo todo lo relacionado con react y note js logrando culminar los estudios preparado para el ambito laboral 
                        </h2>
                        <h2>
                        -Curso basico de programacion con javaScript como fundamentos
                        </h2>
                        <h2>
                        -Curso en course de html css y javaScript profundizando en los conocimientos que tengo para lograr desempeñarme mejor en mi campo
                        </h2>
                        <h2>
                        -Curso de javaScript en mi Tic dado por el gobierno con colaboracion de la universidad distrital francisco jose de caldas
                        </h2>
                </div>

                <div className="contai">
                        <Image className="contactos"
                        src="/imagen/devv.png"
                        alt="what"
                        width={150}
                        height={150}
                                />
                        <Image className="contactos"
                        src="/imagen/profile.jpg"
                        alt="what"
                        width={150}
                        height={150}
                                />
                        <Image className="contactos"
                        src="/imagen/logounad.png"
                        alt="what"
                        width={150}
                        height={150}
                                />
                        <Image className="contactos"
                        src="/images/uni.jpg"
                        alt="what"
                        width={150}
                        height={150}
                                />
                        <Image className="contactos"
                        src="/images/coursera.svg"
                        alt="what"
                        width={150}
                        height={150}
                                />
                </div>

        </div>

    <footer className='con'>
        <div className="container">
        <Image className="contact"
            src="/images/instagram-glyph-1.svg"
            alt="what"
            width={60}
            height={60}
                    />
            <Image className="contact"
            src="/images/github.png"
            alt="what"
            width={60}
            height={60}
                    />
            <Image className="contact"
            src="/images/linkedin.png"
            alt="what"
            width={60}
            height={60}
                    />
            <Image className="contact"
            src="/images/whatsapp.png"
            alt="what"
            width={60}
            height={60}
                    />
            <p>&copy; PortafolioJgama 2023</p>
        </div>
    </footer>
    </>
  );
}