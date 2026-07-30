const fields = [
  {
    name: 'username',
    type: 'text',
    label: 'You',
    placeholder: 'What should I call you?',
  },
  {
    name: 'email',
    type: 'email',
    label: 'Reply To',
    placeholder: 'Where do I reach back?',
  },
];

const ContactRight = () => {
  return (
    <div className="flex w-full flex-col">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between pb-3">
        <div>
          <p className="font-ui text-[0.6rem] uppercase tracking-[0.35em] text-(--paper)/40">
            Start a Conversation
          </p>
          <h2 className="font-[ZeroMaster] mt-1.5 text-2xl text-(--paper)">Drop a Line</h2>
        </div>
        {/* <span className="h-1.5 w-1.5 rounded-full bg-(--paper) shadow-[0_0_14px_rgba(244,241,234,0.5)]" /> */}
      </div>

      {/* Form */}
      <form action="" method="post" className="flex flex-col text-(--paper)">
        {/* Input fields */}
        {fields.map((f) => (
          <div
            key={f.name}
            className="group flex items-center gap-4 border-b border-(--paper)/6 py-3.5 transition-all duration-300 hover:bg-(--paper)/2 hover:pl-1.5"
          >
            <p className="font-ui w-20 shrink-0 text-xs font-normal uppercase tracking-[0.18em] text-(--paper)/45">
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
        <div className="group flex items-start gap-4 border-b border-(--paper)/6 py-3.5 transition-all duration-300 hover:bg-(--paper)/2 hover:pl-1.5">
          <p className="font-ui w-20 shrink-0 pt-0.5 text-xs font-normal uppercase tracking-[0.18em] text-(--paper)/45">
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
          className="font-ui group mt-6 flex w-fit items-center gap-3 border border-(--paper)/25 bg-transparent px-6 py-3 text-[0.65rem] font-normal uppercase tracking-[0.22em] text-(--paper) transition-all duration-300 hover:border-(--paper) hover:bg-(--paper) hover:text-(--ink) hover:shadow-[0_0_30px_rgba(244,241,234,0.1)] active:scale-[0.97]"
        >
          Send It
          <lord-icon
            className="current-color"
            src="https://cdn.lordicon.com/vpbspaec.json"
            trigger="hover"
            delay="1500"
            state="hover-flying"
            colors="primary:#f4f1ea"
            style={{ width: '18px', height: '18px' }}
          />
        </button>
      </form>
    </div>
  );
};

export default ContactRight;