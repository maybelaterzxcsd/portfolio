'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'MedMind',
    year: '2026 — Present',
    desc: 'Медицинская система мониторинга. Дельта-анализ истории болезни, проверка лекарственных взаимодействий (Drug-Drug Interactions) и визуализация лабораторных показателей в реальном времени.',
    stack: [
      'React.js',
      'Vite',
      'Python',
      'FastAPI',
      'ReportLab',
      'NLP/LLM'
    ]
  },
  {
    title: 'Cogito AI',
    year: '2025',
    desc: 'Интеллектуальный веб-помощник для студентов-медиков. Календарь занятий и отработок, AI-антиплагиат с рекомендациями по тексту, симулятор экзаменов на основе загруженных вопросов и сервис для поиска репетитора через Telegram-бота.',
    stack: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'PostgreSQL',
      'OpenAI API',
      'Docker',
      'Telegram Bot API'
    ]
  }
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-32 px-6 md:px-20 bg-[#F4F4F4]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-black mb-2">
          Избранные проекты
        </h2>
        <div className="w-24 h-1 bg-black"></div>
      </motion.div>

      <div className="space-y-16 md:space-y-24">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            className="group border-t border-black/20 pt-8 hover:border-black transition-colors duration-500"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16">
              <div className="md:w-1/4 text-sm font-medium text-gray-500 pt-2">
                {project.year}
              </div>

              <div className="md:w-3/4">
                <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {project.title}
                </h3>
                <p className="text-lg md:text-xl opacity-80 mb-6 max-w-3xl leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-black/5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}