// Formatting
//-----------------------------------------------------
const OUTPUT_STRING = "  ";

var glow = function (text) {
  return "[[g;#EEEEEE;]" + text + "]";
};

var titleText = function (text) {
  return "[[u;inherit;]" + text + "]";
};

function red(message) {
  return "[[gb;red;black]" + message + "]";
}
//-----------------------------------------------------

var banner = red(
  "  " + red(
      "oooooooooooo                    oooo                                ooooooooooo.                       \n" +
      "  `888'     `8                    `888                                 `888'   `Y8b                      \n" +
      "   888          .oooo.   oooo d8b  888 .oo.    .oooo.   ooo. .oo.       888     888  .ooooo.   .oooooooo \n" +
      "   888oooo8    `P  )88b  `888\"8P   888P\"Y88b  `P  )88b  `888P\"Y88b      888oooo888' d88' `88b 888' `88b  \n" +
      "   888    \"     .oP\"888   888      888   888   .oP\"888   888   888      888    `88b 888ooo888 888   888  \n" +
      "   888         d8(  888   888      888   888  d8(  888   888   888      888    .88P 888    .o `88bod8P'  \n" +
      "  o888o        `Y888\"8o  d888b    o888o o888o `Y888\"8o  o888o o888o   oo888bood8P'  `Y8bod8P' `8oooooo.    \n" +
      "                                                                                              d\"     YD    \n" +
      "                                                                                              \"Y88888P'    \n"
  ) 
);

const welcomeMessage = `Welcome to my portfolio fellow humans and bots.
Type 'ls' to view a list of available commands..
Tip: If viewing on mobile devices please use desktop mode
`;

function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.click();
}

// Just a little helper function so I don't have to continually update my age
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

function getYear() {
  var today = new Date();
  return today.getFullYear();
}
const messages = {
 /*  repo: `
${OUTPUT_STRING} https://github.com/f4b30/
`,
*/
 /*
add these later
${OUTPUT_STRING}${glow("projects")}           - Yeah, I've made some cool stuff before
${OUTPUT_STRING}${glow("repo")} - Take a look at some of my work
*/
  ls: `
Just type any of the commands below to get some more info. You can even type a few letters and press [tab] to autocomplete.

${OUTPUT_STRING}${glow("whois")}              - Know about me?
${OUTPUT_STRING}${glow("skills")}             - I'm pretty good at some things
${OUTPUT_STRING}${glow("resume")}             - Check out my resume
${OUTPUT_STRING}${glow("contact")}            - ping me
${OUTPUT_STRING}${glow("certifications")}     - Certifications I hold
${OUTPUT_STRING}${glow("all")}                - Tell me everything
`,
  whois: `

I am  ${glow("Farhan Beg")}.
I'm a ${getAge("2001/12/30")} year old ${glow(
    "Cyber security enthusiast"
  )} I am from Uttar Pradesh,India 
I am currently pursuing my B.E. degree from Information Science in JSS Academy Of Technical Education,Bengaluru.
Some of my interests include ${glow(
    "Cyber Security,Technology and gaming"
  )}. 

please feel free to get in touch with me to discuss any opportunities!
My contact details can be found by typing 'contact', and if you would like to check out my resume, simply type 'resume'.
`,
/*projects: `
${glow(1)} Still working on some projects
`,
*/
  skills: `
  ${OUTPUT_STRING}${glow("Azure")}               ##  [[g;#00DE12;]######################################]  ##
  ${OUTPUT_STRING}${glow("Ethical hacking")}     ##  [[g;#D16200;]############]                            ##
  ${OUTPUT_STRING}${glow("penetration testing")} ##  [[g;#D16200;]############]                            ##
  ${OUTPUT_STRING}${glow("C ")}                  ##  [[g;#00DE12;]###########################]             ##
`,
  contact: `
${OUTPUT_STRING}${glow("Email")}            - farhanbeg30@proton.me
${OUTPUT_STRING}${glow("Linkedin")}         - https://www.linkedin.com/in/farhan-beg-3b0b3a1b3/farhan-beg
${OUTPUT_STRING}${glow("Github")}           - https://github.com/f4b30/

`,
certifications: `
  ${OUTPUT_STRING}${glow("Microsoft SC-200(Certified Security Operations Analyst)")} - https://www.credly.com/badges/530834d1-6bc0-4437-a275-257a9bd0d791/public_url
  ${OUTPUT_STRING}${glow("ISC2 CC(Certified in Cybersecurity)")}                     - https://www.credly.com/badges/46b645b3-9609-44c6-8a72-af7a1e1e0a43/public_url
  `,
    
};

var commands = {
  ls: function () {
    this.echo(messages.ls);
  },

 /* repo: function () {
    this.echo(messages.repo);
  },
*/
  whois: function () {
    this.echo(messages.whois);
  },

 /* projects: function () {
    this.echo(messages.projects);
  },
*/
  skills: function () {
    this.echo(messages.skills);
  },

  contact: function () {
    this.echo(messages.contact);
  },

  certifications: function(){
    this.echo(messages.certifications);
  },

  resume: function () {
    downloadURI(
      "Resume-Farhan-Beg.pdf"
    );
  },

  all: function () {
    this.clear();
   // this.exec("whois");
    this.exec("projects");
    this.exec("skills");
    //this.exec("repo");
    this.exec("contact");
    this.exec("certifications");
  },

  clear: function () {
    this.clear();

    this.echo(banner);
    this.echo(welcomeMessage);
  },

};

//-----------------------------------------------------------

$(function () {
  var isTyping = false;
  function typed(finish_typing) {
    return function (term, message, delay) {
      isTyping = true;
      var prompt = term.get_prompt();
      var c = 0;
      if (message.length > 0) {
        term.set_prompt("");
        var interval = setInterval(function () {
          term.insert(message[c++]);
          if (c == message.length) {
            clearInterval(interval);
            // execute in next interval
            setTimeout(function () {
              // swap command with prompt
              finish_typing(term, message, prompt);
              isTyping = false;
            }, delay);
          }
        }, delay);
      }
    };
  }

  var typed_message = typed(function (term, message, prompt) {
    term.set_command("");
    term.echo(message);
    term.set_prompt(prompt);
  });

  $("body").terminal(commands, {
    greetings: banner,
    prompt: "> ",
    completion: true,
    checkArity: false,
    clear: false,

    onInit: function (term) {
      typed_message(term, welcomeMessage, 0, function () {});
    },


    keypress: function (e, term) {
      console.log("keypress: " + e.which);
    },

    onFocus: function (term) {
      console.log("terminal has gained focus");
    },

    onBlur: function () {
      console.log("terminal has lost focus");
    },
  });
});


// Thank you - come again.
