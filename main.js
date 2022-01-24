var PAGES = {
  who: 'who',
  what: 'what',
  when: 'when',
  where: 'where',
  contact: 'contact',
};

var WHO_MARKUP = `<p><b>Founders:</b> Najma Eno and Paige Homme</span></p>
<p><b>Participants:</b> the 6-session pilot program will be comprised of 6 queer newcomers and 6 queer residents of Tkaronto, known as Toronto. All participants will be provided honorariums for each session attended.</p>
<p><span class="underline">Queer newcomers</span> to these lands often leave their home countries fleeing dangerous conditions that exist because of their queer identity. Although some of these conditions may be alleviated upon arrival, for many, the realities of navigating bureaucracy, finding employment, finding housing, and learning a new language can be an alienating experience.</p>
<p><span class="underline">Queer residents</span> of these lands, especially queers who are most oppressed (trans queers, queer BIPOC, queer seniors, and disabled queers) experience an array of challenges that can also result in a sense of alienation.</p>
<p>This project aims to connect queer newcomers to queer residents in hopes of fostering empathy, support, and friendship between queer people whose paths may not have otherwise converged.</p>`;

var WHAT_MARKUP = `<p>Stories We Tell is a card game and a pilot program designed to facilitate connections within queer community.</span></p>
<p><b>The card game:</b></p>
<p>The deck is made up of 52 prompts that invite a pair of strangers to get to know each other through storytelling. Covering topics like home, identity, food, creativity, imagination, and more, the game offers a healthy balance of humour, vulnerability, fun, and authenticity in forging a connection.</span></p>
<p><b>The program:</b></p>
<p>A 6-session series connecting queer newcomers with queer residents (see <a href="#/who">WHO</a>) through the Stories We Tell card game. Detailed information will be emailed to you if you are selected for the program.</p>
<p><span class="text-highlight underline">session 1:</span></p>
<p>A community leader will facilitate an orientation session where the anti-oppressive framework for the project will be introduced. Participants will be provided an opportunity to unpack and locate their own privilege/power and reflect on different intersections of identity/oppression.</p>
<p><span class="text-highlight underline">session 2-5:</span></p>
<p>Participants will break into pairs and play the Stories We Tell card game, each session with a new partner.</p>
<p><span class="text-highlight underline">session 6:</span></p>
<p>The concluding session will involve wrapping up and reflecting upon the experience as a group.</p>
`;

var WHEN_MARKUP =
  '<p>Anticipated start: Fall of 2022 (details forthcoming)</p>';

var WHERE_MARKUP = `<p>The intention of this project is to confront roots of oppression through joyful connections. One of the deepest roots of oppression is settler, Eurocentric imperialism, and colonialism. The foundation of this country known as Canada and all systems are rooted in colonialism. Thus, we also are part of this system and though in different ways, benefit from this colonial system predicated on past and ongoing land seizure, destruction, and genocide. In this way, it is important to acknowledge both the land and the caretakers of the land as well as how we come to use this land covered under Treaty 13, known as Tkaronto or Toronto.</p>
<p>Stories We Tell is operated on the land known as Tkaronto, “Toronto Purchase Treaty 13”. This area from time immemorial has been the traditional territories of the Huron-Wedat, the Haudenosaunee Confederacy, as well as the Anishinaabe Confederacies which includes seven Nations, including the current caretakers and treaty holders of this land, the Mississaugas of the Credit First Nation. This land is now home to many First Nation, Inuit and Metis communities. We are grateful to work on this land.</p>`;

var CONTACT_MARKUP =
  '<p><a href="mailto:stories_we_tell@outlook.com" class="text-center">stories_we_tell@outlook.com</a></p>';

var PAGE_CONTENT = {
  [PAGES.who]: WHO_MARKUP,
  [PAGES.what]: WHAT_MARKUP,
  [PAGES.when]: WHEN_MARKUP,
  [PAGES.where]: WHERE_MARKUP,
  [PAGES.contact]: CONTACT_MARKUP,
};

var currentPage = '';
var nav = document.getElementById('nav');
var pageText = document.getElementById('page-text');

function addClass(id, className) {
  var element = document.getElementById(id);
  if (!element.classList.contains(className)) {
    element.classList.add(className);
  }
}

function shrinkImage() {
  var shrinkClass = 'logo-shrink';
  var imageID = 'logo';
  addClass(imageID, shrinkClass);
}

function highlightNavLink(navID) {
  var activeNavClass = 'nav-link--active';

  // remove the active style from any currently active links
  var currentActiveLink = document.querySelector('.' + activeNavClass);
  currentActiveLink && currentActiveLink.classList.remove(activeNavClass);

  // apply the active class to the newly selected link
  addClass(navID, activeNavClass);
}

function showPage(targetPage) {
  if (targetPage && targetPage !== currentPage && PAGE_CONTENT[targetPage]) {
    currentPage = targetPage;
    pageText.innerHTML =
      '<div class="fade-in">' + PAGE_CONTENT[currentPage] + '</div>' || '';
    highlightNavLink(targetPage);
    shrinkImage();
  }
}

function getRoute() {
  return window.location.hash.toLowerCase().replace(/\W/g, '') || '/';
}

function handleNavigation() {
  var currentRoute = getRoute();
  showPage(currentRoute);
  window.scrollTo({
    top: 0,
    left: 1,
    behavior: 'smooth'
  });
}

// render new route when navigation to a new /# occurs
window.addEventListener('hashchange', handleNavigation);

// render page content on load
window.addEventListener('load', handleNavigation);
