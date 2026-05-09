import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Consent from './pages/Consent'
import Intro from './pages/Intro'
import About from './pages/About'
import PatientBg from './pages/PatientBg'
import History from './pages/History'
import Complaint from './pages/Complaint'
import Medical from './pages/Medical'
import Dental from './pages/Dental'
import Treatment from './pages/Treatment'
import Diagnosis from './pages/Diagnosis'
import PrimaryImp from './pages/PrimaryImp'
import SecondaryImp from './pages/SecondaryImp'
import JawReg from './pages/JawReg'
import TryIn from './pages/TryIn'
import Delivery from './pages/Delivery'
import Recall from './pages/Recall'
import Literature from './pages/Literature'
import Reflection from './pages/Reflection'
import References from './pages/References'

const pages = {
  home: Home,
  consent: Consent,
  intro: Intro,
  about: About,
  'patient-bg': PatientBg,
  history: History,
  complaint: Complaint,
  medical: Medical,
  dental: Dental,
  treatment: Treatment,
  diagnosis: Diagnosis,
  'primary-imp': PrimaryImp,
  'secondary-imp': SecondaryImp,
  'jaw-reg': JawReg,
  'try-in': TryIn,
  delivery: Delivery,
  recall: Recall,
  literature: Literature,
  reflection: Reflection,
  references: References,
}

export default function App() {
  const [activePage, setActivePage] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  function navigateTo(pageId) {
    setActivePage(pageId)
    window.scrollTo(0, 0)
    if (window.innerWidth <= 820) setSidebarOpen(false)
  }

  const PageComponent = pages[activePage]

  return (
    <div className="font-sans bg-ivory text-ink flex min-h-screen overflow-x-hidden">
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/[0.48] z-[200] ${sidebarOpen ? 'block' : 'hidden'}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Hamburger */}
      <button
        className="fixed top-4 left-4 z-[500] w-[42px] h-[42px] rounded-[10px] bg-ink border-none text-white text-[18px] cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.3)] hidden max-[820px]:flex items-center justify-center"
        onClick={() => setSidebarOpen(s => !s)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <Sidebar
        activePage={activePage}
        navigateTo={navigateTo}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <main className="ml-[270px] flex-1 min-h-screen max-[820px]:ml-0">
        {PageComponent && (
          <div key={activePage} className="animate-fadeUp">
            <PageComponent />
          </div>
        )}
      </main>
    </div>
  )
}
