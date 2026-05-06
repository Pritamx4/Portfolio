import { useState } from 'react';

const ContactRight = () => {
  return (
    <div className="flex h-122 w-md items-center justify-center border border-white/15 bg-black/40 p-8 shadow-2xl shadow-black/40 backdrop-blur-sm">
      <form action="" method="post" className="flex w-full flex-col gap-5 text-white">
        <input
          type="text"
          name="username"
          placeholder="Full Name"
          required
          className="w-full  border-b border-white/15 bg-black/40 px-4 py-3 outline-none placeholder:text-white/45 focus:border-white/40"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full  border-b border-white/15 bg-black/40 px-4 py-3 outline-none placeholder:text-white/45 focus:border-white/40"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="1"
          required
          className="w-full resize-none  border-b border-white/15 bg-black/40 px-4 py-3 outline-none placeholder:text-white/45 focus:border-white/40"
        />
        <button
          type="submit"
          className="bg-white px-4 py-3 font-bold text-black transition active:scale-95 mt-20
          uppercase tracking-wide hover:bg-white/90"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactRight;
