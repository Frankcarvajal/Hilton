# Hilton Review

[Deployed Netlify Hilton App](https://hilton-hotels.netlify.com/login)

This applicaton does work in Chrome, but I coded it locally with Firefox.

# The Challenges:

*The first assessment*, given plenty of time to tweak with CSS and make pixel perfect, I could match this mock. I've matched hundreds of mocks at my last company for entire RealEstate SaaS platforms designed by a prior Google/Apple Designer. I went for building mre than building less & just one small thing. Though this goes against my typical development practices daily which is very thorough, I wanted to show inititive.

*The second assessment*, I definitely would love to refactor this, and I think there are some cleaner ways to do this with a functional components simply broken out and using hooks. I did use localStorage and it does persist a full page reload for the various selections of the form.

*Both assessments*, Daily I to TDD and typically write tests with components, and I don't just test if it renders, I actually test the logic to be what the user expects. But this takes time to produce quality, and in this assignment, I didn't have near the amount of time I wanted to put forth. And at some point I had to just throw the towel in and say 4hrs is all I have to give for now.

*I'm thorough, and this small code challenge doesn't reveal that like I would hope to.*

## Tech Stack

**React via CRA** StandardJS coding style

**@reach/router** More accessible vs RRv4 & still written by pal Ryan

**Redux** Could use React Context, if this was with hooks and more time, or MobX if team is into observables.

**Jest/Enzyme** Though not TDD in this go, typically TDD for each component I build in real time. Perhaps Cypress or Selenium with SQA ids for automation if there is a QA team.

**prop-types/flow** This could have been TypeScript depending on expectations

 **lodash** This could have been made internal vs package if more time.

**Styled Components**

**classnames**


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
7. Scaffolded Enzyme **UNIT Tests**, but didn't get to work on them. Started shallow with Address but time ran out, and I wanted to do README documentation.

# If I had more time!

1. I'd clearly refactor DynamicForm to not be a hacky/dirty fast solution
2. JEST/ENZYME UNIT TESTS, boy did I want to spend the duration of this 3-4 hrs writing unit tests in Jest for each component, but I wanted to focus on the large picture capability.TDD & Unit Tests are a must. I'd definitely use Jest/Enzyme, or Cypress depending on the use case. Maybe even sqa ids with selenium to automate the UI node testing via CLI.
3. Make everything actually responsive and mobile first. I didn't spend time on CSS Media Queries as much as I wanted.
4. Comments are key. I would have spent more time providing comments as I was coding, to make the code further readable, clean, and easy to pickup by any other devs.
5. Clean code. I would refactor, make class components that have basic state functional and add some Hooks!
6. Perhaps I may have spent less time having fun and more time actually doing the requirements > . <
