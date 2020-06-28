# Overview
Hey Dan! 👋

Thanks for taking the time in reviewing this project. I had an awesome time working on it and was able to do some expirementation with infinite scrolling with the IntersectionObserver API. Below are some quick documentation on how to run the app and notes on decisions I made.

## Getting started
#### Installing dependencies
```
npm install
```

#### Running in development
```
npm run dev
```

#### Running in production
```
npm run build
```
```
npm run start
```

#### Running storybook
Storybook will run on port `3001`
```
npm run storybook
```

## Implementation notes
- Used Next.js as the framework to build the project on since it's amazing and has a lot of flexibility when it comes to modifying the build environment.
- Played around with the IntersectionObserver API to load more results once the user reaches the end of the page.
- Filtered content using Array.filter and String.includes. This is a quick implementation taking into account time constraint for the project.
- Add in lazy loading using IntersectionObserver to only load images that are visible on screen. (Alternative would be to use the new loading attribute with a polyfill)
- Accessibility testing was done through Storybook A11Y addon and Google Lighthouse

## Design notes
- Reduced heading between page heading and description to prevent it feeling like different sections
- Added in a label to the search field to provide context into the input field
- As for responsive, I reduced the avatar width and reduce the description text size.

## Things I'd like to add
- Search field is stickied to the top of the screen when scrolled and using IntersectionObserver to apply the styles when scrolling
- If this was pulling from an API, I'd add in a Skeleton component that mimics the overall layout but doesn't contain any data
- Add in a sidebar that adds in additional filters
- Add in typeahead and autofill
