import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../../data/constants';
import { Button } from '../ui/Button';
import { Link } from 'react-scroll';

function FrameAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const frameCount = 40;
    const images: HTMLImageElement[] = [];
    let loadedImages = 0;

    for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = `/frames/ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
        img.onload = () => loadedImages++;
        images.push(img);
    }

    let currentFrame = 0;
    let targetFrame = 0;
    let animationFrameId: number;

    const render = () => {
      if (loadedImages > 0) {
        currentFrame += (targetFrame - currentFrame) * 0.1;
        
        let displayFrame = Math.round(currentFrame);
        if (displayFrame < 0) displayFrame = 0;
        if (displayFrame >= frameCount) displayFrame = frameCount - 1;

        if (images[displayFrame] && images[displayFrame].complete) {
          const img = images[displayFrame];
          const canvasRatio = canvas.width / canvas.height;
          const imgRatio = img.width / img.height;

          let drawWidth, drawHeight, offsetX = 0, offsetY = 0;

          if (canvasRatio > imgRatio) {
              drawWidth = canvas.width;
              drawHeight = canvas.width / imgRatio;
              offsetY = (canvas.height - drawHeight) / 2;
          } else {
              drawHeight = canvas.height;
              drawWidth = canvas.height * imgRatio;
              
              if (window.innerWidth < 768) {
                  // Focus point is around 80% to the right side where the truck sits
                  const focusX = drawWidth * 0.8;
                  offsetX = (canvas.width / 2) - focusX;
                  
                  // Ensure we don't draw outside bounds
                  if (offsetX > 0) offsetX = 0;
                  if (offsetX + drawWidth < canvas.width) offsetX = canvas.width - drawWidth;
              } else {
                  offsetX = (canvas.width - drawWidth) / 2;
              }
          }
          
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight; // The height of the hero section
      
      let fraction = scrollY / maxScroll;
      if (fraction > 1) fraction = 1;
      if (fraction < 0) fraction = 0;

      targetFrame = fraction * (frameCount - 1);
    };

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (parent) {
         canvas.width = parent.clientWidth;
         canvas.height = parent.clientHeight;
         handleScroll();
      }
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // initial trigger delay slightly to ensure DOM is ready
    setTimeout(() => {
        handleResize();
        handleScroll();
    }, 10);

    // Start render loop
    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full object-cover z-0" />;
}

export function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center bg-betim-dark overflow-hidden">
      
      {/* Background Animation Area (Full background) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <FrameAnimation />
        {/* Subtle overlay for better text contrast, fading from dark on the left to transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-betim-dark/95 via-betim-dark/60 to-transparent" />
        <div className="absolute inset-0 bg-black/20" /> {/* Slight darkening for depth */}
      </div>

      <div className="container-custom relative z-10 flex flex-col md:flex-row items-center h-full pt-20">
        
        {/* Left Content Area */}
        <div className="w-full md:w-[60%] text-white flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block py-1 px-3 rounded-full bg-betim-accent/20 border border-betim-accent/30 text-betim-accent font-semibold text-sm mb-6 uppercase tracking-wider shadow-sm">
              {siteData.company.name}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight drop-shadow-lg">
              {siteData.hero.headline}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed drop-shadow-md">
              {siteData.hero.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="contact" smooth={true} duration={500} offset={-80}>
                <Button size="lg" className="w-full sm:w-auto shadow-xl">
                  {siteData.hero.ctaPrimary}
                </Button>
              </Link>
              <Link to="about" smooth={true} duration={500} offset={-80}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-betim-dark backdrop-blur-sm">
                  {siteData.hero.ctaSecondary}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Right side is empty logic to let animation show through clearly on the right side */}
        <div className="hidden md:block md:w-[40%]"></div>
        
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-white/80 text-sm tracking-widest uppercase drop-shadow-md font-medium">Role para baixo</span>
        <div className="w-[1px] h-12 bg-white/30 origin-top overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-betim-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
