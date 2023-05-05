/*menu is the nav menu data, is it worthy to separate into two situation:
 could be only topmenu with a element
 could be button with submenu
  */
/*title is object with mapping of component to title */
const menu = [
  {
    label: "Home",
    path: "home.html",
  },
  {
    label: "Experience",
    submenu: [
      {
        label: "Work",
        path: "work.html",
      },
      {
        label: "Projects",
        path: "projects.html",
      },
    ],
  },
  {
    label: "Contact Me",
    path: "contact.html",
  },
];

//feel a little overlap with menu, for simplicity separate
const title = {
  Home: "An Introduction Of Myself",
  Work: "Education And Work Experiences",
  Projects: "Skills set And Projects",
  Contact: "Let Us Connect",
};

export { menu, title };
