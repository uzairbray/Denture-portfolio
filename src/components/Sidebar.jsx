import { useState } from 'react'

const navSections = [
  {
    id: 'home',
    label: 'Home',
    children: [{ id: 'consent', label: 'Patient Consent Form' }],
  },
  {
    id: 'intro',
    label: 'Introduction',
    children: [
      { id: 'about', label: 'About Me' },
      { id: 'patient-bg', label: 'Patient Background' },
    ],
  },
  {
    id: 'history',
    label: 'Patient History',
    children: [
      { id: 'complaint', label: 'Main Complaint' },
      { id: 'medical', label: 'Medical History' },
      { id: 'dental', label: 'Dental History' },
    ],
  },
  {
    id: 'treatment',
    label: 'Treatment Plan',
    children: [
      { id: 'diagnosis', label: 'Diagnosis' },
      { id: 'primary-imp', label: 'Primary Impressions' },
      { id: 'secondary-imp', label: 'Secondary Impressions' },
      { id: 'jaw-reg', label: 'Jaw Registration' },
      { id: 'try-in', label: 'Try-In' },
      { id: 'delivery', label: 'Denture Delivery' },
      { id: 'recall', label: 'Recall' },
    ],
  },
]

const soloItems = [
  { id: 'literature', label: 'Literature Review' },
  { id: 'reflection', label: 'Reflection' },
  { id: 'references', label: 'References' },
]

export default function Sidebar({ activePage, navigateTo, sidebarOpen }) {
  const [openSection, setOpenSection] = useState('home')

  function handleParentClick(sectionId) {
    setOpenSection(prev => (prev === sectionId ? null : sectionId))
    navigateTo(sectionId)
  }

  return (
    <aside
      id="sidebar"
      className={[
        'fixed top-0 left-0 bottom-0 w-[270px] bg-ink flex flex-col z-[300] overflow-y-auto',
        'transition-transform duration-[380ms] ease-[cubic-bezier(.4,0,.2,1)]',
        sidebarOpen
          ? 'max-[820px]:translate-x-0 max-[820px]:shadow-[8px_0_32px_rgba(0,0,0,0.4)]'
          : 'max-[820px]:-translate-x-full',
      ].join(' ')}
    >
      {/* Brand */}
      <div className="px-7 py-9 pb-6 border-b border-white/[0.07] flex-shrink-0">
        <div className="font-serif text-[22px] font-light text-white tracking-[0.05em] leading-[1.3]">
          Denture<br />
          <span className="text-sand italic">Portfolio</span>
        </div>
        <div className="mt-1.5 text-[10px] tracking-[0.18em] uppercase text-white/30">
          PRO 300 · UWC · BDS 3
        </div>
      </div>

      {/* Nav */}
      <nav className="pt-3.5 pb-8 flex-1">
        {navSections.map(section => {
          const isOpen = openSection === section.id
          return (
            <div key={section.id}>
              <div
                className={[
                  'flex items-center justify-between px-7 py-[11px] text-[11px] font-semibold',
                  'tracking-[0.14em] uppercase cursor-pointer border-l-2 transition-colors duration-200',
                  'hover:text-white/85 hover:bg-white/[0.04]',
                  isOpen ? 'text-sand border-l-sand' : 'text-white/50 border-transparent',
                ].join(' ')}
                onClick={() => handleParentClick(section.id)}
              >
                {section.label}
                <span
                  className={[
                    'text-[8px] transition-transform duration-[220ms]',
                    isOpen ? 'rotate-90 text-sand' : 'text-white/20',
                  ].join(' ')}
                >
                  ▶
                </span>
              </div>
              {isOpen && (
                <div className="bg-black/[0.18]">
                  {section.children.map(child => (
                    <div
                      key={child.id}
                      className={[
                        'block px-7 pl-[42px] py-2 text-[12px] cursor-pointer border-l-2 transition-colors duration-[180ms]',
                        activePage === child.id
                          ? 'text-white border-l-sand bg-sand/[0.08]'
                          : 'text-white/35 border-transparent hover:text-white/75',
                      ].join(' ')}
                      onClick={() => navigateTo(child.id)}
                    >
                      {child.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}

        {soloItems.map(item => (
          <div
            key={item.id}
            className={[
              'block px-7 py-[11px] text-[11px] font-semibold tracking-[0.14em] uppercase',
              'cursor-pointer border-l-2 transition-colors duration-200',
              'hover:text-white/85 hover:bg-white/[0.04]',
              activePage === item.id
                ? 'text-sand border-l-sand'
                : 'text-white/50 border-transparent',
            ].join(' ')}
            onClick={() => navigateTo(item.id)}
          >
            {item.label}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-7 py-[18px] border-t border-white/[0.07] text-[10px] text-white/[0.18] tracking-[0.05em] flex-shrink-0">
        University of the Western Cape<br />
        Dental Faculty · 2026
      </div>
    </aside>
  )
}
