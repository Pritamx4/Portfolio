const fields = [
  {
    name: 'username',
    type: 'text',
    label: 'Who Are You?',
    placeholder: 'Your name goes here',
  },
  {
    name: 'email',
    type: 'email',
    label: 'Where Do I Reply?',
    placeholder: 'your@email.com',
  },
];

const ContactRight = () => {
  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between border-b border-(--paper)/10 pb-4">
        <div>
          <p className="font-ui text-[0.65rem] uppercase tracking-[0.35em] text-(--paper)/50">
            Start a Conversation
          </p>
          <h2 className="font-display mt-2 text-3xl text-(--paper)">
            Drop a Line
          </h2>
        </div>
        <span className="h-2 w-2 rounded-full bg-(--paper) shadow-[0_0_18px_rgba(244,241,234,0.6)]" />
      </div>

      {/* Form */}
      <form
        action=""
        method="post"
        className="relative flex flex-1 flex-col text-(--paper)"
      >
        {/* Input fields */}
        <div className="flex flex-col">
          {fields.map((f) => (
            <div
              key={f.name}
              className="group flex items-center gap-4 border-b border-(--paper)/[0.06] py-5 transition-all duration-300 hover:bg-(--paper)/[0.02] hover:pl-2"
            >
              {/* Label as tag */}
              <p className="font-ui w-40 shrink-0 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-(--paper)/50">
                {f.label}
              </p>

              {/* Input */}
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
          <div className="group flex items-start gap-4 border-b border-(--paper)/[0.06] py-5 transition-all duration-300 hover:bg-(--paper)/[0.02] hover:pl-2">
            <p className="font-ui w-40 shrink-0 pt-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-(--paper)/50">
              What's on Your Mind?
            </p>
            <textarea
              name="message"
              placeholder="Tell me about your idea, project, or just say hi..."
              rows="3"
              required
              className="font-body w-full resize-none bg-transparent text-sm tracking-wide text-(--paper) outline-none placeholder:text-(--paper)/20"
            />
          </div>
        </div>

        {/* Submit button */}
        <div className="mt-8 flex items-center justify-between">
          <button
            type="submit"
            className="font-ui group flex items-center gap-3 border border-(--paper)/30 bg-transparent px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-(--paper) transition-all duration-300 hover:border-(--paper) hover:bg-(--paper) hover:text-(--ink) hover:shadow-[0_0_30px_rgba(244,241,234,0.1)] active:scale-[0.97]"
          >
            Send It
            <lord-icon
              className="current-color"
              src="https://cdn.lordicon.com/vpbspaec.json"
              trigger="in"
              delay="1500"
              state="hover-flying"
              colors="primary:#f4f1ea"
              style={{ width: '20px', height: '20px' }}
            />
          </button>

          <p className="font-body text-xs italic text-(--paper)/25">
            I usually respond within 24 hours.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactRight;
