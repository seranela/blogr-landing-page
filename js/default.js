const button = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-header');
const sublinks = document.querySelectorAll('.nav-header-list-link');

function resizeUpdate() {
  if (document.body.offsetWidth >= 768) {
    nav.setAttribute('aria-expanded', false);
    nav.classList.remove('nav-header-show');
    button.classList.remove('nav-header-button-close');
  }
}

function toggleMenu() {
  if (nav.getAttribute('aria-expanded') === 'false') {
    nav.setAttribute('aria-expanded', true);
    nav.classList.add('nav-header-show');
    button.classList.add('nav-header-button-close');
  } else {
    nav.setAttribute('aria-expanded', false);
    nav.classList.remove('nav-header-show');
    button.classList.remove('nav-header-button-close');
  }
}

function toggleSubMenu(e) {
  const submenulist = e.target.nextElementSibling;
  if (submenulist.getAttribute('aria-expanded') === 'false') {
    submenulist.setAttribute('aria-expanded', true);
    submenulist.classList.add('nav-header-sublist-expanded');
    e.target.classList.add('nav-header-list-link-expanded');
  } else {
    submenulist.setAttribute('aria-expanded', false);
    submenulist.classList.remove('nav-header-sublist-expanded');
    e.target.classList.remove('nav-header-list-link-expanded');
  }

  // Close any other open menus
  for (let i = 0; i < sublinks.length; i++) {
    if (sublinks[i].innerHTML !== e.target.innerHTML) {
      const submenulist = sublinks[i].nextElementSibling;
      submenulist.setAttribute('aria-expanded', false);
      submenulist.classList.remove('nav-header-sublist-expanded');
      sublinks[i].classList.remove('nav-header-list-link-expanded');
    }
  }
}

window.addEventListener('resize', resizeUpdate, false);
button.addEventListener('click', toggleMenu, false);
for (let i = 0; i < sublinks.length; i++) {
  sublinks[i].addEventListener('click', toggleSubMenu, true);
}