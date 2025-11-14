
import React, { useState, useCallback } from 'react';
import GalaxyBackground from './GalaxyBackground';
import Modal from './Modal';

type ModalType = 'About' | 'Contact' | 'Guide' | 'Privacy' | 'Terms' | 'DMCA' | null;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = useCallback((modal: ModalType) => {
    setActiveModal(modal);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  const modalContent: Record<NonNullable<ModalType>, React.ReactNode> = {
    About: <p>This Simple Notary Finder is a demonstration application designed to showcase modern web development techniques, including React, TypeScript, Tailwind CSS, and the browser's Geolocation API. It simulates finding nearby notaries to provide a user-friendly and functional experience.</p>,
    Contact: <p>For inquiries, please reach out to HSINI MOHAMED at <a href="mailto:hsini.web@gmail.com" className="text-indigo-400 hover:underline">hsini.web@gmail.com</a> or visit <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">doodax.com</a>.</p>,
    Guide: <p>To use this tool, simply click the "Find Notaries Near Me" button. Your browser will ask for permission to access your location. Once granted, the map will update to your approximate location, and a list of nearby (simulated) notary services will appear below, sorted by distance.</p>,
    Privacy: <p>Your privacy is important to us. This application uses the browser's Geolocation API, which requires your explicit consent. Your location data is used solely for the purpose of finding nearby notaries during your current session and is never stored on our servers or shared with third parties.</p>,
    Terms: <p>By using this application, you agree that the notary location data provided is for demonstration purposes only and should not be used for actual legal or navigational purposes. The service is provided 'as is' without any warranties.</p>,
    DMCA: <p>If you believe that any content on this application infringes upon your copyright, please contact us at <a href="mailto:hsini.web@gmail.com" className="text-indigo-400 hover:underline">hsini.web@gmail.com</a> with a detailed description of the alleged infringement.</p>,
  };

  const navLinks: NonNullable<ModalType>[] = ['About', 'Contact', 'Guide', 'Privacy', 'Terms', 'DMCA'];

  return (
    <div className="relative min-h-screen text-white font-sans overflow-x-hidden">
      <GalaxyBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="py-6 px-4 sm:px-8 bg-black/30 backdrop-blur-sm border-b border-white/10">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-wider text-indigo-400">
              Simple Notary Finder
            </h1>
            <ul className="hidden md:flex items-center space-x-6">
              {navLinks.map(link => (
                <li key={link}>
                  <button onClick={() => openModal(link)} className="text-gray-300 hover:text-white transition-colors duration-200">
                    {link === 'Privacy' ? 'Privacy Policy' : link === 'Terms' ? 'Terms of Service' : link}
                  </button>
                </li>
              ))}
            </ul>
            <div className="md:hidden">
              <select onChange={(e) => openModal(e.target.value as ModalType)} className="bg-gray-800 border border-gray-700 rounded p-2">
                 <option>Menu</option>
                 {navLinks.map(link => (
                     <option key={link} value={link}>{link}</option>
                 ))}
              </select>
            </div>
          </nav>
        </header>

        <main className="flex-grow container mx-auto p-4 sm:p-8">
          {children}
        </main>

        <footer className="py-6 px-4 sm:px-8 text-center text-gray-400 bg-black/30 backdrop-blur-sm mt-12">
          <div className="container mx-auto">
            <p>
              Powered by{' '}
              <a 
                href="https://github.com/hsinidev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-bold hover:underline"
                style={{color: '#FFD700'}}
              >
                HSINI MOHAMED
              </a>
            </p>
            <p className="text-sm mt-2">
              <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">doodax.com</a> | <a href="mailto:hsini.web@gmail.com" className="hover:text-white transition-colors">hsini.web@gmail.com</a>
            </p>
          </div>
        </footer>
      </div>

      <Modal 
        isOpen={activeModal !== null} 
        onClose={closeModal} 
        title={activeModal === 'Privacy' ? 'Privacy Policy' : activeModal === 'Terms' ? 'Terms of Service' : activeModal || ''}
      >
        {activeModal && modalContent[activeModal]}
      </Modal>
    </div>
  );
};

export default Layout;
