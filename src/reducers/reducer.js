import virtualImg from "../images/vb/project 1.PNG";
import recipeImg from "../images/rm/project 2.PNG";
import portfolioImg from "../images/pf/portfolio_main.png";
import imgp1 from "../images/pf/pf1.png";
import imgp2 from "../images/pf/pf2.PNG";
import imgp3 from "../images/pf/pf3.png";
import img1 from "../images/vb/vb (1).png";
import img2 from "../images/vb/vb (2).png";
import img3 from "../images/vb/vb (3).png";
import img4 from "../images/vb/vb (4).png";
import imgr1 from "../images/rm/rm (1).png";
import imgr2 from "../images/rm/rm (2).png";
import imgr3 from "../images/rm/rm (3).png";
import imgr4 from "../images/rm/rm (4).png";

const initialData = {
  projects: [
    {
      id: 1,
      name: "VIRTUAL BANK",
      description: "An app about banking",
      image: virtualImg,
      type: "android",
      language: "kotlin",
      imagesDetails: [img1, img2, img3, img4],
      details:
        "This app is a virtual bank account app created with Kotlin where you can create an account add money and also send it to other people , it also keeps you in check with your transactions history with all the details and there is a profile section when you can see your info and change your password or add money or delete your account , i used the Room persistence library with the MVVM architecture to manage data and i used material design to make the UI.",
      githubLink: "https://github.com/Moses99Z/Virtual-Banking-App",
    },
    {
      id: 2,
      name: "RECIPES MANAGER",
      description: "An app about managing recipes",
      image: recipeImg,
      type: "android",
      language: "java",
      imagesDetails: [imgr1, imgr2, imgr3, imgr4],
      details:
        "This Recipes Manager app makes it easy to manage all cooking recipes and do different kind of tasks like adding , editing and also deleting recipes whenever you want, and also check all details of a recipe with just a simple click. This app was created using only Java with the MVVM architecture and Room persistence library with some Material design.",
      githubLink: "https://github.com/Moses99Z/Recipes-Manager",
    },
    {
      id: 3,
      name: "MY PORTFOLIO",
      description: "This is my portfolio",
      image: portfolioImg,
      type: "react",
      language: "react",
      imagesDetails: [imgp1],
      details:
        "This is my projects portfolio that i created using React Js , Redux and also bootstrap.",
      githubLink: "https://github.com/Moses99Z/my_portfolio",
    },
  ],
};

export default function reducer(state = initialData) {
  return state;
}
