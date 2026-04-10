'use client'

import Header from '@/components/Header'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

// Автоматический скролл наверх при загрузке
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return null
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F4F4] text-[#111111]">
      <ScrollToTop />
      <Header />
      
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="select-none text-6xl md:text-[10vw] font-black uppercase leading-[0.85] tracking-tighter mb-8">
            Full Stack<br />
            Python & React<br />
            Developer
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-xl md:text-2xl max-w-2xl font-medium opacity-80"
        >
          Разрабатываю масштабируемые веб-приложения и сервисы.
        </motion.p>
      </section>

      <TechStack />
      <Projects />
      <Footer />
    </main>
  )
}