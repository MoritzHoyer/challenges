# User Stories for Mushroom Collection App

## 1. Title

User logs a new mushroom discovery

### Value proposition

As a mushroom enthusiast,  
I want to log a mushroom I found in the forest,  
So that I can keep track of it and review it later.

### Description

- User can take a photo of the mushroom
- App automatically geo-tags the location
- User can add personal notes about the mushroom

### Acceptance criteria

- [ ] A photo and geo-tag are required for the log
- [ ] Data is saved in the user’s personal log
- [ ] User can edit notes after saving the log

### Tasks

- [ ] Set up UI for mushroom logging
- [ ] Integrate geo-tagging functionality
- [ ] Develop personal log page

---

## 2. Title

App suggests possible mushroom species

### Value proposition

As a mushroom collector,  
I want the app to suggest possible species based on my uploaded photo,  
So that I can quickly identify the mushroom I found.

### Description

- After photo upload, the app analyzes features of the mushroom
- The app suggests species from a pre-existing database

### Acceptance criteria

- [ ] Photo upload triggers species suggestion
- [ ] Species list is shown based on features like color and shape

### Tasks

- [ ] Build mushroom species database
- [ ] Develop species suggestion algorithm
- [ ] Display species list in UI after identification

---

## 3. Title

User shares a mushroom discovery

### Value proposition

As a mushroom enthusiast,  
I want to share my mushroom discoveries with my friends,  
So that I can get feedback or identify it collaboratively.

### Description

- User selects a log entry to share
- App generates a shareable link to send to friends

### Acceptance criteria

- [ ] Sharing functionality is available for each log entry
- [ ] Friends can view the mushroom entry through the shared link

### Tasks

- [ ] Implement share button in log entry page
- [ ] Develop shareable link generation and sharing functionality
