# Mushroom Collection App MVP

## Core Value Proposition:

The app should help users identify, track, and document mushrooms they find in nature. It should also allow users to share their discoveries and get feedback from the community.

## Actor:

The primary user of the app would be mushroom enthusiasts—ranging from beginners to experts—who want a simple way to log their discoveries and get identification help.

## MVP Features:

- **Mushroom Identification**: Users can upload photos or descriptions of mushrooms they find, and the app suggests possible species based on the information.
- **Geo-Tagging**: Each entry should allow users to log the exact location of where they found the mushroom via GPS.
- **Personal Log**: Users can maintain a log of their collected mushrooms, with dates, species, and notes.
- **Safety Warnings**: Include warnings about poisonous species based on user-uploaded data.
- **Simple Sharing Feature**: Allow users to share their logs or specific mushroom finds with friends.

---

## User Story Template Example:

### Title

User logs a new mushroom discovery

### Value proposition

As an outdoor enthusiast,  
I want to log a mushroom I found in the forest,  
So that I can keep track of it and get help identifying it later.

### Description

- User takes a picture of the mushroom
- The app automatically geo-tags the location
- User can add notes about the environment and mushroom features (color, size, etc.)
- The app suggests possible species based on the input data

### Acceptance criteria

- [ ] Picture and geo-tag are required for submission
- [ ] The app suggests a list of possible species based on the mushroom database
- [ ] Data is saved in the user's personal log
- [ ] User gets an alert if the species is poisonous

### Tasks

- [ ] Set up a basic UI for mushroom logging
- [ ] Integrate a map for geo-tagging
- [ ] Build the mushroom database and identification logic
- [ ] Develop the personal log page
- [ ] Implement a sharing feature for logs
