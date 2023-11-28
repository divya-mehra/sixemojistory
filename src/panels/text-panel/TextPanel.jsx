import styles from "../panel.module.css";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import debounce from "lodash/debounce";
// TODO: make sure text from one panel doesn't crowd into height of another panel

const TextPanel = ({
  emoji,
  title,
  number,
  subtitle,
  currentEmoji,
  setCurrentEmoji,
  refs,
  ref_data,
  isElementInCenter,
  setIsElementInCenter,
  isMobile,
}) => {
  // define refs for intersection observer

  console.log(currentEmoji);
  console.log(Object.keys(isElementInCenter));

  // elements to observe: check when these are in view; then inView const sets to true

  const [startRef, inViewStart] = useInView({
    threshold: 0,
  });

  //  end checking for center

  const [importanceRef, inViewImportance] = useInView({
    threshold: 0,
  });

  const [endRef, inViewEnd] = useInView({
    threshold: 0,
  });

  // TEXT

  const textContent = [
    {
      year: "1999",
      content: (
        <div className={styles.textSection}>
          <p>
            By 1995, the pager was a Japanese sensation amongst teenagers.
            Carrier NTT Docomo sold its{" "}
            <span
              className={
                isElementInCenter.ref1
                  ? `${styles.hoverText} ${styles.highlightedText}`
                  : `styles.hoverText`
              }
              ref={refs.ref1}
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
            Employee Shigetaka Kurita, who was working on Docomo’s mobile
            internet platform at the time, took notice and the company tasked
            him with adding emojis to the carrier’s set of characters. Limited
            to 12x12 pixels, he{" "}
            <span
              className={
                isElementInCenter.ref2
                  ? `${styles.hoverText} ${styles.highlightedText}`
                  : `styles.hoverText`
              }
              ref={refs.ref2}
            >
              drew out 176 symbols
            </span>{" "}
            on paper and handed them over to the developer. Some of his
            decisions were based on observations of human behavior, others on
            personal preference. He likes to ski. So, he made a symbol for a big
            car that could hold his skis.{" "}
          </p>

          <p className={styles.important}>
            <b>Why ❤️ is important</b>: Rumor has it that without the popularity
            of the heart symbol, Docomo wouldn't have caught on to the promise
            of the emoji on mobile devices.
          </p>
        </div>
      ),
    },
    {
      year: "2007",
      content: (
        <div className={styles.textSection}>
          <p>
            A little over 10 years later, Google joined forces with Japanese
            telecom carrier, KDDI AU, to create an emoji set for Gmail. They
            called it Project Mojo. (This was before the time of the Unicode
            Consortium, now overlord of emoji standardization.)
          </p>
          <p>
            One big point of contention was the poo emoji. The symbol became
            popular in Japan through{" "}
            <span
              className={
                isElementInCenter.ref3
                  ? `${styles.hoverText} ${styles.highlightedText}`
                  : `styles.hoverText`
              }
              ref={refs.ref3}
            >
              a loveable character in the 80s show, Dr Slump.
            </span>{" "}
            But some people in Silicon Valley thought the it was offensive. What
            would people think of them if they added a pile of steaming shit
            (and that too, a smiling one!) to their vetted vocabulary? Japnese
            project manager, Takeshi Kishimoto was adamant: the emoji is
            essential. It says “’I don’t like that,’ but softly,” bringing an
            air of lighteness. It expresses a bad day with a laugh, standing in
            for the body language we lack in online communication. The team
            fought for it.
          </p>
          <p>
            They won, poo won, humanity won. This may sound like a joke, but
            what is raw humanity if not dealing with your shit on a daily basis?
          </p>

          <p className={styles.important}>
            <b>Why 💩 is important</b>: It's a characteristically cute emoji --
            one that can say something very serious in a very playful way --
            that Google added despite initial cross-cultural differences.
          </p>
        </div>
      ),
    },
    {
      year: "2015",
      content: (
        <div className={styles.textSection}>
          <p>
            In 2013, a DoSomething campaign called Diversify My Emoji showed up
            online, stating the obvious: "If you look at Apple's Emoji keyboard,
            what do you see? Two different camels. A smiling turd. EVERY PHASE
            OF THE MOON. But of the more than 800 Emojis, the only two
            resembling people of color are a guy who looks vaguely Asian and
            another in a turban." In this world, a smiling turd can only go so
            far.
          </p>

          <p>
            Two years after the campaign appeared, the Unicode Consortium
            finally added five skin tone modifiers to the “standard” yellow. The
            colors came from something called the Fitzpatrick scale, chosen for
            its so-called neutrality derived from its medical origins – but is
            anything <i>really </i> neutral?
          </p>
          <p>
            Once the modifiers were out, not everyone chose to use them. The
            Atlantic even published an article,{" "}
            <a
              href="https://www.theatlantic.com/politics/archive/2016/05/white-people-dont-use-white-emoji/481695/"
              target="_blank"
            >
              'Is It Okay to Use the White Emoji?'
            </a>{" "}
            So did many others until the people laughed and said, stop talking
            about emoji (too late). Regardless of race, the question remains: do
            I want to draw attention to the color of my skin in every message I
            send out?
          </p>
          <p className={styles.important}>
            <b>Why ✊🏻✊🏼✊🏽✊🏾✊🏿 is important</b>: Our vocabulary is a reflection
            of societal issues and norms, and representation is one of the most
            pressing matters we face today.
          </p>
        </div>
      ),
    },
    {
      year: "2016",
      content: (
        <div className={styles.textSection}>
          <p>
            {" "}
            Not many pop stars can claim to be synonymous with their own emoji.
            Beyonce runs with two: 🐝, for queen bey, and 🍋, which surged in
            popularity during the tour for her album, Lemonade. Use of the emoji
            notably spiked in 2016. The most unusual of these spikes was on
            celebrity chef Rachael Ray’s Instagram profile.{" "}
          </p>

          <p>
            Some key context: Lemonade included a song called <i>Sorry</i>,
            ending in the line, "He better call Becky with the good hair.” The
            singer’s fans, aka the beehive, identified Becky as a woman with
            whom Jay-Z had an affair, and believed this person to be fashion
            designer Rachel Roy.{" "}
          </p>

          <p>
            But the internet isn’t a place for thoughtfully considered comments
            and the beehive mistakenly unleashed itself on the innocent Rachael
            Ray, whose name rings similar to Rachel Roy. What followed was a
            string of cryptic emoji on a{" "}
            <span
              className={
                isElementInCenter.ref4
                  ? `${styles.hoverText} ${styles.highlightedText}`
                  : `styles.hoverText`
              }
              ref={refs.ref4}
            >
              seemingly innocent picture of gazpaacho.
            </span>{" "}
            Once the beehive realized she wasn't the Becky they were seeking,{" "}
            <span
              className={
                isElementInCenter.ref5
                  ? `${styles.hoverText} ${styles.highlightedText}`
                  : `styles.hoverText`
              }
              ref={refs.ref5}
            >
              they moved on.
            </span>{" "}
          </p>

          <p className={styles.important}>
            <b>Why 🐝🍋 is important</b>: Emoji are complex characters, and in
            combination with words, its potential meanings multiply. Imagine
            seeing a flurry of lemons and bees on a dinner recipe that does not
            involve citrus nor honey. The subtext lives large, especially online
            and out of context.
          </p>
        </div>
      ),
    },
    {
      year: "2018",
      content: (
        <div className={styles.textSection}>
          <p>
            When Kurita created his first set of emojis, he probably didn’t
            anticipate 3,664 pictorial variations coming into being. Now judges
            have to decide: in any given context, how much significance does the
            emoji hold? <i>Is</i> it a joke or does the cute little symbol bear
            a relation to concrete, potentially life-threatening, actions?{" "}
          </p>
          <p>
            In 2016, there were several cases involving the pistol emoji. A
            Frenchman went to jail for texting his ex-girlfriend the symbol,
            which the court called a real threat. The year prior, a teenager was
            charged for posting 👮‍♂️🔫 and another high school student for posting
            “meet me in the Library Tuesday,” followed by 🔫 🔪 💣.
            (Interestingly, in a case that involved death threat and a 😛,{"  "}
            <a
              href="https://www.socialmedialawbulletin.com/2017/08/legal-implications-emoji-use/"
              target="_blank"
            >
              the defendant argued 😛 indicated it was a joke.)
            </a>{" "}
          </p>
          <p>
            With rising gun safety concerns, especially in the United States
            where mass shootings were becoming horrifyingly commonplace relative
            to other nations, New Yorkers Against Gun Violence{" "}
            <a
              href="https://www.youtube.com/watch?v=hbXAXYYZJxM"
              target="_blank"
            >
              ran a campaign
            </a>{" "}
            to convince Apple to remove the pistol. Apple acquiesced and now we
            have a water gun.{" "}
          </p>
          <p>
            Other platforms followed, the last being Facebook. Some may ask:
            well, why do we still have a bomb? Two hypotheses: 1) the bomb is a
            more stylized version of the real thing, and 2) a bomb can be used
            to say something is bomb. Again, the language of emoji adapts to our
            cultural vernacular.
          </p>
          <p className={styles.important}>
            <b>Why 🔫 is important</b>: Just as emoji are added, they are also
            removed. The campaign to remove certain emoji beg the question of
            how the visuals available to us influence our thinking and
            behaviors.
          </p>
        </div>
      ),
    },
    {
      year: "2023",
      content: (
        <div className={styles.textSection}>
          <p>
            Emoji may the language of cuteness, but it becomes less cute when
            thousands of dollars are at stake. Last month, Canadian farmer Chris
            Achter responded to a contract confirmation with: 👍. His buyer
            later sued Achter for failing to deliver the goods and the judge
            ruled that 👍 was just as good as a signature, ordering Achter to
            pay up $61,442 USD.
          </p>
          <p>
            The meaning behind the innocuous little symbols have been
            incresingly put to the test ever since 2004 (as emoticons) and 2014
            (as emoji). Just before the ruling on SWT v Achter, former Chewy CEO
            Ryan Cohen was sued by the SEC for tweeting "At least her cart is
            full 🌝" in response to negative press on Bed Bath & Beyond, and
            earlier this year, a Kentucky judge faced a decision of whether 💦
            in a text referred to sexual acts or meth.
          </p>
          <p>
            All this begs the question we've been asking all along: Do emoji
            clarify or obscure? They conflate, confuse, or clarify. Their
            meaning multiples tenfold. And while our alphabet is finite (though
            vocabulary, and certainly, language is not), emoji continue to
            reproduce.
          </p>
          <p className={styles.important}>
            <b>Why 👍 is important</b>: The recent court cases serve as a
            reminder that in front of the law, emoji may hold the same weight as
            a signature.
          </p>
        </div>
      ),
    },
  ];

  // intersection observer
  // what to do when element observed
  // change grid when panel comes into view

  // Debouncing to make sure state change registers
  const debouncedStateChange = debounce(() => {
    if (inViewStart) {
      setCurrentEmoji((prevEmoji) => (prevEmoji !== emoji ? emoji : prevEmoji));
    }
  }, 200);

  useEffect(() => {
    debouncedStateChange();
  }, [inViewStart, emoji, setCurrentEmoji, debouncedStateChange]);

  //

  const checkElementPosition = () => {
    let refNames = Object.keys(isElementInCenter);
    // let refName= "ref1"

    refNames.forEach((refName) => {
      let ref = refs[refName];
      const contextElement = ref.current;
      if (contextElement) {
        const elementRect = contextElement.getBoundingClientRect();
        const centered = window.innerHeight / 2;

        const targetTop = centered + window.innerHeight * 0.1;
        const targetBottom = centered - window.innerHeight * 0.3;

        // Check if the middle of the element is close to the center of the viewport
        const isCentered =
          elementRect.top <= targetTop && elementRect.bottom >= targetBottom;

        // Update the state for the current element

        // UNLESS [TODO:] next section is not fully at the top
        setIsElementInCenter((prevStates) => ({
          ...prevStates,
          [refName]: isCentered,
        }));
      }
    });
  };

  useEffect(() => {
    // Initial check when the component mounts
    checkElementPosition();

    // Check again when the window is resized
    window.addEventListener("scroll", checkElementPosition);

    return () => {
      // Remove the resize listener when the component unmounts
      window.removeEventListener("scroll", checkElementPosition);
    };
  }, []);

  // HOVER IMAGES

  const containerRef = useRef(null);

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

  // TEXT CONTENT

  let content;
  console.log();

  if (number === "1999") {
    content = textContent[0].content;
  } else if (number === "2007") {
    content = textContent[1].content;
  } else if (number === "2015") {
    content = textContent[2].content;
  } else if (number === "2016") {
    content = textContent[3].content;
  } else if (number === "2018") {
    content = textContent[4].content;
  } else if (number === "2023") {
    content = textContent[5].content;
  }

  // scroll back to top

  const scrollToTop = (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds smooth scrolling animation
    });
  };

  return (
    <div
      className={`${styles.textPanel}`}
      data-panel-number={number}
      ref={startRef}
    >
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
      </div>
    </div>
  );
};

export default TextPanel;
