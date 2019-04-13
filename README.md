# Hilton Review

[Deployed Netlify Hilton App so that whoever reviews can just click this, then just review code.](https://hilton-hotels.netlify.com/)

## What I was able to do

I scaffolded a React App from scratch using tools specific to this position.
Hilton Hotel App has some pretty cool features:

1. A login view & user logout to mock auth
2. Share Feedback allows a user to fill out feedback on various Hilton hotels prior booked
3. Hotel Reviews allows a user to review the average reviews of a Hilton hotel
3. Hotel Reviews allows a user to review the average reviews of a Hilton hotel
4. Hotel Details although not the same view as the mock, allows a user to select a Hilton hotel and see specific details: The name, the address, & the phone number
5. Form although not refactored or done correctly logic wise, works to meet the requirements. It was the last thing I did.
6. Components shows a view of various components used that I created for this code challenge

## If I had more time

1. I'd clearly refactor DynamicForm to not be a hacky/dirty fast solution
2. UNIT TESTS, boy did I want to spend the duration of this 3-4 hrs writing unit tests in Jest for each component, but I wanted to focus on the large picture. Unit Tests are fun, but I didn't want it to limit me from completing the assignment. I'd definitely use Jest, maybe Enzyme, maybe puppateer or Cypress depending on the use case maybe even sqa ids and selenium to automate the UI testing.
3. Make everything actually responsive and mobile first. I didn't spend time on CSS Media Queries as much as I wanted.
4. Comments are key. I would have spent more time providing comments as I was coding, to make the code further readable, clean, and easy to pickup by any other devs.
5. Clean code. I would refactor, make class components that have basic state functional and add some Hooks!
6. Perhaps I may have spent less time having fun and more time actually doing the requirements > . <

## Tech Stack

React via CRA, StandardJS coding style, @reach/router (more accessible vs RRv4 & still written by pal Ryan), classnames, flow-bin, lodash, prop-types, Redux, & Styled Components

### Updates to tech stack:
I would probably try to encapsulate some log, perhaps not use lodash and instead create my own getters or setters internally,
