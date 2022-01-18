import React from 'react'; // optional

function TweetForm(){
  const prompt = "What are you humming about?"
  const preventDefault = (event) => {event.preventDefault()}
  return (
    <section className="newtweet">
      <form method="post" action="/tweets" className="newtweet__form" onClick={preventDefault}>
        <textarea className="form__textarea" name="text" placeholder={ prompt }></textarea>
        <input type="submit" value="Tweet" className="form__input"/>
        <span className="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;