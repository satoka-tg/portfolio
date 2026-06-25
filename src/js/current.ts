window.onload = function() {
  const links = document.querySelectorAll<HTMLAnchorElement>('.gnav a, .menu-gnav-list a');

  links.forEach(link => {
    if (document.URL.match(link.href)) {
      link.parentElement?.classList.add('current');
    }

    const urlParams = new URLSearchParams(window.location.search);
    const postType = urlParams.get('post_type');
    const hrefValue = link.getAttribute('href');

    if (postType && hrefValue && hrefValue.indexOf(postType) !== -1) {
      link.parentElement?.classList.add('current');
    }
  });
};
