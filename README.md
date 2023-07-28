# Welcome to the Meal Planner app
![GitHub top language](https://img.shields.io/github/languages/top/lukewelden/meal-planner)

## Introduction
Welcome to the Meal Planner Web App repository! This simple web app allows you to pick random recipes and plan out your weekly meals. The app is built using HTML, CSS, and JavaScript. If you're anything like I am you often struggle for inspiration on what to cook for your meals throughout the week. With this application you can take out all of the thinking and let the app decide! If you don't like the selection you can randomise again! 

## Ideas
### Initial app 
1. My initial thoughts for the web application is to have a simple index.html that contains the title, a brief description of the web app, and a generation button. When the button is clicked it will trigger a JS script which either reveals hidden sections or creates sections for each day of the week. Each section will contain the day, the name of the meal, the ingredients of the meal, cooking instructions,  an image of the meal, and a link to the recipe if it's been sourced externally. 

2. I'm thinking of creating a meal class which has the following properties.
- meal name (string)
- ingredients (array)
- cooking instructions (array)
- image (maybe a string that has link to the image, not sure how to handle this yet)
- link to a source (string)
We can then create instances of the meal class for each meal we want to store.

3. Create a function that picks five meals at random, one for each day of the week, and sends them to the index.html sections.

### Future features
- We could put in some sort of form for the user to fill out to pick what days they want to plan for. For example, they may only want to plan Mon - Thursday because Friday is take out day!
- Once the app generated the random meals for the week we could put in functionality that lets the user select meals they agree with and then give them the options to regenerate more meals replacing the meals that they have not selected. For example, the app generates: `Monday = Spaghetti, Tuesday = Fish and Chips, Wednesday = Curry, Thursday = Burgers, Friday = Wings.` I like the sound of all those meals bar the curry. I select all the meals bar curry and hit the button again. The app then picks a random meal to replace curry but keeps all the others as is.  
- We could add functionality that lets end users enter their own meals and store them in the app (We may need to start thinking about linking the app up to a database at this point)

## Actions
To build the Meal Planner Web App, follow these actions in order:
_If you'd like to pick up a task feel free to edit the readme and put your name next to the task_

- [x] Create a boilerplate `index.html`.
- [x] Set up basic CSS styling.
- [ ] Create a vanilla JS script.
- [x] Create a catalogue of recipes using JavaScript classes.
- [ ] Implement the "Pick Random Recipe" functionality.
- [ ] Add a weekly meal planner feature.
- [ ] Test the app thoroughly and fix any bugs.
- [ ] Deploy the app to a hosting service.

## Getting Started
To run the Meal Planner Web App locally, follow these simple steps:

1. Prerequisites:
- Make sure you have a web browser installed on your computer. We recommend using the latest versions of Google Chrome, Mozilla Firefox, or Microsoft Edge for the best experience.
- Install a code editor of your choice. We recommend Visual Studio Code (VSCode), which offers excellent support for web development.
- If you want to see live updates to the web app within the text editor check out the many live server extensions within VSCode.  

2. Clone the Repository:
- Clone this repository to your local machine using the following command in your terminal or command prompt:
```bash
git clone https://github.com/your-username/MealPlannerApp.git
```

3. Navigate to the Project Directory:
- Open the cloned repository folder in your code editor.

4. Run the App:
- If you're using Visual Studio Code, you can utilize the "Live Server" plugin for easy local development:
  - Install the "Live Server" plugin by going to the Extensions view (Ctrl+Shift+X) and searching for "Live Server." Click "Install" to add the extension to VSCode.
  - Once installed, right-click on the index.html file and select "Open with Live Server." This will automatically launch the app in your default web browser, and any changes you make will be automatically updated in the browser.
Alternatively, you can manually open the index.html file in your web browser by double-clicking on it.

5. Start Planning Meals:
- Now, you can use the web app to pick random recipes and plan your weekly meals! Click the "Pick Random Recipe" button to get started.

## Contributing
We welcome contributions to enhance the Meal Planner Web App. If you have any suggestions, improvements, or bug fixes, please feel free to submit a pull request. For major changes, please open an issue first to discuss the proposed changes.

## License 
This project is licensed under the [MIT License](https://en.wikipedia.org/wiki/MIT_License) see [LICENSE](./LICENSE) for further details
