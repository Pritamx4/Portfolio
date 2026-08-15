import Magnetic from './Magnetic';
import RollingText from './RollingText';

const fields = [
  {
    name: 'username',
    type: 'text',
    label: 'Name',
    placeholder: 'What should I call you?',
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Where do I reach back?',
  },
];

const ContactRight = () => {
  return (
    <div className="flex w-full flex-col">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between pb-3">
        <div>
          <p className="font-ui text-[11px] font-medium hidden lg:block uppercase tracking-[0.35em] text-(--paper)/60">
            Reach Out
          </p>
          <h2 className="font-heading hidden lg:block mt-2 text-lg sm:text-xl font-semibold uppercase tracking-[0.15em] text-(--paper)">
            Say Hello
          </h2>
          <h2 className="font-heading lg:hidden mt-2 text-lg sm:text-xl font-semibold uppercase tracking-[0.15em] text-(--paper)">
            Say Hello
          </h2>
        </div>
      </div>

      {/* Form */}
      <form action="" method="post" className="flex flex-col text-(--paper)">
        {/* Input fields */}
        {fields.map((f) => (
          <div
            key={f.name}
            className="group flex flex-col gap-1.5 border-b border-(--paper)/10 py-4 transition-all duration-300 lg:flex-row lg:items-center lg:gap-4 lg:py-3.5 lg:hover:bg-(--paper)/[0.02] lg:hover:pl-2"
          >
            <p className="font-heading text-xs uppercase tracking-[0.14em] text-(--paper)/70 lg:w-24 lg:shrink-0 font-medium">
              {f.label}
            </p>
            <input
              type={f.type}
              name={f.name}
              placeholder={f.placeholder}
              required
              className="font-body w-full bg-transparent text-sm tracking-wide text-(--paper) outline-none placeholder:text-(--paper)/35 focus:placeholder:text-(--paper)/20 transition-colors"
            />
          </div>
        ))}

        {/* Message row */}
        <div className="group flex flex-col gap-1.5 border-b border-(--paper)/10 py-4 transition-all duration-300 lg:flex-row lg:items-start lg:gap-4 lg:py-3.5 lg:hover:bg-(--paper)/[0.02] lg:hover:pl-2">
          <p className="font-heading text-xs uppercase tracking-[0.14em] text-(--paper)/70 lg:w-24 lg:shrink-0 lg:pt-1 font-medium">
            Idea
          </p>
          <textarea
            name="message"
            placeholder="Tell me what's on your mind..."
            rows="2"
            required
            className="font-body w-full resize-none bg-transparent text-sm tracking-wide text-(--paper) outline-none placeholder:text-(--paper)/35 focus:placeholder:text-(--paper)/20 transition-colors"
          />
        </div>

        {/* Submit button with Magnetic pull and RollingText flip */}
        <Magnetic strength={0.25} className="mt-6 w-full lg:w-fit">
          <button
            type="submit"
            className="font-ui group flex w-full items-center justify-center gap-3 border border-(--paper)/30 bg-transparent px-7 py-3 text-xs uppercase tracking-[0.2em] font-medium text-(--paper) transition-all duration-300 hover:border-(--paper) hover:bg-(--paper) hover:text-(--ink) hover:shadow-[0_0_30px_rgba(244,241,234,0.15)] active:scale-[0.97] cursor-pointer lg:w-fit lg:justify-start"
          >
            <RollingText text="Send Message" />
            <lord-icon
              className="current-color"
              src="https://cdn.lordicon.com/vpbspaec.json"
              trigger="hover"
              delay="1500"
              state="hover-flying"
              colors="primary:#f4f1ea"
              style={{ width: '24px', height: '24px' }}
            ></lord-icon>
          </button>
        </Magnetic>
      </form>
    </div>
  );
};

export default ContactRight;
