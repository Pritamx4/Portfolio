import ContactLeft from '../components/ContactLeft';
import ContactRight from '../components/ContactRight';

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-(--ink) pb-32 pt-24"
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

      {/* Radial glow overlay — warm amber */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(212,175,55,0.04),transparent_60%),radial-gradient(ellipse_at_75%_40%,rgba(244,241,234,0.03),transparent_50%)]" />

      {/* Section heading */}
      <div className="relative z-10 mb-16 flex flex-col items-start px-8 md:px-20 w-full max-w-6xl">
        <p className="font-ui text-[0.65rem] uppercase tracking-[0.35em] text-(--paper)/50 mb-3">
          04 // Say Hello
        </p>
        <h1 className="font-display text-6xl md:text-7xl text-(--paper)">
          Let's Talk
        </h1>
        <div className="mt-4 h-[1px] w-16 bg-(--paper)/25" />
      </div>

      {/* Main content — asymmetric grid */}
      <div className="relative z-10 flex w-full max-w-6xl flex-col gap-12 px-8 md:px-20 lg:flex-row lg:gap-16">
        <div className="w-full lg:w-[42%]">
          <ContactLeft />
        </div>
        <div className="w-full lg:w-[58%]">
          <ContactRight />
        </div>
      </div>
    </div>
  );
};

export default Contact;
