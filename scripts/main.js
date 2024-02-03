
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));


app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age; 
}
function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.click();
}

async function open_terminal(){
  createText("Welcome");
  await delay(700);
  createText("Fellow humans and bots please follow the instuctions below.");
  createText("Type 'ls' to list all commands..");
  await delay(500);
  new_line();
}

function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}
/*     createCode("projects", "My github page with my projects. Follow me there ;)");
*/
async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value.toLowerCase() === "ls"){
    trueValue(value);
    createCode("whois", "Who am I and what do I do");
    createCode("skills","Things I'm pretty good at");
    createCode("resume", "Check out my resume (It will get downloaded in pdf form)");
    createCode("contact","Ping me");
    createCode("certifications","certifications I hold")
    createCode("hacking-socials","my profile on hacking platforms")
    createCode("all","everything about me");
    createCode("clear", "Clean the terminal");
    
  }
  /*
  else if(value.toLowerCase() === "projects"){
    trueValue(value);
    createText("<a href='https://github.com/h' target='_blank'><i class='fab fa-github white'></i> github.com/</a>")
  }
  */
  else if(value.toLowerCase() === "whois"){
    trueValue(value);
    createText(`I am Farhan Beg a ${getAge("2001/12/30")} year old Cyber security enthusiast from India. I am currently pursuing my B.E.(Bachelor of Engineering) degree from Information Science in JSS Academy Of Technical Education,Bengaluru. Some of my interests include Cyber Security,Technology and gaming. Please feel free to get in touch with me to discuss any opportunity! My contact details can be found by typing 'contact', and if you would like to check out my resume, simply type 'resume'.`)
  }
  else if(value.toLowerCase() === "contact"){
    trueValue(value);
    createText("<a href='mailto:farhanbeg30@proton.me' target='_blank'><i class='fa-solid fa-envelope-open-text'></i> Email</a>")
    createText("<a href='https://www.linkedin.com/in/farhan-beg/' target='_blank'><i class='fab fa-linkedin-in white'></i> Linkedin</a>")
    createText("<a href='https://www.x.com/_Farhan_b' target='_blank'><i class='fa-brands fa-x-twitter'></i> X </a>")
    createText("<a href='https://infosec.exchange/@Farhan30' target='_blank'><i class='fa-brands fa-mastodon'></i> Mastodon </a>")
  }
  else if(value.toLowerCase() == "skills"){
    trueValue(value);
    createTextAndProgressBar("Azure",0.7,"#0dfa05");
    createTextAndProgressBar("Penetration Testing",0.2,"yellow");
    createTextAndProgressBar("Linux",0.8,"#0dfa05");
    createTextAndProgressBar("C",0.8,"#0dfa05");
    createText("<b><u>Other Skills:</b></u><br> Cyber-security, Information Security, Microsoft 365 Defender, Security Operations, Network Security, Access Control, Disaster Recovery, Incident Response, BusinessContinuity,Azure Logic Apps, Kusto Query Language (KQL), Azure Sentinel, Azure Active Directory,Markdown,HTML")
    
  }
  else if(value.toLowerCase() =="certifications"){
    trueValue(value);
    createText("<a href='https://www.credly.com/badges/530834d1-6bc0-4437-a275-257a9bd0d791/public_url' target='_blank'><i class='fa-brands fa-microsoft'></i> Microsoft SC-200(Security Operations Analyst) </a>")
    createText("<a href='https://www.credly.com/badges/46b645b3-9609-44c6-8a72-af7a1e1e0a43/public_url' target='_blank'><i class='fa-solid fa-file-lines'></i> ISC2 CC(Certified in Cybersecurity) </a>")
  }
  else if(value.toLowerCase() =="hacking-socials"){
    trueValue(value);
    createText("<a href='https://tryhackme.com/p/F4bDcod3' target='_blank'> <u>TryHackMe<u></a>")
  }
  else if(value.toLowerCase() == "resume"){
    trueValue(value);
    downloadURI("Resume.pdf")
  }
  else if(value.toLowerCase() =="all"){
    trueValue(value);
    createColoredText("Introduction:","#9CEAF3")
    createText(`I am Farhan Beg a ${getAge("2001/12/30")} year old Cyber security enthusiast from India. I am currently pursuing my B.E.(Bachelor of Engineering) degree from Information Science in JSS Academy Of Technical Education,Bengaluru. Some of my interests include Cyber Security,Technology and gaming. Please feel free to get in touch with me to discuss any opportunity! My contact details can be found by typing 'contact', and if you would like to check out my resume, simply type 'resume'.`)
    createColoredText("Skills:","#9CEAF3")
    createTextAndProgressBar("Azure",0.7,"#0dfa05");
    createTextAndProgressBar("Penetration Testing",0.2,"yellow");
    createTextAndProgressBar("C",0.8,"#0dfa05");
    createText("<b><u>Other Skills:</b></u><br> Cyber-security, Information Security, Microsoft 365 Defender, Security Operations, Network Security, Access Control, Disaster Recovery, Incident Response, BusinessContinuity,Azure Logic Apps, Kusto Query Language (KQL), Azure Sentinel, Azure Active Directory,Markdown,HTML")
    createColoredText("Certifications:","#9CEAF3")
    createText("<a href='https://www.credly.com/badges/530834d1-6bc0-4437-a275-257a9bd0d791/public_url' target='_blank'><i class='fa-brands fa-microsoft'></i> Microsoft SC-200(Security Operations Analyst) </a>")
    createText("<a href='https://www.credly.com/badges/46b645b3-9609-44c6-8a72-af7a1e1e0a43/public_url' target='_blank'><i class='fa-solid fa-file-lines'></i> ISC2 CC(Certified in Cybersecurity) </a>")
    createColoredText("Hacking-Socials:","#9CEAF3")
    createText("<a href='https://tryhackme.com/p/F4bDcod3' target='_blank'> <u>TryHackMe<u></a>")
    createColoredText("Contact:","#9CEAF3")
    createText("<a href='mailto:farhanbeg30@proton.me' target='_blank'><i class='fa-solid fa-envelope-open-text'></i> Email</a>")
    createText("<a href='https://www.linkedin.com/in/farhan-beg/' target='_blank'><i class='fab fa-linkedin-in white'></i> Linkedin</a>")
    createText("<a href='https://www.x.com/_Farhan_b' target='_blank'><i class='fa-brands fa-x-twitter'></i> X </a>")
    createText("<a href='https://infosec.exchange/@Farhan30' target='_blank'><i class='fa-brands fa-mastodon'></i>  Mastodon </a>")
  }
  else if(value.toLowerCase() === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("#app .clearable").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("#app .type2").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createColoredText(`command not found: ${value}`,"red");
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}
function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}
function createColoredText(text, color = "") {
  const p = document.createElement("p");

  // Apply color style if provided
  if (color) {
    p.style.color = color;
  }

  p.innerHTML = text;
  app.appendChild(p);
}

function createTextAndProgressBar(text, progress, progressBarColor) {
  const container = document.createElement("div");
  container.classList.add("text-progress-container", "clearable");

  // Text on the left
  const textNode = document.createTextNode(text);
  const textDiv = document.createElement("div");
  textDiv.classList.add("text");
  textDiv.appendChild(textNode);

  // Progress bar on the right
  const progressBarContainer = document.createElement("div");
  progressBarContainer.classList.add("progress-bar-container");

  const progressBar = document.createElement("div");
  progressBar.classList.add("progress-bar");
  progressBar.style.width = `${progress * 100}%`;

  if (progressBarColor) {
    progressBar.style.backgroundColor = progressBarColor;
  }

  progressBarContainer.appendChild(progressBar);

  // Assemble the elements
  container.appendChild(textDiv);
  container.appendChild(progressBarContainer);

  app.appendChild(container);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();
