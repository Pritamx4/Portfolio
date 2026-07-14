const ContactRight = () => {
  return (
    <div className="font-ui flex h-122 w-md items-center justify-center border border-(--paper)/15 bg-(--ink) p-8 shadow-2xl shadow-black/40">
      <form action="" method="post" className="flex w-full flex-col gap-5 text-(--paper)">
        <input
          type="text"
          name="username"
          placeholder="Full Name"
          required
          className="w-full border-b border-(--paper)/15 bg-transparent px-4 py-3 outline-none placeholder:text-(--paper)/45 focus:border-(--paper)/40"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full border-b border-(--paper)/15 bg-transparent px-4 py-3 outline-none placeholder:text-(--paper)/45 focus:border-(--paper)/40"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="1"
          required
          className="w-full resize-none border-b border-(--paper)/15 bg-transparent px-4 py-3 outline-none placeholder:text-(--paper)/45 focus:border-(--paper)/40"
        />
        <button
          type="submit"
          className="font-ui mt-20 border border-(--paper) bg-(--paper) px-4 py-3 font-bold uppercase tracking-wide text-(--ink) transition active:scale-95 hover:bg-transparent hover:text-(--paper)"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactRight;
