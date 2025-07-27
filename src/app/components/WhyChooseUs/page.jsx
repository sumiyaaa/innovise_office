//ye black background k sath hn

'use client';
import React from 'react';
import { Briefcase, CheckCircle, Users } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="relative w-full text-white py-20 px-4 overflow-hidden bg-[#0d0c11]">
      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">Why </span>
            <span className="text-[#8CC63F]">Choose Us</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our mission is to deliver impactful ServiceNow training & services through expert guidance and real-world experience.
          </p>
        </div>

        {/* Benefits and Video Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Benefits List */}
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <CheckCircle className="text-[#8CC63F]" size={28} />
              <div>
                <h3 className="text-xl font-semibold">Certified Trainers</h3>
                <p className="text-sm text-gray-400">Learn from certified ServiceNow professionals with hands-on industry experience.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Briefcase className="text-[#8CC63F]" size={28} />
              <div>
                <h3 className="text-xl font-semibold">Real Projects</h3>
                <p className="text-sm text-gray-400">Work on real ServiceNow implementations and practical case studies.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Users className="text-[#8CC63F]" size={28} />
              <div>
                <h3 className="text-xl font-semibold">Job Support</h3>
                <p className="text-sm text-gray-400">Post-training support, interview guidance, and career mentoring available.</p>
              </div>
            </li>
          </ul>

          {/* Video Placeholder */}
          <video
  controls
  className="w-full rounded-xl border-2 border-[#8CC63F]"
>
  <source src="/public/images/vedio.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-gray-700 mt-16">
          <div className="flex flex-col items-center">
            <h4 className="text-3xl font-bold text-[#8CC63F]">30+</h4>
            <p className="text-gray-300 text-sm">Professionals Trained</p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-3xl font-bold text-[#8CC63F]">80+</h4>
            <p className="text-gray-300 text-sm">Implimented Project</p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-3xl font-bold text-[#8CC63F]">5+</h4>
            <p className="text-gray-300 text-sm">Years Experience</p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-3xl font-bold text-[#8CC63F]">24/7</h4>
            <p className="text-gray-300 text-sm">Client Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}







// // ye white
// 'use client';
// import React from 'react';
// import { Briefcase, CheckCircle, Users } from 'lucide-react';

// export default function WhyChooseUs() {
//   return (
//     <section className="relative w-full text-black py-20 px-4 overflow-hidden bg-white">
//       {/* Content Container */}
//       <div className="relative z-10 max-w-6xl mx-auto space-y-12">
//         {/* Heading */}
//         <div className="text-center space-y-4">
//           <h2 className="text-4xl md:text-5xl font-bold">
//             <span className="text-black">Why </span>
//             <span className="text-[#8CC63F]">Choose Us</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Our mission is to deliver impactful ServiceNow training & services through expert guidance and real-world experience.
//           </p>
//         </div>

//         {/* Benefits and Video Section */}
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Benefits List */}
//           <ul className="space-y-6">
//             <li className="flex items-start gap-4">
//               <CheckCircle className="text-[#8CC63F]" size={28} />
//               <div>
//                 <h3 className="text-xl font-semibold">Certified Trainers</h3>
//                 <p className="text-sm text-gray-600">Learn from certified ServiceNow professionals with hands-on industry experience.</p>
//               </div>
//             </li>
//             <li className="flex items-start gap-4">
//               <Briefcase className="text-[#8CC63F]" size={28} />
//               <div>
//                 <h3 className="text-xl font-semibold">Real Projects</h3>
//                 <p className="text-sm text-gray-600">Work on real ServiceNow implementations and practical case studies.</p>
//               </div>
//             </li>
//             <li className="flex items-start gap-4">
//               <Users className="text-[#8CC63F]" size={28} />
//               <div>
//                 <h3 className="text-xl font-semibold">Job Support</h3>
//                 <p className="text-sm text-gray-600">Post-training support, interview guidance, and career mentoring available.</p>
//               </div>
//             </li>
//           </ul>

//           {/* Video */}
//           <video
//             controls
//             className="w-full rounded-xl border-2 border-[#8CC63F]"
//           >
//             <source src="/images/vedio.MP4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>

//         {/* Stats Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-gray-200 mt-16">
//           <div className="flex flex-col items-center">
//             <h4 className="text-3xl font-bold text-[#8CC63F]">30+</h4>
//             <p className="text-gray-700 text-sm">Professionals Trained</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <h4 className="text-3xl font-bold text-[#8CC63F]">80+</h4>
//             <p className="text-gray-700 text-sm">Implemented Projects</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <h4 className="text-3xl font-bold text-[#8CC63F]">5+</h4>
//             <p className="text-gray-700 text-sm">Years Experience</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <h4 className="text-3xl font-bold text-[#8CC63F]">24/7</h4>
//             <p className="text-gray-700 text-sm">Client Support</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
