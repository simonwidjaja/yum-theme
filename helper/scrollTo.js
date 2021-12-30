export default function scrollTo(id) {

  const fixedNav = document.querySelector('.fixed-nav');
  const element = document.getElementById(id.replace('#', ''));
  const headerOffset = fixedNav ? fixedNav.getBoundingClientRect().height + 30 : 50;
  const elementPosition = window.scrollY + element.getBoundingClientRect().top;
  const top = elementPosition - headerOffset;

  // console.log(1, fixedNav);
  // console.log(2, element);
  // console.log(3, headerOffset);
  // console.log(4, elementPosition);
  // console.log(5, top);

  window.scrollTo({
    top,
    behavior: "smooth"
  });
}