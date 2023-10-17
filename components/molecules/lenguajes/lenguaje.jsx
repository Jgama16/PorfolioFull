"use client"
import * as React from 'react';
import Image from 'next/image';
import styles from './lenguaje.module.css'
import LinearIndeterminate from '../../atoms/Burguer';
export const Lenguaje = () => {
  
  return (
    <>
    <div className={styles.text_lenguaje}>
        Estos son las herramientas que manejo
    </div>
    <secction className={styles.container_lenguaje}>
        <div className={styles.cards}>
        
            
            <Image
            className={styles.lenguaje}
            src="/images/html-5.png"
            alt='css'
            width={100}
            height={100}
            />
        
        
        </div>

        <div className={styles.cards}>
            
            
            <Image
            className={styles.lenguaje}
            src="/images/csse.png"
            alt='css'
            width={100}
            height={100}
            />
            
        </div>
        <div className={styles.cards}>
            
            
            <Image
            className={styles.lenguaje}
            src="/images/js.png"
            alt='css'
            width={100}
            height={100}
            />
            
            
        </div>
        <div className={styles.cards}>
            
            
            <Image
            className={styles.lenguaje}
            src="/images/react-2.svg"
            alt='css'
            width={100}
            height={100}
            />
            
            
        </div>
        <div className={styles.cards}>
            
            
            <Image
            className={styles.lenguaje}
            src="/images/next-js.svg"
            alt='css'
            width={100}
            height={100}
            />
            
            
        </div>
        <div className={styles.cards}>
            
            
            <Image
            className={styles.lenguaje}
            src="/images/bootstrap-5-1.svg"
            alt='css'
            width={100}
            height={100}
            />
            
            
        </div>
        <div className={styles.cards}>
            
            
            <Image
            className={styles.lenguaje}
            src="/images/java-14.svg"
            alt='css'
            width={100}
            height={100}
            />
            
            
        </div>
        <div className={styles.cards}>
            
            
            <Image
            className={styles.lenguaje}
            src="/images/nodejs-icon.svg"
            alt='css'
            width={100}
            height={100}
            />
            
            
        </div>
        <div className={styles.cards}>
            
            
            <Image
            className={styles.lenguaje}
            src="/images/github.png"
            alt='css'
            width={100}
            height={100}
            />
            
            
        </div>
        <div className={styles.cards}>
            
            
            <Image
            className={styles.lenguaje}
            src="/images/material-ui-1.svg"
            alt='css'
            width={100}
            height={100}
            />
            
            
        </div>
        <div className={styles.cards}>
            
            
            <Image
            className={styles.lenguaje}
            src="/images/python-5.svg"
            alt='css'
            width={100}
            height={100}
            />
            
            
        </div>
        <div className={styles.cards}>
            
            
            <Image
            className={styles.lenguaje}
            src="/images/django.svg"
            alt='css'
            width={100}
            height={100}
            />
            
            
        </div>
    </secction>
        <LinearIndeterminate/>
    </>
  );
}






