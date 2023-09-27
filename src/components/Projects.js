import ProjectImg from '../Images/dummyImage.png';
import DiceGame from '../Images/DiceGame.png';
import NotesTakingApp from '../Images/NotesTakingApp.png'
import SimonGame from '../Images/SimonGame.png'
import portfolio from '../Images/portfolio.png'
import myShop from '../Images/MyShop.png'

const projects = [
  {
    id: 1,
    name: 'Portfolio',
    desc:
      'An application to track your all data from one place. I developed the website and the mobile app',
    img: portfolio,
    link: 'https://github.com/dishankkumaryadav/portfolio.git',
  },
  {
    id: 2,
    name: 'My Shop',
    desc:
    'MyShop is an Ecommerce website. It works similar to other ecommerce website like Flipkart, Amazon where you selected your desired product and order from home.',
    img: myShop,
    link: 'https://github.com/dishankkumaryadav/MyShop',
  },
  {
    id: 3,
    name: 'Notes Taking App',
    desc:
    'Notes Taking App is website where you can take notes on your browser only and no external app is needed.',
    img: NotesTakingApp,
    link: 'https://dishankkumaryadav.github.io/Projects/Notes-Taking-App/index.html',
  },
  {
    id: 4,
    name: "Simon Game",
    desc:
    'Simon is a simple electronic memory game: the user has to repeat a growing sequence of colors. The sequence is displayed by lighting up the LEDs. Each color also has a corresponding tone.',
    img: SimonGame,
    link: 'https://dishankkumaryadav.github.io/Simon-Game/',
  },
  {
    id: 5,
    name: 'Dice Game',
    desc:
    'Dice games are games that use or incorporate one or more dice as their sole or central component, usually as a random device.',
    img: DiceGame,
    link: ' https://dishankkumaryadav.github.io/Dice-game/',
  },
];

export default projects;