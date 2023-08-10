export default function contact() {
  return (
    <div>
      <div>
        <h1>Let me help you</h1>
      </div>
      <div className="form w-max-w-prose">
        <div className="">
          <div className="flex form-field grid grid-cols-2">
            <div className="mr-2">
              <div>First name</div>
              <div>
                <input type="text" className="w-full" />
              </div>
            </div>
            <div className="ml-2">
              <div>Last name</div>
              <div>
                <input type="text" className="w-full" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="form-field w-full">
            <div>Email</div>
            <div>
              <input type="email" className="w-full" />
            </div>
          </div>
        </div>
        <div className="form-field">
          <div>
            <div>Message</div>
            <div>
              <textarea rows="10" cols="20" className="w-full" />
            </div>
          </div>
        </div>
        <div>
          <button className="primary-button" type="button">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
