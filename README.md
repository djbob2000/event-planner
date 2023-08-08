# Even Planner

### Test task for "Softryzen"

[LIVE DEMO PAGE](https://djbob2000.github.io/event-planner/)

## Technologies

Project is created with:

- React
- Redux Toolkit
- Redux persist

## Setup

To run this project, install it locally using npm:

```
$ cd ../event-planner
$ npm install
$ npm start
```

## Task

The Event Planner should have the following pages:

1. Home Page: Users can view a list of upcoming events.
2. Event Creation Page: Users can fill out a form with necessary event
   information such as name, date, time, location, description, etc.
3. Event Page: Detailed information about a specific event is displayed.
4. For the high complexity level, an additional page is added:
   - Event Edit Page: Users can edit the filled-out form with event information
     like name, date, time, location, description, etc.

#### Basic Complexity Level:

- Home Page: List of upcoming events with basic information (name, date, etc.).
  Use CSS Grid for event listing.
- Event Creation Page: Form for filling out necessary event information (name,
  date, time, location, description, etc.). After filling the form, users can
  create the event. The event image can be default or a backend-provided link.
  The relevant event field will be either disabled or active.
- Event Page: Detailed information about a specific event, including all the
  information from the event creation page.

#### Intermediate Complexity Level:

- Home Page: Everything from the basic level. Add the ability to filter events
  by categories (e.g., music, sports, culture, etc.).
- Event Creation Page: Everything from the basic level. Expand the event
  creation form by adding the option to select a category.
- Event Page: Everything from the basic level. Add the ability to delete an
  event. Upon deletion, the user is redirected to the home page.

#### High Complexity Level:

- Home Page: Everything from the intermediate level. Events with different
  priorities are displayed in different colors (use a priority indicator on the
  card).
- Event Creation Page: Everything from the intermediate level. Add the ability
  to set the event priority (e.g., high, medium, low).
- Event Page: Everything from the intermediate level. Add the ability to edit an
  event. When the Edit button is clicked, the user is redirected to the event
  edit page, where they can modify the filled-out form with event information
  like name, date, time, location, description, etc. After editing, the user is
  redirected back to the event page.

#### Additional Ideas for Inspiration:

- Event Sorting: Add the ability to sort events by various criteria, such as
  name, date, or priority.
- Event Search: Add the ability to search for events by name or description
  using an input in the header. Search should occur character by character.
- Pagination on the home page.
- Multilingual Support: Add the ability to choose a language (use
  react-i18next).

#### Execution Requirements:

- Fixed-width layout in pixels (px).
- Semantic and valid markup, with a focus on accessibility (a11y) as a bonus.
- Responsive and cross-browser design: mobile from 320px, tablet from 768px,
  desktop from 1280px.
- Utilize the Mobile First approach.
- Maintain clean code with formatting preserved. Using ESLint/Prettier is
  recommended.
- Code divided into separate components.

Design of Application
(https://www.figma.com/file/HxMha50XQyTUVGxOsIgDrM/Event-Planner_%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%B5?node-id=0%3A1&mode=dev)
