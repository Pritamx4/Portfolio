// hooks/useActiveSection.js
import { useEffect, useContext } from 'react';
import { NavbarContext } from '../context/NavContext';

const SECTION_IDS = ['home', 'about', 'project', 'contact'];

const useActiveSection = () => {
  const { setActiveSection } = useContext(NavbarContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // 50% section screen pe dikhe tab active maano
      },
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setActiveSection]);
};

export default useActiveSection;