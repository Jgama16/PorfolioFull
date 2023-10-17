"use client"
import React from "react";
import styles from "./header.modules.css"
import Image from "next/image";
import LinearIndeterminate from "../../atoms/Burguer";



export function Part_one(){
    return(
        <>
        <header >
            <div className="contenedor_inic">
                <div className="primero">
                
                <h3>Welcome to my Portfolio </h3>
                <h1 > Hi! i'm Juan Web Designer </h1>
                
                </div>
                <div className="segundo">
                <Image
                className="lobo"
                src="/images/lobo.png"
                alt="samurai"
                width={350}
                height={350}
                />
                </div>
            </div>
        </header>
            <LinearIndeterminate/>
        </>
    )
}