import Button from './Button';

const SKILLS = ['React', 'Next.js', 'Tailwind CSS', 'GSAP', 'Node.js', 'Git'];

const AboutRight = () => {
  return (
    <div className="flex w-full flex-col justify-center gap-10 px-6 py-12 lg:w-1/2 lg:px-[6vw] lg:py-0">
      <div className="mx-auto w-full max-w-md lg:mx-0">
        <span className="font-ui text-[11px] uppercase tracking-[0.3em] text-(--paper)/35">
          Toolkit
        </span>

        <ul className="mt-5 flex flex-col divide-y divide-(--paper)/10 border-t border-(--paper)/10">
          {SKILLS.map((skill, i) => (
            <li
              key={skill}
              className="font-ui flex items-center justify-between py-3 text-sm uppercase tracking-[0.14em] text-(--paper)/70"
            >
              <span>{skill}</span>
              <span className="font-heading text-xs text-(--paper)/35 tracking-wider">
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