'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 bg-background/80 backdrop-blur-sm">
      {/* Логотип */}
      <div className="text-xl font-bold tracking-tight">
        Литунова Алина
      </div>

      {/* Десктопная навигация */}
      <nav className="hidden md:flex gap-6">
        <a href="#stack" className="text-sm uppercase tracking-wide hover:opacity-60 transition-opacity">
          Stack
        </a>
        <a href="#projects" className="text-sm uppercase tracking-wide hover:opacity-60 transition-opacity">
          Projects
        </a>
        <a href="#contact" className="text-sm uppercase tracking-wide hover:opacity-60 transition-opacity">
          Contact
        </a>
      </nav>

      {/* Мобильное меню (гамбургер) */}
      <button 
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="w-6 h-0.5 bg-primary mb-1.5"></div>
        <div className="w-6 h-0.5 bg-primary mb-1.5"></div>
        <div className="w-6 h-0.5 bg-primary"></div>
      </button>

      {/* Выпадающее мобильное меню */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-background p-6 md:hidden flex flex-col gap-4 border-t">
          <a href="#stack" className="text-sm uppercase tracking-wide">Stack</a>
          <a href="#projects" className="text-sm uppercase tracking-wide">Projects</a>
          <a href="#contact" className="text-sm uppercase tracking-wide">Contact</a>
        </nav>
      )}
    </header>
  )
}