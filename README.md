# Frontend Mentor - Fylo data storage component

![Design preview for the Fylo data storage component coding challenge](./design/desktop-preview.jpg)

## What is this?
This is my response to a front-end coding challenge from [Frontend Mentor](https://www.frontendmentor.io). Frontend Mentor provides great development challenges alongside beautiful designs, enabling you to build your skills using realistic projects.

I plan to take on most, if not all, of the free challenges in order from easiest (_'Newbie'_) to hardest (_'Advanced'_).

## The challenge
__Challenge #2__<br>
__Difficulty: Newbie__

This challenge was to build out an article preview component and get it looking as close to the design as possible.

Users should be able to:
- View the optimal layout for the component depending on their device's screen size

## My approach
I took a mobile-first approach, completing styling and layout for a 375px viewport width first. I then built out media queries to cater to larger widths.

I used __Sass__ for the first time to better utilise the `style-guide.md` provided.

When it came to populating the data, I wanted the bar graph representation to be accurate. I wrote some js to take two values (`storageTotal` and `storageUsed`) and calculate the real storage remaining in GB and %, then calculate the width of the bar graph accordingly.

The end product is hosted on Vercel - https://fylo-data-storage-component-chi-lake.vercel.app/


## Questions
I came out of this challenge questioning a few things about my approach:

1. How could I have structured my .js better? I also had trouble with jQuery `$(" ")` selectors not working in some functions but couldn't work out why..

2. How can I get more control over the bar animation and make it smoother?

Would love to hear any hot tips you might have! 🍻
