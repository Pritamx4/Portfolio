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
          <p className="font-ui text-[0.6rem] hidden lg:block uppercase tracking-[0.35em] text-(--paper)/40">
            Start a Conversation
          </p>
          <h2 className="font-[ZeroMaster] hidden lg:block mt-1.5 text-2xl text-(--paper)">Drop a Line</h2>
          <h2 className="font-[ZeroMaster] lg:hidden mt-1.5 text-2xl text-(--paper)">Send a Message</h2>
        </div>
      </div>

      {/* Form */}
      <form action="" method="post" className="flex flex-col text-(--paper)">
        {/* Input fields */}
        {fields.map((f) => (
          <div
            key={f.name}
            className="group flex flex-col gap-1.5 border-b border-(--paper)/6 py-4 transition-all duration-300 lg:flex-row lg:items-center lg:gap-4 lg:py-3.5 lg:hover:bg-(--paper)/2 lg:hover:pl-1.5"
          >
            <p className="font-ui text-[0.65rem] lg:font-semibold uppercase tracking-[0.18em] text-(--paper)/45 lg:w-20 lg:shrink-0 lg:text-xs">
              {f.label}
            </p>
            <input
              type={f.type}
              name={f.name}
              placeholder={f.placeholder}
              required
              className="font-body w-full bg-transparent text-sm tracking-wide text-(--paper) outline-none placeholder:text-(--paper)/20"
            />
          </div>
        ))}

        {/* Message row */}
        <div className="group flex flex-col gap-1.5 border-b border-(--paper)/6 py-4 transition-all duration-300 lg:flex-row lg:items-start lg:gap-4 lg:py-3.5 lg:hover:bg-(--paper)/2 lg:hover:pl-1.5">
          <p className="font-ui text-[0.65rem] lg:font-semibold uppercase tracking-[0.18em] text-(--paper)/45 lg:w-20 lg:shrink-0 lg:pt-0.5 lg:text-xs">
            Idea
          </p>
          <textarea
            name="message"
            placeholder="Tell me what's on your mind..."
            rows="2"
            required
            className="font-body w-full resize-none bg-transparent text-sm tracking-wide text-(--paper) outline-none placeholder:text-(--paper)/20"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="font-ui group mt-6 flex w-full items-center justify-center gap-3 border border-(--paper)/25 bg-transparent px-6 py-3.5 text-[0.65rem]  uppercase tracking-[0.22em] text-(--paper) transition-all duration-300 hover:border-(--paper) hover:bg-(--paper) hover:text-(--ink) hover:shadow-[0_0_30px_rgba(244,241,234,0.1)] active:scale-[0.97] lg:w-fit lg:justify-start lg:py-3"
        >
          Send Message
          <lord-icon
            className="current-color"
            src="https://cdn.lordicon.com/vpbspaec.json"
            trigger="hover"
            delay="1500"
            state="hover-flying"
            colors="primary:#f4f1ea"
            style={{ width: '28px', height: '28px' }}
          ></lord-icon>
        </button>
      </form>
    </div>
  );
};

export default ContactRight;
