'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111111] text-[#F4F4F4] border-t border-[#333]">
      <div className="py-32 px-6 md:px-20">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-7xl font-bold uppercase leading-tight mb-8">
            Давайте создадим<br />
            что-то вместе.
          </h2>
          
          <a 
            href="mailto:alina.litunova@example.com" // ⚠️ ЗАМЕНИ НА СВОЮ ПОЧТУ
            className="inline-block text-xl font-medium border-b-2 border-[#F4F4F4] pb-1 hover:opacity-60 transition-opacity"
          >
            alyalitunova@mail.ru
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-8 text-sm uppercase tracking-widest font-medium"
        >
          <a href="https://t.me/slkdwpz" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
            Telegram
          </a>
          <a href="https://github.com/maybelaterzxcsd" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
            GitHub
          </a>
          <a href="https://vk.com/nonpcbigapm" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
            VK
          </a>
        </motion.div>

      </div>

      <div className="px-6 md:px-20 py-8 border-t border-[#333] flex justify-between text-xs uppercase text-gray-600">
        <span>© 2026 Litunova Alina</span>
        <span>Nizhny Novgorod, Russia</span>
      </div>
    </footer>
  )
}