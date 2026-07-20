import ContactLeft from '../components/ContactLeft';
import ContactRight from '../components/ContactRight';

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative flex h-screen w-full items-center overflow-hidden bg-(--ink)"
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

      {/* Vertical heading on the left edge */}
      <div className="relative z-10 flex h-full w-16 shrink-0 flex-col items-center justify-center md:w-20">
        
        <h1
          className="font-display text-5xl md:text-6xl text-(--paper)"
          style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
        >
          Let's Talk
        </h1>
        <div className="mt-4 h-12 w-px bg-(--paper)/15" />
      </div>

      {/* Separator after heading */}
      <div className="z-10 h-3/5 w-px shrink-0 bg-(--paper)/6" />

      {/* Two symmetric panels taking full remaining width */}
      <div className="relative z-10 flex h-full flex-1 items-center">
        {/* Left panel */}
        <div className="flex h-full flex-1 items-center justify-center px-8 lg:px-12">
          <ContactLeft />
        </div>

        {/* Center separator */}
        <div className="h-3/5 w-px shrink-0 self-center bg-(--paper)/6" />

        {/* Right panel */}
        <div className="flex h-full flex-1 items-center justify-center px-8 lg:px-12">
          <ContactRight />
        </div>
      </div>
    </div>
  );
};

export default Contact;
