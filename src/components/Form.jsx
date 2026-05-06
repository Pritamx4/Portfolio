const Form = () => {
  return (
    <>
      <form action="" method="post">
        <input type="text" name="username" placeholder="Full Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="message" placeholder="Message" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
