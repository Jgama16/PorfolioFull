"use client"
import React from "react";
import styles from "./my.css"
import Image from "next/image";
import { Typography } from "@mui/material";
import LinearIndeterminate from "../../atoms/Burguer";



export function My(){
    return(
        <>
        <h4 className="my">Sobre mi</h4>
        <section className="container_my">
                <div className="prime">
                <Image className="mir"
                src="/images/yo.jpg"
                alt="samurai"
                width={350}
                height={400}
                />
                <div >
                   <h4 className="subtitle">Contactame</h4> 

                    <button className="direcciones">
                        <a href="https://w.app/ySVZ7T">
                            <Image className="contact"
                            src="/images/whatsapp.png"
                            alt="what"
                            width={60}
                            height={60}    
                        /></a>
                    </button>
                    
                    <button className="direcciones">
                        <a href="https://github.com/Jgama16">
                        <Image className="contact"
                            src="/images/github.png"
                            alt="what"
                            width={60}
                            height={60}
                        />
                        </a>
                        
                    </button>

                    <button className="direcciones">
                        <a href="https://www.linkedin.com/in/juan-eduardo-gama-torres-2268b1241">
                        <Image className="contact"
                            src="/images/linkedin.png"
                            alt="what"
                            width={60}
                            height={60}
                        />
                        </a>
                        
                    </button>
                </div>
                </div>
                <div className="second">
                <h1 className="sobreMy">Developer Web</h1>
                <br/>
                <div className="ter">
                    Mi nombre es juan eduardo gama torres tengo 23 años vivo en fusagasuga y estoy estudiando desarrolo de sofware expecializandome en front end y actualmente voy cursando el 4 semestre de ingenieria de sistemas en la universidad abierta y a distancia, estando en busca de una oportunidad que me permita sacar a relucir todo lo que e aprendido
                </div>

                <h1 className="sobreMy">Conocimientos</h1>
                <br/>
                <div className="ter">
                    Tengo conocimiento sobre los leguajes de programacion de java, javaScript, Python y framework como react django y librerias como bootstrap Material ui
                </div>
                
                </div>
            
        </section>
        <LinearIndeterminate/>
        </>
    )
}