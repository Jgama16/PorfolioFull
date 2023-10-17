"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from './repositores.module.css'

export const Repositore = () => {
  return (
    <>

    <section>
        <h5 className={styles.h5}>Estos son todos los proyectos en los que e trabajado</h5>
        <div className={styles.container_repositore}>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea className='cards'>
            <CardMedia
            component="img"
            width={100}
            height={100}
            image="/imagen/google.png"
            alt="google"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Proyecto de google
            </Typography>
            <Typography variant="body2" color="text.secondary">
                En este proyecto busque hacer la pagina de inicio de google
            </Typography>
            <a href='https://jgama16.github.io/google/'>Google</a>
            </CardContent>
        </CardActionArea>
        </Card>
        
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea className='cards'>
            <CardMedia
            component="img"
            width={100}
            height={100}
            image="/imagen/Cursocss.png"
            alt="cursocss"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Css y html
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Uno de los primeros proyectos utilizando solamente html css y javaScript
            </Typography>
            <a href='https://jgama16.github.io/'>Css</a>
            </CardContent>
        </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea className='cards'>
            <CardMedia
            component="img"
            width={100}
            height={100}
            image="/imagen/loi.png"
            alt="loi"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Hotels
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Cuarto reto en el semillero de devtolls utilizando por primera vez react note js con la colaboracion de mis tutores heidy y daniel mayo
            </Typography>
            <a href='https://github.com/jgama16/hotels2.0.git'>Hotels</a>
            </CardContent>
        </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea className='cards'>
            <CardMedia
            component="img"
            width={100}
            height={100}
            image="/imagen/instagram.png"
            alt="instagram"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Instagram
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Segundo proyecto creando interfaces de paginas webs ya creadas
            </Typography>
            <a href='https://jgama16.github.io/instagam/'>Instagram</a>
            </CardContent>
        </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea className='cards'>
            <CardMedia
            component="img"
            width={100}
            height={100}
            image="/imagen/primer.png"
            alt="prime"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Mi Primera pagina web
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Mi Primer Proyecto utilizando html y css
            </Typography>
            <a href='https://jgama16.github.io/primer_proyecto/'>web</a>
            </CardContent>
        </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea className='cards'>
            <CardMedia
            component="img"
            width={100}
            height={100}
            image="/imagen/swipe.png"
            alt="swipe"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Swipe
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Primer Proyecto del semillero de devtols utilizando html y css
            </Typography>
            <a href='https://jgama16.github.io/Swip//'>Swipe</a>
            </CardContent>
        </CardActionArea>
        </Card>
        </div>
    </section>
    </>
  );
}