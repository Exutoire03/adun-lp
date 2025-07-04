"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="bg-[#FFF8E7] text-gray-900">
      
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 bg-gradient-to-br from-[#C0392B] via-[#D35400] to-[#F39C12] text-white relative overflow-hidden">
       
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-xl"
        >
          Manger sainement,<br /> avec les saveurs de chez nous.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl mb-10 max-w-xl"
        >
          Adun est l&apos;application de nutrition africaine qui t&apos;aide à mieux manger, à partir de ce que tu as chez toi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col md:flex-row gap-4 z-10 justify-center items-center"
        >
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            title="Télécharger sur Google Play"
            className="group"
          >
            <div className="relative w-48 h-20 transform transition duration-300 group-hover:scale-105 group-hover:shadow-xl">
              <Image
                src="/android3.png"
                alt="Google Play"
                fill
                className="object-contain cursor-pointer"
              />
            </div>
          </a>
          <a
            href="https://www.apple.com/fr/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            title="Télécharger sur l'App Store"
            className="group"
          >
            <div className="relative w-48 h-20 transform transition duration-300 group-hover:scale-105 group-hover:shadow-xl">
              <Image
                src="/ios.png"
                alt="App Store"
                fill
                className="object-contain cursor-pointer"
              />
            </div>
          </a>
        </motion.div>


        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <motion.div animate={{ y: [-20, 20, -20] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-10 left-10 w-20 h-20 bg-[#F39C12] opacity-20 rounded-full blur-2xl"></motion.div>
          <motion.div animate={{ y: [30, -30, 30] }} transition={{ duration: 12, repeat: Infinity }} className="absolute bottom-10 right-20 w-28 h-28 bg-[#D35400] opacity-10 rounded-full blur-2xl"></motion.div>
        </div>
      </section>

      
      <section className="py-24 px-6 text-center bg-[#FFF8E7] relative">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Pourquoi Adun ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg text-gray-700"
        >
          Parce que l&apos;alimentation saine peut aussi rimer avec tradition, goût, et proximité. Adun valorise les recettes africaines, les ingrédients locaux, et te guide vers une meilleure santé de façon simple et intuitive.
        </motion.p>
      </section>

      
      <section id="features" className="py-24 bg-[#FCEFD8] px-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Fonctionnalités phares
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {[{
            title: '🍲 Suggestions de plats',
            color: '#C0392B',
            desc: 'Entre tes ingrédients disponibles, et découvre les plats africains que tu peux cuisiner !'
          }, {
            title: '🧮 Calcul de l&apos;IMC',
            color: '#145A32',
            desc: 'Évalue ton indice de masse corporelle et reçois des conseils adaptés à ton profil.'
          }, {
            title: '📚 Recettes africaines',
            color: '#F39C12',
            desc: 'Explore des plats locaux classés selon ton objectif : prise de masse, équilibre, ou perte de poids.'
          }, {
            title: '🎮 Jeu nutritionnel',
            color: '#D35400',
            desc: 'Apprends en t&apos;amusant grâce à des quiz ludiques sur la nutrition africaine.'
          }].map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition"
            >
              <h3 className={`text-xl font-semibold mb-2`} style={{ color: feat.color }}>{feat.title}</h3>
              <p>{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      
      <section id="download" className="py-24 px-6 bg-[#C0392B] text-white text-center relative overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Prêt à mieux manger avec Adun ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          Télécharge gratuitement l&apos;app et redécouvre la saveur du bien-être.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col md:flex-row gap-4 z-10 justify-center items-center"
        >
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            title="Télécharger sur Google Play"
            className="group"
          >
            <div className="relative w-48 h-20 transform transition duration-300 group-hover:scale-105 group-hover:shadow-xl">
              <Image
                src="/android3.png"
                alt="Google Play"
                fill
                className="object-contain cursor-pointer"
              />
            </div>
          </a>
          <a
            href="https://www.apple.com/fr/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            title="Télécharger sur l'App Store"
            className="group"
          >
            <div className="relative w-48 h-20 transform transition duration-300 group-hover:scale-105 group-hover:shadow-xl">
              <Image
                src="/ios.png"
                alt="App Store"
                fill
                className="object-contain cursor-pointer"
              />
            </div>
          </a>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-[#FFF8E7] skew-y-[-3deg] z-0"></div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-[#FFF8E7] text-sm text-gray-600 relative z-10">
        © {new Date().getFullYear()} Adun. Tous droits réservés.
      </footer>
    </div>
  )
}
