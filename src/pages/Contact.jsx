import ContactLeft from '../components/ContactLeft';
import ContactRight from '../components/ContactRight';

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative flex h-screen w-full items-center justify-center bg-black"
    >
      <h1 className="absolute left-0 top-0 z-20 flex h-20 w-full items-center justify-center font-[ZeroMaster] text-7xl text-white">
        Contact Me
      </h1>
      <div className="flex items-center justify-between gap-40">
        <ContactLeft />
        <ContactRight />
      </div>
    </div>
  );
};

export default Contact;
