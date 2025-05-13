;(function(){
    // ► Original art-board dimensions
    const ORIG_W = 1440;
    const ORIG_H = 900;
  
    const cont = document.getElementById('cont');
    if (!cont) return;
  
    // ► How much we need to scale to fit the real viewport
    const scaleX = window.innerWidth  / ORIG_W;
    const scaleY = window.innerHeight / ORIG_H;
    const scale  = Math.min(scaleX, scaleY);
  
    // ► Apply a uniform CSS transform
    cont.style.transform       = `scale(${scale})`;
    cont.style.transformOrigin = 'top left';
    cont.style.width           = ORIG_W + 'px';
    cont.style.height          = ORIG_H + 'px';
  
    // Prevent extra vertical scroll
    document.body.style.height = (ORIG_H * scale) + 'px';
    document.body.style.margin = '0';
  })();
  