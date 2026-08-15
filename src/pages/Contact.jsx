import ContactLeft from '../components/ContactLeft';
import ContactRight from '../components/ContactRight';
import GitDock from '../components/GitDock';

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative flex min-h-screen w-full flex-col items-stretch overflow-visible bg-(--ink) lg:flex-row lg:items-center py-12 lg:py-16"
    >
      {/* Dot pattern background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(244,241,234,0.04) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Radial glow overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(212,175,55,0.04),transparent_60%),radial-gradient(ellipse_at_75%_40%,rgba(244,241,234,0.03),transparent_50%)]" />

      {/* Heading: kicker + horizontal title on mobile, vertical sidebar on desktop */}
      <div className="relative z-10 flex w-full shrink-0 flex-col items-start justify-center px-6 pt-14 pb-8 lg:h-full lg:w-20 lg:items-center lg:px-0 lg:py-0">
        {/* Mobile heading */}
        <div className="flex flex-col lg:hidden">
          <h1 className="font-display mt-1.5 text-4xl text-(--paper)">Let's Talk</h1>
          <div className="mt-5 h-px w-16 bg-(--paper)/20 translate-x-44 -translate-y-9" />
        </div>

        {/* Desktop vertical heading */}
        <h1 className="font-display hidden text-5xl text-(--paper) lg:block lg:[writing-mode:vertical-lr] lg:transform-[rotate(180deg)] xl:text-6xl tracking-wider">
          Let's Talk
        </h1>
        <div className="mt-4 hidden h-12 w-px bg-(--paper)/15 lg:block" />
      </div>

      {/* Separator after heading (desktop only) */}
      <div className="z-10 hidden h-3/5 w-px shrink-0 bg-(--paper)/10 lg:block" />

      {/* Two symmetric panels */}
      <div className="relative z-10 flex w-full flex-1 flex-col-reverse lg:h-full lg:flex-row lg:items-center justify-end">
        {/* Left panel */}
        <div className="flex w-full items-center justify-center border-t border-(--paper)/6 px-6 py-10 lg:h-full lg:flex-1 lg:border-t-0 lg:px-12 lg:py-0">
          <ContactLeft />
        </div>

        {/* Center separator: horizontal on mobile, vertical on desktop */}
        <div className="flex w-full items-center justify-center gap-3 px-6 py-4 lg:h-full lg:w-auto lg:flex-col lg:gap-0 lg:px-0 lg:py-0">
          <div className="h-px w-36 shrink-0 bg-(--paper)/20 lg:h-1/5 lg:w-px lg:translate-y-52" />
          <h6 className="font-display text-2xl text-(--paper)/45 lg:[writing-mode:vertical-lr] lg:transform-[rotate(180deg)] lg:-translate-x-1.5 xl:text-4xl">
            OR
          </h6>
          <div className="h-px w-36 shrink-0 bg-(--paper)/20 lg:h-1/5 lg:w-px lg:-translate-y-52 lg:-translate-x" />
        </div>
        {/* Right panel */}
        <div className="flex w-full items-center justify-center border-t border-(--paper)/6 px-6 py-10 lg:h-full lg:flex-1 lg:border-t-0 lg:px-12 lg:py-0">
          <ContactRight />
        </div>
      </div>
      <GitDock />

    </div>
  );
};

export default Contact;
