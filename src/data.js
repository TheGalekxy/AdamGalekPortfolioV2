import backgroundGenerator from '../src/images/backgroundGenerator.png';
import JustCook from '../src/images/JustCook.png';
import LyricGenerator from '../src/images/LyricGenerator.PNG';
import MomsOverMatter from '../src/images/MomsOverMatter.png';
import NHLapi from '../src/images/NHLapi.png';
import NoelSemple from '../src/images/NoelSemple.PNG';
import PHPKnights from '../src/images/PHPKnights.PNG';
import PHPKnights1 from '../src/images/PHPKnights2.png';
import PHPKnights2 from '../src/images/PHPKnights3.png';
import PHPKnights3 from '../src/images/PHPKnights4.png';
import PHPKnights4 from '../src/images/PHPKnights5.png';
import PHPKnights5 from '../src/images/PHPKnights6.png';

export const featuredPortfolio = [

    {
      id: 1,
      title: "JustCook",
      img: JustCook,
      description: "JustCook is a web application that allows the user to get ingredients delivered right to their door by simply picking a recipe! Our app allows users to quickly search up recipes for meals they want to try online then automatically order the ingredients necessary. I was responsible for the implementation of the Shopping Cart Feature, which involved the implementation and use of Redux.",
      live: "https://justcook.live/",
      github: "https://github.com/k4iru/JustCook",
    },
    {
      id: 2,
      title: "MomsOverMatter",
      img: MomsOverMatter,
      description: "A web application designed to provide information and resources to women and their families post-partum. I was responsible for redesigning homepape, next steps page, and results page based off Figma designs, required creating customized React component for a drop-down information box. Also responsible for hosting the production website on a Digital Ocean droplet using NGINX.",
      live: "https://momsovermatter.ca/",
      github: "",
    },
    {
      id: 3,
      title: "Noel Semple Campaign",
      img: NoelSemple,
      description: "A political campaign website designed to connect the political candidate to his riding’s constituents. Within a two week period, I was responsible for learning a new language (liquid) and a new technology (NationBuilder) and creating an 'About' page based off of provided designs",
      live: "https://www.votenoel.ca/",
      github: "",
    },
    {
      id: 4,

      title: "PHP Knights Movie Tracker",
      img: PHPKnights,
      description: "The PHP Knights Movie Tracker is a web application designed to empower the user in the movie watching experience. It allows the user to track all the movies they have watched, get access to movie recommendations, community curated movie lists, and more! I was responsible for the Movie List feature, which allows registered users to see and create custom movie lists. I was also responsible for the Subscription feature, which allows users to pay for our service through PayPal.",
      live: "https://phpknights.ca/",
      github: "https://github.com/k4iru/discussion",
      image1: PHPKnights1,
      image2: PHPKnights2,
      image3: PHPKnights3,
      image4: PHPKnights4,
      image5: PHPKnights5,
      text1: "One of the main features that I worked on was the “custom list” functionality, which allowed registered users to view or create lists of movies. For example, a user could create a list called “My Favourite Movies” and put a list of movies in it. Any user would then be able to see that list, while the user who created that list would be able to delete and update their created list.",
      text2: "One challenge that was faced was hiding the update and delete functionality of the list based on which user was logged in. For example, user “john doe” can only update and delete lists created by “john doe”. To solve this issue, I used the logged in user’s username (provided through session variables), passed that into a database query to retrieve the user id, then only displayed the “update” & “delete” buttons for lists that were created by that user id. ",
      text3: "Working off that, I also wanted to allow any “admin” users the ability to have all the functionality to update and delete any entries, regardless of whether they were the users to create the list. To do this, I retrieved the username (provided by the session variables) of the user, passed that into a database query to retrieve the user id, then used that in another database query that retrieves information about the user. Within that information is whether a user is an admin or not, if the user is an admin the update and delete buttons would be visible, otherwise, they would not.",
      text4: "One other challenge that was faced was being able to add movies to a list as there is a many to many relationship between the tables. To solve this issue, a “bridging” database table needed to be created to hold all the movies associated with a specific list. After this, database queries needed to be created to insert data into the table of the list being added to and the movie being added. For this, a drop down was created in the “details” view of a list which displayed a list of all movies in the database. From there you could select a movie (which was associated with a hidden id value) and upon submission the aforementioned database query would be sent and the list would be updated with the movie selected.",
      text5: "In a similar way as with the update and delete buttons mentioned previously. It was also necessary to hide the “add to list” and “delete list” button when viewing a specific list that did not belong to the user. This was accomplished the same way as in the other example.",
    },
    {
      id: 5,
      title: "NHL API Project",
      img: NHLapi,
      description: "This is a project that retrieves the National Hockey League's API and returns a complete and semi-detailed roster of each team. Each roster is seperated into teams and only is displayed when their respective teams card is hovered over.",
      live: "https://thegalekxy.github.io/NHLApi/",
      github: "https://github.com/TheGalekxy/NHLApi",
    },
    {
      id: 6,
      title: "Gradient Color Generator",
      img: backgroundGenerator,
      description: "This is a project that allows the user to randomize a background gradient to their preference. Randomization options include: both colours or a single colour, and allows the user to change to their preferred gradient style. Additionally, a click-to-copy feature is implemented to allow for easy use of the created gradient in the users personal code.",
      live: "https://thegalekxy.github.io/GradientGenerator/",
      github: "https://github.com/TheGalekxy/GradientGenerator",
    },
  ];
  
  export const FullStackPortfolio = [
    {
      id: 1,
      title: "JustCook",
      img: JustCook,
      description: "JustCook is a web application that allows the user to get ingredients delivered right to their door by simply picking a recipe! Our app allows users to quickly search up recipes for meals they want to try online then automatically order the ingredients necessary. I was responsible for the implementation of the Shopping Cart Feature, which involved the implementation and use of Redux.",
      live: "https://justcook.live/",
      github: "https://github.com/k4iru/JustCook",
    },
    {
      id: 2,
      title: "MomsOverMatter",
      img: MomsOverMatter,
      description: "A web application designed to provide information and resources to women and their families post-partum. I was responsible for redesigning homepape, next steps page, and results page based off Figma designs, required creating customized React component for a drop-down information box. Also responsible for hosting the production website on a Digital Ocean droplet using NGINX.",
      live: "https://momsovermatter.ca/",
      github: "",
    },
    {
      id: 4,
      title: "PHP Knights Movie Tracker",
      img: PHPKnights,
      description: "The PHP Knights Movie Tracker is a web application designed to empower the user in the movie watching experience. It allows the user to track all the movies they have watched, get access to movie recommendations, community curated movie lists, and more! I was responsible for the Movie List feature, which allows registered users to see and create custom movie lists. I was also responsible for the Subscription feature, which allows users to pay for our service through PayPal.",
      live: "https://phpknights.ca/",
      github: "https://github.com/k4iru/discussion",
    },
  ];
  
  export const ReactPortfolio = [
    {
      id: 1,
      title: "JustCook",
      img: JustCook,
      description: "JustCook is a web application that allows the user to get ingredients delivered right to their door by simply picking a recipe! Our app allows users to quickly search up recipes for meals they want to try online then automatically order the ingredients necessary. I was responsible for the implementation of the Shopping Cart Feature, which involved the implementation and use of Redux.",
      live: "https://justcook.live/",
      github: "https://github.com/k4iru/JustCook",
    },
    {
      id: 2,
      title: "MomsOverMatter",
      img: MomsOverMatter,
      description: "A web application designed to provide information and resources to women and their families post-partum. I was responsible for redesigning homepape, next steps page, and results page based off Figma designs, required creating customized React component for a drop-down information box. Also responsible for hosting the production website on a Digital Ocean droplet using NGINX.",
      live: "https://momsovermatter.ca/",
      github: "",
    },
  ];
  
  export const PHPPortfolio = [
    {
      id: 4,
      title: "PHP Knights Movie Tracker",
      img: PHPKnights,
      description: "The PHP Knights Movie Tracker is a web application designed to empower the user in the movie watching experience. It allows the user to track all the movies they have watched, get access to movie recommendations, community curated movie lists, and more!",
      live: "https://phpknights.ca/",
      github: "https://github.com/k4iru/discussion",
    },
    {
      id: 3,
      title: "Lyric Generator",
      img: LyricGenerator,
      description: "This is a web application that connects the Spotify API, with the Musixmatch API to allow the user to search for the lyrics of a song.",
      live: "http://142.93.158.44/",
      github: "https://github.com/TheGalekxy/LyricsGenerator",
    },
  ];
  
  export const netPortfolio = [
    {
      id: 1,
      title: "TADH Hospital Website",
      img: LyricGenerator,
    },
    {
      id: 2,
      title: "Valorant Custom Game Tracker",
      img: LyricGenerator,
    },
  ];

  export const javascriptPortfolio = [
    {
      id: 5,
      title: "NHL API Project",
      img: NHLapi,
      description: "This is a project that retrieves the National Hockey League's API and returns a complete and semi-detailed roster of each team. Each roster is seperated into teams and only is displayed when their respective teams card is hovered over.",
      live: "https://thegalekxy.github.io/NHLApi/",
      github: "https://github.com/TheGalekxy/NHLApi",
    },
    {
      id: 6,
      title: "Gradient Color Generator",
      img: backgroundGenerator,
      description: "This is a project that allows the user to randomize a background gradient to their preference. Randomization options include: both colours or a single colour, and allows the user to change to their preferred gradient style. Additionally, a click-to-copy feature is implemented to allow for easy use of the created gradient in the users personal code.",
      live: "https://thegalekxy.github.io/GradientGenerator/",
      github: "https://github.com/TheGalekxy/GradientGenerator",
    },
  ];