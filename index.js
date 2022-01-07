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
<h1>Hi there <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px">,  Hiren Namera here</h1>
<details> 
<summary>
Who am I.
<p><img src="https://komarev.com/ghpvc/?username=hrnbot&label=Profile%20views&color=0e75b6&style=flat" alt="hrnbot" /> </p>
</summary>
My Skills are improving day by day. Mathematics and  Physics are the skills in which I am proud d of most. Programming is also one of the best skills to solve problems in the IT world.  I never knew when I become proficient in writing maybe it is the Result of my Reading habit which I developed after my college life. I am an Introvert who loves to meet new peoples and learn new skills from them. I am waiting for a new education policy to be adapted So, I can complete my Ph.D. in Applied Mathematics and Artificial Intelligence.

I am working in the field of AI/ML and AR. I am a Detail-oriented engineer, with get-it-done, on-time, and best quality products. I had proven my skills in AI by modeling some state of art architectures and algorithms and proved skills of AR by writing multi-purpose AR modules that work seamlessly on Js, Python, C#, CPP, PHP (More to Come).

As a senior developer in AI/ML/DL/computer vision and NLP learned how to train and test model architectures in Pytorch, Keras, Tensorflow, Theano, Deepstream, Tensorflow lite, TensorRT, Transformer etc... How to perform transfer learning for quick training. How to Combine multiple models and how to change architectures of underlying layers, build model architecture from scratch, etc... 

As a team leader of the AI and AR team learned to manage a team and take most out of team members. Train them to accept and complete future challenges and helping them to improve those skills in which they are lacking. Also learned how to use agile methodology to complete any project while keeping the team motivated and client satisfied. I was responsible for understanding client requirements and business prototype and help them to solve their problem in a modern way including enhancement of user experience, financial growth, increase in production capacity or productivity of employees, reach out to more customers, etc...

I was also responsible to deploy AI, AR Technology to Mobile, Cloud, and web. So, I am capable of performing basic DevOps duties of CI and CD pipeline building, Rest-API handling, Deployment of the model, and balancing load using tech stack of Git/SVN, Jenkins, Ansible, Docker, Kubernetes/Docker Swarm in AWS, Azure and Google Cloud.

For more information, guidance or help feel free to Connect. Let's reduce humun effort with Power of AI and AR and Build a Sci-fi World. Peace...
</p></details>
<div>
<h1><b>Skills</b></h1>
<h2>🤖 Artificial Intelligence </h2>
<img src="https://img.shields.io/badge/TensorFlow-3776AB?style=for-the-badge&logo=tensorflow&logoColor=white" /> 	
<img src="https://img.shields.io/badge/PyTorch-3776AB?style=for-the-badge&logo=pytorch&logoColor=white" /> 
<img src="https://img.shields.io/badge/Scikit-Learn-3776AB?style=for-the-badge&logo=scikit-learn&logoColor=white" /> 
<img src="https://img.shields.io/badge/Opencv-3776AB?style=for-the-badge&logo=opencv&logoColor=white" /> 
<img src="https://img.shields.io/badge/NLTK-3776AB?style=for-the-badge&logo=nltk&logoColor=white" /> 
<img src="https://img.shields.io/badge/Keras-3776AB?style=for-the-badge&logo=keras&logoColor=white" /> 
<img src="https://img.shields.io/badge/Numpy-3776AB?style=for-the-badge&logo=numpy&logoColor=white" /> 
<img src="https://img.shields.io/badge/Pandas-3776AB?style=for-the-badge&logo=pandas&logoColor=white" /> 
<img src="https://img.shields.io/badge/Scipy-3776AB?style=for-the-badge&logo=scipy&logoColor=white" /> 
<img src="https://img.shields.io/badge/Dlib-3776AB?style=for-the-badge&logo=dlib&logoColor=white" /> 
<img src="https://img.shields.io/badge/Torch Vision-3776AB?style=for-the-badge&logo=torchvision&logoColor=white" /> 
	
</div>	
<div>
<h2>:writing_hand:NLP</h2>
<img src="https://img.shields.io/badge/Hugging-Face-3776AB?style=for-the-badge&logo=huggingface&logoColor=white" /> 
<img src="https://img.shields.io/badge/gensim-3776AB?style=for-the-badge&logo=gensim&logoColor=white" /> 
<img src="https://img.shields.io/badge/spacy-3776AB?style=for-the-badge&logo=spacy&logoColor=white" /> 
<img src="https://img.shields.io/badge/transformer-3776AB?style=for-the-badge&logo=transformer&logoColor=white" /> 
<img src="https://img.shields.io/badge/NLTK-3776AB?style=for-the-badge&logo=nltk&logoColor=white" /> 
<img src="https://img.shields.io/badge/ParlAI-3776AB?style=for-the-badge&logo=parlai&logoColor=white" /> 
</div>	
<div>
<h2>:file_cabinet: Python Frameworks</h2>
<img src="https://img.shields.io/badge/Django-3776AB?style=for-the-badge&logo=django&logoColor=white" /> 
<img src="https://img.shields.io/badge/Flask-3776AB?style=for-the-badge&logo=flask&logoColor=white" /> 
<img src="https://img.shields.io/badge/FastAPI-3776AB?style=for-the-badge&logo=fast-api&logoColor=white" /> 
</div>
<div>
<h2>:file_cabinet: Database and Caching Server</h2>
<img src="https://img.shields.io/badge/MongoDB-3776AB?style=for-the-badge&logo=mongodb&logoColor=white" /> 
<img src="https://img.shields.io/badge/Postgres-3776AB?style=for-the-badge&logo=postgres&logoColor=white" /> 
<img src="https://img.shields.io/badge/SQLite-3776AB?style=for-the-badge&logo=sqlite&logoColor=white" /> 
<img src="https://img.shields.io/badge/Redis-3776AB?style=for-the-badge&logo=redis&logoColor=white" />
</div>
</br>
<p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=hrnbot" alt="hrnbot" /></a> </p>
<h1>Popular Repos created by me</h1>
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


<h1>GitHub Stats</h1>
<p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=hrnbot&show_icons=true&locale=en&layout=compact" alt="hrnbot" /></p>
<p><img src="https://github-readme-stats.vercel.app/api?username=hrnbot&amp;show_icons=true" alt="GitHub Stats"></p>

<h11>Where to find me</h1>
<p><a href="https://github.com/hrnbot" target="_blank"><img alt="Github" src="https://img.shields.io/badge/GitHub-%2312100E.svg?&style=for-the-badge&logo=Github&logoColor=white" /></a> <a href="https://www.linkedin.com/in/hiren-namera-83520ab4" target="_blank"><img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" /></a> <a href="https://www.instagram.com/the_artificial_intel_developer/" target="_blank"><img alt="Instagram" src="https://img.shields.io/badge/instagram-%23E4405F.svg?&style=for-the-badge&logo=instagram&logoColor=white" /></a>
</p>
<p><a href="https://github.com/hrnbot" target="_blank"><img src="https://github.com/hrnbot/hrnbot/workflows/Progress%20Bar%20CI/badge.svg"/></a></p>
<p>
<p>⏰ Updated on ${new Date().toUTCString()}</p>
`

console.log(readme)
