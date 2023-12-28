import { ChatBlock } from "../ChatBlock/ChatBlock";
import { ultimateEffeciencyJutsu } from "../ui";

export const Creator = {
  Communications: {
    Philosophy: {
      documentID: ``,
      filler: ``,
      new: false,
      highValue: false,
      underConstruction: true,
      completed: false,
      rare: true,
      needsImprovement: false,
      tooltip: ``,
      sourceType: `video`, // may not need
      button: `Philosophy @ RO.B.E`, // may not need - `name`
      header: `Philosophy @ RO.B.E`,
      backgroundImgSrc:
        "https://res.cloudinary.com/sheilfer/image/upload/v1697449875/Module_Buttons_12_h28xxn.gif",
      fileSource:
        "https://res.cloudinary.com/sheilfer/video/upload/v1697492158/IMG_9002_sfq8dw.mov", // may not need

      prompts: {
        patreon: {
          completed: false,
          impact: 1000,
          action: `generate`,
          icon: `►`, //`✍️`
          request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
            `Philosophy`
          )}?`,
          response: `null`,
          spanish: ``,
          tooltip: ``,
          additionalContent: await import("../../markdowns/philosophy.md?raw"),
        },
        inspire: {
          completed: false,
          impact: 100,
          action: `inspire`,
          icon: `⚡`,
          request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
            `Philosophy`
          )}?`,
          response: (
            <div>
              Abraham Lincoln's understanding of Providence, or the will and
              action of God, evolved over time and deeply influenced his
              speeches, especially during his time as President and throughout
              the Civil War. His personal and public views of Providence often
              reflected a deep and complex understanding of God's role in human
              affairs.
              <br />
              <br />
              Initially, Lincoln seemed to favor a more deistic approach, seeing
              God as a Creator who set the universe in motion but did not
              intervene in the daily lives of people. However, as the Civil War
              went on and the nation suffered through great upheaval and loss,
              his views appeared to shift towards a more theistic understanding,
              believing in a more active, personal God who is deeply involved in
              human events.
              <br />
              <br />
              Lincoln's evolving perspective on Providence can be seen in his
              presidential speeches. Notably, in his Second Inaugural Address
              delivered in March 1865, Lincoln refrained from claiming that God
              was on the Union's side in the Civil War, a common belief at the
              time. Instead, he suggested that both North and South "read the
              same Bible and pray to the same God, and each invokes His aid
              against the other."
              <br />
              <br />
              In the same speech, Lincoln advanced the idea that the Civil War
              was God's punishment to America for the sin of slavery: "He gives
              to both North and South this terrible war as the woe due to those
              by whom the offense came." In this perspective, Lincoln framed the
              war not as a struggle between two factions of people, but as a
              divine chastisement that everyone had to endure and learn from.
              <br />
              <br />
              He concluded his second inaugural address with the famous line:
              "With malice toward none; with charity for all; with firmness in
              the right, as God gives us to see the right... let us strive on to
              finish the work we are in; to bind up the nation's wounds." This
              not only calls for peace and unity but also acknowledges the role
              of Providence in guiding the nation towards the right path.
              Lincoln was suggesting that it is up to humans to discern and
              follow God's will as best they can, even in times of great trial
              and difficulty.
              <br />
              <br />
              Throughout his life and presidency, Lincoln's view of Providence
              was marked by humility, a sense of moral responsibility, and a
              profound acknowledgment of the mystery of God's purposes. His
              speeches reflect this evolving understanding, using the concept of
              Providence to express deep national introspection, moral vision,
              and a path towards unity and healing.
            </div>
          ),
          spanish: 
          (
          <div>
          La comprensión de Abraham Lincoln sobre la Providencia, o la voluntad y acción de Dios, evolucionó con el tiempo y tuvo una gran influencia en sus discursos, especialmente durante su presidencia y a lo largo de la Guerra Civil. Sus visiones personales y públicas sobre la Providencia a menudo reflejaron una comprensión profunda y compleja del papel de Dios en los asuntos humanos.
          <br />
          <br />
          Inicialmente, Lincoln parecía favorecer un enfoque más deísta, viendo a Dios como un Creador que puso en marcha el universo pero no intervenía en la vida diaria de las personas. Sin embargo, a medida que avanzaba la Guerra Civil y la nación sufría grandes trastornos y pérdidas, sus puntos de vista parecían cambiar hacia una comprensión más teísta, creyendo en un Dios más activo y personal que está profundamente involucrado en los eventos humanos.
          <br />
          <br />
          La perspectiva en evolución de Lincoln sobre la Providencia se puede ver en sus discursos presidenciales. Notablemente, en su segundo discurso de investidura entregado en marzo de 1865, Lincoln se abstuvo de afirmar que Dios estaba del lado de la Unión en la Guerra Civil, una creencia común en ese momento. En cambio, sugirió que tanto el Norte como el Sur "leen la misma Biblia y oran al mismo Dios, y cada uno invoca Su ayuda contra el otro".
          <br />
          <br />
          En el mismo discurso, Lincoln avanzó la idea de que la Guerra Civil era un castigo de Dios a América por el pecado de la esclavitud: "Él da a ambos, Norte y Sur, esta terrible guerra como el dolor debido a aquellos por quienes vino la ofensa". En esta perspectiva, Lincoln enmarcó la guerra no como una lucha entre dos facciones de personas, sino como un castigo divino que todos tenían que soportar y aprender.
          <br />
          <br />
          Concluyó su segundo discurso de investidura con la famosa línea: "Sin malicia hacia nadie; con caridad para todos; con firmeza en lo correcto, como Dios nos da a ver lo correcto... sigamos esforzándonos para terminar la obra en la que estamos; para curar las heridas de la nación". Esto no solo llama a la paz y la unidad, sino que también reconoce el papel de la Providencia en guiar a la nación hacia el camino correcto.
          Lincoln sugirió que depende de los humanos discernir y seguir la voluntad de Dios lo mejor que puedan, incluso en tiempos de gran prueba y dificultad.
          <br />
          <br />
          A lo largo de su vida y presidencia, la visión de Lincoln sobre la Providencia estuvo marcada por la humildad, un sentido de responsabilidad moral y un profundo reconocimiento del misterio de los propósitos de Dios. Sus discursos reflejan esta comprensión en evolución, utilizando el concepto de Providencia para expresar una profunda introspección nacional, una visión moral y un camino hacia la unidad y la curación.
          </div>
          ),
          tooltip: ``,
        },
        summarize: {
          completed: false,
          impact: 100,
          action: `summarize`,
          icon: `📚`,
          request: `ms. roxana, can you please summarize Professor Ruha Benjamin's work with the intersection of ${ultimateEffeciencyJutsu(
            `Philosophy`
          )}?`,
          response: (
            <div>
              Understanding the relationship between the Civil War, Jim Crow,
              the War on Drugs, and machine learning algorithms from a critical
              race theory (CRT) perspective involves considering the historical
              context and enduring systemic racial inequalities that have shaped
              American society.
              <br />
              <br />
              The Civil War, a violent conflict fought from 1861 to 1865, was
              largely about the struggle over slavery. While it ended with the
              abolition of slavery, it did not eliminate deeply rooted racial
              prejudices. In the post-Civil War era, Southern states enacted a
              series of laws known as Jim Crow laws to maintain racial
              segregation and disenfranchise African Americans. These laws
              created a rigid racial caste system that was enforced through both
              legal means and racial terrorism.
              <br />
              <br />
              The War on Drugs, launched in the 1970s, disproportionately
              targeted communities of color for drug offenses, leading to mass
              incarceration. Some scholars, like Michelle Alexander, argue that
              the War on Drugs gave birth to a "New Jim Crow" by relegating a
              large portion of the African American community to a permanent
              second-class status through a cycle of stigmatization,
              incarceration, and socio-economic disadvantage.
              <br />
              <br />
              Critical Race Theory can provide a framework for understanding
              these historical events as evidence of systemic and structural
              racism, and how these racial disparities and prejudices have been
              perpetuated over time.
              <br />
              <br />
              Now, when we consider machine learning algorithms in this context,
              it's important to note that these algorithms are not developed in
              a vacuum. They're trained on data generated by our society and
              therefore, they absorb the biases present in that data. If the
              data used to train these algorithms comes from a society where
              systemic racism exists, the resulting models can inadvertently
              perpetuate and amplify these biases.
              <br />
              <br />
              For instance, facial recognition software has been found to have
              higher error rates in identifying individuals with darker skin
              tones. In the criminal justice system, algorithms used for risk
              assessment can disproportionately mark people of color as high
              risk due to biased data input. For example, if an algorithm is
              trained on data from a period when the War on Drugs led to higher
              arrest and incarceration rates among African Americans, it might
              "learn" to associate being African American with a higher
              likelihood of criminality.
              <br />
              <br />
              In this sense, machine learning algorithms can risk becoming
              modern enforcers of historical and systemic racial biases,
              creating a form of "technological redlining" or what Ruha Benjamin
              refers to as the "New Jim Code." Understanding and acknowledging
              this link is critical to developing more equitable algorithms and
              mitigating the risk of exacerbating racial disparities.
              <br />
              <br />
              From a CRT perspective, it's crucial to continuously question and
              critique these technologies, advocating for transparency,
              accountability, and inclusivity. Ensuring diverse representation
              in tech, auditing algorithms for racial bias, and establishing
              strict regulations can be part of the solution to break this cycle
              of systemic bias in machine learning algorithms.
            </div>
          ),
          spanish: (
            <div>
              Comprender la relación entre la Guerra Civil, las leyes de Jim Crow, la Guerra contra las Drogas y los algoritmos de aprendizaje automático desde una perspectiva de la teoría crítica de la raza (CRT) implica considerar el contexto histórico y las persistentes desigualdades raciales sistémicas que han moldeado la sociedad estadounidense.
              <br />
              <br />
              La Guerra Civil, un conflicto violento librado de 1861 a 1865, fue en gran parte sobre la lucha contra la esclavitud. Si bien terminó con la abolición de la esclavitud, no eliminó los prejuicios raciales profundamente arraigados. En la era posterior a la Guerra Civil, los estados del sur promulgaron una serie de leyes conocidas como leyes de Jim Crow para mantener la segregación racial y privar del derecho al voto a los afroamericanos. Estas leyes crearon un rígido sistema de castas raciales que se hizo cumplir tanto por medios legales como por terrorismo racial.
              <br />
              <br />
              La Guerra contra las Drogas, lanzada en la década de 1970, apuntó desproporcionadamente a las comunidades de color por delitos relacionados con drogas, lo que llevó a una encarcelación masiva. Algunos académicos, como Michelle Alexander, argumentan que la Guerra contra las Drogas dio origen a un "nuevo Jim Crow" al relegar a una gran parte de la comunidad afroamericana a un estado de segunda clase permanente a través de un ciclo de estigmatización, encarcelamiento y desventaja socioeconómica.
              <br />
              <br />
              La Teoría Crítica de la Raza puede proporcionar un marco para comprender estos eventos históricos como evidencia de racismo sistémico y estructural, y cómo estas disparidades y prejuicios raciales se han perpetuado a lo largo del tiempo.
              <br />
              <br />
              Ahora, cuando consideramos los algoritmos de aprendizaje automático en este contexto, es importante notar que estos algoritmos no se desarrollan en el vacío. Están entrenados con datos generados por nuestra sociedad y, por lo tanto, absorben los sesgos presentes en esos datos. Si los datos utilizados para entrenar estos algoritmos provienen de una sociedad donde existe el racismo sistémico, los modelos resultantes pueden inadvertidamente perpetuar y amplificar estos sesgos.
              <br />
              <br />
              Por ejemplo, se ha encontrado que el software de reconocimiento facial tiene tasas de error más altas al identificar a individuos con tonos de piel más oscuros. En el sistema de justicia penal, los algoritmos utilizados para la evaluación de riesgos pueden marcar desproporcionadamente a las personas de color como de alto riesgo debido a datos sesgados. Por ejemplo, si un algoritmo se entrena con datos de un período en el que la Guerra contra las Drogas condujo a tasas de arresto y encarcelamiento más altas entre los afroamericanos, podría "aprender" a asociar ser afroamericano con una mayor probabilidad de criminalidad.
              <br />
              <br />
              En este sentido, los algoritmos de aprendizaje automático pueden correr el riesgo de convertirse en ejecutores modernos de prejuicios raciales históricos y sistémicos, creando una forma de "redlining tecnológico" o lo que Ruha Benjamin se refiere como el "Nuevo Código Jim". Comprender y reconocer este vínculo es crítico para desarrollar algoritmos más equitativos y mitigar el riesgo de exacerbar las disparidades raciales.
              <br />
              <br />
              Desde una perspectiva CRT, es crucial cuestionar y criticar continuamente estas tecnologías, abogando por la transparencia, responsabilidad e inclusividad. Asegurar una representación diversa en tecnología, auditar algoritmos para sesgos raciales y establecer regulaciones estrictas pueden ser parte de la solución para romper este ciclo de sesgo sistémico en los algoritmos de aprendizaje automático.
            </div>
          ),
          tooltip: ``,
        },
        ask: {
          completed: false,
          impact: 100,
          action: `ask`,
          icon: `🔮`,
          request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
            `Philosophy`
          )} with one sentence answers?`,
          response: (
            <div>
              <ol>
                <li>
                  <b>What does philosophy have to do with computer science?</b>
                  <br />
                  <div>
                    The intersection of philosophy and computer science is much
                    more significant than one might initially assume. Philosophy
                    deals with fundamental questions about reality, knowledge,
                    ethics, and mind, all of which are directly relevant to
                    computing. For instance, philosophical debates around
                    artificial intelligence (AI) — whether machines can 'think'
                    or 'understand' like a human does — involve deep
                    philosophical issues about mind and consciousness.
                    Similarly, the question of how to build ethical AI or
                    ethical systems is a fundamentally philosophical question
                    about the nature of ethics, values, and responsibility.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>
                    How can understanding philosophy enhance the skills of a
                    computer scientist?
                  </b>
                  <br />
                  <div>
                    {" "}
                    Studying philosophy can enhance a computer scientist's
                    skills in numerous ways. Philosophy promotes critical
                    thinking and rigorous logical reasoning, both of which are
                    invaluable in programming and system design. Furthermore,
                    philosophy encourages you to consider multiple perspectives
                    and question assumptions, which is essential when designing
                    user-centered software or when trying to anticipate how
                    technologies might be used (or misused) in the real world.
                    Lastly, philosophy's emphasis on ethics is essential as
                    computer scientists often create systems with significant
                    societal impacts. Understanding ethical frameworks can help
                    guide the creation of more responsible and fair
                    technologies.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>
                    What are some philosophical problems that computer science
                    has brought to light?
                  </b>
                  <br />
                  <div>
                    Computer science has reinvigorated several longstanding
                    philosophical debates and introduced entirely new ones. For
                    example, AI has revived questions about the nature of
                    intelligence, consciousness, and what it means to be a
                    person. The development of the internet and social media has
                    raised new questions about privacy, free speech, and the
                    nature of community. Additionally, machine learning
                    algorithms used in decision-making (e.g., for loan
                    approvals, job applications, etc.) have raised new questions
                    about fairness, bias, and discrimination. Each of these
                    issues involve deep, complex philosophical questions that we
                    are only just beginning to grapple with.
                  </div>
                  <br />
                  <br />
                </li>
              </ol>
            </div>
          ),
          spanish: (
            <div>
              <ol>
                <li>
                  <b>¿Qué relación tiene la filosofía con la informática?</b>
                  <br />
                  <div>
                    La intersección de la filosofía y la informática es mucho más significativa de lo que uno podría asumir inicialmente. La filosofía se ocupa de preguntas fundamentales sobre la realidad, el conocimiento, la ética y la mente, todas las cuales son directamente relevantes para la computación. Por ejemplo, los debates filosóficos sobre la inteligencia artificial (IA) —si las máquinas pueden 'pensar' o 'entender' como lo hace un ser humano— implican profundos problemas filosóficos sobre la mente y la conciencia. De manera similar, la cuestión de cómo construir IA ética o sistemas éticos es una pregunta filosófica fundamental sobre la naturaleza de la ética, los valores y la responsabilidad.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>
                    ¿Cómo puede el entendimiento de la filosofía mejorar las habilidades de un informático?
                  </b>
                  <br />
                  <div>
                    Estudiar filosofía puede mejorar las habilidades de un informático de numerosas maneras. La filosofía promueve el pensamiento crítico y el razonamiento lógico riguroso, ambos invaluables en la programación y el diseño de sistemas. Además, la filosofía te anima a considerar múltiples perspectivas y cuestionar suposiciones, lo cual es esencial al diseñar software centrado en el usuario o al intentar anticipar cómo las tecnologías podrían ser utilizadas (o mal utilizadas) en el mundo real. Por último, el énfasis de la filosofía en la ética es esencial, ya que los informáticos a menudo crean sistemas con impactos sociales significativos. Comprender los marcos éticos puede ayudar a guiar la creación de tecnologías más responsables y justas.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>
                    ¿Cuáles son algunos problemas filosóficos que la informática ha sacado a la luz?
                  </b>
                  <br />
                  <div>
                    La informática ha reavivado varios debates filosóficos de larga data e introducido otros completamente nuevos. Por ejemplo, la IA ha revivido preguntas sobre la naturaleza de la inteligencia, la conciencia y lo que significa ser una persona. El desarrollo de internet y las redes sociales ha planteado nuevas preguntas sobre la privacidad, la libertad de expresión y la naturaleza de la comunidad. Además, los algoritmos de aprendizaje automático utilizados en la toma de decisiones (por ejemplo, para aprobaciones de préstamos, solicitudes de empleo, etc.) han planteado nuevas cuestiones sobre la equidad, el sesgo y la discriminación. Cada uno de estos problemas implica preguntas filosóficas profundas y complejas con las que apenas estamos empezando a lidiar.
                  </div>
                  <br />
                  <br />
                </li>
              </ol>
            </div>
          ),
          tooltip: ``,
        },
        guide: {
          completed: false,
          impact: 100,
          action: `guide`,
          icon: `🤝`,
          request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
            `Philosophy`
          )}?`,
          response: (
            <div>
              <ol>
                <li>
                  <b>"Enrique's Journey" by Sonia Nazario:</b>
                  <br />
                  <div>
                    This heart-wrenching epic unveils the odyssey of a brave
                    Honduran boy, Enrique, who stares danger in the eye and
                    crosses treacherous terrains to find his mother on the other
                    side of the U.S. border. It's an eye-opening, soul-stirring
                    journey into the very heart of the human experience, casting
                    a spotlight on the gut-wrenching realities of immigration.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>
                    "The Economic Consequences of the Peace" by John Maynard
                    Keynes
                  </b>
                  <br />
                  <div>
                    {" "}
                    Keynes delivers a gripping analysis of the Treaty of
                    Versailles, which ended World War I. With the precision of a
                    master surgeon, he dissects the treaty, boldly prophesying
                    that its harsh terms would catapult the world into another
                    war. A daring prediction and critique that history would
                    later affirm.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>"The One World Schoolhouse" by Salman Khan</b>
                  <br />
                  <div>
                    Salman Khan, the visionary creator of Khan Academy, paints a
                    captivating picture of the future of education. He advocates
                    for a revolution in learning, a system where education bends
                    to the learner's needs, not the other way around,
                    transforming classrooms into a thriving global community.
                  </div>
                  <br />
                  <br />
                </li>

                <li>
                  <b>"Viral Justice" by Ruha Benjamin</b>
                  <br />
                  <div>
                    An inspiring vision of how we can build a more just world -
                    one small change at a time.
                    <br />
                    <br />
                    Long before the pandemic, Ruha Benjamin was doing
                    groundbreaking research on race, technology, and justice,
                    focusing on big, structural changes. But the twin plagues of
                    COVID-19 and anti-Black police violence inspired her to
                    rethink the importance of small, individual actions. Part
                    memoir, part manifesto, Viral Justice is a sweeping and
                    deeply personal exploration of how we can transform society
                    through the choices we make every day.
                    <br />
                    <br />
                    Vividly recounting her personal experiences and those of her
                    family, Benjamin shows how seemingly minor decisions and
                    habits could spread virally and have exponentially positive
                    effects. She recounts her father's premature death,
                    illuminating the devastating impact of the chronic stress of
                    racism, but she also introduces us to community organizers
                    who are fostering mutual aid and collective healing. Through
                    her brother's experience with the criminal justice system,
                    we see the trauma caused by policing practices and mass
                    imprisonment, but we also witness family members finding
                    strength as they come together to demand justice for their
                    loved ones. And while her own challenges as a young mother
                    reveal the vast inequities of our healthcare system,
                    Benjamin also describes how the support of doulas and
                    midwives can keep Black mothers and babies alive and well.
                    <br />
                    <br />
                    Born of a stubborn hopefulness, Viral Justice offers a
                    passionate, inspiring, and practical vision of how small
                    changes can add up to large ones, transforming our
                    relationships and communities and helping us build a more
                    just and joyful world plunging into the uncharted depths of
                    the digital realm, revealing how technology and justice
                    intertwine, exploring the viral spread of systemic biases
                    that infect our supposedly neutral digital world.
                    <br />
                    <br />
                  </div>
                </li>
                <li>
                  <b>"Race After Technology" by Ruha Benjamin</b>
                  <br />
                  <div>
                    Benjamin takes readers on a journey into the "New Jim Code,"
                    a territory where technology and racial bias merge. This
                    book is a clarion call to action, a wake-up call to a world
                    seduced by the notion of objective algorithms, uncovering
                    the coded racism hidden within our digital lives.
                    <br />
                    <br />
                  </div>
                </li>
                <li>
                  <b>"The New Jim Crow" by Michelle Alexander</b>
                  <br />
                  <div>
                    Alexander delivers a thunderous indictment of the modern
                    American criminal justice system. She unearths the stark
                    truth that mass incarceration, driven by the War on Drugs,
                    has resurrected a racial caste system that mirrors the Jim
                    Crow era. A chilling revelation of systemic racism that
                    lurks behind bars.
                    <br />
                    <br />
                  </div>
                </li>
                <li>
                  <b>"The Stranger" by Albert Camus</b>
                  <br />
                  <div>
                    Albert Camus unravels a captivating tale of Meursault, an
                    unrepentant French Algerian who dares to confront the
                    absurdity of life head-on. In a world that demands remorse
                    for his act of murder, he defiantly clings to his
                    indifference, shaking the very pillars of moral convention.
                    <br />
                    <br />
                  </div>
                </li>
                <li>
                  <b>"Teaching Community: A Pedagogy of Hope" by bell hooks</b>
                  <br />
                  <div>
                    bell hooks champions a rousing call to transform education
                    into a tool for liberation. She envisions classrooms where
                    race and gender are not hurdles but embraced diversity,
                    where mutual respect forms the bedrock of learning, and
                    where hope sows the seeds for a vibrant, inclusive
                    community.
                  </div>
                </li>
              </ol>
            </div>
          ),
          spanish: 
          (
          <div>
          <ol>
          <li>
          <b>"El viaje de Enrique" de Sonia Nazario:</b>
          <br />
          <div>
          Esta épica conmovedora revela la odisea de un valiente niño hondureño, Enrique, quien enfrenta el peligro y cruza terrenos traicioneros para encontrar a su madre al otro lado de la frontera de EE.UU. Es un viaje revelador y conmovedor al corazón mismo de la experiencia humana, destacando las duras realidades de la inmigración.
          </div>
          <br />
          <br />
          </li>
          <li>
          <b>
          "Las consecuencias económicas de la paz" de John Maynard Keynes
          </b>
          <br />
          <div>
          Keynes ofrece un análisis apasionante del Tratado de Versalles, que puso fin a la Primera Guerra Mundial. Con la precisión de un maestro cirujano, disecciona el tratado, profetizando audazmente que sus términos severos catapultarían al mundo hacia otra guerra. Una predicción y crítica audaz que la historia más tarde confirmaría.
          </div>
          <br />
          <br />
          </li>
          <li>
          <b>"La Escuela Mundial Única" de Salman Khan</b>
          <br />
          <div>
          Salman Khan, el visionario creador de Khan Academy, pinta una imagen cautivadora del futuro de la educación. Aboga por una revolución en el aprendizaje, un sistema donde la educación se adapta a las necesidades del aprendiz, no al revés, transformando las aulas en una próspera comunidad global.
          </div>
          <br />
          <br />
          </li>
          <li>
              <b>"Justicia Viral" de Ruha Benjamin</b>
              <br />
              <div>
                Una visión inspiradora de cómo podemos construir un mundo más justo - un pequeño cambio a la vez.
                <br />
                <br />
                Mucho antes de la pandemia, Ruha Benjamin estaba realizando investigaciones innovadoras sobre raza, tecnología y justicia, centrándose en cambios estructurales importantes. Pero las dos plagas de COVID-19 y la violencia policial anti-negra la inspiraron a repensar la importancia de las acciones individuales pequeñas. Parte memorias, parte manifiesto, "Justicia Viral" es una exploración profunda y profundamente personal de cómo podemos transformar la sociedad a través de las elecciones que hacemos cada día.
                <br />
                <br />
                Contando vívidamente sus experiencias personales y las de su familia, Benjamin muestra cómo decisiones y hábitos aparentemente menores podrían propagarse viralmente y tener efectos exponencialmente positivos. Relata la muerte prematura de su padre, iluminando el impacto devastador del estrés crónico del racismo, pero también nos presenta a organizadores comunitarios que fomentan la ayuda mutua y la curación colectiva. A través de la experiencia de su hermano con el sistema de justicia penal, vemos el trauma causado por las prácticas policiales y el encarcelamiento masivo, pero también somos testigos de familiares que encuentran fuerza al unirse para exigir justicia para sus seres queridos. Y aunque sus propios desafíos como madre joven revelan las enormes desigualdades de nuestro sistema de atención médica, Benjamin también describe cómo el apoyo de doulas y parteras puede mantener vivas y saludables a las madres y bebés negros.
                <br />
                <br />
                Nacido de una esperanza obstinada, "Justicia Viral" ofrece una visión apasionada, inspiradora y práctica de cómo los pequeños cambios pueden sumarse a grandes transformaciones, mejorando nuestras relaciones y comunidades y ayudándonos a construir un mundo más justo y alegre sumergiéndose en las profundidades inexploradas del reino digital, revelando cómo la tecnología y la justicia se entrelazan, explorando la propagación viral de sesgos sistémicos que infectan nuestro mundo digital supuestamente neutral.
                <br />
                <br />
              </div>
            </li>
            <li>
              <b>"Raza después de la tecnología" de Ruha Benjamin</b>
              <br />
              <div>
                Benjamin lleva a los lectores a un viaje al "Nuevo Código Jim", un territorio donde la tecnología y el sesgo racial se fusionan. Este libro es un llamado a la acción, una llamada de atención a un mundo seducido por la noción de algoritmos objetivos, descubriendo el racismo codificado oculto dentro de nuestras vidas digitales.
                <br />
                <br />
              </div>
            </li>
            <li>
              <b>"El Nuevo Jim Crow" de Michelle Alexander</b>
              <br />
              <div>
                Alexander ofrece una acusación atronadora del sistema de justicia penal moderno estadounidense. Descubre la dura verdad de que el encarcelamiento masivo, impulsado por la Guerra contra las Drogas, ha resucitado un sistema de castas raciales que refleja la era de Jim Crow. Una revelación escalofriante del racismo sistémico que se esconde tras las rejas.
                <br />
                <br />
              </div>
            </li>
            <li>
              <b>"El Extranjero" de Albert Camus</b>
              <br />
              <div>
                Albert Camus desentraña una historia cautivadora de Meursault, un argelino francés imperturbable que se atreve a enfrentar de frente la absurdidad de la vida. En un mundo que exige remordimiento por su acto de asesinato, se aferra desafiante a su indiferencia, sacudiendo los mismos pilares de la convención moral.
                <br />
                <br />
              </div>
            </li>
            <li>
              <b>"Enseñando Comunidad: Una Pedagogía de Esperanza" de bell hooks</b>
              <br />
              <div>
                bell hooks aboga por una llamada emocionante a transformar la educación en una herramienta de liberación. Imagina aulas donde la raza y el género no son obstáculos sino diversidad abrazada, donde el respeto mutuo forma la base del aprendizaje y donde la esperanza siembra las semillas de una comunidad vibrante e inclusiva.
              </div>
            </li>
          </ol>
        </div>
      )
,
          tooltip: ``,
        },
        demonstrate: {
          completed: false,
          impact: 100,
          action: `demonstrate`,
          icon: `🎨`,
          request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
            `Philosophy`
          )}`,
          response: (
            <div>
              <div>
                Purpose, duty, and providence are complex philosophical concepts
                that have been interpreted in various ways throughout history
                and within different philosophical, religious, and cultural
                contexts. Here's a brief overview of how they are generally
                understood:
              </div>
              <br />
              <br />
              <ol>
                <li>
                  <b>Purpose</b>
                  <br />
                  <div>
                    In philosophy, purpose pertains to the reason or intent
                    behind an action or existence. It's often linked to ideas
                    about the meaning of life and human existence. Teleological
                    theories, for example, argue that everything in life has a
                    specific purpose or end goal (telos). In personal terms,
                    one's purpose might be understood as the overarching goal or
                    set of goals that give direction and meaning to one's life.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>Duty</b>
                  <br />
                  <div>
                    {" "}
                    Duty refers to moral or legal obligations; responsibilities
                    that individuals must fulfill. Duty-based ethics, or
                    deontology, is a moral theory that emphasizes the importance
                    of duty in determining what is right and wrong. For example,
                    Immanuel Kant, a famous deontologist, argued that moral
                    actions are not necessarily those that result in a good
                    outcome, but those that are undertaken out of a sense of
                    duty and guided by universal moral laws.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>Providence</b>
                  <br />
                  <div>
                    Providence is a religious and theological concept that
                    refers to God's intervention in the world. It implies that
                    there is a divine plan and that God's wisdom guides this
                    plan. Providence often deals with questions of theodicy, or
                    why a good and all-powerful God allows suffering and evil to
                    exist. In some interpretations, providence suggests that
                    such suffering is part of a larger, divine plan that is
                    ultimately for the greater good, even if it is beyond human
                    comprehension.
                  </div>
                  <br />
                  <br />
                </li>
              </ol>

              <br />
              <br />
              <div>
                It's important to note that these three concepts can interact
                and overlap in complex ways. For example, someone's sense of
                duty might be tied to their belief in a divine purpose for their
                life. Meanwhile, an understanding of providence might inform
                what one perceives their purpose to be, especially within
                certain religious frameworks.
              </div>
              <br />
              <br />
              <div>
                Consider a person who believes that their purpose in life (i.e.,
                their reason for being) is to help others. This could translate
                into a sense of duty (i.e., moral obligation) to do charitable
                work. If this person also believes in divine providence, they
                might view their calling to charity work as part of a divinely
                ordained plan. They might also interpret challenges and
                successes in their work as signs of divine providence, providing
                further meaning and context to their purpose and duty.
              </div>
            </div>
          ),
          spanish: (
            <div>
            <div>
            Los conceptos filosóficos de propósito, deber y providencia son complejos y han sido interpretados de diversas formas a lo largo de la historia y en diferentes contextos filosóficos, religiosos y culturales. A continuación, te ofrecemos una breve descripción de cómo se suelen entender en general:
            </div>
            <br />
            <br />
            <ol>
            <li>
            <b>Propósito</b>
            <br />
            <div>
            En filosofía, el propósito se refiere a la razón o intención detrás de una acción o existencia. A menudo está relacionado con ideas sobre el sentido de la vida y la existencia humana. Teorías teleológicas, por ejemplo, argumentan que todo en la vida tiene un propósito específico o un objetivo final (telos). En términos personales, el propósito de alguien podría entenderse como el objetivo general o conjunto de objetivos que dan dirección y significado a su vida.
            </div>
            <br />
            <br />
            </li>
            <li>
            <b>Deber</b>
            <br />
            <div>
            El deber se refiere a obligaciones morales o legales; responsabilidades que las personas deben cumplir. La ética basada en el deber, o deontología, es una teoría moral que enfatiza la importancia del deber en la determinación de lo que es correcto e incorrecto. Por ejemplo, Immanuel Kant, un famoso deontólogo, argumentó que las acciones morales no son necesariamente aquellas que resultan en un buen resultado, sino aquellas que se emprenden por un sentido de deber y están guiadas por leyes morales universales.
            </div>
            <br />
            <br />
            </li>
            <li>
            <b>Providencia</b>
            <br />
            <div>
            La providencia es un concepto religioso y teológico que se refiere a la intervención de Dios en el mundo. Implica que hay un plan divino y que la sabiduría de Dios guía este plan. La providencia a menudo trata sobre cuestiones de teodicea, es decir, por qué un Dios bueno y todopoderoso permite que exista el sufrimiento y el mal. En algunas interpretaciones, la providencia sugiere que dicho sufrimiento es parte de un plan divino más amplio que es en última instancia para el bien mayor, incluso si está más allá de la comprensión humana.
            </div>
            <br />
            <br />
            </li>
            </ol>
            
            css
            Copy code
                      <br />
                      <br />
                      <div>
                        Es importante señalar que estos tres conceptos pueden interactuar y superponerse de formas complejas. Por ejemplo, el sentido de deber de alguien podría estar vinculado a su creencia en un propósito divino para su vida. Mientras tanto, una comprensión de la providencia podría informar sobre lo que uno percibe como su propósito, especialmente dentro de ciertos marcos religiosos.
                      </div>
                      <br />
                      <br />
                      <div>
                        Considera a una persona que cree que su propósito en la vida (es decir, su razón de ser) es ayudar a los demás. Esto podría traducirse en un sentido de deber (es decir, obligación moral) de hacer trabajo benéfico. Si esta persona también cree en la providencia divina, podría ver su llamado al trabajo benéfico como parte de un plan divinamente ordenado. También podría interpretar los desafíos y éxitos en su trabajo como signos de providencia divina, proporcionando un mayor significado y contexto a su propósito y deber.
                      </div>
                    </div>
                  ),
          tooltip: ``,
        },
        define: {
          completed: false,
          impact: 100,
          action: `define`, // may not need
          icon: `🧿`, // may not need
          request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
            `Philosophy`
          )} in exactly one sentence?`,
          response: (
            <div>
              Philosophy is important to study because it cultivates critical
              thinking, encourages open-mindedness, and fosters the exploration
              of fundamental questions about existence, morality, and the nature
              of reality, enabling us to better understand ourselves and the
              world around us.
            </div>
          ),
          spanish: (
            <div>
            La filosofía es importante de estudiar porque cultiva el pensamiento crítico, fomenta la apertura mental y promueve la exploración de preguntas fundamentales sobre la existencia, la moralidad y la naturaleza de la realidad, lo que nos permite comprender mejor a nosotros mismos y el mundo que nos rodea.
            </div>
            ),
          tooltip: ``,
        },
        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `Philosophy`
          )} without any answers?`,
          response: (
            <ChatBlock type={"quiz"}>
              What does philosophy have to do with computer science?
              <br />
              <br />
              How does the design and development of algorithms and AI systems,
              often created by predominantly white or asian and male teams,
              potentially reinforce existing racial biases and systemic
              inequalities? How can these be mitigated?
              <br />
              <br />
              In what ways can critical race theory inform our understanding of
              the digital divide, and how can it guide the creation of more
              equitable access to technology and digital resources?
              <br />
              <br />
              How might concepts from critical race theory help to critique and
              reshape current practices in data collection and interpretation in
              computer science, particularly with respect to racial and ethnic
              categories?
              <br />
              <br />
              How can we apply a critical race theory lens to the discourse
              around digital privacy and surveillance, especially considering
              the differential impacts on various racial and ethnic groups?
              <br />
              <br />
              What role can philosophy and computer science play in helping to
              dismantle systemic racism as identified and outlined by critical
              race theory? For example, how can philosophical notions of ethics
              and justice inform the development and use of technology in a way
              that promotes racial justice?
              <br />
              <br />
            </ChatBlock>
          ),
          spanish: (
            <ChatBlock type={"quiz"}>
            ¿Qué tiene que ver la filosofía con la informática?
            <br />
            <br />
            ¿Cómo el diseño y desarrollo de algoritmos y sistemas de IA, a menudo creados por equipos predominantemente blancos o asiáticos y masculinos, pueden reforzar posiblemente prejuicios raciales existentes y desigualdades sistémicas? ¿Cómo se pueden mitigar estos efectos?
            <br />
            <br />
            ¿De qué manera puede la teoría crítica de la raza informar nuestra comprensión de la brecha digital y cómo puede guiar la creación de un acceso más equitativo a la tecnología y los recursos digitales?
            <br />
            <br />
            ¿Cómo podrían los conceptos de la teoría crítica de la raza ayudar a analizar y reformar las prácticas actuales en la recopilación e interpretación de datos en informática, especialmente en lo que respecta a categorías raciales y étnicas?
            <br />
            <br />
            ¿Cómo podemos aplicar una perspectiva de la teoría crítica de la raza al discurso sobre la privacidad digital y la vigilancia, especialmente teniendo en cuenta los impactos diferenciales en varios grupos raciales y étnicos?
            <br />
            <br />
            ¿Qué papel pueden desempeñar la filosofía y la informática en ayudar a desmantelar el racismo sistémico identificado y descrito por la teoría crítica de la raza? Por ejemplo, ¿cómo pueden las nociones filosóficas de ética y justicia informar el desarrollo y uso de la tecnología de manera que promueva la justicia racial?
            <br />
            <br />
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
          spanish: "Este espacio de compra aún no está siendo utilizado. Por favor, contáctame en Patreon para calificar.",
          tooltip: ``,
        },
      },
    },
    "Interactions & Design": {
      documentID: ``,
      filler: ``,
      new: false,
      highValue: false,
      underConstruction: false,
      completed: false,
      rare: true,
      needsImprovement: false,
      tooltip: ``,
      sourceType: `video`, // may not need
      button: `Interactions & Design`, // may not need - `name`
      header: `Interactions & Design`,
      backgroundImgSrc:
        "https://res.cloudinary.com/sheilfer/image/upload/v1697448652/Module_Buttons_11_fcepaw.gif",
      fileSource:
        "https://res.cloudinary.com/sheilfer/video/upload/v1697403810/IMG_8966_gt4s4s.mov", // may not need

      prompts: {
        patreon: {
          completed: false,
          impact: 1000,
          action: `generate`,
          icon: `►`, //`✍️`
          request: `ms. roxana, can you please generate material to introduce me to ${ultimateEffeciencyJutsu(
            `Human-Computer Interaction`
          )}?`,
          response: `null`,
          spanish: ``,
          tooltip: ``,
          additionalContent: await import(
            "../../markdowns/humanComputerInteraction.md?raw"
          ),
        },
        inspire: {
          completed: false,
          impact: 100,
          action: `inspire`,
          icon: `⚡`,
          request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
            `Human-Computer Interaction`
          )}?`,
          response: (
            <div>
              The intersection of teaching and psychology holds immense value
              for human-computer interaction, particularly in the development of
              educational and mental health technologies. In essence,
              human-computer interaction is about designing technologies that
              understand and respond effectively to human needs and behaviors. A
              deep understanding of teaching and psychology can greatly inform
              these designs.
              <br /> <br />
              Educational psychology gives us insights into how humans learn. It
              helps us understand the structures, strategies, and types of
              feedback that can enhance learning, retention, and the application
              of knowledge. By applying these insights to human-computer
              interaction, we can create educational technologies that are not
              just interactive but also effective in promoting learning.
              <br /> <br />
              On another note, psychology plays a key role in tailoring
              education to individual needs. Every learner is unique, with
              different strengths, weaknesses, and learning styles. By
              integrating psychological principles with technology, we can
              create systems that adapt to these individual differences,
              personalizing education in ways that traditional classroom
              learning may not be able to.
              <br /> <br />
              For mental health technologies, understanding psychological
              principles and therapy techniques is critical. For instance,
              cognitive-behavioral therapy principles can be applied to create
              apps that help users track their mood, recognize negative thought
              patterns, and apply cognitive restructuring techniques. Without
              understanding psychology, developing such tools would be
              impossible.
              <br /> <br />
              Lastly, the principles of psychology and teaching also guide how
              technology itself can be made more user-friendly, engaging, and
              effective, considering factors such as cognitive load, attention,
              motivation, and behavior change. It’s not only about what the
              technologies do, but also about how they do it and how users
              interact with them.
              <br /> <br />
              Therefore, it's clear that the intersection of teaching and
              psychology has much to offer to the field of human-computer
              interaction in the development of educational and mental health
              technologies.
            </div>
          ),
          spanish: (
            <div>
              La intersección entre la enseñanza y la psicología tiene un valor inmenso para la interacción entre humanos y computadoras, especialmente en el desarrollo de tecnologías educativas y de salud mental. En esencia, la interacción entre humanos y computadoras se trata de diseñar tecnologías que comprendan y respondan de manera efectiva a las necesidades y comportamientos humanos. Un profundo entendimiento de la enseñanza y la psicología puede enriquecer significativamente estos diseños.
              <br /> <br />
              La psicología educativa nos proporciona conocimientos sobre cómo aprenden los seres humanos. Nos ayuda a comprender las estructuras, estrategias y tipos de retroalimentación que pueden mejorar el aprendizaje, la retención y la aplicación del conocimiento. Al aplicar estos conocimientos a la interacción entre humanos y computadoras, podemos crear tecnologías educativas que no solo sean interactivas, sino también efectivas para promover el aprendizaje.
              <br /> <br />
              Por otro lado, la psicología desempeña un papel clave en adaptar la educación a las necesidades individuales. Cada aprendiz es único, con diferentes fortalezas, debilidades y estilos de aprendizaje. Al integrar principios psicológicos con la tecnología, podemos crear sistemas que se adapten a estas diferencias individuales, personalizando la educación de maneras que la enseñanza tradicional en el aula quizás no pueda lograr.
              <br /> <br />
              En el caso de las tecnologías de salud mental, comprender los principios psicológicos y las técnicas terapéuticas es fundamental. Por ejemplo, los principios de la terapia cognitivo-conductual se pueden aplicar para crear aplicaciones que ayuden a los usuarios a hacer un seguimiento de su estado de ánimo, reconocer patrones de pensamiento negativo y aplicar técnicas de reestructuración cognitiva. Sin entender la psicología, sería imposible desarrollar tales herramientas.
              <br /> <br />
              Por último, los principios de la psicología y la enseñanza también guían cómo la tecnología misma puede hacerse más amigable para el usuario, atractiva y efectiva, considerando factores como la carga cognitiva, la atención, la motivación y el cambio de comportamiento. No se trata solo de lo que hacen las tecnologías, sino también de cómo lo hacen y cómo interactúan los usuarios con ellas.
              <br /> <br />
              Por lo tanto, queda claro que la intersección entre la enseñanza y la psicología tiene mucho que ofrecer al campo de la interacción entre humanos y computadoras en el desarrollo de tecnologías educativas y de salud mental.
            </div>
          ),
          tooltip: ``,
        },
        summarize: {
          completed: false,
          impact: 100,
          action: `summarize`,
          icon: `📚`,
          request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
            `Human-Computer Interaction`
          )}?`,
          response: (
            <div>
              The relationship between human-computer interaction (HCI), search
              engine optimization (SEO), social influence, and expression is a
              complex and symbiotic one, all of which are integral aspects of
              the digital experience.
              <br />
              <br />
              Human-computer interaction is the foundational pillar upon which
              the relationship is built. HCI focuses on designing and
              implementing user-friendly interfaces that facilitate seamless
              interaction between humans and computers. It guides how
              information is displayed, how user inputs are processed, and how
              responses are provided. HCI is not just about making systems that
              work; it's about making systems that work well for people, taking
              into consideration human needs, capabilities, and limitations.
              <br />
              <br />
              Search engine optimization, on the other hand, is the method by
              which content visibility is maximized in online search results.
              SEO serves as the link between users and the vast sea of
              information available online. By utilizing SEO principles,
              developers and content creators can ensure that their digital
              offerings are easily discoverable, accessible, and relevant to
              users. SEO thus plays an essential role in guiding users through
              the digital landscape, effectively bringing together user demand
              and content supply.
              <br />
              <br />
              However, human behavior in the digital realm isn't solely guided
              by the principles of HCI and SEO. Social influence plays a pivotal
              role in shaping online interactions and decisions. Whether it's
              through social media, online reviews, or digital word-of-mouth,
              the opinions and behaviors of others can greatly sway an
              individual's actions. Online platforms can harness this power of
              social influence to drive engagement, encourage desired behaviors,
              and foster communities.
              <br />
              <br />
              Expression, as the final piece of this relationship, is the
              manifestation of individuality, creativity, and communication in
              the digital environment. It’s the means by which users assert
              their presence, share their thoughts, and engage with others.
              Whether it's through personalized avatars, unique social media
              posts, or user-generated content, digital platforms provide myriad
              opportunities for users to express themselves.
              <br />
              <br />
              In conclusion, the intersection of HCI, SEO, social influence, and
              expression creates a multifaceted and dynamic digital ecosystem.
              HCI forms the bedrock of user-friendly design, SEO ensures the
              discoverability of relevant content, social influence shapes
              online behaviors and decisions, and expression allows for
              personalization and communication. These components work in tandem
              to enhance the digital experience, fostering a user-centric
              environment that is accessible, engaging, and meaningful.
            </div>
          ),
          spanish: (
            <div>
            La relación entre la interacción humano-computadora (HCI), la optimización para motores de búsqueda (SEO), la influencia social y la expresión es compleja y simbiótica, todas ellas son aspectos integrales de la experiencia digital.
            <br />
            <br />
            La interacción humano-computadora es el pilar fundamental sobre el cual se construye la relación. HCI se centra en diseñar e implementar interfaces amigables para el usuario que faciliten la interacción sin problemas entre humanos y computadoras. Guía cómo se muestra la información, cómo se procesan las entradas de usuario y cómo se proporcionan respuestas. HCI no se trata solo de hacer que los sistemas funcionen; se trata de hacer que los sistemas funcionen bien para las personas, teniendo en cuenta las necesidades, capacidades y limitaciones humanas.
            <br />
            <br />
            Por otro lado, la optimización para motores de búsqueda es el método mediante el cual se maximiza la visibilidad del contenido en los resultados de búsqueda en línea. El SEO sirve como el vínculo entre los usuarios y el vasto mar de información disponible en línea. Al utilizar los principios de SEO, los desarrolladores y creadores de contenido pueden asegurarse de que sus ofertas digitales sean fácilmente descubribles, accesibles y relevantes para los usuarios. De esta manera, el SEO desempeña un papel esencial en guiar a los usuarios a través del paisaje digital, reuniendo eficazmente la demanda del usuario y la oferta de contenido.
            <br />
            <br />
            Sin embargo, el comportamiento humano en el ámbito digital no está únicamente guiado por los principios de HCI y SEO. La influencia social desempeña un papel fundamental en la formación de interacciones y decisiones en línea. Ya sea a través de las redes sociales, las reseñas en línea o el boca a boca digital, las opiniones y comportamientos de los demás pueden influir enormemente en las acciones de un individuo. Las plataformas en línea pueden aprovechar este poder de influencia social para fomentar la participación, fomentar comportamientos deseados y fomentar comunidades.
            <br />
            <br />
            La expresión, como la pieza final de esta relación, es la manifestación de la individualidad, la creatividad y la comunicación en el entorno digital. Es el medio por el cual los usuarios afirman su presencia, comparten sus pensamientos y se relacionan con otros. Ya sea a través de avatares personalizados, publicaciones únicas en redes sociales o contenido generado por el usuario, las plataformas digitales ofrecen una multitud de oportunidades para que los usuarios se expresen.
            <br />
            <br />
            En conclusión, la intersección de HCI, SEO, influencia social y expresión crea un ecosistema digital multifacético y dinámico. HCI forma la base del diseño amigable para el usuario, SEO asegura la descubribilidad de contenido relevante, la influencia social moldea los comportamientos y decisiones en línea, y la expresión permite la personalización y la comunicación. Estos componentes trabajan en conjunto para mejorar la experiencia digital, fomentando un entorno centrado en el usuario que es accesible, atractivo y significativo.
            </div>
            ),
          tooltip: ``,
        },
        ask: {
          completed: false,
          impact: 100,
          action: `ask`,
          icon: `🔮`,
          request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
            `Human-Computer Interaction`
          )} with one sentence answers?`,
          response: (
            <div>
              <ol>
                <li>
                  <b>How does HCI impact SEO and vice versa?</b>
                  <br />
                  <div>
                    HCI and SEO are interconnected in several ways. A core
                    principle of HCI is creating intuitive, user-friendly
                    interfaces. This directly impacts SEO because search engines
                    like Google use factors such as mobile-friendliness, page
                    speed, and user engagement metrics (like bounce rate and
                    session duration) as part of their ranking algorithms.
                    Conversely, SEO principles can guide HCI design. For
                    instance, understanding popular search queries can inform
                    the creation of interfaces and content that match user
                    information needs and searching behaviors.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>How does social influence relate to HCI and SEO?</b>
                  <br />
                  <div>
                    {" "}
                    Social influence plays a significant role in the digital
                    landscape. In terms of HCI, understanding how social
                    influence works can help design interfaces that encourage
                    desired behaviors, such as sharing content or contributing
                    to online communities. In terms of SEO, social signals, such
                    as likes, shares, and comments, can indirectly influence
                    search engine rankings. While these social signals aren't
                    direct ranking factors, they can lead to increased
                    visibility and backlinks, which do impact SEO.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>
                    How does personal expression factor into HCI, SEO, and
                    social influence?
                  </b>
                  <br />
                  <div>
                    Expression is a crucial component of the online experience.
                    HCI is concerned with designing systems that allow users to
                    express themselves easily and effectively, whether that's
                    through personalizing an interface or creating and sharing
                    content. For SEO, unique and high-quality user-generated
                    content can increase a site's visibility and ranking. Social
                    influence can shape expression, as users often model their
                    behavior on what they see others doing. Conversely,
                    individual expression can drive social influence by creating
                    trends or starting conversations.
                  </div>
                  <br />
                  <br />
                </li>
              </ol>
            </div>
          ),
          spanish: (

            <div>
              <ol>
                <li>
                  <b>¿Cómo impacta la HCI en el SEO y viceversa?</b>
                  <br />
                  <div>
                    La HCI y el SEO están interconectados de varias maneras. Un principio fundamental de la HCI es crear interfaces intuitivas y amigables para el usuario. Esto afecta directamente al SEO porque los motores de búsqueda como Google utilizan factores como la amigabilidad móvil, la velocidad de la página y las métricas de participación del usuario (como la tasa de rebote y la duración de la sesión) como parte de sus algoritmos de clasificación. Por otro lado, los principios del SEO pueden guiar el diseño de la HCI. Por ejemplo, comprender las consultas de búsqueda populares puede informar la creación de interfaces y contenido que coincidan con las necesidades de información y comportamientos de búsqueda de los usuarios.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>¿Cómo se relaciona la influencia social con la HCI y el SEO?</b>
                  <br />
                  <div>
                    La influencia social desempeña un papel importante en el entorno digital. En términos de HCI, comprender cómo funciona la influencia social puede ayudar a diseñar interfaces que fomenten comportamientos deseados, como compartir contenido o contribuir a comunidades en línea. En términos de SEO, las señales sociales, como los "me gusta", las comparticiones y los comentarios, pueden influir indirectamente en las clasificaciones de los motores de búsqueda. Si bien estas señales sociales no son factores de clasificación directos, pueden conducir a una mayor visibilidad y vínculos de retroceso, que sí afectan al SEO.
                  </div>
                  <br />
                  <br />
                </li>
                <li>
                  <b>¿Cómo influye la expresión personal en la HCI, el SEO y la influencia social?</b>
                  <br />
                  <div>
                    La expresión es un componente crucial de la experiencia en línea. La HCI se preocupa por diseñar sistemas que permitan a los usuarios expresarse de manera fácil y efectiva, ya sea a través de la personalización de una interfaz o la creación y compartición de contenido. Para el SEO, el contenido único y de alta calidad generado por el usuario puede aumentar la visibilidad y la clasificación de un sitio. La influencia social puede dar forma a la expresión, ya que los usuarios a menudo modelan su comportamiento en función de lo que ven que hacen otros. A su vez, la expresión individual puede impulsar la influencia social al crear tendencias o iniciar conversaciones.
                  </div>
                  <br />
                  <br />
                </li>
              </ol>
            </div>
            ),
          tooltip: ``,
        },
        guide: {
          completed: false,
          impact: 100,
          action: `guide`,
          icon: `🤝`,
          request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
            `Human-Computer Interaction`
          )}?`,
          response: (
            <div>
              <h3>Human-Computer Interaction (HCI) Study Guide and Roadmap</h3>

              <h2>Step 1: Foundations</h2>
              <p>
                Start by familiarizing yourself with the basics of computer
                science, design, and psychology. These fields form the
                foundation of HCI:
              </p>
              <ul>
                <li>
                  Computer Science: Courses like Harvard's CS50 on edX provide
                  an introduction to computer science.
                </li>
                <li>
                  Design: Look into courses that cover principles of design,
                  user experience (UX) design, and graphic design.
                </li>
                <li>
                  Psychology: Consider courses that offer an overview of
                  cognitive psychology and social psychology.
                </li>
              </ul>

              <h2>Step 2: Introduction to HCI</h2>
              <p>
                Take introductory courses specifically in HCI to understand its
                principles, theories, and techniques, such as Stanford
                University's "Introduction to Human-Computer Interaction Design"
                available on Coursera.
              </p>

              <h2>Step 3: Advanced HCI Studies</h2>
              <p>
                After getting the basics, delve into more advanced HCI topics
                like interactive system design, user experience research, and
                information visualization.
              </p>

              <h2>Step 4: Specialize</h2>
              <p>
                HCI is a broad field with many subareas. You might want to
                specialize based on what you enjoy most or where you see the
                most career potential, such as UX design, usability testing,
                information architecture, mobile interaction design, or
                accessibility.
              </p>

              <h2>Step 5: Practical Experience</h2>
              <p>
                Gaining practical experience is key. This can come from
                projects, internships, or work experience:
              </p>
              <ul>
                <li>
                  Apply what you've learned through class projects, freelance
                  work, or internships.
                </li>
                <li>
                  Building a portfolio of your work is crucial in showcasing
                  your skills to future employers.
                </li>
              </ul>

              <h2>Step 6: Networking and Professional Development</h2>
              <p>
                Getting involved in the HCI community can open doors to
                opportunities and deepen your learning:
              </p>
              <ul>
                <li>Attend relevant meetups, conferences, or webinars.</li>
                <li>
                  Join professional organizations like the ACM's Special
                  Interest Group on Computer-Human Interaction (ACM SIGCHI).
                </li>
                <li>
                  Stay up-to-date with the latest research by reading relevant
                  journals and magazines.
                </li>
              </ul>

              <h2>Step 7: Consider Further Education</h2>
              <p>
                If you're serious about a career in HCI, consider pursuing
                further education, such as a master's degree in HCI or a related
                field.
              </p>
            </div>
          ),
          spanish: (
            <div>
              <h3>Guía de Estudio y Hoja de Ruta de Interacción Humano-Computadora (IHC)</h3>
          
              <h2>Paso 1: Fundamentos</h2>
              <p>
                Comienza familiarizándote con los conceptos básicos de la informática,
                el diseño y la psicología. Estos campos conforman los fundamentos de la IHC:
              </p>
              <ul>
                <li>
                  Informática: Cursos como el CS50 de Harvard en edX ofrecen una
                  introducción a la informática.
                </li>
                <li>
                  Diseño: Investiga cursos que aborden los principios del diseño, el diseño
                  de experiencia de usuario (UX) y el diseño gráfico.
                </li>
                <li>
                  Psicología: Considera cursos que ofrezcan una visión general de la
                  psicología cognitiva y la psicología social.
                </li>
              </ul>
          
              <h2>Paso 2: Introducción a la IHC</h2>
              <p>
                Realiza cursos introductorios específicos en IHC para comprender sus
                principios, teorías y técnicas, como el curso "Introducción al Diseño de
                Interacción Humano-Computadora" de la Universidad de Stanford, disponible
                en Coursera.
              </p>
          
              <h2>Paso 3: Estudios Avanzados de IHC</h2>
              <p>
                Después de adquirir los conceptos básicos, adéntrate en temas más
                avanzados de IHC, como el diseño de sistemas interactivos, la investigación
                de la experiencia del usuario y la visualización de la información.
              </p>
          
              <h2>Paso 4: Especialización</h2>
              <p>
                La IHC es un campo amplio con muchas subáreas. Puedes especializarte en
                función de lo que más te guste o donde veas un mayor potencial de carrera,
                como el diseño de UX, las pruebas de usabilidad, la arquitectura de la
                información, el diseño de interacción móvil o la accesibilidad.
              </p>
          
              <h2>Paso 5: Experiencia Práctica</h2>
              <p>
                Obtener experiencia práctica es fundamental. Esto puede provenir de
                proyectos, pasantías o experiencia laboral:
              </p>
              <ul>
                <li>
                  Aplica lo que has aprendido a través de proyectos de clase, trabajos
                  freelance o pasantías.
                </li>
                <li>
                  Construir un portafolio de tu trabajo es crucial para mostrar tus
                  habilidades a futuros empleadores.
                </li>
              </ul>
          
              <h2>Paso 6: Networking y Desarrollo Profesional</h2>
              <p>
                Involucrarte en la comunidad de IHC puede abrir puertas a oportunidades y
                profundizar tu aprendizaje:
              </p>
              <ul>
                <li>Asiste a reuniones, conferencias o seminarios relevantes.</li>
                <li>
                  Únete a organizaciones profesionales como el Grupo de Interés Especial
                  en Interacción Humano-Computadora de la ACM (ACM SIGCHI).
                </li>
                <li>
                  Mantente al día con las últimas investigaciones leyendo revistas y
                  publicaciones relevantes.
                </li>
              </ul>
          
              <h2>Paso 7: Considera la Educación Adicional</h2>
              <p>
                Si estás decidido a seguir una carrera en IHC, considera cursar una
                educación adicional, como una maestría en IHC o un campo relacionado.
              </p>
            </div>
          )
          ,
          tooltip: ``,
        },
        demonstrate: {
          completed: false,
          impact: 100,
          action: `demonstrate`,
          icon: `🎨`,
          request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
            `Human-Computer Interaction`
          )}?`,
          response: (
            <div>
              Human-computer interaction (HCI) principles play an integral role
              in the development and operation of mental health apps. A
              fundamental premise of HCI is user-centered design. This principle
              is of paramount importance in mental health apps where
              understanding the needs and contexts of the user base is
              essential. Developers usually collaborate with mental health
              professionals to ascertain that the app's content and strategies
              are aptly suited to handle sensitive issues.
              <br />
              <br />
              Another significant aspect of HCI involves creating intuitive and
              easy-to-use interfaces. Given the personal and potentially
              distressing nature of mental health issues, it's particularly
              important for these apps to be simple to navigate. The design
              should not contribute to a user's stress or anxiety. This requires
              a balance between functionality and aesthetics, offering a serene
              and calming environment without compromising on usability.
              <br />
              <br />
              Personalization is also a key concept in HCI and it's an
              especially relevant feature in mental health apps. Since mental
              health experiences are highly individual, these apps often
              incorporate adaptive elements that adjust according to user
              inputs, providing personalized experiences and recommendations.
              This can range from customizing reminders for self-care activities
              to offering personalized therapeutic exercises based on a user's
              specific mental health needs.
              <br />
              <br />
              Moreover, in the realm of mental health apps, HCI also entails
              designing with an empathetic approach. This could involve
              tactfully crafted notifications, non-judgmental language, and
              responses that mirror human empathy. It's all about making the
              user feel understood and supported.
              <br />
              <br />
              Finally, one must not forget the privacy and security concerns. As
              HCI is about the interaction between humans and computers, the
              field also considers how to protect users and their data. This is
              especially crucial for mental health apps where sensitive personal
              information is being shared. Privacy settings, clear data handling
              policies, and robust security measures should be embedded in the
              design from the outset.
              <br />
              <br />
              In conclusion, the principles of HCI permeate every aspect of
              mental health apps, shaping how they are designed, how they
              function, and how they interact with their users to provide
              support, relief, and tools for managing mental health.
            </div>
          ),
          spanish:(

            <div>
              Los principios de la interacción humano-computadora (IHC) desempeñan un papel integral en el desarrollo y funcionamiento de las aplicaciones de salud mental. Una premisa fundamental de la IHC es el diseño centrado en el usuario. Este principio es de suma importancia en las aplicaciones de salud mental, donde comprender las necesidades y contextos de la base de usuarios es esencial. Los desarrolladores suelen colaborar con profesionales de la salud mental para asegurarse de que el contenido y las estrategias de la aplicación sean adecuados para abordar cuestiones delicadas.
              <br />
              <br />
              Otro aspecto significativo de la IHC implica la creación de interfaces intuitivas y fáciles de usar. Dada la naturaleza personal y potencialmente angustiante de los problemas de salud mental, es especialmente importante que estas aplicaciones sean fáciles de navegar. El diseño no debe contribuir al estrés o la ansiedad del usuario. Esto requiere un equilibrio entre funcionalidad y estética, ofreciendo un entorno sereno y tranquilo sin comprometer la usabilidad.
              <br />
              <br />
              La personalización es también un concepto clave en la IHC y es una característica especialmente relevante en las aplicaciones de salud mental. Dado que las experiencias de salud mental son altamente individuales, estas aplicaciones a menudo incorporan elementos adaptables que se ajustan según las entradas del usuario, proporcionando experiencias y recomendaciones personalizadas. Esto puede ir desde personalizar recordatorios para actividades de autocuidado hasta ofrecer ejercicios terapéuticos personalizados basados en las necesidades específicas de salud mental de un usuario.
              <br />
              <br />
              Además, en el ámbito de las aplicaciones de salud mental, la IHC también implica diseñar con un enfoque empático. Esto podría incluir notificaciones cuidadosamente diseñadas, lenguaje no juzgador y respuestas que reflejen la empatía humana. Se trata de hacer que el usuario se sienta comprendido y respaldado.
              <br />
              <br />
              Finalmente, no debemos olvidar las preocupaciones de privacidad y seguridad. Dado que la IHC trata sobre la interacción entre humanos y computadoras, el campo también considera cómo proteger a los usuarios y sus datos. Esto es especialmente crucial para las aplicaciones de salud mental donde se comparten información personal sensible. La configuración de privacidad, las políticas claras de manejo de datos y las medidas de seguridad sólidas deben estar incorporadas en el diseño desde el principio.
              <br />
              <br />
              En conclusión, los principios de la IHC impregnan cada aspecto de las aplicaciones de salud mental, dando forma a cómo se diseñan, cómo funcionan y cómo interactúan con sus usuarios para proporcionar apoyo, alivio y herramientas para gestionar la salud mental.
            </div>
          ),
          tooltip: ``,
        },
        define: {
          completed: false,
          impact: 100,
          action: `define`, // may not need
          icon: `🧿`, // may not need
          request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
            `Human-Computer Interaction`
          )} in exactly one sentence?`,
          response: (
            <div>
              Human-computer interaction informs the design of intuitive and
              user-friendly interfaces, search engine optimization ensures
              content visibility and reach, while social influence shapes user
              behavior and interactions, all of which collectively facilitate
              expressive and meaningful digital experiences.
            </div>
          ),
          spanish:(

  <div>
    La interacción humano-computadora informa el diseño de interfaces intuitivas y amigables para el usuario, la optimización de motores de búsqueda asegura la visibilidad y alcance del contenido, mientras que la influencia social moldea el comportamiento e interacciones del usuario, todo lo cual facilita colectivamente experiencias digitales expresivas y significativas.
  </div>
),
          tooltip: ``,
        },

        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `Human-Computer Interaction`
          )} without any answers?`,
          response: (
            <ChatBlock type={"quiz"}>
              Question 1
              <br />
              <br />
              How do you envision the evolution of human-computer interaction
              with the advancement of emerging technologies such as virtual
              reality and artificial intelligence?
              <br />
              <br />
              Question 2<br />
              <br />
              As search engines evolve to understand context and user intent,
              how do you foresee the strategies for search engine optimization
              changing?
              <br />
              <br />
              Question 3
              <br />
              <br />
              How does the increasing influence of social media on user behavior
              impact the design principles of human-computer interaction?
              <br />
              <br />
              Question 4
              <br />
              <br />
              In what ways do you think search engine algorithms should adapt to
              better capture and understand individual and societal expressions
              across the internet?
              <br />
              <br />
              Question 5
              <br />
              <br />
              How can the principles of human-computer interaction be adapted to
              accommodate the diverse ways in which different cultures express
              themselves digitally?
            </ChatBlock>
          ),
          spanish: (
            <ChatBlock type={"quiz"}>
            Pregunta 1
            <br />
            <br />
            ¿Cómo visualizas la evolución de la interacción humano-computadora con el avance de tecnologías emergentes como la realidad virtual y la inteligencia artificial?
            <br />
            <br />
            Pregunta 2
            <br />
            <br />
            A medida que los motores de búsqueda evolucionan para comprender el contexto y la intención del usuario, ¿cómo prevés que cambien las estrategias de optimización de motores de búsqueda?
            <br />
            <br />
            Pregunta 3
            <br />
            <br />
            ¿Cómo afecta la creciente influencia de las redes sociales en el comportamiento del usuario a los principios de diseño de la interacción humano-computadora?
            <br />
            <br />
            Pregunta 4
            <br />
            <br />
            ¿De qué maneras crees que los algoritmos de los motores de búsqueda deberían adaptarse para capturar y comprender mejor las expresiones individuales y sociales en Internet?
            <br />
            <br />
            Pregunta 5
            <br />
            <br />
            ¿Cómo pueden adaptarse los principios de la interacción humano-computadora para dar cabida a las diversas formas en que diferentes culturas se expresan digitalmente?
            </ChatBlock>),
          tooltip: ``,
        },
        shop: {
          completed: false,
          impact: 100,
          action: `shop`,
          icon: `🛍️`,
          request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
          response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
          spanish: `Este espacio de compra aún no se está utilizando. Por favor, contáctame en Patreon para calificar.`,
          tooltip: ``,
        },
      },
    },
    "The Psychology Of Self-esteem": {
      documentID: ``,
      backgroundImgSrc:
        "https://res.cloudinary.com/sheilfer/image/upload/v1695548485/Module_Buttons_10_u50oik.gif",
      filler: ``,
      new: false,
      highValue: false,
      underConstruction: false,
      completed: false,
      rare: true,
      needsImprovement: false,
      tooltip: ``,
      sourceType: `video`, // may not need
      button: `The Psychology Of Self-esteem`, // may not need - `name`
      header: `The Psychology Of Self-esteem`,
      fileSource:
        "https://res.cloudinary.com/dtkeyccga/video/upload/v1695379551/kw8utz8affjpot9acemp.mov", // may not need
      prompts: {
        welcome: {
          response: (
            <div>
              Hello, my bright stars 🌟! Welcome to today's lecture on the
              fascinating topic of the Psychology of Self-Esteem. I'm so excited
              to have you all here, and I hope you are too. 🤗
              <br />
              <br />
              Let's take a moment to acknowledge something important: each one
              of you is a unique and valuable individual. Your worth isn't
              determined by your grades, your background, or what others think
              of you. You bring your own special light to the world, and that
              light deserves to shine brightly. ✨
              <br />
              <br />
              You may have faced challenges or setbacks that made you question
              your self-worth, but remember, it's never too late to rebuild and
              strengthen your self-esteem. Today, we're going to explore how our
              minds shape our self-image and how we can empower ourselves to
              become more confident and resilient individuals. 🌱
              <br />
              <br />
              As we delve into the subject, we'll also reflect on how society
              and culture play roles in shaping our self-esteem, and how we can
              transcend those limitations to embrace our true selves.😁
              <br />
              <br />
              So sit back, open your hearts and minds, and let's embark on this
              journey together. I promise, you're in a safe space to learn,
              grow, and, most importantly, to be yourselves. 💖
              <br />
              <br />
              Ready? Let's get started! 🚀
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
            `The Psychology Of Self-esteem`
          )}?`,
          response: `null`,
          spanish: ``,
          tooltip: ``,
          additionalContent: await import(
            "../../markdowns/selfEsteemAddendum.md?raw"
          ),
        },
        inspire: {
          completed: false,
          impact: 100,
          action: `inspire`,
          icon: `⚡`,
          request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
            `The Psychology Of Self-esteem`
          )}?`,
          response: (
            <div>
              <h3>The Life of J.K. Rowling 📚</h3>
              <p>
                Joanne Rowling was born in Yate, England, in 1965. She always
                dreamed of being a writer but faced numerous obstacles along the
                way. After graduating from the University of Exeter, she worked
                in various jobs, including as a researcher and a bilingual
                secretary, but she was not content.
              </p>

              <h4>Early Struggles and Low Points 🌧️</h4>
              <p>
                Rowling moved to Portugal to teach English, where she married
                and had a daughter. The marriage ended in divorce, and Rowling
                returned to the UK as a single mother living on state benefits.
                She was clinically depressed and considered herself a failure.
                This was a low point in her life, where her self-esteem was
                severely tested.
              </p>

              <h4>The Birth of Harry Potter ⚡</h4>
              <p>
                During a train journey, the idea for "Harry Potter" popped into
                her head. Even though she was struggling, Rowling believed in
                her story. She spent years crafting the first book, facing
                numerous rejections from publishers. Her self-esteem was
                bolstered by her belief in her work and her desire to prove
                herself.
              </p>

              <h4>Impact on Society 🌍</h4>
              <p>
                Once published, "Harry Potter" became a cultural phenomenon. It
                didn't just entertain; it encouraged a whole generation to read
                and explore themes of friendship, courage, and the importance of
                choices. The books have been translated into numerous languages,
                and the films have grossed billions worldwide.
              </p>

              <h4>The Ripple Effect 🌊</h4>
              <p>
                Rowling's journey from a struggling single mother to one of the
                most successful authors in history has made her a symbol of
                resilience and the power of self-belief. Her story has inspired
                countless individuals to overcome their challenges, boosting
                their own self-esteem and making meaningful contributions to
                society.
              </p>

              <h4>Final Thoughts 🌟🌈</h4>
              <p>
                So, my bright students, J.K. Rowling's life shows us that no
                matter how difficult your circumstances may be, your self-esteem
                and belief in your own abilities can help you rise above them.
                What do you think you could achieve if you truly believed in
                yourselves?
              </p>
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
            `The Psychology Of Self-esteem`
          )}?`,
          response: (
            <div>
              <h4>Understanding the Psychology of Self-Esteem 🌟</h4>
              <p>
                Of course, my insightful students! Let's take a brief but
                meaningful journey into the psychology of self-esteem, a subject
                that holds immense power in shaping your lives. 🌱
              </p>

              <p>
                Self-esteem is often described as the emotional evaluation of
                your own worth. It's like a mental mirror reflecting how you
                view yourself—your abilities, your limitations, and your value
                as an individual. 💖
              </p>

              <p>
                A healthy level of self-esteem is crucial for your overall
                well-being. When your self-esteem is robust, you're more likely
                to tackle challenges head-on, cultivate meaningful
                relationships, and live a life aligned with your values and
                aspirations. 🌟
              </p>

              <p>
                However, self-esteem isn't a constant state; it's a fluctuating
                continuum influenced by various factors like your upbringing,
                experiences, and even societal expectations. Let's acknowledge
                that we all live in a society that often sets standards based on
                race, gender, and economic status, among other factors. These
                external influences can be barriers, but it's crucial to
                remember that you have the power to define your self-worth. 🌈
              </p>

              <p>
                Building self-esteem is a lifelong process, my dear students. It
                involves self-awareness, self-compassion, and an active
                engagement with the world around you. Even when you face
                setbacks, which are an inevitable part of life, a strong sense
                of self-esteem equips you with the resilience to bounce back. 🌻
              </p>

              <p>
                So, to sum it up: your self-esteem is a cornerstone of your
                mental and emotional health. It impacts how you deal with life's
                ups and downs, how you connect with others, and most
                importantly, how you view yourself. Nurture it, cherish it, and
                let it be the foundation upon which you build the beautiful
                edifice of your life. 🏰💕
              </p>

              <p>
                I hope this essay empowers you to reflect on your own
                self-esteem and take steps to nourish it, for it will be one of
                your most faithful companions on the journey called life. 🌱🌟
              </p>
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
            `The Psychology Of Self-esteem`
          )} with one sentence answers?`,
          response: (
            <div>
              <h4>Frequently Asked Questions on Self-Esteem 🌟</h4>

              <h4>1. What is Self-Esteem and Why is it Important? 💡</h4>
              <p>
                Self-esteem refers to how you view and evaluate yourself,
                essentially your emotional self-assessment. It's vital because
                it influences almost every aspect of your life, from your
                relationships to your ability to face challenges and even your
                mental well-being. A healthy level of self-esteem enables you to
                navigate the ups and downs of life with resilience and poise. 🌈
              </p>

              <h4>2. How Can I Improve My Self-Esteem? 🌱</h4>
              <p>
                Improving your self-esteem is an ongoing process that involves
                self-awareness, self-compassion, and positive self-talk. Start
                by acknowledging your strengths and achievements, no matter how
                small. Set achievable goals, and don't hesitate to seek support
                from friends, family, or professionals. Remember, self-esteem is
                like a muscle; the more you work on it, the stronger it gets. 🌟
              </p>

              <h4>3. Can Low Self-Esteem Affect My Mental Health? 🌧️</h4>
              <p>
                Yes, low self-esteem can significantly impact your mental
                health. It can lead to issues like anxiety, depression, and even
                contribute to more severe mental health conditions. However,
                it's important to note that while low self-esteem may be a
                factor, it is not the sole cause of mental health issues. If
                you're struggling, it's crucial to seek professional help. 💖
              </p>
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
            `The Psychology Of Self-esteem`
          )}?`,
          response: (
            <div>
              <h4>
                Roadmap to Becoming a Professional Psychologist in Self-Esteem
                🌟
              </h4>

              <h6>Step 1: High School Preparation 🎒</h6>
              <p>
                Focus on Psychology, Biology, and Statistics courses. Read
                introductory books on psychology and self-esteem.
              </p>

              <h6>Step 2: Bachelor's Degree 📚</h6>
              <p>
                Major in Psychology and take courses on Developmental
                Psychology, Social Psychology, and Personality Psychology.
              </p>

              <h6>Step 3: Internship & Volunteer Work 💼</h6>
              <p>
                Gain practical experience in clinics, schools, or mental health
                centers. Work under a psychologist specializing in self-esteem
                issues.
              </p>

              <h6>Step 4: Master's Degree 🎓</h6>
              <p>
                Specialize in Clinical or Counseling Psychology. Conduct a
                thesis on self-esteem related topics.
              </p>

              <h6>Step 5: Licensing & Certification 📜</h6>
              <p>
                Complete the required supervised hours and pass the state
                licensing exam.
              </p>

              <h6>Step 6: Doctorate (Optional) 🎓</h6>
              <p>
                Ph.D. or Psy.D. in Psychology with a focus on self-esteem.
                Publish research papers in peer-reviewed journals.
              </p>

              <h6>Step 7: Professional Development 🌱</h6>
              <p>
                Continue education through seminars, workshops, and courses.
                Become a member of psychological associations.
              </p>

              <h6>Step 8: Open Your Practice 🏥</h6>
              <p>
                Specialize in self-esteem issues, build a client base, and make
                a meaningful impact.
              </p>
            </div>
          ),
          spanish: ``,
          tooltip: ``,
        },
        demonstrate: {
          completed: false,
          impact: 100,
          action: `demonstrate`,
          icon: `🎨`,
          request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
            `The Psychology Of Self-esteem`
          )}?`,
          response: (
            <div>
              <p>
                Taking care of your self-esteem is like tending to a garden; it
                requires patience, love, and a little bit of know-how. Let's
                explore some ways you can nurture your self-esteem and help it
                flourish. 🌱
              </p>

              <h4>1️⃣ Positive Affirmations 🌼</h4>
              <p>
                Let's start by looking ourselves in the mirror every morning and
                saying something positive. It could be as simple as, "I am
                worthy," or "I am enough." These affirmations serve as little
                seeds of positivity that, over time, can grow into a beautiful
                garden of self-love.
              </p>

              <h4>2️⃣ Self-Compassion 🌹</h4>
              <p>
                We all make mistakes; it's a part of being human. Instead of
                beating yourself up over them, treat yourself with the same
                kindness you'd offer a friend. Remind yourself that you're still
                learning and growing. It's okay to be imperfect; it makes you
                who you are.
              </p>

              <h4>3️⃣ Set Boundaries 🌳</h4>
              <p>
                Learn to say 'no' when you need to. Protecting your time and
                emotional energy is a sign of self-respect. This might be a bit
                challenging given societal expectations, but your well-being
                should always come first.
              </p>

              <h4>4️⃣ Celebrate Small Wins 🌻</h4>
              <p>
                Did you make it to class on time? Did you understand a difficult
                concept? Celebrate it! These small victories add up and help you
                recognize your own abilities and worth.
              </p>

              <h4>5️⃣ Surround Yourself with Positivity 🌿</h4>
              <p>
                Whether it's supportive friends or uplifting music, keep
                positive influences around you. They act as the sunlight and
                water that your self-esteem needs to grow.
              </p>

              <h4>6️⃣ Be Mindful of Self-Talk 🌲</h4>
              <p>
                Pay attention to how you talk to yourself. Would you talk to a
                friend that way? If not, it's time to change the narrative. Be
                your own biggest cheerleader, not your worst critic.
              </p>

              <h4>7️⃣ Connect with Your Community 🌺</h4>
              <p>
                We can't ignore that society often sends us messages that can
                erode our self-esteem, especially when those messages are
                steeped in systemic issues like race and class. However,
                embracing your roots and drawing strength from your community
                can offer a strong foundation for building your self-esteem.
              </p>

              <p>
                So, my dear students, taking care of your self-esteem is an
                ongoing process. It's like a garden that needs regular
                attention, but the rewards are so worth it. You'll grow into
                stronger, more resilient versions of yourselves. 🌈💖
              </p>

              <p>Ready to nurture your inner garden? 🌱🌟</p>
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
            `The Psychology Of Self-esteem`
          )} in exactly one sentence?`,
          response: (
            <div>
              The psychology of self-esteem revolves around the inner belief in
              one's own worth and abilities, which shapes how we navigate
              challenges, opportunities, and relationships in life. ✨💖
            </div>
          ),
          tooltip: ``,
        },

        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `The Psychology Of Self-esteem`
          )} without any answers?`,
          response: (
            <ChatBlock type={"quiz"}>
              Question 1
              <br />
              <br />
              How does the "looking-glass self" theory relate to self-esteem?
              <br />
              <br />
              Question 2
              <br />
              <br />
              Discuss the impact of social media on adolescent self-esteem.
              <br />
              <br />
              Question 3<br />
              <br />
              Explain how cognitive behavioral therapy (CBT) can be used to
              improve self-esteem.
              <br />
              <br />
              Question 4
              <br />
              <br />
              What role does self-compassion play in the development of healthy
              self-esteem?
              <br />
              <br />
              Question 5
              <br />
              <br />
              Analyze the relationship between self-esteem and academic
              performance.
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
      // Memes: {
      //   documentID: ``,
      //   filler: ``,
      //   new: false,
      //   highValue: false,
      //   underConstruction: false,
      //   completed: false,
      //   rare: true,
      //   needsImprovement: false,

      //   tooltip: ``,
      //   sourceType: `markdown`, // may not need
      //   button: `Memes`, // may not need - `name`
      //   header: `Memes`,
      //   fileSource: await import("../../markdowns/emptyMarkdown.md?raw"), // may not need

      //   prompts: {
      //     welcome: {
      //       response: (

      //         <div>
      //           Hello, my bright students!
      //           <br />
      //           <br />
      //           Today, we're diving into the tasty history of cooking birds for
      //           dinner. It's not just about food; it's about culture, community,
      //           and how we've come together through time. 🍗🌈 From roasting over
      //           ancient campfires to modern-day recipes, cooking birds tells a
      //           story that's rich and full of flavor. 🌍 So grab your curiosity
      //           and let's take a quick but delicious journey back in time! 🕰🍴
      //           Ready? Let's go! 🌟💖
      //         </div>

      //       ),
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //     patreon: {
      //       completed: false,
      //       impact: 1000,
      //       action: `generate`,
      //       icon: `►`, //`✍️`
      //       request: `ms. roxana, can you please show me how to ${ultimateEffeciencyJutsu(
      //         `Memes`
      //       )}?`,
      //       response: `null`,
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //     inspire: {
      //       completed: false,
      //       impact: 100,
      //       action: `inspire`,
      //       icon: `⚡`,
      //       request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
      //         `Memes`
      //       )}?`,
      //       response: <div />,
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //     summarize: {
      //       completed: false,
      //       impact: 100,
      //       action: `summarize`,
      //       icon: `📚`,
      //       request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
      //         `Memes`
      //       )}?`,
      //       response: <div />,
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //     ask: {
      //       completed: false,
      //       impact: 100,
      //       action: `ask`,
      //       icon: `🔮`,
      //       request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
      //         `Memes`
      //       )} with one sentence answers?`,
      //       response: <div />,
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //     guide: {
      //       completed: false,
      //       impact: 100,
      //       action: `guide`,
      //       icon: `🤝`,
      //       request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
      //         `Memes`
      //       )}?`,
      //       response: <div />,
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //     demonstrate: {
      //       completed: false,
      //       impact: 100,
      //       action: `demonstrate`,
      //       icon: `🎨`,
      //       request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
      //         `Memes`
      //       )}?`,
      //       response: <div />,
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //     define: {
      //       completed: false,
      //       impact: 100,
      //       action: `define`, // may not need
      //       icon: `🧿`, // may not need
      //       request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
      //         `Memes`
      //       )} in exactly one sentence?`,
      //       response: <div />,
      //       tooltip: ``,
      //     },

      //     quiz: {
      //       completed: false,
      //       impact: 100,
      //       action: `quiz`,
      //       icon: `🧪`,
      //       request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
      //         `Memes`
      //       )} without any answers?`,
      //       response: <div />,
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //     shop: {
      //       completed: false,
      //       impact: 100,
      //       action: `shop`,
      //       icon: `🛍️`,
      //       request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
      //       response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //   },
      // },
    },
    Custom: {
      documentID: ``,
      // backgroundImgSrc:
      //   "https://res.cloudinary.com/sheilfer/image/upload/v1695548485/Module_Buttons_10_u50oik.gif",
      filler: ``,
      new: false,
      highValue: false,
      underConstruction: false,
      completed: false,
      rare: true,
      needsImprovement: false,
      tooltip: ``,
      sourceType: `video`, // may not need
      button: `Roxana's Lab`, // may not need - `name`
      header: `Roxana's Lab`,
      fileSource:
        "https://res.cloudinary.com/dtkeyccga/video/upload/v1695379551/kw8utz8affjpot9acemp.mov", // may not need
      prompts: {
        welcome: {
          response: <div>hi.. hello 😈</div>,
          spanish: ``,
          tooltip: ``,
        },
        patreon: {
          completed: false,
          impact: 1000,
          action: `generate`,
          icon: `►`, //`✍️`
          request: `Hey Rox! Tell us about your genius plan with the robots! 😂`,
          response: `null`,
          spanish: ``,
          tooltip: ``,
          additionalContent: await import(
            "../../markdowns/selfEsteemAddendum.md?raw"
          ),
        },
        inspire: {
          completed: false,
          impact: 100,
          action: `inspire`,
          icon: `⚡`,
          request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
            `The Psychology Of Self-esteem`
          )}?`,
          response: (
            <div>
              <h3>The Life of J.K. Rowling 📚</h3>
              <p>
                Joanne Rowling was born in Yate, England, in 1965. She always
                dreamed of being a writer but faced numerous obstacles along the
                way. After graduating from the University of Exeter, she worked
                in various jobs, including as a researcher and a bilingual
                secretary, but she was not content.
              </p>

              <h4>Early Struggles and Low Points 🌧️</h4>
              <p>
                Rowling moved to Portugal to teach English, where she married
                and had a daughter. The marriage ended in divorce, and Rowling
                returned to the UK as a single mother living on state benefits.
                She was clinically depressed and considered herself a failure.
                This was a low point in her life, where her self-esteem was
                severely tested.
              </p>

              <h4>The Birth of Harry Potter ⚡</h4>
              <p>
                During a train journey, the idea for "Harry Potter" popped into
                her head. Even though she was struggling, Rowling believed in
                her story. She spent years crafting the first book, facing
                numerous rejections from publishers. Her self-esteem was
                bolstered by her belief in her work and her desire to prove
                herself.
              </p>

              <h4>Impact on Society 🌍</h4>
              <p>
                Once published, "Harry Potter" became a cultural phenomenon. It
                didn't just entertain; it encouraged a whole generation to read
                and explore themes of friendship, courage, and the importance of
                choices. The books have been translated into numerous languages,
                and the films have grossed billions worldwide.
              </p>

              <h4>The Ripple Effect 🌊</h4>
              <p>
                Rowling's journey from a struggling single mother to one of the
                most successful authors in history has made her a symbol of
                resilience and the power of self-belief. Her story has inspired
                countless individuals to overcome their challenges, boosting
                their own self-esteem and making meaningful contributions to
                society.
              </p>

              <h4>Final Thoughts 🌟🌈</h4>
              <p>
                So, my bright students, J.K. Rowling's life shows us that no
                matter how difficult your circumstances may be, your self-esteem
                and belief in your own abilities can help you rise above them.
                What do you think you could achieve if you truly believed in
                yourselves?
              </p>
            </div>
          ),
          spanish:(
            <div>
            <h3>La Vida de J.K. Rowling 📚</h3>
            <p>
            Joanne Rowling nació en Yate, Inglaterra, en 1965. Siempre
            soñó con ser escritora, pero enfrentó numerosos obstáculos en el
            camino. Después de graduarse de la Universidad de Exeter, trabajó
            en varios empleos, incluyendo como investigadora y secretaria bilingüe, pero no estaba satisfecha.
            </p>
            
            css
            Copy code
                      <h4>Luchas Tempranas y Momentos Bajos 🌧️</h4>
                      <p>
                        Rowling se mudó a Portugal para enseñar inglés, donde se casó
                        y tuvo una hija. El matrimonio terminó en divorcio, y Rowling
                        regresó al Reino Unido como madre soltera viviendo de beneficios del estado.
                        Estaba clínicamente deprimida y se consideraba un fracaso.
                        Este fue un punto bajo en su vida, donde su autoestima fue
                        severamente puesta a prueba.
                      </p>
            
                      <h4>El Nacimiento de Harry Potter ⚡</h4>
                      <p>
                        Durante un viaje en tren, la idea de "Harry Potter" apareció
                        en su cabeza. A pesar de que estaba luchando, Rowling creía en
                        su historia. Pasó años escribiendo el primer libro, enfrentando
                        numerosos rechazos de editoriales. Su autoestima fue
                        fortalecida por su creencia en su trabajo y su deseo de demostrarse a sí misma.
                      </p>
            
                      <h4>Impacto en la Sociedad 🌍</h4>
                      <p>
                        Una vez publicado, "Harry Potter" se convirtió en un fenómeno cultural. No solo entretuvo; animó a toda una generación a leer
                        y explorar temas de amistad, valentía y la importancia de
                        las decisiones. Los libros han sido traducidos a numerosos idiomas,
                        y las películas han recaudado miles de millones en todo el mundo.
                      </p>
            
                      <h4>El Efecto Dominó 🌊</h4>
                      <p>
                        El viaje de Rowling de ser una madre soltera luchadora a una de las
                        autoras más exitosas de la historia la ha convertido en un símbolo de
                        la resiliencia y el poder de la autoconfianza. Su historia ha inspirado
                        a innumerables individuos a superar sus desafíos, fortaleciendo
                        su propia autoestima y haciendo contribuciones significativas a
                        la sociedad.
                      </p>
            
                      <h4>Pensamientos Finales 🌟🌈</h4>
                      <p>
                        Entonces, mis brillantes estudiantes, la vida de J.K. Rowling nos muestra que
                        sin importar cuán difíciles sean sus circunstancias, su autoestima
                        y creencia en sus propias habilidades pueden ayudarlo a superarlas.
                        ¿Qué crees que podrías lograr si realmente creyeras en ti mismos?
                      </p>
                    </div>
                  ),
          tooltip: ``,
        },
        summarize: {
          completed: false,
          impact: 100,
          action: `summarize`,
          icon: `📚`,
          request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
            `The Psychology Of Self-esteem`
          )}?`,
          response: (
            <div>
              <h4>Understanding the Psychology of Self-Esteem 🌟</h4>
              <p>
                Of course, my insightful students! Let's take a brief but
                meaningful journey into the psychology of self-esteem, a subject
                that holds immense power in shaping your lives. 🌱
              </p>

              <p>
                Self-esteem is often described as the emotional evaluation of
                your own worth. It's like a mental mirror reflecting how you
                view yourself—your abilities, your limitations, and your value
                as an individual. 💖
              </p>

              <p>
                A healthy level of self-esteem is crucial for your overall
                well-being. When your self-esteem is robust, you're more likely
                to tackle challenges head-on, cultivate meaningful
                relationships, and live a life aligned with your values and
                aspirations. 🌟
              </p>

              <p>
                However, self-esteem isn't a constant state; it's a fluctuating
                continuum influenced by various factors like your upbringing,
                experiences, and even societal expectations. Let's acknowledge
                that we all live in a society that often sets standards based on
                race, gender, and economic status, among other factors. These
                external influences can be barriers, but it's crucial to
                remember that you have the power to define your self-worth. 🌈
              </p>

              <p>
                Building self-esteem is a lifelong process, my dear students. It
                involves self-awareness, self-compassion, and an active
                engagement with the world around you. Even when you face
                setbacks, which are an inevitable part of life, a strong sense
                of self-esteem equips you with the resilience to bounce back. 🌻
              </p>

              <p>
                So, to sum it up: your self-esteem is a cornerstone of your
                mental and emotional health. It impacts how you deal with life's
                ups and downs, how you connect with others, and most
                importantly, how you view yourself. Nurture it, cherish it, and
                let it be the foundation upon which you build the beautiful
                edifice of your life. 🏰💕
              </p>

              <p>
                I hope this essay empowers you to reflect on your own
                self-esteem and take steps to nourish it, for it will be one of
                your most faithful companions on the journey called life. 🌱🌟
              </p>
            </div>
          ),
          spanish:(
            <div>
            <h4>Comprendiendo la Psicología de la Autoestima 🌟</h4>
            <p>
            ¡Por supuesto, mis estudiantes perspicaces! Vamos a emprender un breve pero
            significativo viaje hacia la psicología de la autoestima, un tema
            que tiene un inmenso poder en la formación de sus vidas. 🌱
            </p>
            
            less
            Copy code
                      <p>
                        La autoestima se describe a menudo como la evaluación emocional de
                        tu propio valor. Es como un espejo mental que refleja cómo te
                        ves a ti mismo: tus habilidades, tus limitaciones y tu valor
                        como individuo. 💖
                      </p>
            
                      <p>
                        Un nivel saludable de autoestima es crucial para su bienestar general. Cuando tu autoestima es sólida, es más probable
                        que enfrentes desafíos de manera directa, cultives relaciones significativas
                        y vivas una vida alineada con tus valores y aspiraciones. 🌟
                      </p>
            
                      <p>
                        Sin embargo, la autoestima no es un estado constante; es un continuo fluctuante
                        influenciado por diversos factores como tu crianza,
                        experiencias e incluso expectativas sociales. Reconozcamos
                        que todos vivimos en una sociedad que a menudo establece estándares basados en
                        raza, género y situación económica, entre otros factores. Estas
                        influencias externas pueden ser barreras, pero es crucial
                        recordar que tienes el poder de definir tu autovaloración. 🌈
                      </p>
            
                      <p>
                        Construir la autoestima es un proceso de por vida, mis queridos estudiantes. Implica la autoconciencia, la autocompasión y una participación activa
                        en el mundo que te rodea. Incluso cuando enfrentas
                        contratiempos, que son una parte inevitable de la vida, un fuerte sentido
                        de autoestima te proporciona la resiliencia para recuperarte. 🌻
                      </p>
            
                      <p>
                        Entonces, para resumir: tu autoestima es un pilar de tu
                        salud mental y emocional. Impacta en cómo enfrentas los altibajos de la vida,
                        cómo te relacionas con los demás y, lo más
                        importante, cómo te ves a ti mismo. Cuídala, apreciala y
                        deja que sea el fundamento sobre el cual construyas el hermoso
                        edificio de tu vida. 🏰💕
                      </p>
            
                      <p>
                        Espero que este ensayo te empodere para reflexionar sobre tu propia
                        autoestima y tomar medidas para nutrirla, ya que será uno de
                        tus compañeros más fieles en el viaje llamado vida. 🌱🌟
                      </p>
                    </div>
                  ),
          tooltip: ``,
        },
        ask: {
          completed: false,
          impact: 100,
          action: `ask`,
          icon: `🔮`,
          request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
            `The Psychology Of Self-esteem`
          )} with one sentence answers?`,
          response: (
            <div>
              <h4>Frequently Asked Questions on Self-Esteem 🌟</h4>

              <h4>1. What is Self-Esteem and Why is it Important? 💡</h4>
              <p>
                Self-esteem refers to how you view and evaluate yourself,
                essentially your emotional self-assessment. It's vital because
                it influences almost every aspect of your life, from your
                relationships to your ability to face challenges and even your
                mental well-being. A healthy level of self-esteem enables you to
                navigate the ups and downs of life with resilience and poise. 🌈
              </p>

              <h4>2. How Can I Improve My Self-Esteem? 🌱</h4>
              <p>
                Improving your self-esteem is an ongoing process that involves
                self-awareness, self-compassion, and positive self-talk. Start
                by acknowledging your strengths and achievements, no matter how
                small. Set achievable goals, and don't hesitate to seek support
                from friends, family, or professionals. Remember, self-esteem is
                like a muscle; the more you work on it, the stronger it gets. 🌟
              </p>

              <h4>3. Can Low Self-Esteem Affect My Mental Health? 🌧️</h4>
              <p>
                Yes, low self-esteem can significantly impact your mental
                health. It can lead to issues like anxiety, depression, and even
                contribute to more severe mental health conditions. However,
                it's important to note that while low self-esteem may be a
                factor, it is not the sole cause of mental health issues. If
                you're struggling, it's crucial to seek professional help. 💖
              </p>
            </div>
          ),
          spanish: (
            <div>
            <h4>Preguntas frecuentes sobre la autoestima 🌟</h4>
            
            css
            Copy code
                      <h4>1. ¿Qué es la autoestima y por qué es importante? 💡</h4>
                      <p>
                        La autoestima se refiere a cómo te ves y te evalúas a ti mismo, esencialmente tu autoevaluación emocional. Es vital porque influye en casi todos los aspectos de tu vida, desde tus relaciones hasta tu capacidad para enfrentar desafíos e incluso tu bienestar mental. Un nivel saludable de autoestima te permite navegar por las altas y bajas de la vida con resiliencia y aplomo. 🌈
                      </p>
            
                      <h4>2. ¿Cómo puedo mejorar mi autoestima? 🌱</h4>
                      <p>
                        Mejorar tu autoestima es un proceso continuo que implica la autoconciencia, la autocompasión y el diálogo interno positivo. Comienza por reconocer tus fortalezas y logros, sin importar cuán pequeños sean. Establece metas alcanzables y no dudes en buscar apoyo de amigos, familiares o profesionales. Recuerda, la autoestima es como un músculo; cuanto más trabajas en ella, más fuerte se vuelve. 🌟
                      </p>
            
                      <h4>3. ¿Puede la baja autoestima afectar mi salud mental? 🌧️</h4>
                      <p>
                        Sí, la baja autoestima puede tener un impacto significativo en tu salud mental. Puede llevar a problemas como la ansiedad, la depresión e incluso contribuir a condiciones de salud mental más graves. Sin embargo, es importante tener en cuenta que si bien la baja autoestima puede ser un factor, no es la única causa de problemas de salud mental. Si estás luchando, es crucial buscar ayuda profesional. 💖
                      </p>
                    </div>
                  ),
          tooltip: ``,
        },
        guide: {
          completed: false,
          impact: 100,
          action: `guide`,
          icon: `🤝`,
          request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
            `The Psychology Of Self-esteem`
          )}?`,
          response: (
            <div>
              <h4>
                Roadmap to Becoming a Professional Psychologist in Self-Esteem
                🌟
              </h4>

              <h6>Step 1: High School Preparation 🎒</h6>
              <p>
                Focus on Psychology, Biology, and Statistics courses. Read
                introductory books on psychology and self-esteem.
              </p>

              <h6>Step 2: Bachelor's Degree 📚</h6>
              <p>
                Major in Psychology and take courses on Developmental
                Psychology, Social Psychology, and Personality Psychology.
              </p>

              <h6>Step 3: Internship & Volunteer Work 💼</h6>
              <p>
                Gain practical experience in clinics, schools, or mental health
                centers. Work under a psychologist specializing in self-esteem
                issues.
              </p>

              <h6>Step 4: Master's Degree 🎓</h6>
              <p>
                Specialize in Clinical or Counseling Psychology. Conduct a
                thesis on self-esteem related topics.
              </p>

              <h6>Step 5: Licensing & Certification 📜</h6>
              <p>
                Complete the required supervised hours and pass the state
                licensing exam.
              </p>

              <h6>Step 6: Doctorate (Optional) 🎓</h6>
              <p>
                Ph.D. or Psy.D. in Psychology with a focus on self-esteem.
                Publish research papers in peer-reviewed journals.
              </p>

              <h6>Step 7: Professional Development 🌱</h6>
              <p>
                Continue education through seminars, workshops, and courses.
                Become a member of psychological associations.
              </p>

              <h6>Step 8: Open Your Practice 🏥</h6>
              <p>
                Specialize in self-esteem issues, build a client base, and make
                a meaningful impact.
              </p>
            </div>
          ),
          spanish: (
            <div>
            <h4>
            Hoja de ruta para convertirse en un psicólogo profesional en la autoestima 🌟
            </h4>
            
            less
            Copy code
                      <h6>Paso 1: Preparación en la Escuela Secundaria 🎒</h6>
                      <p>
                        Enfóquese en cursos de Psicología, Biología y Estadística. Lea libros introductorios sobre psicología y autoestima.
                      </p>
            
                      <h6>Paso 2: Licenciatura 📚</h6>
                      <p>
                        Especialícese en Psicología y tome cursos de Psicología del Desarrollo, Psicología Social y Psicología de la Personalidad.
                      </p>
            
                      <h6>Paso 3: Prácticas y Trabajo Voluntario 💼</h6>
                      <p>
                        Obtenga experiencia práctica en clínicas, escuelas o centros de salud mental. Trabaje bajo la supervisión de un psicólogo especializado en problemas de autoestima.
                      </p>
            
                      <h6>Paso 4: Maestría 🎓</h6>
                      <p>
                        Especialícese en Psicología Clínica o Psicología de Consejería. Realice una tesis sobre temas relacionados con la autoestima.
                      </p>
            
                      <h6>Paso 5: Licenciatura y Certificación 📜</h6>
                      <p>
                        Complete las horas de supervisión requeridas y apruebe el examen de licencia estatal.
                      </p>
            
                      <h6>Paso 6: Doctorado (Opcional) 🎓</h6>
                      <p>
                        Ph.D. o Psy.D. en Psicología con enfoque en la autoestima. Publique investigaciones en revistas revisadas por expertos.
                      </p>
            
                      <h6>Paso 7: Desarrollo Profesional 🌱</h6>
                      <p>
                        Continúe su educación a través de seminarios, talleres y cursos. Conviértase en miembro de asociaciones psicológicas.
                      </p>
            
                      <h6>Paso 8: Abra su Consultorio 🏥</h6>
                      <p>
                        Especialícese en problemas de autoestima, construya una base de clientes y tenga un impacto significativo.
                      </p>
                    </div>
                  ),
          tooltip: ``,
        },
        demonstrate: {
          completed: false,
          impact: 100,
          action: `demonstrate`,
          icon: `🎨`,
          request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
            `The Psychology Of Self-esteem`
          )}?`,
          response: (
            <div>
              <p>
                Taking care of your self-esteem is like tending to a garden; it
                requires patience, love, and a little bit of know-how. Let's
                explore some ways you can nurture your self-esteem and help it
                flourish. 🌱
              </p>

              <h4>1️⃣ Positive Affirmations 🌼</h4>
              <p>
                Let's start by looking ourselves in the mirror every morning and
                saying something positive. It could be as simple as, "I am
                worthy," or "I am enough." These affirmations serve as little
                seeds of positivity that, over time, can grow into a beautiful
                garden of self-love.
              </p>

              <h4>2️⃣ Self-Compassion 🌹</h4>
              <p>
                We all make mistakes; it's a part of being human. Instead of
                beating yourself up over them, treat yourself with the same
                kindness you'd offer a friend. Remind yourself that you're still
                learning and growing. It's okay to be imperfect; it makes you
                who you are.
              </p>

              <h4>3️⃣ Set Boundaries 🌳</h4>
              <p>
                Learn to say 'no' when you need to. Protecting your time and
                emotional energy is a sign of self-respect. This might be a bit
                challenging given societal expectations, but your well-being
                should always come first.
              </p>

              <h4>4️⃣ Celebrate Small Wins 🌻</h4>
              <p>
                Did you make it to class on time? Did you understand a difficult
                concept? Celebrate it! These small victories add up and help you
                recognize your own abilities and worth.
              </p>

              <h4>5️⃣ Surround Yourself with Positivity 🌿</h4>
              <p>
                Whether it's supportive friends or uplifting music, keep
                positive influences around you. They act as the sunlight and
                water that your self-esteem needs to grow.
              </p>

              <h4>6️⃣ Be Mindful of Self-Talk 🌲</h4>
              <p>
                Pay attention to how you talk to yourself. Would you talk to a
                friend that way? If not, it's time to change the narrative. Be
                your own biggest cheerleader, not your worst critic.
              </p>

              <h4>7️⃣ Connect with Your Community 🌺</h4>
              <p>
                We can't ignore that society often sends us messages that can
                erode our self-esteem, especially when those messages are
                steeped in systemic issues like race and class. However,
                embracing your roots and drawing strength from your community
                can offer a strong foundation for building your self-esteem.
              </p>

              <p>
                So, my dear students, taking care of your self-esteem is an
                ongoing process. It's like a garden that needs regular
                attention, but the rewards are so worth it. You'll grow into
                stronger, more resilient versions of yourselves. 🌈💖
              </p>

              <p>Ready to nurture your inner garden? 🌱🌟</p>
            </div>
          ),
          spanish: (
            <div>
            <p>
            Cuidar tu autoestima es como cuidar un jardín; requiere paciencia, amor y un poco de conocimiento. Vamos a explorar algunas formas en las que puedes nutrir tu autoestima y ayudarla a florecer. 🌱
            </p>
            
            css
            Copy code
                      <h4>1️⃣ Afirmaciones Positivas 🌼</h4>
                      <p>
                        Empecemos por mirarnos en el espejo cada mañana y decir algo positivo. Puede ser tan simple como "Soy valioso" o "Soy suficiente". Estas afirmaciones funcionan como pequeñas semillas de positividad que, con el tiempo, pueden crecer en un hermoso jardín de amor propio.
                      </p>
            
                      <h4>2️⃣ Autocompasión 🌹</h4>
                      <p>
                        Todos cometemos errores; es parte de ser humano. En lugar de castigarte por ellos, trátate con la misma amabilidad que ofrecerías a un amigo. Recuerda que todavía estás aprendiendo y creciendo. Está bien ser imperfecto; eso te hace quien eres.
                      </p>
            
                      <h4>3️⃣ Establece Límites 🌳</h4>
                      <p>
                        Aprende a decir 'no' cuando sea necesario. Proteger tu tiempo y energía emocional es un signo de autorespeto. Esto puede ser un poco desafiante dado las expectativas sociales, pero tu bienestar siempre debe ser lo primero.
                      </p>
            
                      <h4>4️⃣ Celebra Pequeños Logros 🌻</h4>
                      <p>
                        ¿Llegaste a clase a tiempo? ¿Entendiste un concepto difícil? ¡Celebra! Estas pequeñas victorias se suman y te ayudan a reconocer tus propias habilidades y valía.
                      </p>
            
                      <h4>5️⃣ Rodéate de Positividad 🌿</h4>
                      <p>
                        Ya sea amigos de apoyo o música inspiradora, mantén influencias positivas a tu alrededor. Actúan como la luz del sol y el agua que tu autoestima necesita para crecer.
                      </p>
            
                      <h4>6️⃣ Sé Consciente de tu Diálogo Interno 🌲</h4>
                      <p>
                        Presta atención a cómo te hablas a ti mismo. ¿Hablarías así a un amigo? Si no, es hora de cambiar la narrativa. Sé tu propio mayor animador, no tu peor crítico.
                      </p>
            
                      <h4>7️⃣ Conéctate con tu Comunidad 🌺</h4>
                      <p>
                        No podemos ignorar que la sociedad a menudo nos envía mensajes que pueden erosionar nuestra autoestima, especialmente cuando esos mensajes están relacionados con problemas sistémicos como la raza y la clase social. Sin embargo, abrazar tus raíces y obtener fuerza de tu comunidad puede ofrecer una sólida base para construir tu autoestima.
                      </p>
            
                      <p>
                        Entonces, queridos estudiantes, cuidar de tu autoestima es un proceso continuo. Es como un jardín que necesita atención regular, pero las recompensas valen la pena. Te convertirás en versiones más fuertes y resistentes de ti mismos. 🌈💖
                      </p>
            
                      <p>¿Listos para cuidar de vuestro jardín interior? 🌱🌟</p>
                    </div>
                  ),
          tooltip: ``,
        },
        define: {
          completed: false,
          impact: 100,
          action: `define`, // may not need
          icon: `🧿`, // may not need
          request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
            `The Psychology Of Self-esteem`
          )} in exactly one sentence?`,
          response: (
            <div>
              The psychology of self-esteem revolves around the inner belief in
              one's own worth and abilities, which shapes how we navigate
              challenges, opportunities, and relationships in life. ✨💖
            </div>
          ),
          spanish: (
            <div>
            La psicología de la autoestima gira en torno a la creencia interna en el propio valor y habilidades, lo cual moldea cómo navegamos los desafíos, las oportunidades y las relaciones en la vida. ✨💖
            </div>
            ),
          tooltip: ``,
        },

        quiz: {
          completed: false,
          impact: 100,
          action: `quiz`,
          icon: `🧪`,
          request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
            `The Psychology Of Self-esteem`
          )} without any answers?`,
          response: (
            <ChatBlock type={"quiz"}>
              Question 1
              <br />
              <br />
              How does the "looking-glass self" theory relate to self-esteem?
              <br />
              <br />
              Question 2
              <br />
              <br />
              Discuss the impact of social media on adolescent self-esteem.
              <br />
              <br />
              Question 3<br />
              <br />
              Explain how cognitive behavioral therapy (CBT) can be used to
              improve self-esteem.
              <br />
              <br />
              Question 4
              <br />
              <br />
              What role does self-compassion play in the development of healthy
              self-esteem?
              <br />
              <br />
              Question 5
              <br />
              <br />
              Analyze the relationship between self-esteem and academic
              performance.
            </ChatBlock>
          ),
          spanish: (
            <ChatBlock type={"quiz"}>
            Pregunta 1
            <br />
            <br />
            ¿Cómo se relaciona la teoría del "espejo social" con la autoestima?
            <br />
            <br />
            Pregunta 2
            <br />
            <br />
            Discute el impacto de las redes sociales en la autoestima de los adolescentes.
            <br />
            <br />
            Pregunta 3<br />
            <br />
            Explica cómo la terapia cognitivo-conductual (TCC) puede utilizarse para mejorar la autoestima.
            <br />
            <br />
            Pregunta 4
            <br />
            <br />
            ¿Qué papel juega la autocompasión en el desarrollo de una autoestima saludable?
            <br />
            <br />
            Pregunta 5
            <br />
            <br />
            Analiza la relación entre la autoestima y el rendimiento académico.
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
          spanish:"Este horario de compra aún no está siendo utilizado. Por favor, contáctame en Patreon para calificar.",
          tooltip: ``,
        },
      },
      // Memes: {
      //   documentID: ``,
      //   filler: ``,
      //   new: false,
      //   highValue: false,
      //   underConstruction: false,
      //   completed: false,
      //   rare: true,
      //   needsImprovement: false,

      //   tooltip: ``,
      //   sourceType: `markdown`, // may not need
      //   button: `Memes`, // may not need - `name`
      //   header: `Memes`,
      //   fileSource: await import("../../markdowns/emptyMarkdown.md?raw"), // may not need

      //   prompts: {
      //     welcome: {
      //       response: (

      //         <div>
      //           Hello, my bright students!
      //           <br />
      //           <br />
      //           Today, we're diving into the tasty history of cooking birds for
      //           dinner. It's not just about food; it's about culture, community,
      //           and how we've come together through time. 🍗🌈 From roasting over
      //           ancient campfires to modern-day recipes, cooking birds tells a
      //           story that's rich and full of flavor. 🌍 So grab your curiosity
      //           and let's take a quick but delicious journey back in time! 🕰🍴
      //           Ready? Let's go! 🌟💖
      //         </div>

      //       ),
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //     patreon: {
      //       completed: false,
      //       impact: 1000,
      //       action: `generate`,
      //       icon: `►`, //`✍️`
      //       request: `ms. roxana, can you please show me how to ${ultimateEffeciencyJutsu(
      //         `Memes`
      //       )}?`,
      //       response: `null`,
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //     inspire: {
      //       completed: false,
      //       impact: 100,
      //       action: `inspire`,
      //       icon: `⚡`,
      //       request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
      //         `Memes`
      //       )}?`,
      //       response: <div />,
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //     summarize: {
      //       completed: false,
      //       impact: 100,
      //       action: `summarize`,
      //       icon: `📚`,
      //       request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
      //         `Memes`
      //       )}?`,
      //       response: <div />,
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //     ask: {
      //       completed: false,
      //       impact: 100,
      //       action: `ask`,
      //       icon: `🔮`,
      //       request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
      //         `Memes`
      //       )} with one sentence answers?`,
      //       response: <div />,
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //     guide: {
      //       completed: false,
      //       impact: 100,
      //       action: `guide`,
      //       icon: `🤝`,
      //       request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
      //         `Memes`
      //       )}?`,
      //       response: <div />,
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //     demonstrate: {
      //       completed: false,
      //       impact: 100,
      //       action: `demonstrate`,
      //       icon: `🎨`,
      //       request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
      //         `Memes`
      //       )}?`,
      //       response: <div />,
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //     define: {
      //       completed: false,
      //       impact: 100,
      //       action: `define`, // may not need
      //       icon: `🧿`, // may not need
      //       request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
      //         `Memes`
      //       )} in exactly one sentence?`,
      //       response: <div />,
      //       tooltip: ``,
      //     },

      //     quiz: {
      //       completed: false,
      //       impact: 100,
      //       action: `quiz`,
      //       icon: `🧪`,
      //       request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
      //         `Memes`
      //       )} without any answers?`,
      //       response: <div />,
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //     shop: {
      //       completed: false,
      //       impact: 100,
      //       action: `shop`,
      //       icon: `🛍️`,
      //       request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
      //       response: `This shopping slot is not being utilized yet. Please contact me in Patreon to qualify.`,
      //       spanish: ``,
      //       tooltip: ``,
      //     },
      //   },
      // },
    },
  },
};
