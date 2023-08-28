import styles from "../panel.module.css";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

const TextPanel = ({
  emoji,
  title,
  number,
  subtitle,
  currentEmoji,
  setCurrentEmoji,
}) => {
  // intersection observer observing

  console.log(currentEmoji);
  const [ref, inView] = useInView({
    threshold: 0.35, // Set the threshold to 0.35
  });

  console.log(currentEmoji);

  useEffect(() => {
    if (inView) {
      // Do something when the card comes into view

      setCurrentEmoji((prevEmoji) => (prevEmoji !== emoji ? emoji : prevEmoji));
      console.log(currentEmoji);
    }
  }, [inView, emoji, setCurrentEmoji]);

  // content

  let content;
  let detail;

  if (number === "01") {
    content = (
      <>
        <p>
          In 1995, half of all teenagers in Tokyo had a pager. Pocketbell was
          one of the major providers. Its pagers came with a ❤️. When Pocketbell
          removed the ❤️ a few years later, sales went down 💔.{" "}
        </p>
        <p>
          Designer S. Kurita noticed this and brought it up to DoCoMo, where he
          was working at the time. They tasked him with adding images to the
          keyboard. Limited by constraints of 12x12, he made 176 symbols on
          paper. Some of his decisions were sound; others were based on personal
          preference.
        </p>
        <p>
          There were precendents: the emoticon came before, and even before
          that, hand-written symbols and smileys and letters. Nabokov mused that
          we might need :) to indicate a joke at some point, several years
          before Scott Fahlman's proposal. But I wonder if Nabokov foresaw the
          3,887 symbols we have today.
        </p>
      </>
    );
  } else if (number === "03") {
    content = (
      <>
        <p>
          {" "}
          In 2015, the standard yellow skin tone 👋 was joined by five more.{" "}
        </p>
        <br></br>
        <p>
          {" "}
          One year later, The Atlantic published an article,{" "}
          <a
            href="https://www.theatlantic.com/politics/archive/2016/05/white-people-dont-use-white-emoji/481695/"
            target="_blank"
          >
            'Is It Okay to Use the White Emoji?'
          </a>
          ,...Do I want to draw attention to my race? It's a micro-decision.
        </p>

        <br></br>
        <p>
          <b>
            <span className={styles.highlightedText}>
              The neutral emoji isn’t neutral.
            </span>{" "}
            There is no neutral.
          </b>
        </p>
      </>
    );
  } else if (number === "06") {
    content = (
      <>
        <p>
          Emoji may the language of cuteness, but it becomes less cute when
          thousands of dollars are at stake. Last month, Canadian farmer Chris
          Achter responded to a contract confirmation with: 👍. His buyer later
          sued Achter for failing to deliver the goods and the judge ruled that
          👍 was just as good as a signature, ordering Achter to pay up $61,442
          USD.
        </p>
        <p>
          The meaning behind the innocuous little symbols have been incresingly
          put to the test ever since 2004 (as emoticons) and 2014 (as emoji).
          Just before the ruling on SWT v Achter, former Chewy CEO Ryan Cohen
          was sued by the SEC for tweeting "At least her cart is full 🌝" in
          response to negative press on Bed Bath & Beyond, and earlier this
          year, a Kentucky judge faced a decision of whether 💦 in a text
          referred to sexual acts or meth.
        </p>
        <p>
          All this begs the question: <br></br>
          <b>
            Do emoji clarify (as Fahlman initially intended), or obscure?
          </b>{" "}
          <br></br>
          When I send a thumbs up, do I mean yes, or do I just mean "ok, cool?"
          And is better that the message is left ambiguous, just as "ok cool" is
          itself ambiguous with lack of context?
        </p>
        <p>
          They conflate, confuse, or clarify. Their meaning multiples tenfold.
          And while our alphabet is finite (though vocabulary, and certainly,
          language is not), emoji continue to reproduce.
        </p>
      </>
    );
  }

  // scroll back to top

  const scrollToTop = (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds smooth scrolling animation
    });
  };

  return (
    <div className={`${styles.textPanel}`} data-panel-number={number} ref={ref}>
      <div className={styles.panelHeader}>
        <h4 className={styles.panelTitle}>
          <b>
            {number} | {title}
          </b>
        </h4>
        <h4 className={styles.iconBackToTop} onClick={scrollToTop}>
          ^
        </h4>
      </div>

      <hr />
      <h5 style={{ marginTop: 0, fontSize: "1rem" }}>{subtitle}</h5>
      <div className={styles.panelContent}>{content}</div>
    </div>
  );
};

export default TextPanel;
