
import React from 'react';

const GalaxyBackground: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes move-twink-back {
            from {background-position:0 0;}
            to {background-position:-10000px 5000px;}
        }
        @keyframes move-clouds-back {
            from {background-position:0 0;}
            to {background-position:10000px 0;}
        }
        .stars, .twinkling, .clouds {
          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          width:100%;
          height:100%;
          display:block;
        }
        .stars {
          background:#000 url(https://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
          z-index:-3;
        }
        .twinkling{
          background:transparent url(https://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
          z-index:-2;
          animation:move-twink-back 200s linear infinite;
        }
        .clouds{
          background:transparent url(https://www.script-tutorials.com/demos/360/images/clouds.png) repeat top center;
          z-index:-1;
          animation:move-clouds-back 200s linear infinite;
        }
        .galaxy-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse at center, rgba(49, 46, 129, 0.3) 0%, rgba(0,0,0,0) 70%);
          z-index: -1;
        }
      `}</style>
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
        <div className="galaxy-overlay"></div>
      </div>
    </>
  );
};

export default GalaxyBackground;
