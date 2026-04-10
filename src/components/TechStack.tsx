'use client'

import { motion } from 'framer-motion'

export default function TechStack() {
  const categories = [
    {
      title: 'Backend',
      desc: 'Разработка API и серверной логики',
      skills: ['Python', 'FastAPI', 'Django', 'SQLAlchemy']
    },
    {
      title: 'Frontend',
      desc: 'Создание современных интерфейсов',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'Data & AI',
      desc: 'Анализ данных и интеграция ML-моделей',
      skills: ['Pandas', 'NLP', 'ReportLab', 'Web Parsing', 'AI/ML Integration']
    }
  ]

  return (
    <section id="stack" className="min-h-screen py-32 px-6 md:px-20 bg-[#111111] text-[#F4F4F4]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-white mb-2">
          Технологический стек
        </h2>
        <div className="w-24 h-1 bg-white"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.15, duration: 0.7 }}
            className="border-t border-[#333] pt-8"
          >
            <h3 className="text-2xl font-bold mb-2 uppercase tracking-wide">
              {category.title}
            </h3>
            <p className="text-gray-400 mb-6 text-sm">
              {category.desc}
            </p>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2.5 bg-[#F4F4F4] text-[#111111] text-sm font-medium rounded-full hover:bg-white transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}