# Catpanion

## Overview

This is a 3D pet productivity app with common tools provided to enhance the user's work session experience.

### Problem Space

Productivity apps are mundane these days and lack creative direction. On the other hand, people miss their cats that passed away or by working away from home. Bridging these two problems together resolves the absence of companionship whilst making work fun.

### User Profile

Users who want a stress-free, relaxing productivity app where they can enjoy the benefits of tools in one at their convenience, with the addition of having a virtual pet (cat) to accompany them.

### Features

- 3D Experience in a bedroom-like setting, with an interactive pet inside the space
- Tools: Todo list, Notes, Pomodoro Timer
- Music Player: Can access a lofi-themed playlist

### Installation

```
npm run dev
```

## Implementation

### Tech Stack

- Libraries: React, React three fiber
- Packages: React h5 Audio player
- Frameworks: Express
- Languages: HTML, CSS, Javascript
- Database: MySQL

### Sitemap

- Homepage - All the features are accessed in one single page.

### Mockups

Upon opening the site, the tabs are closed
![](src/assets/images/mockup_1.jpg)
With tabs and tools open
![](src/assets/images/mockup_2.jpg)

### Data

![](src/assets/images/mockup_datatable.png)

### Endpoints

**GET /:id**
Response Body Example

```
  {
    id: 1,
    user_id: "c8d04fa0-fb95-42c5-90e1-74021d1e6135",
    username: "earnestneptune",
    password: "apples287",
    todolist: [
      "Plan & Research Content Ideas",
      "Check Trends & Hashtags",
      "Engage with Audience (Comments, DMs, Replies)",
      "Schedule launch for new video",
      "Check client emails",
      "Create upcoming thumbnail for new video",
    ],
    notes:
      "Reacting to Viral Trends in Niche/24-Hour Challenge Doing Task Trying Trending Product/Service for a Week/My Honest Opinion on Popular Topic/Tier List of Products/Ideas in Niche",
  }
```

**POST /:id**
POST Body Example

```
  {
    "todolist": "Write article"
  }
```

Response Body Example

```
  {
    id: 1,
    user_id: "c8d04fa0-fb95-42c5-90e1-74021d1e6135",
    username: "earnestneptune",
    password: "apples287",
    todolist: [
      "Plan & Research Content Ideas",
      "Check Trends & Hashtags",
      "Engage with Audience (Comments, DMs, Replies)",
      "Schedule launch for new video",
      "Check client emails",
      "Create upcoming thumbnail for new video",
      "Write article"
    ],
    notes:
      "Reacting to Viral Trends in Niche/24-Hour Challenge Doing Task Trying Trending Product/Service for a Week/My Honest Opinion on Popular Topic/Tier List of Products/Ideas in Niche",
  }
```

## Roadmap

1. Build repository for client and server and initialize for both
2. Create React App
3. Create Tools Component
4. Create To do List
5. Create Notes Component
6. Create Pomodoro Component
7. Create 3D component, import three js fiber library
8. Import 3D objects, animations and rigging (asset pack)
9. Create idle state, walking, sitting, and playing
10. Create music player component with React H5 audio player, customize design
11. Build furniture, add to setting of 3D
12. Build database in MySQL
13. Connect database to front-end

## Future Implementations

- Change cat's appearance
- Make notes screen larger
- Custom animations and models built from scratch
- Clock linked to person's location
- Calculator as part of tools
- Color themes
- Light/Dark Mode
- Import Calendar
- Note Pages
- Settings icon for top right
- Based on user time, environment from the window will turn day or night
- Speech recognition to get the cat's attention and call them by their name
- Option to add up to 3 cats in the 3D scene
