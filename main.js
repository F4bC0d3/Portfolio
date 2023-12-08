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
"Farhan Beg"+
    "                                                                         \t\n"
);

const welcomeMessage = `Welcome to my portfolio fellow humans and bots.
Type 'ls' to view a list of available commands..
`;
const starWarsMessage = `Star Wars: Episode IV produced by Simon Jansen (http://www.asciimation.co.nz)
Press ctrl + z to stop.`;
// Boolean to keep track of whether Star Wars is animating
var play = false;

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
  repo: `
${OUTPUT_STRING} https://github.com/f4b30/

`,
  ls: `
Just type any of the commands below to get some more info. You can even type a few letters and press [tab] to autocomplete.

${OUTPUT_STRING}${glow("whois")}              - Know about me?
${OUTPUT_STRING}${glow("projects")}           - Yeah, I've made some cool stuff before
${OUTPUT_STRING}${glow("skills")}             - I'm pretty good at some things
${OUTPUT_STRING}${glow("repo")}               - Take a look at some of my work

${OUTPUT_STRING}${glow("resume")}             - Check out my resume

${OUTPUT_STRING}${glow("contact")}            - ping me
${OUTPUT_STRING}${glow("certifications")}     - Certifications I hold
${OUTPUT_STRING}${glow("all")}                - Tell me everything


`,
  whois: `

I am  ${glow("Farhan Beg")}.
I'm a ${getAge("2001/12/30")} year old ${glow(
    "Cyber security enthusiast"
  )} I am from India state of Uttar Pradesh. 
I am currently pursueing my B.E. degree from Information Science in JSS Academy Of Technical Education,Bengaluru.
Some of my interests include ${glow(
    "Cyber Security,Technology"
  )}. 

please feel free to get in touch with me to discuss any cool opportunities!
My contact details can be found by typing 'contact', and if you would like to check out my resume, simply type 'resume'.
`,
  projects: `
${glow(1)} Still working on some projects
`,
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
  ${OUTPUT_STRING}${glow("Microsoft SC-200(Certified Security Operations Analyst)")}
  ${OUTPUT_STRING}${glow("ISC2 CC(Certified in Cybersecurity)")}
  `,
    
};

var commands = {
  ls: function () {
    this.echo(messages.ls);
  },

  repo: function () {
    this.echo(messages.repo);
  },

  whois: function () {
    this.echo(messages.whois);
  },

  projects: function () {
    this.echo(messages.projects);
  },

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
    this.exec("whois");
    this.exec("projects");
    this.exec("skills");
    this.exec("repo");
    this.exec("contact");
    this.exec("certifications");
    
  },

  clear: function () {
    this.clear();

    this.echo(banner);
    play ? this.echo(starWarsMessage + "\n\n") : this.echo(welcomeMessage);
  },

  // Wohoo you found the pretty awesome command that I didn't tell you about.
  star_wars: function () {
    initStarWars(this,red);
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

    keydown: function (e) {        
      // ctrl-z - Stop Star Wars
      if (e.which == 90 && e.ctrlKey) {
        play = false;
        return false;
      }

      if (play) {
        return false;
      }

      if (isTyping) {
        return false;
      }
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

// ---------------------------- STAR WARS

var frames = [];
var LINES_PER_FRAME = 14;
var DELAY = 67;

initStarWars = function (term) {
  if (frames.length == 0 && play == false) {
    term.echo("Loading...");
    $.getScript("js/star_wars.js").done(function () {
      play = true;
      var lines = star_wars.length;
      for (var i = 0; i < lines; i += LINES_PER_FRAME) {
        frames.push(star_wars.slice(i, i + LINES_PER_FRAME));
      }

      playStarWars(term);
    });
  } else {
    // frames have already been loaded
    play = true;
    playStarWars(term);
  }
};

playStarWars = function (term, delay) {
  var i = 0;
  var next_delay;
  if (delay == undefined) {
    delay = DELAY;
  }

  function display() {
    if (i == frames.length) {
      i = 0;
    }

    term.clear();

    if (frames[i][0].match(/[0-9]+/)) {
      next_delay = frames[i][0] * delay;
    } else {
      next_delay = delay;
    }
    term.echo(frames[i++].slice(1).join("\n") + "\n");
    if (play) {
      setTimeout(display, next_delay);
    } else {
      term.clear();
      i = 0;
    }
  }

  display();
};

// Thank you - come again.
