import styles from "../panel.module.css";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import ImageOnHover from "./ImageOnHover";

// TODO: make sure text from one panel doesn't crowd into height of another panel

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

  const [isImageVisible, setImageVisible] = useState({
    visible: false,
    imageUrl: "",
  });

  const showImage = (e, image) => {
    // console.log(e.clientX);
    setImageVisible({
      ...isImageVisible,
      visible: true,
      imageUrl: image,
    });
  };

  const hideImage = () => {
    setImageVisible({
      ...isImageVisible,
      visible: false,
    });
  };

  if (number === "1999") {
    content = (
      <>
        <p>
          In the early 1900s, half of all teenagers in Tokyo owned a pager.
          Japanese carrier NTT Docomo sold its{" "} 
          <span
            className={styles.hoverText}
            onMouseOver={(e) => {
              showImage(e, "pocketbell");
            }}
            onMouseLeave={hideImage}
          >
           Pocket Bell pagers with ❤️
          symbols 
          </span>{" "}
          and when they removed the symbol a few years later, sales
          declined. Employee Shigetaka Kurita, who was working on Docomo’s
          mobile internet platform at the time, took notice.{" "}
        </p>
        <p>
          The company tasked Kurita with adding emojis to the carrier’s set of
          characters. Limited to 12x12 pixels, he{" "}
          <span
            className={styles.hoverText}
            onMouseOver={(e) => {
              showImage(e, "kurita");
            }}
            onMouseLeave={hideImage}
          >
            drew out 176 symbols
          </span>{" "}
          on paper and handed them over to the developer. Some of his decisions
          were based on observations; others were based on personal preference.{" "}
        </p>

        <p>
          There’s a misconception that the word emoji comes from emoticon, the
          practice of using ASCII characters to create pictures (the first
          suggestion of using :-) to indicate humor is said to have come from
          Scott Fahlman). The word emoji actually comes from the Japanese
          characters for picture (絵, e), write(文, mo), and character (字, ji).
        </p>
        <p>
          <b>Why ❤️ is important</b>: Rumor has it that without the popularity
          of the heart symbol, DoCoMo wouldn't have caught on to the promise of
          the emoji on mobile devices.
        </p>
      </>
    );
  } else if (number === "2007") {
    content = (
      <>
        <p>
          Incorporating emoji into Gmail became the goal of Project Mojo at
          Google in 2007. The tech behemoth partnered with Japanese telecom
          carrier, KDDI AU, to create an emoji set for Gmail. (It would still be
          1 year before Apple released its emoji keyboard in Japan, and 2 before
          the Unicode Consortium was formed.)
        </p>
        <p>
          One point of contention was the poo emoji. The symbol became popular
          in Japan through{" "}
          <span
            className={styles.hoverText}
            onMouseOver={(e) => {
              showImage(e, "drslump");
            }}
            onMouseLeave={hideImage}
          >
            a loveable character in the 80s show, Dr Slump. 
          </span>{" "}
           But some at Silicon Valley HQ thought the emoji was offensive. What
          would people think of them if they added a pile of steaming shit to
          their vocabulary?
        </p>
        <p>
          Takeshi Kishimoto, Japanese product manager on the team, argued it was
          essential, adding a sense of playfulness to the mood. It expressed
          more than just a bad day; it did it with a laugh. “It says ‘I don’t
          like that,’ but softly,” said Takeshi. Darick Tong, team lead, called
          the now-loved emoji “flexible and effective.” They won, poo won,
          humanity won.
        </p>
        <p>
          <b>Why 💩 is important</b>: Jokes aside, it's a characteristically
          cute emoji -- one that can say something very serious in a very
          playful way -- that Google's design team surrendered to because of its
          universal appeal (despite cross-cultural resistance)
        </p>
      </>
    );
  } else if (number === "2015") {
    content = (
      <>
        <p>
          In 2015, the standard yellow skin tone 👋 was joined by five more.
          There were concerns over how inclusive the emojis were.
        </p>
        <p>
          {" "}
          One year later, The Atlantic published an article,{" "}
          <a
            href="https://www.theatlantic.com/politics/archive/2016/05/white-people-dont-use-white-emoji/481695/"
            target="_blank"
          >
            'Is It Okay to Use the White Emoji?'
          </a>
          ,...Do I want to draw attention to my race? It's a micro-decision
          every time you send a message.
        </p>
        <p>There is no neutral.</p>
      </>
    );
  } else if (number === "06") {
    // thumbs up
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
          <b>Do emoji clarify (as Fahlman initially intended), or obscure?</b>
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
      <div className={styles.panelContent}>
        {content}
        <ImageOnHover
          isImageVisible={isImageVisible}
          setIsImageVisible={setImageVisible}
        />
      </div>
    </div>
  );
};

export default TextPanel;
