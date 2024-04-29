// import React, { useCallback } from 'react'
// import useEmblaCarousel from 'embla-carousel-react'
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import IMAGES from '../images';
// import '../css/embla.css';

// export function EmblaCarousel() {
//   const [emblaRef, emblaApi] = useEmblaCarousel();
//   const images = {...IMAGES};
//     // console.log(images);
//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev()
//   }, [emblaApi])

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext()
//   }, [emblaApi])

//   return (
//     <div className="embla" ref={emblaRef}>
//       <Box className="embla__container" sx={{mb: 2}}>
//         <div className="embla__slide"><img src={images.img01} /></div>
//         <div className="embla__slide"><img src={images.img02} /></div>
//         <div className="embla__slide"><img src={images.img03} /></div>
//         <div className="embla__slide"><img src={images.img04} /></div>
//         <div className="embla__slide"><img src={images.img05} /></div>
//         <div className="embla__slide"><img src={images.img06} /></div>
//         <div className="embla__slide"><img src={images.img07} /></div>
//         <div className="embla__slide"><img src={images.img08} /></div>
//         <div className="embla__slide"><img src={images.img09} /></div>
//         <div className="embla__slide"><img src={images.img10} /></div>
//         <div className="embla__slide"><img src={images.img11} /></div>
//       </Box>
//       <Button sx={{mr: 1}} onClick={scrollPrev} variant='contained' color='secondary'>
//         {'<'}
//       </Button>
//       <Button sx={{ml: 1}} onClick={scrollNext} variant='contained' color='secondary'>
//         {'>'}
//       </Button>
//     </div>
//   )
// }
