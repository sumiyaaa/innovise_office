// 'use client';
// import React from 'react';

// const GradientBackground = ({ children }) => {
//   return (
//     <div
//       className="relative min-h-screen w-full overflow-hidden"
//       style={{
//         backgroundImage:
//           "linear-gradient(to top right, #0d0c11, #0d0c11, #112211), url('/images/grid.png')",
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="relative z-10">{children}</div>
//     </div>
//   );
// };

// export default GradientBackground;










'use client';
import React from 'react';

const GradientBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-[#0d0c11] overflow-hidden">
      {/* Grid Lines (stronger contrast) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* Green Glow - Bottom Left */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 0% 100%, #8CC63F33 0%, transparent 60%)',
        }}
      ></div>

      {/* Green Glow - Top Right */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 100% 0%, #8CC63F33 0%, transparent 60%)',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GradientBackground;



// 'use client';
// import React from 'react';

// const GradientBackground = ({ children }) => {
//   return (
//     <div className="relative min-h-screen w-full bg-[#0d0c11] overflow-hidden">
//       {/* Grid Lines Overlay */}
//       <div
//         className="absolute inset-0 z-0 opacity-10"
//         style={{
//           backgroundImage:
//             `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
//              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
//           backgroundSize: '40px 40px',
//         }}
//       ></div>

//       {/* Gradient Overlay (bottom left greenish tint) */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           background: 'radial-gradient(circle at 0% 100%, #8CC63F20 0%, transparent 60%)',
//         }}
//       ></div>

//       {/* Content Layer */}
//       <div className="relative z-10">{children}</div>
//     </div>
//   );
// };

// export default GradientBackground;

