// ===== Dark Mode Toggle =====
const button = document.getElementById('toggle');
button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  button.innerHTML = document.body.classList.contains("dark-mode") 
      ? '<i class="fas fa-sun"></i> Light' 
      : '<i class="fas fa-moon"></i> Dark';
});

// ===== Clock =====
function updateClock() {
  const now = new Date();
  let h = now.getHours(), m = now.getMinutes(), s = now.getSeconds();
  h = h<10? "0"+h:h; m=m<10?"0"+m:m; s=s<10?"0"+s:s;
  document.getElementById("time").textContent = `${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
updateClock();

// ===== Task Manager =====
const addTaskBtn = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
addTaskBtn.addEventListener("click",()=>{
    if(taskInput.value.trim()!==""){
        const li=document.createElement("li");
        li.textContent=taskInput.value;
        taskList.appendChild(li);
        taskInput.value="";
    }
});

// ===== Contact Button =====
document.getElementById("contactBtn").addEventListener("click",()=>{
  window.open("https://www.linkedin.com/in/saad-salman-376403324/","_blank");
});

// ===== Coding Quote =====
const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "Fix the cause, not the symptom.",
    "Experience is the name everyone gives to their mistakes.",
    "In order to be irreplaceable, one must always be different."
];
function newQuote(){
    const quoteDiv = document.getElementById("quote");
    const quote = quotes[Math.floor(Math.random()*quotes.length)];
    quoteDiv.textContent = `"${quote}"`;
}
document.getElementById("newQuoteBtn").addEventListener("click", newQuote);
setInterval(newQuote, 10000);
newQuote();

// ===== Weather API (OpenWeatherMap) =====
const weatherWidget = document.getElementById("weatherInfo");
fetch("https://api.openweathermap.org/data/2.5/weather?q=Karachi&units=metric&appid=YOUR_API_KEY")
.then(res=>res.json())
.then(data=>{
    weatherWidget.textContent = `${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
})
.catch(err=>weatherWidget.textContent="Weather unavailable");

// ===== GitHub Stats =====
const githubStats = document.getElementById("githubStats");
fetch("https://api.github.com/users/saadi1425")
.then(res=>res.json())
.then(data=>{
    githubStats.innerHTML = `
        <i class="fab fa-github"></i> Repos: ${data.public_repos} <br>
        👥 Followers: ${data.followers} <br>
        Following: ${data.following}
    `;
})
.catch(err=>githubStats.textContent="GitHub stats unavailable");