var PAGES = {
  who: 'who',
  what: 'what',
  when: 'when',
  where: 'where',
  contact: 'contact',
};

var WHO_TEXT = `<p><span class="text-highlight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et molestie lacus, at aliquam eros. Vivamus ut arcu fringilla, elementum neque eget, malesuada orci. Sed tincidunt, risus volutpat tempor pellentesque, diam est mollis ex, sed finibus mi tortor sed mauris.</span></p>

<p><span class="text-highlight">EtiamEtiam et enim nulla. Vivamus felis dui, sodales in leo sed, scelerisque efficitur elit. Mauris feugiat libero dolor, sit amet fermentum arcu euismod non. Duis tortor diam, interdum vitae dolor et, aliquet lacinia sem.</span></p>`

var WHAT_TEXT = 'Proin finibus et ligula ut suscipit. Sed tincidunt pretium augue at suscipit. Vivamus ac congue leo, quis dapibus turpis.'

var WHEN_TEXT = 'Maecenas sollicitudin, erat vel feugiat finibus, lacus velit eleifend ante, luctus auctor augue sapien fringilla felis.'

var WHERE_TEXT = 'Aliquam at tellus a lorem aliquet pellentesque sed elementum est. Morbi ut nibh nisi. Vivamus interdum mi tortor, eget finibus arcu ullamcorper eu.'

var CONTACT_TEXT = 'Proin id tempor libero. Nulla nec consequat tortor.'

var PAGE_CONTENT = {
  [PAGES.who]: WHO_TEXT,
  [PAGES.what]: WHAT_TEXT,
  [PAGES.when]: WHEN_TEXT,
  [PAGES.where]: WHERE_TEXT,
  [PAGES.contact]: CONTACT_TEXT,
};

var currentPage = '';
var nav = document.getElementById('nav');
var pageText = document.getElementById('page-text');

function shrinkImage() {
  var shrinkClass = 'logo-shrink';
  var image = document.getElementById('logo');
  if (!image.classList.contains(shrinkClass)) {
    image.classList.add('logo-shrink');
  } 
}

function showPage(targetPage) {
  if (targetPage && targetPage !== currentPage && PAGE_CONTENT[targetPage]) {
    currentPage = targetPage;
    pageText.innerHTML = '<p class="fade-in"><span class="text-highlight">' + PAGE_CONTENT[currentPage] + '</span></p>' || '';
    shrinkImage();
  }
}

nav.addEventListener('click', function (e) {
  var targetPage = e.target.id;
  showPage(targetPage);
});

window.addEventListener('load', function() {
  const initialPage = window.location.hash.replace(/\W/g, '');
  showPage(initialPage);
});

