const NetlifyForm = () => (
  <form
    name="contact"
    method="post"
    data-netlify="true"
    onSubmit="submit"
    data-netlify-honeypot="bot-field"
  >
    <div>
      <label>
        First name
        <br />
        <input type="text" name="first-name" />
      </label>
    </div>

    <div>
      <label>
        Last name
        <br />
        <input type="text" name="last-name" />
      </label>
    </div>

    <div>
      <label htmlFor="email">Email</label>
      <br />
      <input id="email" type="email" name="email" />
    </div>

    <div>
      <label>
        Any Comments?
        <br />
        <textarea name="comments"></textarea>
      </label>
    </div>

    <button type="submit">Submit The Results</button>
  </form>
);
export default NetlifyForm;
