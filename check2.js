const fs = require('fs');
const links = fs.readFileSync('check2.txt', 'utf8').split('\n').filter(Boolean).map(l => l.split('href="')[1].replace('"', ''));

async function check() {
  let anyError = false;
  for (const url of links) {
    try {
      const res = await fetch(url, { method: "HEAD", redirect: "follow" });
      console.log(url, res.status);
      if (res.status >= 400 && res.status !== 403) anyError = true; 
    } catch(e) {
      console.log(url, "ERROR", e.message);
      anyError = true;
    }
  }
  if (anyError) process.exit(1);
}
check();
