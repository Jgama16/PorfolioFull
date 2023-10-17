
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import styles from "./menu.module.css"
import Image from 'next/image';

export const Menu_initial =() => {
  return (
    <>
    <Box sx={{ flexGrow: 1 }} className={styles.caja}>
      <AppBar position="static" className={styles.container}>
        <Toolbar >
          <Image 
            src="/images/hacker.png"
            alt='hacker'
            width={50}
            height={50}
            
          />
            
          
          <Typography  component="div" sx={{ flexGrow: 1 }}>
            <h6 className={styles.nombre}>Juan Eduardo Gama Torres</h6>
          </Typography>
          <div className={styles.contenedor_menu}>
            <a href="/Part_one" className={styles.enlace}>Inicio</a>
            <a href="/" className={styles.enlace}>Sobre mi</a>
            <a href="/" className={styles.enlace}>Mis Proyectos </a>
            <a href="/" className={styles.enlace}>Estudios</a>
          </div>
          
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}