import ContactLeft from '../components/ContactLeft';
import ContactRight from '../components/ContactRight';

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative flex min-h-screen w-full flex-col items-stretch overflow-visible bg-(--ink) lg:h-screen lg:flex-row lg:items-center lg:overflow-hidden"
    >
      {/* Dot pattern background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(244,241,234,0.04) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Radial glow overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(212,175,55,0.04),transparent_60%),radial-gradient(ellipse_at_75%_40%,rgba(244,241,234,0.03),transparent_50%)]" />

      {/* Heading: top-left on mobile, vertical sidebar on desktop */}
      <div className="relative z-10 flex w-full shrink-0 items-center justify-start px-6 pt-10 pb-6 lg:h-full lg:w-20 lg:flex-col lg:items-center lg:justify-center lg:px-0 lg:py-0">
        <h1 className="font-display text-4xl text-(--paper) lg:text-5xl lg:[writing-mode:vertical-lr] lg:transform-[rotate(180deg)] xl:text-7xl">
          Let's Talk
        </h1>
        <div className="mt-4 hidden h-12 w-px bg-(--paper)/15 lg:block" />
      </div>

      {/* Separator after heading (desktop only) */}
      <div className="z-10 hidden h-3/5 w-px shrink-0 bg-(--paper)/6 lg:block" />

      {/* Two symmetric panels taking full remaining width */}
      <div className="relative z-10 flex w-full flex-1 flex-col items-stretch lg:h-full lg:flex-row lg:items-center">
        {/* Left panel (icons only on mobile, full block on desktop) */}
        <div className="flex w-full items-center justify-center px-6 py-2 lg:h-full lg:flex-1 lg:px-12 lg:py-0">
          <ContactLeft />
        </div>

        {/* Center separator (desktop only) */}
        <div className="hidden h-3/5 w-px shrink-0 self-center bg-(--paper)/6 lg:block" />

        {/* Right panel (form only on mobile, full block on desktop) */}
        <div className="flex w-full items-center justify-center px-6 py-2 lg:h-full lg:flex-1 lg:px-12 lg:py-0">
          <ContactRight />
        </div>
      </div>
    </div>
  );
};

export default Contact;