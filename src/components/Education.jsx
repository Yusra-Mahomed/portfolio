// export default function Education() {
//   return (
//     <section
//       id="education"
//       className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900"
//     >
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">
//           Education
//         </h2>

//         <div className="relative group">
//           {/* Gradient Glow Border */}
//           <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

//           <div className="relative bg-slate-900/80 backdrop-blur-xl p-10 rounded-2xl border border-slate-800 shadow-2xl">
            
//             {/* Degree Header */}
//             <div className="flex flex-col md:flex-row md:justify-between md:items-center">
//               <div>
//                 <h3 className="text-2xl font-semibold text-white">
//                   Bachelor of Software Engineering (Honours)
//                 </h3>
//                 <p className="text-slate-400 mt-2">
//                   University of New South Wales · Sydney, NSW
//                 </p>
//               </div>

//               <div className="mt-4 md:mt-0 text-slate-400 text-sm md:text-base">
//                 Feb 2022 – Dec 2025
//               </div>
//             </div>

//             {/* Academic Stats */}
//             <div className="flex flex-wrap gap-4 mt-6">
//               <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20">
//                 WAM: 84.310
//               </span>
//               <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium border border-purple-500/20">
//                 Dean’s List 2022
//               </span>
//             </div>

//             {/* Thesis Section */}
//             <div className="mt-10 pt-8 border-t border-slate-800">
//               <div className="flex flex-col md:flex-row md:justify-between md:items-start">
//                 <div>
//                   <h4 className="text-lg font-semibold text-blue-400">
//                     Honours Thesis
//                   </h4>
//                   <p className="mt-3 text-slate-300 leading-relaxed">
//                     Using AI to Build a Topic-Based Question Bank for Adaptable
//                     Study Resource Curation
//                   </p>
//                 </div>

//                 <span className="mt-4 md:mt-0 px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/20">
//                   High Distinction – 92
//                 </span>
//               </div>

//               <ul className="mt-6 space-y-3 text-slate-400">
//                 <li className="flex items-start gap-3">
//                   <span className="text-blue-400 mt-1">▹</span>
//                   Built an embedding-based topic classification pipeline
//                   integrated with LLM-driven question generation using
//                   Retrieval-Augmented Generation (RAG).
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="text-blue-400 mt-1">▹</span>
//                   Optimised prompts and evaluation workflows to improve
//                   classification accuracy and output relevance.
//                 </li>
//               </ul>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">
          Education
        </h2>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
          
          {/* Degree Row */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Bachelor of Software Engineering (Honours)
              </h3>
              <p className="text-slate-400 mt-1">
                University of New South Wales · Sydney, NSW
              </p>
            </div>

            <p className="text-slate-400 mt-3 md:mt-0 text-sm">
              2022 – 2026
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="text-sm text-slate-300">
              WAM: <span className="text-blue-400">84.310</span>
            </span>
            <span className="text-sm text-slate-300">
              Dean’s List 2022
            </span>
            <span className="text-sm text-slate-300">
              Honours Thesis (High Distinction: <span className="text-blue-400">92</span>)
            </span>
          </div>

          {/* Thesis (Shortened) */}
          <p className="mt-6 text-slate-400 text-sm">
            Thesis: <span className="text-slate-300">
              Using AI to Build a Topic-Based Question Bank for Adaptable Study Resource Curation
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}