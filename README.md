# EventSpark: Connecting People to Local Experiences (Front-end)

Welcome to EventSpark - your gateway to discovering, saving, and purchasing tickets for local events! This project presents a cutting-edge Vite-React website designed to connect users with experiences in their area. With an intuitive interface, EventSpark aims to redefine how users find and engage with local events.

## Table Of Contents

- [EventSpark: Connecting People to Local Experiences (Front-end)](#eventspark-connecting-people-to-local-experiences-front-end)
  - [Table Of Contents](#table-of-contents)
- [Introduction](#introduction)
    - [Overview](#overview)
      - [Tools Used](#tools-used)
  - [Setup](#setup)
    - [Installation](#installation)
  - [Demo](#demo)
  - [Live Link](#live-link)
  - [Authors](#authors)
    - [License](#license)
    - [Acknowledgments](#acknowledgments)
- [React + Vite](#react--vite)

# Introduction

This project uses Vite for development and React for the frontend. To get started, you'll need Node.js and npm (or yarn) installed on your system.


### Overview

- The page is built using HTML, CSS, and JavaScript. The following instructions will guide you on how to retrieve the code from GitHub, set it up on VSCode, and run it.


**File structure**

```
 src/
├── components/
│   ├── LoginForm.jsx
│   ├── EventForm.jsx
│   └── EventItem.jsx
├── styles/
│   └── index.css
├── App.jsx
└── main.js
```

#### Tools Used

- HTML5
- CSS3 / Bootstrap
- JSX /React


## Setup

you can download [vscode](https://code.visualstudio.com/download) to practice and code.

1. **Fork and Clone the Repository:**

   - Fork this repository on GitHub: [https://github.com/Dinah-Ngatia5/event-management-system.git](https://github.com/Dinah-Ngatia5/event-management-system.git)
   - Clone your forked repository to your local machine using Git:

     ```bash
     git clone (https://github.com/<your name>/event-management-system.git)
     ```

        Then, to open the project code files on VSCode, use the following command:
     
     ```bash
     code .
     ```

### Installation

1. Since the project is already hosted via vercel, open the link below to open the web application in the browser side.

[`Project`](https://event-management-app.vercel.app/)


2. You can also run the command below from the terminal side if you want to access the web app from the local host

- First open the cloned repository using VisualStudio Code and open the terminal, or directly open the terminal and write the following commands;

  ```bash
  cd 'name of the cloned repository, i.e event-management-app'
  ```

- Then to open the project code files on VS code, use the following command;

```bash
code .
```

- Then install all the node dependencies before running the application using the command;
  
```bash
npm install
```
  
- Then run the application using;
  
```bash
npm run dev
```

3. Open the link provided in the terminal from the web browser to also run the application


`i.e`
```bash
 http://localhost:5003/
```

- You can now successfully view the web application content via the browser.
Have fun being a front-end developer.


## Demo

The app, when run, should look as follows:

- Landing page

![Image Sample](src/assets/Landingpage.JPG)

- Login page

![Image Sample 2](src/assets/Loginpage.JPG)


- User dashboard

- [Image Sample 2](src/assets/Userdashboard.JPG)

## Live Link

- Below is a link to the actual deployed website.

    [Link](https://event-management-app.vercel.app/)



## Authors

- [`Josephine Nzioka`](https://github.com/SafnetCo2)
- [`Lameck Kambi`](https://github.com/LameckKambi)
- [`Collins Bett`](https://github.com/collinsbett023)
- [`Alfred Oriri`'](https://github.com/Oriri04)
- [`Dinah Ngatia`](https://github.com/Dinah-Ngatia5) - Repo i was working on[https://github.com/Dinah-Ngatia5/event-management-api](https://github.com/Dinah-Ngatia5/event-management-api)

**Additional Notes**

- Feel free to customize the application.

- Explore the codebase and experiment with adding new features or functionalities.

### License
This project is licensed under the [MIT License](LICENSE).
```
This project is licensed under the MIT License.
Copyright 2024 Lameck Kambi,Josephine Nzioka, Alfred Oriri,  Dinah Ngatia,  & Collins Bett.
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```


### Acknowledgments

I would like to express my gratitude to the following individuals and organizations for their contributions, support, and resources that have been invaluable in the development of the project.

- **Technical Mentor:** As a team we would like to acknowledge and appreciate our  technical mentor [`Mr Ian okumu`](https://github.com/otsembo) for his invaluable guidance throughout the project

- **Moringa School:** I appreciate [`Moringa school`](https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiK9-Tw_aKEAxU2QUECHcwOCDoYABAAGgJ3cw&ase=2&gclid=EAIaIQobChMIivfk8P2ihAMVNkFBAh3MDgg6EAAYASAAEgJSB_D_BwE&ohost=www.google.com&cid=CAASJORoHa2LLpPz846DBxVhhEyz_mIvcNnHZ_R4tWoL3IuSCcmYsA&sig=AOD64_04tJFd3Gstl7m-sNfbwiempwyFwg&q&nis=4&adurl&ved=2ahUKEwifmODw_aKEAxUhRKQEHaoDBq0Q0Qx6BAgFEAE) and its staff for guiding me and  providing me with the necessary resources to undertake this project.


- **React.js:** My development is built on the foundation of [React.js](https://react.dev/), which has been instrumental in creating a robust and scalable application.

- **GitHub:** I extend my thanks to [GitHub](https://github.com/) for providing an excellent platform for version control and collaboration, facilitating the open-source nature of our project.

- **Open Source Community:** A big shoutout to the broader open-source community for sharing knowledge, tools, and inspiration. This project stands on the shoulders of the collective expertise and passion that fuels the development community.
I am grateful for the support and collaborative spirit that makes the development journey enjoyable and fulfilling.

..............................................

..............................................

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
