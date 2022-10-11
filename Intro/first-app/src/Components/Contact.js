const Contact = () => {
  return (
    <div className="Contact">
      <h1>This is Contact component</h1>
      <form>
        <p>
          <label>First Name:</label>
          <input type="text" placeholder="First Name"></input>
        </p>
        <p>
          <label>Last Name:</label>
          <input type="text" placeholder="Last Name"></input>
        </p>
        <p>
          <button>Submit</button>
        </p>
      </form>
    </div>
  );
};

export default Contact;
