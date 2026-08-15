import Button from './Button';

const SKILLS = ['React', 'Next.js', 'Tailwind CSS', 'GSAP', 'Node.js', 'Git'];

const AboutRight = () => {
  return (
    <div className="flex w-full flex-col justify-center gap-10 px-6 py-12 lg:w-1/2 lg:px-[6vw] lg:py-0">
      <div className="mx-auto w-full max-w-md lg:mx-0">
        <span className="font-ui text-[11px] font-medium uppercase tracking-[0.35em] text-(--paper)/60">
          Toolkit
        </span>

        <ul className="mt-5 flex flex-col divide-y divide-(--paper)/12 border-t border-(--paper)/12">
          {SKILLS.map((skill, i) => (
            <li
              key={skill}
              className="group flex items-center justify-between py-3 text-xs sm:text-[13px] uppercase tracking-[0.12em] text-(--paper)/80 transition-colors hover:text-(--paper)"
            >
              <span className="font-heading font-medium">{skill}</span>
              <span className="font-mono text-xs text-(--paper)/45 tracking-widest transition-colors group-hover:text-(--paper)/70">
                N&deg;{String(i + 1).padStart(2, '0')}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Button text="Timeline" />
        </div>
      </div>
    </div>
  );
};

export default AboutRight;