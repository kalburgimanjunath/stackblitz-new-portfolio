export default function contact() {
  return (
    <div>
      <div>
        <h1>Let me help you</h1>
      </div>
      <div>
        <div>
          <div>
            <div>First name</div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div>
            <div>Last name</div>
            <div>
              <input type="text" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>Email</div>
            <div>
              <input type="email" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>Message</div>
            <div>
              <textarea rows="10" cols="20" />
            </div>
          </div>
        </div>
        <div>
          <button type="button">Send</button>
        </div>
      </div>
    </div>
  );
}
