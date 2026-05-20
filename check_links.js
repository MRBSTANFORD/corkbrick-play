const urls = [
"https://dl.acm.org/doi/10.1145/2181037.2181040",
"https://en.wikipedia.org/wiki/Reality_Is_Broken",
"https://hbr.org/2000/01/serious-play",
"https://mitpress.mit.edu/9780262133838/city-of-bits/",
"https://jnd.org/emotional_design_why_we_love_or_hate_everyday_things/",
"https://behaviormodel.org/",
"https://en.wikipedia.org/wiki/How_Buildings_Learn",
"https://ellenmacarthurfoundation.org/topics/circular-economy-introduction/overview",
"https://en.wikipedia.org/wiki/Digital_twin",
"https://cba.mit.edu/docs/papers/12.09.FA.pdf",
"https://en.wikipedia.org/wiki/Mind_in_Society",
"https://en.wikipedia.org/wiki/Bowling_Alone",
"https://en.wikipedia.org/wiki/The_Cathedral_and_the_Bazaar",
"https://mitpress.mit.edu/9780262028905/open-source-architecture/"
];

async function check() {
  for (const url of urls) {
    try {
      const res = await fetch(url, { method: "HEAD", redirect: "follow" });
      console.log(url, res.status);
    } catch(e) {
      console.log(url, "ERROR", e.message);
    }
  }
}
check();
