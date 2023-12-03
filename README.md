# The Original AI Tutor & Mentor In Your Pocket

## Contact

- Please join this Discord community for more casual & information conversation about this app: [Discord](https://discord.gg/9kguaaDRmt)

# 1. Welcome To RO.B.E

Robots Building Education is a research project centered
around building universal basic income technology.

In 2023, it takes the form of a mentor generating scholarships through "work" generated by subscribers and AI.

Please considering supporting my work here, where I offer personal services.
https://www.patreon.com/RobotsBuildingEducation

# 2. Code Quality

If you have joined the Patreon, you know the "Publish, Refine, Release" strategy we use here. Eventually, we want refinements to take us to a level where the code is so readable and intuitive that people on social media can casually understand it with no experience.

So this means improving the quality of comments, variable names and data flow over time. The point isn't to write epicly awesome software - the point is to be teachable and inspiring for newcomes. The code should be good enough that it explains itself in a simple screenshot or carousel of screenshots

# 3. Forking RO.B.E

#### Firestore 🔥

You will need to set up a firebase project. A tutorial [can be found on Patreon](https://www.patreon.com/posts/93082226). Thi project includes the following services:

1. Authentication
2. Firestore
3. Hosting
4. Functions
5. Analytics

### API Keys 🔐

1. You'll need to create an account with OpenAI's API. The key definition can be found as `OPENAI_API_KEY` in a `.env` file that you have to create under `/app/functions`

2. You'll need to create an account with Firebase's API. The definition can be found as `VITE_FIREBASE_API_KEY` under `/app`. The `VITE_` is specific to the application's Vite build and requires the `VITE_` header.

[Example](https://github.com/RobotsBuildingEducation/RobotsBuildingEducation/blob/refactor-sessions/app/src/database/firebaseResources.tsx#L12-L22)

3. There is a `VITE_PATREON_PASSCODE` definition in the codebase. They're mostly feature passcodes that get stored to local storage. Use whatever passcode you want or remove it.
