export const linkHelperForNavigationBar = (item) => {
  document.getElementById(item.link).scrollIntoView();
};

export const linkHelperForNavigationDots = (item) => {
  document.getElementById(item).scrollIntoView();
};
