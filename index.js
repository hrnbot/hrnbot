const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar = Array(progressBarCapacity)
        .fill('▁')
        .map((value, index) => index < passedProgressBarIndex ? '█' : value)
        .join('')
    return `{ ${progressBar} }`
}

const readme = `\
### Hi there 👋
### Hi there <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px">,  Hiren Namera here
<h2>My public Repos</h2>

<p align="center">
  Visitor count<br>
  <img src="https://profile-counter.glitch.me/jatin2003/count.svg" />
</p>


<table>
  <thead align="center">
    <tr >
      <td><b>🎁 Projects</b></td>
      <td><b>⭐ Stars</b></td>
      <td><b>📚 Forks</b></td>
    </tr>
  </thead>
  <tbody>
    <tr>
	    <td><a href="https://github.com/hrnbot/Basic-Mathematics-for-Machine-Learning"><b>Basic-Mathematics-for-Machine-Learning</b></a></td>
      <td><img alt="Stars" src="https://img.shields.io/github/stars/hrnbot/Basic-Mathematics-for-Machine-Learning?style=flat-square&labelColor=343b41"/></td>
      <td><img alt="Forks" src="https://img.shields.io/github/forks/hrnbot/Basic-Mathematics-for-Machine-Learning?style=flat-square&labelColor=343b41"/></td>
         </tr>
	  </tr>
  </tbody>
</table>
<p><a href="https://github.com/hrnbot" target="_blank"><img src="https://github.com/hrnbot/hrnbot/workflows/Progress%20Bar%20CI/badge.svg"/></a>
<h2>Where to find me</h2>
<p><a href="https://github.com/hrnbot" target="_blank"><img alt="Github" src="https://img.shields.io/badge/GitHub-%2312100E.svg?&style=for-the-badge&logo=Github&logoColor=white" /></a> <a href="https://www.linkedin.com/in/hiren-namera-83520ab4" target="_blank"><img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" /></a> <a href="https://www.instagram.com/the_artificial_intel_developer/" target="_blank"><img alt="Instagram" src="https://img.shields.io/badge/instagram-%23E4405F.svg?&style=for-the-badge&logo=instagram&logoColor=white" /></a>
</p>

<h1>GitHub Stats</h1>
<p><img src="https://github-readme-stats.vercel.app/api?username=hrnbot&amp;show_icons=true" alt="GitHub Stats"></p>
<p><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=hrnbot&layout=compact;show_icons=true"></p>


⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
---
⏰ Updated on ${new Date().toUTCString()}
![Progress Bar CI](https://github.com/hrnbot/hrnbot/workflows/Progress%20Bar%20CI/badge.svg)\
`

console.log(readme)