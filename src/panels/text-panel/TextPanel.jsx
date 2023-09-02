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

  const containerRef = useRef(null);

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

  const [mousePos, setMousePos] = useState({
    x: null,
    y: null,
  });

  const showImage = (e, image) => {
    // get position relative to container

    const containerRect = containerRef.current.getBoundingClientRect();
    const relativeX = e.clientX - containerRect.left;
    const relativeY = e.clientY - containerRect.top;

    // set mouse position
    setMousePos({
      x: relativeX,
      y: relativeY,
    });

    // set image
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
          By 1995, the pager was a Japanese sensation amongst teenagers. Carrier
          NTT Docomo sold its{" "}
          <span
            className={styles.hoverText}
            onMouseOver={(e) => {
              showImage(e, "pocketbell");
            }}
            onMouseLeave={hideImage}
          >
            Pocket Bell pagers with ❤️ symbols
          </span>{" "}
          The heart is the most cited symbol, but records also say it had
          numeric codes that would send short pre-programmed messages with
          illustrations, like “I won’t forgive you” with a crying face.
          Interestingly, this was part of the “girls’ model” while the boys
          counterpart came with "I'm sorry,"{" "}
          <a
            href="https://www.nytimes.com/1995/04/10/IHT-japan-teens-flip-for-private-pagers.html"
            target="_blank"
          >
            as reported by the International Herald Tribune.
          </a>
        </p>
        <p>
          When they removed the symbol a few years later, sales declined.
          Employee Shigetaka Kurita, who was working on Docomo’s mobile internet
          platform at the time, took notice and the company tasked him with
          adding emojis to the carrier’s set of characters. Limited to 12x12
          pixels, he{" "}
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
          were based on observations of human behavior, others on personal
          preference. He likes to ski. So, he made a symbol for a big car that
          could hold his skis.{" "}
        </p>
        <p>
          <b>Why ❤️ is important</b>: Rumor has it that without the popularity
          of the heart symbol, Docomo wouldn't have caught on to the promise of
          the emoji on mobile devices.
        </p>
      </>
    );
  } else if (number === "2007") {
    content = (
      <>
        <p>
          A little over 10 years later, Google joined forces with Japanese
          telecom carrier, KDDI AU, to create an emoji set for Gmail. This was 1
          year before Apple released its emoji keyboard in Japan and 2 before
          the Unicode Consortium, overlord of emoji standardization, formed.
          Google’s initiative was called Project Mojo.
        </p>
        <p>
          One big point of contention was the poo emoji. The symbol became
          popular in Japan through{" "}
          <span
            className={styles.hoverText}
            onMouseOver={(e) => {
              showImage(e, "drslump");
            }}
            onMouseLeave={hideImage}
          >
            a loveable character in the 80s show, Dr Slump.
          </span>{" "}
          But some people in Silicon Valley thought the it was offensive. What
          would people think of them if they added a pile of steaming shit (and
          that too, a smiling one!) to their vetted vocabulary?
        </p>
        <p>
          Japnese project manager, Takeshi Kishimoto was adamant: the emoji was
          essential. It said “’I don’t like that,’ but softly,” bringing an air
          of lighteness. It could express a bad day with a laugh, standing in
          for the body language we lack in online communication. Derek Tong, the
          team lead, called the now-loved emoji flexible and effective.
        </p>
        <p>
          They won, poo won, humanity won. This may sound like a joke, but what
          is the true face humanity if not dealing with your feces on a daily
          basis?
        </p>

        <p>
          <b>Why 💩 is important</b>: Jokes aside, it's a characteristically
          cute emoji -- one that can say something very serious in a very
          playful way -- that Google added despite initial cross-cultural
          differences.
        </p>
      </>
    );
  } else if (number === "2015") {
    content = (
      <>
        <p>
          In 2013, a DoSomething campaign called Diversify My Emoji showed up
          online, stating the obvious: "If you look at Apple's Emoji keyboard,
          what do you see? Two different camels. A smiling turd. EVERY PHASE OF
          THE MOON. But of the more than 800 Emojis, the only two resembling
          people of color are a guy who looks vaguely Asian and another in a
          turban."
        </p>
        <p>In this world, a smiling turd can only go so far. </p>
        <p>
          It took two more years before the Unicode Consortium added 5 skin tone
          modifiers to the “standard” yellow. These 5 came from something called
          the Fitzpatrick scale because it was chosen as the most
          "technologically neutral" because of its medical origins*.
        </p>
        <p>
          Of course, it might feel a little weird to call out your whiteness.
          The Atlantic published an article,{" "}
          <a
            href="https://www.theatlantic.com/politics/archive/2016/05/white-people-dont-use-white-emoji/481695/"
            target="_blank"
          >
            'Is It Okay to Use the White Emoji?'
          </a>
          Irrespective of race, the question remains: do I want to draw
          attention to my race? It's a micro-decision every time you send a
          message.
        </p>
        <p>
          <b>Why ✊🏻✊🏼✊🏽✊🏾✊🏿 is important</b>: Jokes aside, it's a
          characteristically cute emoji -- one that can say something very
          serious in a very playful way -- that Google's design team surrendered
          to because of its universal appeal (despite cross-cultural
          resistance).
        </p>
      </>
    );
  } else if (number === "2016") {
    content = (
      <>
        <p>
          {" "}
          Not many pop stars can claim to be synonymous with their own emoji.
          Beyonce runs with two: 🐝 (a take on Queen Bee, or Bey), and 🍋 (which
          released the same year as her album tour, Lemonade). Use of the emoji
          notably spiked in 2016. The most unusually notable of these spikes was
          on celebrity chef Rachael Ray’s Instagram profile.{" "}
        </p>

        <p>
          Let’s back track: Lemonade included a song called <i>Sorry</i>, which
          ended with the line, "He better call Becky with the good hair.” The
          singer’s fans, also known as the beehive, identified Becky as a woman
          with whom Jay-Z had an affair, and believed this person to be fashion
          designer Rachel Roy.{" "}
        </p>

        <p>
          But the internet isn’t a place for thoughtfully considered comments
          and the beehive mistakenly unleashed itself on the innocent Rachael
          Ray, whose name rings similar to Rachel Roy. What followed was a
          string of cryptic emoji on a{" "}
          <span
            className={styles.hoverText}
            onMouseOver={(e) => {
              showImage(e, "rachael");
            }}
            onMouseLeave={hideImage}
          >
            seemingly innocent picture of...gazpaacho.
          </span>{" "}
          Once the beehive realized she wasn't the Becky they were seeking,{" "}
          <span
            className={styles.hoverText}
            onMouseOver={(e) => {
              showImage(e, "rita");
            }}
            onMouseLeave={hideImage}
          >
            they moved on.
          </span>{" "}
        </p>
        <p>
          <b>Why 🐝🍋 is important</b>: Jokes aside, it's a characteristically
          cute emoji -- one that can say something very serious in a very
          playful way -- that Google's design team surrendered to because of its
          universal appeal (despite cross-cultural resistance).
        </p>
      </>
    );
  } else if (number === "2018") {
    content = (
      <>
        <p>
          When Scott Fahlman first suggested :-) to indicate a joke, he probably
          didn’t anticipate 3,664 pictorial variations coming into being. Now
          judges have to decide: in any given context, how much significance
          does the emoji hold? <i>Is</i> it a joke or does the cute little
          symbol bear a relation to concrete, potentially life-threatening,
          actions?{" "}
        </p>
        <p>
          In 2016, there were several cases involving the pistol emoji. A
          Frenchman went to jail for texting his ex-girlfriend the symbol, which
          the court called a real threat. The year prior, a teenager was charged
          for posting a policeman and a pistol emoji and another high school
          student for posting “meet me in the Library Tuesday,” followed by a
          pistol, knife, and bomb. (Interestingly, a case that involved a pistol
          and a 😛 ruled in favor of the defendant, because 😛 latter indicated
          it was a joke.){" "}
        </p>
        <p>
          With rising gun safety concerns, especially in the United States where
          mass shootings increased ten-fold between 2010 and 2015, New Yorkers
          Against Gun Violence wrote an open letter to Apple, requesting the
          removal of the pistol. Apple acquiesced and now we have a water gun.{" "}
        </p>
        <p>
          <b>Why 🔫 is important</b>:
        </p>
      </>
    );
  } else if (number === "2023") {
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
        <p>
          <b>Why 👍 is important</b>:
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
      <div className={styles.panelContent} ref={containerRef}>
        {content}
        <ImageOnHover
          isImageVisible={isImageVisible}
          setIsImageVisible={setImageVisible}
          mousePos={mousePos}
        />
      </div>
    </div>
  );
};

export default TextPanel;
