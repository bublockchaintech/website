const linkHelperForNavigationBar = (item) => {
  document.getElementById(item.link).scrollIntoView();
};

const linkHelperForNavigationDots = (item) => {
  document.getElementById(item).scrollIntoView();
};

export default { linkHelperForNavigationBar, linkHelperForNavigationDots };
