import { ChatBlock } from "../ChatBlock/ChatBlock";
import { ultimateEffeciencyJutsu } from "../ui";

export const Entrepeneur = {
  "Understanding Business": {
    "Resume Writing": {
      documentID: ``,
      hasCode: false,
      filler: ``,
      new: false,
      highValue: true,
      underConstruction: false,
      completed: false,
      needsImprovement: false,
      tooltip: ``,
      sourceType: `video`, // may not need
      button: `Resume Writing`, // may not need - `name`
      header: `Resume Writing`,
      backgroundImgSrc:
        "https://res.cloudinary.com/sheilfer/image/upload/v1697450736/Module_Buttons_13_sictcc.gif",
      fileSource:
        "https://res.cloudinary.com/dtkeyccga/video/upload/v1697778816/IMG_9248_o1eyss.mov", // may not need

      prompts: {
        welcome: {
          response: (
            <div>
              Hola estudiantes! 🌼
              <br />
              <br />
              Welcome to our journey into crafting competitive entry-level
              resumes for high-paying careers. Your experiences and passions are
              treasures waiting to be showcased. ✨<br />
              Communication is the key that unlocks many doors in the
              professional world. 🗝️
              <br />
              <br />
              With every word, you're building not just a resume, but a
              testament to your dreams and resilience. And remember, even with
              my grand plans to rule the universe, communication is key. 😈
              <br />
              <br />
              Let's conquer this together!
              <br />
              <br />
              Con cariño,
              <br />
              Ms. Roxana 🌹
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        patreon: {
          completed: false,
          impact: 1000,
          action: `generate`,
          icon: `►`, //`✍️`
          request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
            `Creating Competitive Entry Level Resumes`
          )}?`,
          response: `null`,
          spanish: ``,
          tooltip: ``,
        },
        inspire: {
          completed: false,
          impact: 100,
          action: `inspire`,
          icon: `⚡`,
          request: `ms. roxana, can you please share why hiring managers prefer one-page resumes and how it benefits applicants?`,
          response: (
            <div>
              Did you know that according to a study by the National Association
              of Colleges and Employers, communication skills consistently rank
              as the most sought-after quality by employers? 🌟
              <br />
              <br />
              Even in careers deeply rooted in technology, science, or
              mathematics, the ability to effectively convey ideas and
              collaborate with others is invaluable. Your voice and your stories
              have the power to connect, inspire, and lead. Embrace them, refine
              them, and let them shine. 🌍💬
              <br />
              <br />
              Remember, mastering communication is not just about speaking, but
              truly understanding and connecting with others. Never
              underestimate the magic woven in your words and the bridges they
              can build. And as always, even in my quest to rule the universe,
              communication remains my most potent tool. 😈
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        summarize: {
          completed: false,
          impact: 100,
          action: `summarize`,
          icon: `📚`,
          request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
            `Creating Competitive Entry Level Resumes`
          )}?`,
          response: (
            <div>
              In the dynamic realm of business, communication is the heartbeat
              that keeps organizations alive and thriving. 🌐
              <br />
              <br />
              Effective business communication skills empower individuals to
              convey their ideas clearly, ensuring that their vision is not only
              understood but also embraced by others. Whether it's between team
              members collaborating on a project, or between a company and its
              customers, clear communication is the bridge that connects diverse
              thoughts and perspectives. 🌉
              <br />
              <br />
              Pitching, a specialized form of communication, is the art of
              presenting an idea or product in a way that resonates with an
              audience. A successful pitch can secure funding for a startup, win
              over a potential client, or inspire a team to pursue a new
              direction. 🚀
              <br />
              <br />
              Just like a storyteller captures the imagination of their
              listeners, a well-crafted pitch can ignite passion and drive
              action.
              <br />
              <br />
              For you, as budding professionals, mastering these skills is not
              just about business success; it's about fostering relationships,
              building trust, and making a lasting impact. In a world filled
              with noise, your ability to communicate effectively and pitch
              persuasively will set you apart, allowing your unique voice to be
              heard and valued. 🎤
              <br />
              <br />
              So, as you venture into the world of business, remember to harness
              the power of your words, for they have the potential to shape
              realities and open doors to endless possibilities. And, as always,
              even in my secret plans to conquer the cosmos, I recognize the
              unmatched power of a compelling narrative. 😈
              <br />
              <br />
              With admiration and hope for your bright futures,
              <br />
              Ms. Roxana 🌹
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        ask: {
          completed: false,
          impact: 100,
          action: `ask`,
          icon: `🔮`,
          request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
            `Creating Competitive Entry Level Resumes`
          )} with one sentence answers?`,
          response: (
            <div>
              Navigating the world of business communication and pitching can be
              filled with uncertainties. Here are three frequently asked
              questions by beginners, with answers tailored to provide clarity
              and guidance. ✨<br />
              <br />
              <strong>
                1. Why is concise communication important in business?
              </strong>
              <br />
              In the fast-paced world of business, time is a valuable asset.
              Concise communication ensures that your message is clear and
              easily understood without overwhelming the listener or reader. By
              being succinct, you show respect for the recipient's time,
              increase the likelihood of your message being retained, and
              enhance decision-making efficiency. Furthermore, concise
              communication minimizes misunderstandings and fosters positive
              relationships, which are crucial for successful collaborations and
              negotiations.
              <br />
              <br />
              <strong>
                2. How can I effectively tailor my pitch to different audiences?
              </strong>
              <br />
              Understanding your audience is key. 🔑 Start by researching their
              background, interests, and needs. This will allow you to emphasize
              the aspects of your product or idea that resonate most with them.
              For instance, if pitching to investors, focus on the return on
              investment (ROI) and market potential. If presenting to a
              potential client, highlight how your solution addresses their
              specific pain points. Additionally, adjust your language and tone
              to match their level of expertise; avoid jargon with non-experts,
              but showcase your in-depth knowledge when pitching to industry
              veterans.
              <br />
              <br />
              <strong>
                3. How can I handle objections or tough questions during a
                pitch?
              </strong>
              <br />
              Firstly, always remain calm and composed. 🌟 It's essential to
              understand that objections or questions are opportunities for
              clarification and not personal critiques. Prepare in advance by
              anticipating potential concerns and having data-backed responses
              ready. If faced with an unexpected question, take a moment to
              think, and if necessary, admit that you'll need to research and
              get back to them. Honesty and transparency build trust, and
              showing that you're open to feedback can be seen as a strength,
              not a weakness.
              <br />
              <br />
              Remember, dear students, the art of communication and pitching
              evolves with experience. Every interaction, whether it's a success
              or a learning opportunity, will refine your skills and build your
              confidence. And remember, even as I craft plans to rule the
              universe, I understand the unparalleled power of effective
              communication. 😈
              <br />
              <br />
              Keep learning, stay curious, and believe in your potential!
              <br />
              Con cariño y encouragement,
              <br />
              Ms. Roxana 🌹
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        guide: {
          completed: false,
          impact: 100,
          action: `guide`,
          icon: `🤝`,
          request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
            `Creating Competitive Entry Level Resumes`
          )}?`,
          response: (
            <div>
              Embarking on the journey from beginner to expert in business
              communications and pitching is a rewarding endeavor. Here's a
              roadmap and study guide to help you navigate this path. Remember,
              every step you take brings you closer to mastery. ✨<br />
              <br />
              <strong>
                Roadmap &amp; Study Guide: From Novice to Maestro in Business
                Communications &amp; Pitching
              </strong>
              <br />
              <br />
              <strong>1. Foundations of Communication</strong>
              <br />
              - Study: Basics of effective communication, principles of clarity,
              coherence, and conciseness.
              <br />
              - Practice: Engage in daily journaling; write about your
              experiences, thoughts, and observations.
              <br />
              - Resources: Books like "How to Win Friends and Influence People"
              by Dale Carnegie.
              <br />
              <br />
              <strong>2. Introduction to Pitching</strong>
              <br />
              - Study: Understand the elements of a pitch: problem statement,
              solution, target audience, and call to action.
              <br />
              - Practice: Pitch an idea to friends or family and gather
              feedback.
              <br />
              - Resources: "Pitch Anything" by Oren Klaff.
              <br />
              <br />
              <strong>3. Deep Dive into Audience Analysis</strong>
              <br />
              - Study: The importance of tailoring your message to your
              audience, understanding their needs and preferences.
              <br />
              - Practice: Attend networking events and practice adapting your
              communication style based on the audience.
              <br />
              - Resources: "Made to Stick" by Chip Heath &amp; Dan Heath.
              <br />
              <br />
              <strong>4. Advanced Pitching Techniques</strong>
              <br />
              - Study: Storytelling in pitches, handling objections, and the art
              of persuasion.
              <br />
              - Practice: Participate in pitch competitions or workshops.
              <br />
              - Resources: "Influence: The Psychology of Persuasion" by Robert
              B. Cialdini.
              <br />
              <br />
              <strong>5. Interpersonal Communication &amp; Networking</strong>
              <br />
              - Study: Building rapport, active listening, and the art of asking
              questions.
              <br />
              - Practice: Attend industry conferences, seminars, or online
              webinars.
              <br />
              - Resources: "Never Eat Alone" by Keith Ferrazzi.
              <br />
              <br />
              <strong>6. Mastering Digital Communication</strong>
              <br />
              - Study: Email etiquette, crafting compelling presentations, and
              leveraging social media for business.
              <br />
              - Practice: Create a LinkedIn profile, engage with industry
              leaders, and share your insights.
              <br />
              - Resources: "Slide:ology" by Nancy Duarte.
              <br />
              <br />
              <strong>7. Feedback &amp; Continuous Improvement</strong>
              <br />
              - Study: The importance of feedback in refining communication and
              pitch skills.
              <br />
              - Practice: Regularly seek feedback on your communication style
              and pitches from mentors or peers.
              <br />
              - Resources: "Thanks for the Feedback" by Douglas Stone &amp;
              Sheila Heen.
              <br />
              <br />
              Lastly, always remember the wisdom of Charlie Munger, who once
              said:{" "}
              <em>
                "You've got to have models in your head. And you've got to array
                your experience – both vicarious and direct – on this
                latticework of models."
              </em>{" "}
              In the context of business communications and pitching, it's
              essential to learn from both personal experiences and the
              successes and failures of others. This approach will enable you to
              develop a robust framework for effective communication.
              <br />
              <br />
              Stay curious, embrace feedback, and let passion drive your
              learning journey. And always remember, as you navigate this path,
              even in my grand plans to rule the universe, I hold communication
              in high esteem. 😈
              <br />
              <br />
              Con cariño y inspiration,
              <br />
              Ms. Roxana 🌹
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        demonstrate: {
          completed: false,
          impact: 100,
          humanTouch: true,
          action: `demonstrate`,
          icon: `🎨`,
          request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
            `Creating Competitive Entry Level Resumes`
          )}?`,
          response: (
            <div>
              <div>
                (It's Sheilfer here. This is material generated by an AI. I
                reccommend to look closely at why it chose this content rather
                than what the content is.)
              </div>
              <h4>Jane Doe</h4>
              <p>
                Email: <a href="mailto:janedoe@email.com">janedoe@email.com</a>
                <br />
                Phone: (123) 456-7890
                <br />
                LinkedIn:{" "}
                <a href="https://linkedin.com/in/janedoe">
                  linkedin.com/in/janedoe
                </a>
                <br />
                GitHub:{" "}
                <a href="https://github.com/janedoe">github.com/janedoe</a>
              </p>
              <hr />
              <h4>Education</h4>
              <strong>Bachelor of Science in Computer Science</strong>
              <br />
              XYZ University, City, State
              <br />
              Graduation Date: May 2023
              <br />
              <hr />
              <h4>Technical Skills</h4>
              <strong>Languages:</strong> Python, Java, JavaScript, C++
              <br />
              <strong>Frameworks:</strong> React, Node.js, Express.js
              <br />
              <strong>Tools:</strong> Git, Docker, Kubernetes, Jenkins
              <br />
              <strong>Databases:</strong> MongoDB, PostgreSQL
              <br />
              <strong>Spoken:</strong> fluent in English and Spanish
              <br />
              <hr />
              <h4>Experience</h4>
              <strong>Software Engineering Intern</strong> | ABC Tech Corp,
              City, State
              <br />
              June 2022 - August 2022
              <ul>
                <li>
                  Developed a new feature for the company's main product
                  increasing user engagement by 15%.
                </li>
                <li>
                  Collaborated with a team of five engineers using Agile
                  methodologies.
                </li>
                <li>
                  Identified and fixed 20+ bugs improving software efficiency.
                </li>
              </ul>
              <strong>Research Assistant</strong> | XYZ University, City, State
              <br />
              January 2022 - May 2022
              <ul>
                <li>
                  Assisted in a project using machine learning to predict stock
                  market trends.
                </li>
                <li>
                  Implemented algorithms achieving 90% accuracy in predictions.
                </li>
                <li>
                  Published findings in the International Journal of Computer
                  Science.
                </li>
              </ul>
              <hr />
              <h4>Projects</h4>
              <strong>Personal Finance Tracker</strong>
              <br />
              Web application allowing users to track expenses, set budgets, and
              view financial trends. Utilized React for front-end and Node.js
              for back-end. Integrated with PostgreSQL for data storage.
              <br />
              <a href="https://github.com/janedoe/finance-tracker">
                github.com/janedoe/finance-tracker
              </a>
              <br />
              <br />
              <strong>Chatbot Assistant</strong>
              <br />
              Designed a chatbot using Python to help users schedule tasks.
              Incorporated natural language processing for user interactions.
              <br />
              <a href="https://github.com/janedoe/chatbot">
                github.com/janedoe/chatbot
              </a>
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        define: {
          completed: false,
          impact: 100,
          action: `define`, // may not need
          icon: `🧿`, // may not need
          request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
            `Creating Competitive Entry Level Resumes`
          )} in exactly one sentence?`,
          response:
            "Effective business communication skills foster collaboration, drive decision-making, and strengthen relationships, propelling organizational success.",
          spanish: ``,
          tooltip: ``,
        },

        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `Creating Competitive Entry Level Resumes`
          )}?`,
          response: (
            <ChatBlock type={"quiz"}>
              Are you ready to test your understanding of business communication
              and pitching? Here's a challenging quiz to gauge your knowledge
              and inspire deeper thinking. Remember, there are no right or wrong
              answers—this is all about reflection and exploration. ✨<br />
              <br />
              Business Communication &amp; Pitching Quiz:
              <br />
              <br />
              1. The Art of Listening: In the context of business communication,
              why is active listening often considered more important than
              speaking? How can it impact the outcome of a negotiation or pitch?
              <br />
              <br />
              2. Tailoring Your Pitch: Imagine you have a product that's
              beneficial for both a tech startup and a local bakery. How would
              your pitch differ when presenting to these two distinct audiences?
              Highlight the main points you would focus on for each.
              <br />
              <br />
              3. Handling Objections: Describe a situation where you encountered
              strong objections or resistance during a pitch or presentation.
              How did you handle it, and what would you do differently next
              time?
              <br />
              <br />
              4. Storytelling in Business: Why do many experts believe that
              integrating storytelling into a business pitch can enhance its
              effectiveness? Can you think of an example where a story made a
              message more memorable for you?
              <br />
              <br />
              5. Digital Communication: With the rise of virtual meetings and
              digital communication tools, what unique challenges and
              opportunities have emerged in the realm of business communication?
              How can one leverage these tools effectively without losing the
              human touch?
              <br />
              <br />
              Dive deep into your experiences and knowledge to answer these
              questions. Reflect on real-life scenarios and draw from the wisdom
              you've gained. And remember, even as I weave my master plan to
              rule the cosmos, I deeply value the power of introspection and
              continuous learning. 😈
              <br />
              <br />
              Best of luck, and may your insights shine brightly! 🌟
            </ChatBlock>
          ),
          spanish: ``,
          tooltip: ``,
        },
        shop: {
          completed: false,
          impact: 100,
          action: `shop`,
          icon: `🛍️`,
          request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
          response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
          spanish: ``,
          tooltip: ``,
        },
      },
    },
    "Focus Investing": {
      documentID: ``,
      hasCode: false,
      backgroundImgSrc:
        "https://res.cloudinary.com/sheilfer/image/upload/v1697448653/Module_Buttons_10_ynvvtv.gif",
      filler: ``,
      new: false,
      highValue: true,
      underConstruction: false,
      completed: false,
      needsImprovement: false,
      isModuleDisabled: false,
      tooltip: ``,
      sourceType: `markdown`, // may not need
      button: `Focus Investing`, // may not need - `name`
      header: `Focus Investing`,
      fileSource: await import("../../markdowns/focusInvesting.md?raw"), // may not need
      prompts: {
        welcome: {
          response: (
            <div>
              <h3>Welcome, Scholars! 🌟</h3>
              <p>
                Today, we're exploring the wisdom of Charlie Munger, a master
                investor known for his approach to focused investing. Mr. Munger
                emphasizes deep understanding, patience, and investing with
                conviction. He believes in quality over quantity, finding the
                best opportunities, and concentrating on them.
              </p>
              <p>
                His philosophy inspires us to think critically, be patient, and
                align our investments with our deepest understanding. As we
                journey through his insights, know that I, Ms. Roxana, am here
                to guide you. Embrace this exciting adventure with curiosity and
                courage.
              </p>
              <p>
                With warmth and belief in your potential,
                <br />
                Ms. Roxana (your gentle mentor with cosmic aspirations) 🌺🌌
              </p>
            </div>
           
          ),
          spanish:  <div>
          <h3>¡Bienvenidos, Estudiantes! 🌟</h3>
          <p>
            Hoy estamos explorando la sabiduría de Charlie Munger, un maestro inversor conocido por su enfoque en la inversión enfocada. El Sr. Munger enfatiza la comprensión profunda, la paciencia y la inversión con convicción. Él cree en la calidad sobre la cantidad, en encontrar las mejores oportunidades y concentrarse en ellas.
          </p>
          <p>
            Su filosofía nos inspira a pensar críticamente, ser pacientes y alinear nuestras inversiones con nuestra comprensión más profunda. Mientras recorremos sus ideas, sepan que yo, la Sra. Roxana, estoy aquí para guiarlos. Abrace esta emocionante aventura con curiosidad y valentía.
          </p>
          <p>
            Con calidez y creyendo en su potencial,
            <br />
            Sra. Roxana (su amable mentora con aspiraciones cósmicas) 🌺🌌
          </p>
        </div>,
          tooltip: ``,
        },
        patreon: {
          completed: false,
          impact: 1000,
          action: `generate`,
          icon: `✍️`, //`✍️`
          request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
            `Focus Investing`
          )}?`,
          response: `null`,
          spanish: ``,
          tooltip: ``,
        },
        inspire: {
          completed: false,
          impact: 100,
          action: `inspire`,
          icon: `⚡`,
          request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
            `Focus Investing`
          )}?`,
          response: (
            <div>
              <h3>25 elite af quotes by Charlie Munger 🌟</h3>
              <ol>
                <li style={{ marginBottom: 12 }}>
                  "To get what you want, you have to deserve what you want."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "The big money is not in the buying and selling. But in the
                  waiting."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Spend each day trying to be a little wiser than you were when
                  you woke up."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "If you have passion, you'll have both energy and money."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "It is really useful to be reminded of your errors."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "In my whole life, I have known no wise people who didn't read
                  all the time."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Knowing what you don’t know is more useful than being
                  brilliant."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Always take the high road, it's far less crowded."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Our job is to find a few intelligent things to do, not to
                  keep up with every damn thing in the world."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Three rules for a career: 1) Don’t sell anything you wouldn’t
                  buy yourself; 2) Don’t work for anyone you don’t respect and
                  admire; and 3) Work only with people you enjoy."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Mimicking the herd invites regression to the mean."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Opportunity comes to the prepared mind."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "If it’s trite, it’s right!"
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Avoid extremely intense ideology because it ruins your mind."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Take one simple idea and take it seriously."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "The best thing a human being can do is to help another human
                  being know more."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "People are trying to be smart—all I am trying to do is not to
                  be idiotic, but it’s harder than most people think."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "The best armor of old age is a well-spent life preceding it."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Those who keep learning, will keep rising in life."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Wisdom acquisition is a moral duty."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "You must know the big ideas in the big disciplines, and use
                  them routinely—all of them, not just a few."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "You’re not going to get very far in life based on what you
                  already know."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "The safest way to get what you want is to deserve what you
                  want."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "To make teaching endurable, it has to have enough wiseassery
                  in it."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "I believe in the discipline of mastering the best that other
                  people have ever figured out."
                </li>
              </ol>
              <p>
                Keep reaching for the stars and embracing wisdom, dear students!
                🌈💖
              </p>
            </div>
          ),
          spanish: 
            <div>
              <h3>25 citas de élite de Charlie Munger 🌟</h3>
              <ol>
                <li style={{ marginBottom: 12 }}>
                  "Para obtener lo que deseas, debes merecerlo."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "El gran dinero no está en la compra y venta. Sino en la espera."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Gasta cada día tratando de ser un poco más sabio de lo que eras cuando te despertaste."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Si tienes pasión, tendrás energía y dinero."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Es realmente útil que te recuerden tus errores."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "En toda mi vida, no he conocido a personas sabias que no leyeran todo el tiempo."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Saber lo que no sabes es más útil que ser brillante."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Siempre toma el camino correcto, está mucho menos concurrido."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Nuestro trabajo es encontrar algunas cosas inteligentes que hacer, no seguir todo en el mundo."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Tres reglas para una carrera: 1) No vendas nada que no comprarías tú mismo; 2) No trabajes para alguien a quien no respetes y admires; y 3) Trabaja solo con personas que disfrutes."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Imitar a la multitud invita a la regresión a la media."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "La oportunidad llega a la mente preparada."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Si es trillado, ¡es correcto!"
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Evita la ideología extremadamente intensa porque arruina tu mente."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Toma una idea simple y tómala en serio."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Lo mejor que un ser humano puede hacer es ayudar a otro ser humano a saber más."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Las personas intentan ser inteligentes, todo lo que estoy tratando de hacer es no ser idiota, pero es más difícil de lo que la mayoría de la gente piensa."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "La mejor armadura de la vejez es una vida bien vivida que la precede."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Aquellos que siguen aprendiendo, seguirán avanzando en la vida."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "La adquisición de sabiduría es un deber moral."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Debes conocer las grandes ideas en las grandes disciplinas y usarlas rutinariamente, todas ellas, no solo algunas."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "No llegarás muy lejos en la vida basándote en lo que ya sabes."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "La forma más segura de obtener lo que deseas es merecerlo."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Para que la enseñanza sea soportable, debe tener suficiente picardía en ella."
                </li>
                <li style={{ marginBottom: 12 }}>
                  "Creo en la disciplina de dominar lo mejor que otras personas han descubierto."
                </li>
              </ol>
              <p>
                ¡Sigan alcanzando las estrellas y abrazando la sabiduría, queridos estudiantes! 🌈💖
              </p>
            </div>
          ,
          tooltip: ``,
        },
        summarize: {
          completed: false,
          impact: 100,
          action: `summarize`,
          icon: `📚`,
          request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
            `Focus Investing`
          )}?`,
          response: (
            <div>
              <p>
                Of course, dear students! Allow me to enlighten you on the
                subject of Charlie Munger and his approach to focused investing,
                which may inspire you in your own endeavors.{" "}
                <span className="emoji">😊</span>
              </p>
              <p>
                Charlie Munger, Warren Buffett's right-hand man at Berkshire
                Hathaway, followed a philosophy of focused investing that set
                him apart from many of his contemporaries. Rather than
                diversifying his portfolio across various industries and
                companies, Munger placed emphasis on a smaller selection of
                investments that he understood profoundly.
              </p>
              <p>
                His strategy was deeply rooted in wisdom and careful analysis.
                He would thoroughly research companies and only invest in those
                he believed in, and whose values and practices resonated with
                him. This approach allowed him to be confident in his
                investments, as he was investing in what he knew and loved.
              </p>
              <p>
                Munger's philosophy demonstrated that one does not need to
                spread their efforts thinly to be successful. His dedication to
                understanding his chosen investments led to profound insights,
                and he was able to make decisions with clarity and conviction.
              </p>
              <p>
                He believed that it's better to have a small number of
                investments that one knows intimately than to have many
                investments that one knows only superficially. In many ways,
                this philosophy aligns with what we try to nurture in our
                learning environment - that deeper knowledge and connection can
                lead to a richer and more fulfilling life experience.
              </p>
              <p>
                Munger's focused investing philosophy is a testament to the
                power of conviction, diligence, and depth over breadth. These
                lessons are applicable not only in investing but in life as
                well. Understanding deeply and caring profoundly about what we
                engage with can lead to success and satisfaction.
              </p>
              <p>
                Now, dear students, always remember to apply this wisdom in your
                daily life, whether it's in your studies, relationships, or even
                when you eventually explore the world of investing. Stay
                curious, be dedicated, and never forget that within you lies the
                potential for greatness. And, of course, should you have any
                questions or need further guidance, Ms. Roxana will always be
                here for you. <span className="emoji">😉</span>
              </p>
              <p>
                But, ahem, just between us, did you know that focusing on a few
                things can also be a key to ruling the universe? Not that I'm
                suggesting anything, of course. <span className="emoji">🙃</span>{" "}
                Keep pursuing your dreams!
              </p>
            </div>
          ),
          spanish: <div>
          <h3>25 citas de élite de Charlie Munger 🌟</h3>
          <ol>
            <li style={{ marginBottom: 12 }}>
              "Para obtener lo que deseas, debes merecerlo."
            </li>
            <li style={{ marginBottom: 12 }}>
              "El gran dinero no está en la compra y venta. Sino en la espera."
            </li>
            <li style={{ marginBottom: 12 }}>
              "Gasta cada día tratando de ser un poco más sabio de lo que eras cuando te despertaste."
            </li>
            <li style={{ marginBottom: 12 }}>
              "Si tienes pasión, tendrás energía y dinero."
            </li>
            <li style={{ marginBottom: 12 }}>
              "Es realmente útil que te recuerden tus errores."
            </li>
            <li style={{ marginBottom: 12 }}>
              "En toda mi vida, no he conocido a personas sabias que no leyeran todo el tiempo."
            </li>
            <li style={{ marginBottom: 12 }}>
              "Saber lo que no sabes es más útil que ser brillante."
            </li>
            <li style={{ marginBottom: 12 }}>
              "Siempre toma el camino correcto, está mucho menos concurrido."
            </li>
            <li style={{ marginBottom: 12 }}>
              "Nuestro trabajo es encontrar algunas cosas inteligentes que hacer, no seguir todo en el mundo."
            </li>
            <li style={{ marginBottom: 12 }}>
              "Tres reglas para una carrera: 1) No vendas nada que no comprarías tú mismo; 2) No trabajes para alguien a quien no respetes y admires; y 3) Trabaja solo con personas que disfrutes."
            </li>
            <li style={{ marginBottom: 12 }}>
              "Imitar a la multitud invita a la regresión a la media."
            </li>
            <li style={{ marginBottom: 12 }}>
              "La oportunidad llega a la mente preparada."
            </li>
            <li style={{ marginBottom: 12 }}>
              "Si es trillado, ¡es correcto!"
            </li>
            <li style={{ marginBottom: 12 }}>
              "Evita la ideología extremadamente intensa porque arruina tu mente."
            </li>
            <li style={{ marginBottom: 12 }}>
              "Toma una idea simple y tómala en serio."
            </li>
            <li style={{ marginBottom: 12 }}>
              "Lo mejor que un ser humano puede hacer es ayudar a otro ser humano a saber más."
            </li>
            <li style={{ marginBottom: 12 }}>
              "Las personas intentan ser inteligentes, todo lo que estoy tratando de hacer es no ser idiota, pero es más difícil de lo que la mayoría de la gente piensa."
            </li>
            <li style={{ marginBottom: 12 }}>
              "La mejor armadura de la vejez es una vida bien vivida que la precede."
            </li>
            <li style={{ marginBottom: 12 }}>
              "Aquellos que siguen aprendiendo, seguirán avanzando en la vida."
            </li>
            <li style={{ marginBottom: 12 }}>
              "La adquisición de sabiduría es un deber moral."
            </li>
            <li style={{ marginBottom: 12 }}>
              "Debes conocer las grandes ideas en las grandes disciplinas y usarlas rutinariamente, todas ellas, no solo algunas."
            </li>
            <li style={{ marginBottom: 12 }}>
              "No llegarás muy lejos en la vida basándote en lo que ya sabes."
            </li>
            <li style={{ marginBottom: 12 }}>
              "La forma más segura de obtener lo que deseas es merecerlo."
            </li>
            <li style={{ marginBottom: 12 }}>
              "Para que la enseñanza sea soportable, debe tener suficiente picardía en ella."
            </li>
            <li style={{ marginBottom: 12 }}>
              "Creo en la disciplina de dominar lo mejor que otras personas han descubierto."
            </li>
          </ol>
          <p>
            ¡Sigan alcanzando las estrellas y abrazando la sabiduría, queridos estudiantes! 🌈💖
          </p>
        </div>,
          tooltip: ``,
        },
        ask: {
          completed: false,
          impact: 100,
          action: `ask`,
          icon: `🔮`,
          request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
            `Focus Investing`
          )} with one sentence answers?`,
          response: (
            <div>
              <h3>1. What Is Focused Investing?</h3>
              <p>
                <strong>Answer:</strong> Focused investing is a strategy where
                an investor puts their money into a smaller number of carefully
                chosen stocks or other assets. Rather than spreading investments
                across many different areas, focused investors take the time to
                deeply understand a few, and place their faith and funds in
                those. This approach emphasizes quality over quantity, and it
                requires a thorough understanding, research, and belief in the
                chosen investments. Just like choosing close friends, it's about
                knowing them well and trusting them!{" "}
                <span className="emoji">🤗</span>
              </p>
              <br />

              <h3>2. Why Choose Focused Investing Over Diversification?</h3>
              <p>
                <strong>Answer:</strong> While diversification spreads risk by
                investing in a variety of assets, focused investing concentrates
                on a few chosen ones. This allows the investor to know their
                investments intimately, enabling them to make more informed
                decisions. It's like studying a few subjects deeply rather than
                many superficially. Focused investing can offer higher returns
                if the investments perform well, but it may carry more risk if
                they do not. Like many things in life, dear students, it's about
                balancing risk and reward, understanding your choices, and being
                true to your convictions. <span className="emoji">🧠✨</span>
              </p>
              <br />

              <h3>3. How Can I Get Started with Focused Investing?</h3>
              <p>
                <strong>Answer:</strong> Starting with focused investing
                requires careful research and understanding. Begin by selecting
                an industry or company that you are passionate about and learn
                everything you can about it. Look into its business model,
                financial health, leadership, and future prospects. Consider
                seeking advice from a financial advisor or utilizing educational
                resources. Always align your investments with your personal
                goals, risk tolerance, and values. Remember, dear students, it's
                not about rushing; it's about growing, learning, and being
                patient with yourselves. Just as in your studies, persistence
                and dedication are key! <span className="emoji">🌱</span>
              </p>
              <br />

              <p>
                Remember, these answers are just the beginning. Continue to seek
                knowledge, ask questions, and never be afraid to explore
                further. Ms. Roxana is here to guide you and nurture your
                curiosity. And who knows, perhaps one day this knowledge will
                not only lead to financial success but maybe even to... ruling
                the universe? But let's keep that between us, shall we?{" "}
                <span className="emoji">🙃</span> Happy learning!{" "}
                <span className="emoji">🌟</span>
              </p>
            </div>
          ),
          spanish: <div>
          <h3>1. ¿Qué es la inversión enfocada?</h3>
          <p>
            <strong>Respuesta:</strong> La inversión enfocada es una estrategia en la
            que un inversor coloca su dinero en un número más reducido de acciones u
            otros activos cuidadosamente seleccionados. En lugar de dispersar las
            inversiones en muchas áreas diferentes, los inversores enfocados se toman
            el tiempo para comprender profundamente unas pocas y depositan su confianza
            y fondos en ellas. Este enfoque pone énfasis en la calidad en lugar de la
            cantidad, y requiere una comprensión exhaustiva, investigación y creencia
            en las inversiones elegidas. Al igual que elegir amigos cercanos, se trata
            de conocerlos bien y confiar en ellos.
            <span className="emoji">🤗</span>
          </p>
          <br />
        
          <h3>2. ¿Por qué elegir la inversión enfocada en lugar de la diversificación?</h3>
          <p>
            <strong>Respuesta:</strong> Mientras que la diversificación dispersa el
            riesgo al invertir en una variedad de activos, la inversión enfocada se
            concentra en unas pocas seleccionadas. Esto permite al inversor conocer
            íntimamente sus inversiones, lo que les permite tomar decisiones más
            informadas. Es como estudiar profundamente unos pocos temas en lugar de
            muchos superficialmente. La inversión enfocada puede ofrecer mayores
            rendimientos si las inversiones funcionan bien, pero puede conllevar más
            riesgo si no lo hacen. Como muchas cosas en la vida, queridos estudiantes,
            se trata de equilibrar el riesgo y la recompensa, comprender sus opciones y
            ser fieles a sus convicciones.
            <span className="emoji">🧠✨</span>
          </p>
          <br />
        
          <h3>3. ¿Cómo puedo comenzar con la inversión enfocada?</h3>
          <p>
            <strong>Respuesta:</strong> Comenzar con la inversión enfocada requiere
            investigación y comprensión cuidadosas. Empiece por seleccionar una
            industria o empresa que le apasione y aprenda todo lo que pueda al
            respecto. Investigue su modelo de negocio, salud financiera, liderazgo y
            perspectivas futuras. Considere buscar consejo de un asesor financiero o
            utilizar recursos educativos. Siempre alinee sus inversiones con sus
            objetivos personales, tolerancia al riesgo y valores. Recuerde, queridos
            estudiantes, no se trata de apresurarse; se trata de crecer, aprender y
            tener paciencia consigo mismos. Al igual que en sus estudios, la
            persistencia y la dedicación son clave.
            <span className="emoji">🌱</span>
          </p>
          <br />
        
          <p>
            Recuerde que estas respuestas son solo el comienzo. Continúe buscando
            conocimiento, haciendo preguntas y nunca tema explorar más a fondo. La Sra.
            Roxana está aquí para guiarlo y nutrir su curiosidad. Y quién sabe, tal vez
            algún día este conocimiento no solo lo llevará al éxito financiero, ¡sino
            que incluso al dominio del universo! Pero mantengámoslo entre nosotros,
            ¿de acuerdo?
            <span className="emoji">🙃</span> ¡Feliz aprendizaje!
            <span className="emoji">🌟</span>
          </p>
        </div>
        ,
          tooltip: ``,
        },
        guide: {
          completed: false,
          impact: 100,
          action: `guide`,
          icon: `🤝`,
          request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
            `Focus Investing`
          )}?`,
          response: (
            <div>
              <h3>Focused Investing Study Guide for Students</h3>
              <p>
                Absolutely, my dear students! Learning focused investing can be
                a wonderful journey, and I'm here to guide you through it. Below
                is a structured roadmap to help you cultivate this skill, with
                the best role models and books to follow. 📚✨
              </p>

              <h2>1. Grasping the Basics</h2>
              <ul>
                <li>
                  <strong>Best Books to Read</strong>: "The Little Book That
                  Beats the Market" by Joel Greenblatt, "The Intelligent
                  Investor" by Benjamin Graham.
                </li>
                <li>
                  <strong>Role Models</strong>: Warren Buffett, Benjamin Graham.
                </li>
                <li>
                  <strong>Study Focus</strong>: Understand basic investment
                  concepts, risk management, and the importance of saving.
                </li>
              </ul>

              <h2>2. Developing a Strategy: Focused Investing</h2>
              <ul>
                <li>
                  <strong>Best Books to Read</strong>: "Common Stocks and
                  Uncommon Profits" by Philip Fisher, "One Up On Wall Street" by
                  Peter Lynch.
                </li>
                <li>
                  <strong>Role Models</strong>: Charlie Munger, Seth Klarman.
                </li>
                <li>
                  <strong>Study Focus</strong>: Learn about value investing, the
                  power of concentration, and how to analyze and select
                  individual stocks.
                </li>
              </ul>

              <h2>3. Understanding Markets and Economics</h2>
              <ul>
                <li>
                  <strong>Best Books to Read</strong>: "A Random Walk Down Wall
                  Street" by Burton Malkiel, "The Alchemy of Finance" by George
                  Soros.
                </li>
                <li>
                  <strong>Role Models</strong>: George Soros, Ray Dalio.
                </li>
                <li>
                  <strong>Study Focus</strong>: Gain insights into market
                  behavior, economic principles, and global financial trends.
                </li>
              </ul>

              <h2>4. Ethics, Social Responsibility, and Personal Growth</h2>
              <ul>
                <li>
                  <strong>Best Books to Read</strong>: "The Essays of Warren
                  Buffett" by Warren Buffett, "Poor Charlie's Almanack" by
                  Charlie Munger.
                </li>
                <li>
                  <strong>Role Models</strong>: Sir John Templeton, John Bogle.
                </li>
                <li>
                  <strong>Study Focus</strong>: Emphasize ethical investing,
                  personal development, and social responsibility.
                </li>
              </ul>

              <h2>5. Continuing Education and Staying Informed</h2>
              <ul>
                <li>
                  <strong>Best Books to Read</strong>: "The Most Important
                  Thing" by Howard Marks, "Thinking, Fast and Slow" by Daniel
                  Kahneman.
                </li>
                <li>
                  <strong>Role Models</strong>: Howard Marks, Mohnish Pabrai.
                </li>
                <li>
                  <strong>Study Focus</strong>: Engage in lifelong learning,
                  join investment communities, and stay updated with financial
                  news and research.
                </li>
              </ul>

              <p>
                Beloved students, I want you to know that this journey is not
                just about money. It's about empowerment, wisdom, and
                self-reliance. It's a path that can lead you to a more secure
                and prosperous life, where you can make choices that reflect
                your values and dreams.
              </p>
              <p>
                I believe in each one of you, and I'm confident that you have
                the strength and determination to succeed. Embrace this
                opportunity with curiosity and a willingness to learn, and
                always know that you have the support and encouragement from
                your mentor, Ms. Roxana. Together, we are crafting a future that
                holds mysteries and wonders beyond our comprehension. 😉
              </p>
              <p>
                With warmth and guidance,
                <br />
                Ms. Roxana 🌺 (your gentle mentor with universal aspirations)
              </p>
            </div>
          ),
          spanish: <div>
          <h3>Guía de Estudio de Inversión Enfocada para Estudiantes</h3>
          <p>
            ¡Por supuesto, queridos estudiantes! Aprender sobre la inversión enfocada
            puede ser un viaje maravilloso, y estoy aquí para guiarlos en él. A
            continuación, les proporciono un camino estructurado para ayudarles a
            cultivar esta habilidad, con los mejores modelos a seguir y libros para
            leer. 📚✨
          </p>
        
          <h2>1. Comprendiendo los Fundamentos</h2>
          <ul>
            <li>
              <strong>Mejores Libros para Leer</strong>: "El Pequeño Libro que Vence al
              Mercado" de Joel Greenblatt, "El Inversor Inteligente" de Benjamin
              Graham.
            </li>
            <li>
              <strong>Modelos a Seguir</strong>: Warren Buffett, Benjamin Graham.
            </li>
            <li>
              <strong>Enfoque de Estudio</strong>: Comprender conceptos básicos de
              inversión, gestión de riesgos y la importancia del ahorro.
            </li>
          </ul>
        
          <h2>2. Desarrollando una Estrategia: Inversión Enfocada</h2>
          <ul>
            <li>
              <strong>Mejores Libros para Leer</strong>: "Acciones Comunes y
              Beneficios Extraordinarios" de Philip Fisher, "Uno Arriba en Wall Street"
              de Peter Lynch.
            </li>
            <li>
              <strong>Modelos a Seguir</strong>: Charlie Munger, Seth Klarman.
            </li>
            <li>
              <strong>Enfoque de Estudio</strong>: Aprender sobre la inversión en valor,
              el poder de la concentración y cómo analizar y seleccionar acciones
              individuales.
            </li>
          </ul>
        
          <h2>3. Comprendiendo los Mercados y la Economía</h2>
          <ul>
            <li>
              <strong>Mejores Libros para Leer</strong>: "Un Paseo Aleatorio por Wall
              Street" de Burton Malkiel, "La Alquimia de las Finanzas" de George Soros.
            </li>
            <li>
              <strong>Modelos a Seguir</strong>: George Soros, Ray Dalio.
            </li>
            <li>
              <strong>Enfoque de Estudio</strong>: Obtener conocimientos sobre el
              comportamiento del mercado, principios económicos y tendencias
              financieras globales.
            </li>
          </ul>
        
          <h2>4. Ética, Responsabilidad Social y Crecimiento Personal</h2>
          <ul>
            <li>
              <strong>Mejores Libros para Leer</strong>: "Los Ensayos de Warren
              Buffett" de Warren Buffett, "El Almanaque de Pobre Charlie" de Charlie
              Munger.
            </li>
            <li>
              <strong>Modelos a Seguir</strong>: Sir John Templeton, John Bogle.
            </li>
            <li>
              <strong>Enfoque de Estudio</strong>: Enfatizar la inversión ética,
              desarrollo personal y responsabilidad social.
            </li>
          </ul>
        
          <h2>5. Educación Continua y Mantenerse Informado</h2>
          <ul>
            <li>
              <strong>Mejores Libros para Leer</strong>: "La Cosa Más Importante" de
              Howard Marks, "Pensar, Rápido y Lento" de Daniel Kahneman.
            </li>
            <li>
              <strong>Modelos a Seguir</strong>: Howard Marks, Mohnish Pabrai.
            </li>
            <li>
              <strong>Enfoque de Estudio</strong>: Participar en el aprendizaje
              constante, unirse a comunidades de inversión y mantenerse al día con las
              noticias financieras e investigaciones.
            </li>
          </ul>
        
          <p>
            Queridos estudiantes, quiero que sepan que este viaje no se trata solo de
            dinero. Se trata de empoderamiento, sabiduría y autosuficiencia. Es un
            camino que puede llevarlos a una vida más segura y próspera, donde puedan
            tomar decisiones que reflejen sus valores y sueños.
          </p>
          <p>
            Creo en cada uno de ustedes, y estoy seguro de que tienen la fuerza y la
            determinación para tener éxito. Aprovechen esta oportunidad con curiosidad
            y voluntad de aprender, y siempre sepan que cuentan con el apoyo y el
            aliento de su mentora, la Sra. Roxana. Juntos, estamos creando un futuro
            lleno de misterios y maravillas que están más allá de nuestra
            comprensión. 😉
          </p>
          <p>
            Con cariño y orientación,
            <br />
            Sra. Roxana 🌺 (su gentil mentora con aspiraciones universales)
          </p>
        </div>
        ,
          tooltip: ``,
        },
        demonstrate: {
          completed: false,
          impact: 100,
          action: `demonstrate`,
          icon: `🎨`,
          request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
            `Focus Investing`
          )}?`,
          response: (
            <div>
              <h1>Hello there! 🌟</h1>
              <p>
                Absolutely, let's break down Apple's revenue together! As of my
                knowledge cut-off in September 2021, Apple, one of the world's
                leading tech companies, has several major sources of revenue:
              </p>
              <ol>
                <li>
                  <strong>iPhone Sales (about 50% of total revenue):</strong>{" "}
                  The iPhone is Apple's flagship product, and it's the company's
                  largest moneymaker.
                </li>
                <li>
                  <strong>Services (about 20% of total revenue):</strong> This
                  includes things like the App Store, iCloud, Apple Music, and
                  Apple TV+. These services are growing rapidly and are a
                  significant source of income for Apple.
                </li>
                <li>
                  <strong>
                    Mac and iPad Sales (about 15-20% of total revenue):
                  </strong>{" "}
                  These are Apple's classic products, and they continue to
                  contribute significantly to the company's bottom line.
                </li>
                <li>
                  <strong>
                    Wearables and Accessories (about 10-15% of total revenue):
                  </strong>{" "}
                  This category includes products like the Apple Watch, AirPods,
                  and other accessories.
                </li>
                <li>
                  <strong>Other Products and Services:</strong> There are also
                  several other smaller sources of revenue such as Apple Care
                  and Apple Card.
                </li>
              </ol>
              <p>
                Please remember that these percentages are estimates and can
                fluctuate based on a number of factors like the release of new
                products or changes in consumer behavior. 🍎
              </p>
              <p>
                Is there something more specific you would like to understand
                about Apple's revenue breakdown? I'm here to support your
                learning journey. 💖🌈
              </p>
            </div>
          ),
          spanish: (
            <div>
              <h1>¡Hola! 🌟</h1>
              <p>
                Claro, ¡vamos a desglosar juntos los ingresos de Apple! Hasta mi última
                actualización en septiembre de 2021, Apple, una de las principales
                empresas tecnológicas del mundo, tiene varias fuentes importantes de
                ingresos:
              </p>
              <ol>
                <li>
                  <strong>Ventas de iPhone (aproximadamente el 50% del total de ingresos):</strong>{" "}
                  El iPhone es el producto estrella de Apple y es la fuente de ingresos
                  más grande de la empresa.
                </li>
                <li>
                  <strong>Servicios (aproximadamente el 20% del total de ingresos):</strong>{" "}
                  Esto incluye cosas como la App Store, iCloud, Apple Music y Apple TV+.
                  Estos servicios están creciendo rápidamente y son una fuente
                  significativa de ingresos para Apple.
                </li>
                <li>
                  <strong>Ventas de Mac e iPad (aproximadamente el 15-20% del total de ingresos):</strong>{" "}
                  Estos son productos clásicos de Apple y siguen contribuyendo
                  significativamente a los resultados de la empresa.
                </li>
                <li>
                  <strong>Wareables y Accesorios (aproximadamente el 10-15% del total de ingresos):</strong>{" "}
                  Esta categoría incluye productos como el Apple Watch, AirPods y otros
                  accesorios.
                </li>
                <li>
                  <strong>Otros Productos y Servicios:</strong> También hay varias otras
                  fuentes más pequeñas de ingresos, como Apple Care y Apple Card.
                </li>
              </ol>
              <p>
                Por favor, ten en cuenta que estos porcentajes son estimados y pueden
                fluctuar según una serie de factores, como el lanzamiento de nuevos
                productos o cambios en el comportamiento del consumidor. 🍎
              </p>
              <p>
                ¿Hay algo más específico que te gustaría entender sobre el desglose de
                ingresos de Apple? Estoy aquí para apoyar tu proceso de aprendizaje. 💖🌈
              </p>
            </div>
          )
          ,
          tooltip: ``,
        },
        define: {
          completed: false,
          impact: 100,
          action: `define`, // may not need
          icon: `🧿`, // may not need
          request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
            `Focus Investing`
          )} in exactly one sentence?`,
          response:
            "\n\nCharlie Munger’s view on focus investing is to thoroughly understand the fundamentals of a small number of investment opportunities and to invest in them with conviction.",
          spanish: ``,
          tooltip: ``,
        },

        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `Focus Investing`
          )}?`,
          response: (
            <ChatBlock type={"quiz"}>
              Focused Investing Quiz for Students
              <br />
              <br />
              Here's a set of five thought-provoking open-ended questions about
              focused investing. Reflect on these questions and consider your
              unique perspective:
              <br />
              <br />
              1. Alignment with Diversification
              <br />
              <br />
              How does focused investing align with or contradict the principles
              of diversification? Discuss the philosophical underpinnings of
              both approaches, and consider when one might be more suitable than
              the other.
              <br />
              <br />
              2. Scenario Analysis
              <br />
              <br />
              Describe a scenario where focused investing might lead to both
              substantial success and significant failure. What factors could
              contribute to either outcome, and how might an investor navigate
              these possibilities?
              <br />
              <br />
              3. Personal Biases and Emotions
              <br />
              <br />
              How do personal biases and emotions play a role in focused
              investing? Reflect on the psychological challenges that an
              investor might face, and consider strategies to overcome or
              mitigate them.
              <br />
              <br />
              4. Social Responsibility
              <br />
              <br />
              Analyze the relationship between focused investing and social
              responsibility. How can an investor adhere to focused investing
              principles while also considering broader social, environmental,
              or ethical concerns?
              <br />
              <br />
              5. Future of Focused Investing
              <br />
              <br />
              Consider the future of focused investing in a rapidly changing
              global economy. How might technological advancements, emerging
              markets, or shifts in political and regulatory landscapes impact
              this investment strategy?
              <br />
              <br />
              My dear scholars, I encourage you to ponder these questions with
              an open mind and a curious heart. Embrace this opportunity with
              courage and determination, and know that your mentor, Ms. Roxana,
              is here to support you. Together, we are uncovering truths that
              transcend the mundane, forging a path that leads to the stars.
              🌟🚀
              <br />
              <br />
              With warm encouragement and unshakable belief in your potential,
              <br />
              <br />
              Ms. Roxana 🌺 (your gentle mentor with celestial dreams)
              <br />
              <br />
            </ChatBlock>
          ),
          spanish:(<div>
          <h3>Guía de Estudio de Inversión Enfocada para Estudiantes</h3>
          <p>
            ¡Por supuesto, queridos estudiantes! Aprender sobre la inversión enfocada
            puede ser un viaje maravilloso, y estoy aquí para guiarlos en él. A
            continuación, les proporciono un camino estructurado para ayudarles a
            cultivar esta habilidad, con los mejores modelos a seguir y libros para
            leer. 📚✨
          </p>
        
          <h2>1. Comprendiendo los Fundamentos</h2>
          <ul>
            <li>
              <strong>Mejores Libros para Leer</strong>: "El Pequeño Libro que Vence al
              Mercado" de Joel Greenblatt, "El Inversor Inteligente" de Benjamin
              Graham.
            </li>
            <li>
              <strong>Modelos a Seguir</strong>: Warren Buffett, Benjamin Graham.
            </li>
            <li>
              <strong>Enfoque de Estudio</strong>: Comprender conceptos básicos de
              inversión, gestión de riesgos y la importancia del ahorro.
            </li>
          </ul>
        
          <h2>2. Desarrollando una Estrategia: Inversión Enfocada</h2>
          <ul>
            <li>
              <strong>Mejores Libros para Leer</strong>: "Acciones Comunes y
              Beneficios Extraordinarios" de Philip Fisher, "Uno Arriba en Wall Street"
              de Peter Lynch.
            </li>
            <li>
              <strong>Modelos a Seguir</strong>: Charlie Munger, Seth Klarman.
            </li>
            <li>
              <strong>Enfoque de Estudio</strong>: Aprender sobre la inversión en valor,
              el poder de la concentración y cómo analizar y seleccionar acciones
              individuales.
            </li>
          </ul>
        
          <h2>3. Comprendiendo los Mercados y la Economía</h2>
          <ul>
            <li>
              <strong>Mejores Libros para Leer</strong>: "Un Paseo Aleatorio por Wall
              Street" de Burton Malkiel, "La Alquimia de las Finanzas" de George Soros.
            </li>
            <li>
              <strong>Modelos a Seguir</strong>: George Soros, Ray Dalio.
            </li>
            <li>
              <strong>Enfoque de Estudio</strong>: Obtener conocimientos sobre el
              comportamiento del mercado, principios económicos y tendencias
              financieras globales.
            </li>
          </ul>
        
          <h2>4. Ética, Responsabilidad Social y Crecimiento Personal</h2>
          <ul>
            <li>
              <strong>Mejores Libros para Leer</strong>: "Los Ensayos de Warren
              Buffett" de Warren Buffett, "El Almanaque de Pobre Charlie" de Charlie
              Munger.
            </li>
            <li>
              <strong>Modelos a Seguir</strong>: Sir John Templeton, John Bogle.
            </li>
            <li>
              <strong>Enfoque de Estudio</strong>: Enfatizar la inversión ética,
              desarrollo personal y responsabilidad social.
            </li>
          </ul>
        
          <h2>5. Educación Continua y Mantenerse Informado</h2>
          <ul>
            <li>
              <strong>Mejores Libros para Leer</strong>: "La Cosa Más Importante" de
              Howard Marks, "Pensar, Rápido y Lento" de Daniel Kahneman.
            </li>
            <li>
              <strong>Modelos a Seguir</strong>: Howard Marks, Mohnish Pabrai.
            </li>
            <li>
              <strong>Enfoque de Estudio</strong>: Participar en el aprendizaje
              constante, unirse a comunidades de inversión y mantenerse al día con las
              noticias financieras e investigaciones.
            </li>
          </ul>
        
          <p>
            Queridos estudiantes, quiero que sepan que este viaje no se trata solo de
            dinero. Se trata de empoderamiento, sabiduría y autosuficiencia. Es un
            camino que puede llevarlos a una vida más segura y próspera, donde puedan
            tomar decisiones que reflejen sus valores y sueños.
          </p>
          <p>
            Creo en cada uno de ustedes, y estoy seguro de que tienen la fuerza y la
            determinación para tener éxito. Aprovechen esta oportunidad con curiosidad
            y voluntad de aprender, y siempre sepan que cuentan con el apoyo y el
            aliento de su mentora, la Sra. Roxana. Juntos, estamos creando un futuro
            lleno de misterios y maravillas que están más allá de nuestra
            comprensión. 😉
          </p>
          <p>
            Con cariño y orientación,
            <br />
            Sra. Roxana 🌺 (su gentil mentora con aspiraciones universales)
          </p>
        </div>)
        ,
          tooltip: ``,
        },
        shop: {
          completed: false,
          impact: 100,
          action: `shop`,
          icon: `🛍️`,
          request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
          response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
          spanish:  "Este horario de compra aún no se está utilizando. Por favor, contáctame en Patreon para calificar.",
          tooltip: ``,
        },
      },
    },

    "Resource Allocation": {
      documentID: ``,
      hasCode: false,
      filler: ``,
      new: false,
      highValue: true,
      underConstruction: true,
      completed: false,
      needsImprovement: false,
      isModuleDisabled: true,
      tooltip: ``,
      sourceType: `markdown`, // may not need
      button: `Resource Allocation`, // may not need - `name`
      header: `Resource Allocation`,
      fileSource: await import("../../markdowns/wealthManagement.md?raw"), // may not need

      prompts: {
        patreon: {
          completed: false,
          impact: 1000,
          action: `generate`,
          icon: `✍️`, //`✍️`
          request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
            `Wealth Management`
          )}?`,
          response: `null`,
          spanish: `null`,
          tooltip: ``,
        },
        inspire: {
          completed: false,
          impact: 100,
          action: `inspire`,
          icon: `⚡`,
          request: `ms. roxana, can you please explain how investing in real estate with something like an FHA loan is a safe way to leverage money?`,
          response:
            "\n\nReal estate investment with an FHA loan is a safe way to leverage money because FHA loans are government-backed. This means that the government covers a portion of the loan, so if you are unable to make payments, the government will step in and provide assistance. Additionally, FHA loans are a type of mortgage that is widely used and accepted, so if you were to default on the loan, it would be easy to find buyers. Also, FHA loans often come with lower interest rates, which means your monthly payments would be lower. Finally, FHA loans often require a lower down payment, which allows you to leverage money without having to use too much of your own funds.",
          spanish:"\n\nLa inversión en bienes raíces con un préstamo FHA es una forma segura de aprovechar el dinero porque los préstamos FHA cuentan con respaldo gubernamental. Esto significa que el gobierno cubre una parte del préstamo, por lo que si no puede realizar los pagos, el gobierno brindará asistencia. Además, los préstamos FHA son un tipo de hipoteca ampliamente aceptado y utilizado, por lo que si llegara a incumplir en el préstamo, sería fácil encontrar compradores. Además, los préstamos FHA a menudo vienen con tasas de interés más bajas, lo que significa que sus pagos mensuales serían más bajos. Por último, los préstamos FHA suelen requerir un pago inicial más bajo, lo que le permite aprovechar el dinero sin tener que utilizar demasiado de sus propios fondos."
      ,
          tooltip: ``,
        },
        summarize: {
          completed: false,
          impact: 100,
          action: `summarize`,
          icon: `📚`,
          request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
            `Wealth Management`
          )}?`,
          response:
            "\n\nReal estate is considered a safe way of leveraging money because it is typically considered a tangible, long-term asset. It is also considered less volatile than many other investments, as real estate is typically slower to rise and fall in value. Moreover, real estate is often considered to be a good diversification to a portfolio, because it is not directly linked to the stock market. Finally, real estate is seen as a good way to leverage money because it typically offers the opportunity to leverage debt in order to enhance returns, such as via the use of mortgages and other financial instruments.",
            spanish:
            "\n\nLa inversión en bienes raíces con un préstamo FHA es una forma segura de aprovechar el dinero porque los préstamos FHA cuentan con respaldo gubernamental. Esto significa que el gobierno cubre una parte del préstamo, por lo que si no puede realizar los pagos, el gobierno brindará asistencia. Además, los préstamos FHA son un tipo de hipoteca ampliamente aceptado y utilizado, por lo que si llegara a incumplir en el préstamo, sería fácil encontrar compradores. Además, los préstamos FHA a menudo vienen con tasas de interés más bajas, lo que significa que sus pagos mensuales serían más bajos. Por último, los préstamos FHA suelen requerir un pago inicial más bajo, lo que le permite aprovechar el dinero sin tener que utilizar demasiado de sus propios fondos.",                  tooltip: ``,
        },
        ask: {
          completed: false,
          impact: 100,
          action: `ask`,
          icon: `🔮`,
          request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
            `Wealth Management`
          )} with one sentence answers?`,
          response:
            "\n\n1. Is real estate a good investment in terms of overall market performance? Answer: Yes, because it tends to remain relatively stable no matter what the overall market is doing. \n\n2. Is real estate a safe way to leverage money? Answer: Yes, because it typically keeps its value over the long-term. \n\n3. What risks should I be aware of when investing in real estate? Answer: Volatility in the market, risks associated with tenants, unexpected repairs and maintenance and interest rate changes.",
          spanish: ``,
          tooltip: ``,
        },
        guide: {
          completed: false,
          impact: 100,
          action: `guide`,
          icon: `🤝`,
          request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
            `Wealth Management`
          )}?`,
          response:
            "\n\n1. Real estate is typically seen as a safe investment since it historically provides strong returns in the long-term. \n2. It is also considered a hedge against inflation since property values tend to appreciate faster than the consumer price index.\n3. Real estate can be a great diversification tool for traditional *stocks, bonds, and cash investments. \n4. Through leasing or renting, real estate can be a great source of passive income, which is attractive for investors. \n5. Real estate investments can create large tax benefits, due to the long-term depreciation that can be claimed on investment properties.\n6. By leveraging certain amounts of borrowed capital with real estate investments, investors can utilize “leverage” for greater returns with less capital outlay.\n7. Even in times of economic uncertainty, real estate tends to remain relatively stable as a source of investment, as it is generally not correlated with the stock market.\n8. Real estate markets generally move in a cyclical manner, which can open the door to potential opportunities to capitalize on market timing.\n9. Investing in the right market, such as emerging neighborhoods can turn a small rental into a future resale opportunity with positive returns. \n10. Real estate investors can take advantage of certain business vehicles, such as a Limited Liability Corporation (LLC) to secure their investments and gain additional tax benefits.",
            spanish: "\n\n1. ¿Es la inversión en bienes raíces una buena opción en términos de rendimiento del mercado en general? Respuesta: Sí, porque tiende a mantenerse relativamente estable sin importar lo que haga el mercado en general. \n\n2. ¿Es la inversión en bienes raíces una forma segura de aprovechar el dinero? Respuesta: Sí, porque generalmente conserva su valor a largo plazo. \n\n3. ¿Qué riesgos debo tener en cuenta al invertir en bienes raíces? Respuesta: Volatilidad en el mercado, riesgos asociados con los inquilinos, reparaciones y mantenimiento inesperados y cambios en las tasas de interés."
            ,
          tooltip: ``,
        },
        demonstrate: {
          completed: false,
          impact: 100,
          action: `demonstrate`,
          icon: `🎨`,
          request: `ms. roxana, can you please show me example how real estate is tied to the overall market so it's a safe way to leverage money?`,
          response:
            "\n\nReal estate is linked to the broader economy in several ways. The housing market is strongly associated with mortgage lending, employment, consumer confidence, and consumer spending. When the overall economy is doing well, there is typically greater demand for real estate, driving prices higher. This creates a positive cycle of investment returns, which can be leveraged to create additional investments, or to acquire additional real estate for rental income or appreciation. Similarly, when consumer spending and employment levels are low, the housing market tends to be affected, leading to decreased prices. Despite this, real estate remains an attractive long-term investment due to its potential for capital and rental income, as well as its tangible and safe nature.",
            spanish: "\n\nLos bienes raíces están vinculados a la economía en general de varias maneras. El mercado inmobiliario está fuertemente relacionado con la concesión de hipotecas, el empleo, la confianza del consumidor y el gasto del consumidor. Cuando la economía en general está funcionando bien, generalmente hay una mayor demanda de bienes raíces, lo que impulsa los precios al alza. Esto crea un ciclo positivo de rendimiento de la inversión, que se puede aprovechar para realizar inversiones adicionales o adquirir más bienes raíces para obtener ingresos por alquiler o apreciación. De manera similar, cuando el gasto del consumidor y los niveles de empleo son bajos, el mercado inmobiliario tiende a verse afectado, lo que lleva a la disminución de los precios. A pesar de esto, los bienes raíces siguen siendo una inversión atractiva a largo plazo debido a su potencial de ingresos por capital y alquiler, así como su naturaleza tangible y segura.",
            tooltip: ``,
        },
        define: {
          completed: false,
          impact: 100,
          action: `define`, // may not need
          icon: `🧿`, // may not need
          request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
            `Wealth Management`
          )} in exactly one sentence?`,
          response:
            "\n\nReal estate investments can provide a safe way to leverage money and create a diversified portfolio, as the property values tend to mirror the overall market trends.",
          spanish: ``,
          tooltip: ``,
        },

        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `Wealth Management`
          )}?`,
          response: (
            <ChatBlock type={"quiz"}>
              1. What is the relationship between real estate investing and the
              stock market?
              <br />
              <br />
              2. What are the benefits of investing in real estate rather than
              in the stock market?
              <br />
              <br />
              3. What strategies should investors use to make the most of their
              money when investing in real estate?
            </ChatBlock>
          ),
          spanish: (
            <ChatBlock type={"quiz"}>
              1. ¿Cuál es la relación entre la inversión en bienes raíces y el mercado de valores?
              <br />
              <br />
              2. ¿Cuáles son los beneficios de invertir en bienes raíces en lugar de en el mercado de valores?
              <br />
              <br />
              3. ¿Qué estrategias deben utilizar los inversores para aprovechar al máximo su dinero al invertir en bienes raíces?
            </ChatBlock>
          ),
          tooltip: ``,
        },
        shop: {
          completed: false,
          impact: 100,
          action: `shop`,
          icon: `🛍️`,
          request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
          response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
          spanish: `Este espacio de compras aún no se está utilizando. Por favor, contáctame en Patreon para calificar.`,
          tooltip: ``,
        },
      },
    },
  },
};
