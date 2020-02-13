const markup = `
<div id="mc_embed_signup">
  <form
    action="https://onefiniteloop.us4.list-manage.com/subscribe/post?u=48b30fd868f5701248886b82c&amp;id=0c4a534985"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    class="validate"
    target="_blank"
    novalidate
  >
    <div id="mc_embed_signup_scroll">
      <h2>Let's keep in touch</h2>
      <p class="subscribe-form-description">
        Get the latest posts on JavaScript, agile, psychology of teamwork
        and productivity delivered to your inbox.
      </p>
      <div class="mc-field-group">
        <input
          type="email"
          value=""
          name="EMAIL"
          class="required email"
          id="mce-EMAIL"
          autocomplete="false"
          placeholder="your_email@example.com"
        />
        <input
          type="submit"
          value="Subscribe now"
          name="subscribe"
          id="mc-embedded-subscribe"
          class="button"
        />
      </div>
      <div id="mce-responses" class="clear">
        <div
          class="response"
          id="mce-error-response"
          style="display:none"
        ></div>
        <div
          class="response"
          id="mce-success-response"
          style="display:none"
        ></div>
      </div>
      <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
      <div style="position: absolute; left: -5000px;" aria-hidden="true">
        <input
          type="text"
          name="b_48b30fd868f5701248886b82c_0c4a534985"
          tabindex="-1"
          value=""
        />
      </div>
    </div>
  </form>
</div>
`;

(() => {
  document.open();
  document.write(markup);
  document.close();
})();
