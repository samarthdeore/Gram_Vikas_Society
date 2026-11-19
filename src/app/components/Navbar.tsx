import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const navLinks = ['Home', 'About', 'Programs', 'Stories', 'Get Involved', 'Contact'];

  const languages = [
    'English',
    'Hindi',
    'Kannada',
    'Tamil',
    'Telugu',
    'Marathi',
    'Gujarati',
    'Bengali',
    'Malayalam',
    'Punjabi',
  ];

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setIsLangOpen(false);
    // In a real implementation, this would trigger language change throughout the app
    console.log('Language changed to:', language);
  };

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 section-light-blend"
      style={{
        backdropFilter: 'blur(10px)',
        boxShadow: 'var(--shadow-soft)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <h1
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.25rem, 4vw, 1.75rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
              }}
            >
              Gram Vikas Society
            </h1>
            <p
              style={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: 'clamp(0.65rem, 2vw, 0.75rem)',
                letterSpacing: '0.05em',
                color: 'var(--text-secondary)',
              }}
            >
              Building Better Villages
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="transition-colors"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.7';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                {link}
              </a>
            ))}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  background: isLangOpen ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  border: '1px solid',
                  borderColor: 'var(--glass-border)',
                }}
                onMouseEnter={(e) => {
                  if (!isLangOpen) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
                onMouseLeave={(e) => {
                  if (!isLangOpen) e.currentTarget.style.background = 'transparent';
                }}
              >
                <Globe className="w-4 h-4" />
                <span>{selectedLanguage}</span>
                <ChevronDown
                  className="w-4 h-4 transition-transform duration-200"
                  style={{ transform: isLangOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>

              {/* Dropdown */}
              {isLangOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 rounded-lg overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: 'var(--shadow-soft)',
                    border: '1px solid',
                    borderColor: 'var(--glass-border)',
                  }}
                >
                  <div className="max-h-64 overflow-y-auto">
                    {languages.map((language) => (
                      <button
                        key={language}
                        onClick={() => handleLanguageSelect(language)}
                        className="w-full text-left px-4 py-2.5 transition-all duration-200"
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '0.9rem',
                          fontWeight: selectedLanguage === language ? 600 : 400,
                          color: 'var(--text-primary)',
                          background: selectedLanguage === language ? 'var(--button-gradient)' : 'transparent',
                        }}
                        onMouseEnter={(e) => {
                          if (selectedLanguage !== language) {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (selectedLanguage !== language) {
                            e.currentTarget.style.background = 'transparent';
                          }
                        }}
                      >
                        {language}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Removed Donate Button */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" style={{ color: 'var(--text-primary)' }} />
            ) : (
              <Menu className="h-6 w-6" style={{ color: 'var(--text-primary)' }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-6 flex flex-col gap-4 border-t pt-6 lg:hidden" style={{ borderColor: 'var(--glass-border)' }}>
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="transition-opacity py-2"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.7';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                {link}
              </a>
            ))}

            {/* Mobile Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 w-full"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  background: isLangOpen ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  border: '1px solid',
                  borderColor: 'var(--glass-border)',
                }}
              >
                <Globe className="w-4 h-4" />
                <span>{selectedLanguage}</span>
                <ChevronDown
                  className="w-4 h-4 ml-auto transition-transform duration-200"
                  style={{ transform: isLangOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>

              {isLangOpen && (
                <div
                  className="mt-2 w-full rounded-lg overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: 'var(--shadow-soft)',
                    border: '1px solid',
                    borderColor: 'var(--glass-border)',
                  }}
                >
                  <div className="max-h-64 overflow-y-auto">
                    {languages.map((language) => (
                      <button
                        key={language}
                        onClick={() => handleLanguageSelect(language)}
                        className="w-full text-left px-4 py-2.5 transition-all duration-200"
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '0.9rem',
                          fontWeight: selectedLanguage === language ? 600 : 400,
                          color: 'var(--text-primary)',
                          background: selectedLanguage === language ? 'var(--button-gradient)' : 'transparent',
                        }}
                      >
                        {language}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Removed Mobile Donate Button */}
          </div>
        )}
      </div>
    </nav>
  );
}
