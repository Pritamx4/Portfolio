const ContactRight = () => {
  return (
    <div className="relative font-ui flex h-122 w-md items-center justify-center overflow-hidden border border-(--paper)/12 bg-(--ink)/55 p-8 shadow-2xl shadow-black/55 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,241,234,0.06),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(244,241,234,0.04),transparent_36%)]" />
      <form action="" method="post" className="relative flex w-full flex-col gap-5 text-(--paper)">
        <div className="mb-2 flex items-center justify-between border-b border-(--paper)/10 pb-4">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-(--paper)/55">
              Reach Out
            </p>
            <h2 className="font-display mt-2 text-3xl text-(--paper)">Send a Message</h2>
          </div>
          <span className="h-2 w-2 rounded-full bg-(--paper) shadow-[0_0_18px_rgba(244,241,234,0.7)]" />
        </div>

        <input
          type="text"
          name="username"
          placeholder="Full Name"
          required
          className="w-full border-b border-(--paper)/15 bg-transparent px-4 py-3 text-sm tracking-[0.08em] outline-none placeholder:text-(--paper)/45 focus:border-(--paper)/40"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full border-b border-(--paper)/15 bg-transparent px-4 py-3 text-sm tracking-[0.08em] outline-none placeholder:text-(--paper)/45 focus:border-(--paper)/40"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="1"
          required
          className="w-full resize-none border-b border-(--paper)/15 bg-transparent px-4 py-3 text-sm tracking-[0.08em] outline-none placeholder:text-(--paper)/45 focus:border-(--paper)/40"
        />
        <button
          type="submit"
          className="font-ui mt-20 flex items-center justify-center gap-3 border border-(--paper) bg-(--paper) px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-(--ink) transition active:scale-95 hover:bg-transparent hover:text-(--paper)"
        >
          Submit
          <lord-icon
            className="current-color"
            src="https://cdn.lordicon.com/vpbspaec.json"
            trigger="in"
            delay="1500"
            trigger="hover"
            state="hover-flying"
            style={{ width: '22px', height: '22px' }}
          />
        </button>
      </form>
    </div>
  );
};

export default ContactRight;
