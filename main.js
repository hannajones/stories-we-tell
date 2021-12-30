var PAGES = {
  who: 'who',
  what: 'what',
  when: 'when',
  where: 'where',
  contact: 'contact',
};

// TODO: better way to do highlighting (not loving the span)
// do we even need the highlighting anymore?
var WHO_MARKUP = `<p><span class="text-highlight"><b>Founders:</b> Najma Eno and Paige Homme</span></p>
<p><span class="text-highlight">Though we have had greatly different experiences of queerness, our friendship has been a place where we exchange opportunities, resist forces of oppression, access support, explore creativity, and most importantly, center joy. We believe that oppressed people need meaningful connections to survive, resist, and ultimately destroy the systems that thrive on our alienation. We hope that this project will give other queers a chance to experience a friendship as treasured as ours.</span></p>
<p><span class="text-highlight"><b>Participants:</b> the 6-session pilot program will be comprised of 6 queer newcomers and 6 queer residents of Tkaronto, known as Toronto. All participants will be provided honorariums for each session attended.</span></p>
<p><span class="text-highlight"><span class="underline">Queer newcomers</span> to these lands often leave their home countries fleeing dangerous conditions that exist because of their queer identity. Although some of these conditions may be alleviated upon arrival, for many, the realities of navigating bureaucracy, finding employment, finding housing, and learning a new language can be an alienating experience.</span></p>
<p><span class="text-highlight"><span class="underline">Queer residents</span> of these lands, especially trans people, BIPOC, and queer seniors, experience their own sets of challenges that too can result in a sense of alienation.</span></p>
<p><span class="text-highlight">This project aims to connect queer newcomers to queer residents in hopes of fostering empathy, support, and friendship between queer people whose paths may not have otherwise converged.</span></p>`;

var WHAT_MARKUP = `<p><span class="text-highlight">Stories We Tell is a card game and a pilot program designed to facilitate connections within the queer community.</span></p>
<p><span class="text-highlight"><b>The card game:</b></span></p>
<p><span class="text-highlight">The deck is composed of 52 prompts, some lighthearted, others more substantial, that invite a pair of strangers to meaningfully connect through storytelling. </span></p>
<p><span class="text-highlight"><b>The program:</b></span></p>
<p><span class="text-highlight">The aim of the program is to forge connections between individuals whose paths may not have otherwise converged. The 6-session pilot program will specifically focus on connecting queer newcomers with queer residents, see WHO (hyperlink). Detailed information will be emailed to you if you are selected for the program.</span></p>
<p><span class="text-highlight underline">session 1:</span></p>
<p><span class="text-highlight">An orientation facilitated by a community leader where the anti-oppressive framework for the project will be introduced. Participants will be provided an opportunity to unpack and locate their own privilege/power and to discuss different intersections of identity/oppression</span></p>
<p><span class="text-highlight underline">session 2-5:</span></p>
<p><span class="text-highlight">The following four sessions will be comprised of participants breaking into pairs and playing the Stories We Tell card game, each time with a new partner.</span></p>
<p><span class="text-highlight underline">session 6:</span></p>
<p><span class="text-highlight">The concluding session will involve wrapping up and reflecting upon the experience as a group.</span></p>
`;

var WHEN_MARKUP = 'Anticipated start: Fall of 2021 (details forthcoming)';

var WHERE_MARKUP = `<p><span class="text-highlight">The intention of this project is to confront roots of oppression through joyful connections. One of the deepest roots of oppression is settler, Eurocentric imperialism, and colonialism. The foundation of this country known as Canada and all its systems are rooted in colonialism. Thus, though in different ways, we also are part of this system and reap the benefits of a country predicated on past and ongoing land seizure, destruction, and genocide. In this way, it is important to acknowledge both the land and the caretakers of the land as well as how we come to use this land covered under Treaty 13, known as Tkaronto or Toronto.</span></p>
<p><span class="text-highlight">Najma is a Somali/Tanzanian/Omani daughter of two immigrant parents. Conversely, Paige is a white settler from generations of colonial settlers, most recently from their parents from Treaty 6, covering the city known as Edmonton and Treaty 4 covering the city known as Regina.</span></p>
<p><span class="text-highlight">Stories We Tell is operated on the land known as Tkaronto, “Toronto Purchase Treaty 13”. This area from time immemorial has been the traditional territories of the Huron-Wedat, the Haudenosaunee Confederacy, as well as the Anishinaabe Confederacies which includes seven Nations, including the current caretakers and treaty holders of this land, the Mississaugas of the Credit First Nation. This land is now home to many First Nation, Inuit and Metis communities. We are grateful to work on this land.</span></p>`;

var CONTACT_MARKUP = 'stories_we_tell@outlook.com';

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
      '<p class="fade-in"><span class="text-highlight">' +
        PAGE_CONTENT[currentPage] +
        '</span></p>' || '';
    highlightNavLink(targetPage);
    shrinkImage();
  }
}

nav.addEventListener('click', function (e) {
  var targetPage = e.target.id;
  showPage(targetPage);
});

window.addEventListener('load', function () {
  const initialPage = window.location.hash.replace(/\W/g, '');
  showPage(initialPage);
});
