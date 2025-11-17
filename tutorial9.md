# Tutorial 9 - Catch all segments

- imagine a /doc page has multiple feature
- each feature has multiple concepts
- each concepts is 1 path

- /docs/feature1/concept1
- /docs/feature1/concept2
- /docs/feature2/concept1
- /docs/feature2/concept2

- Imagine if 20 features x 20 concepts = 400 pages?

We use dynamic routing
- 20 features x 1 [conceptId] = 20 pages

or

1 [featureId] x 1 [conceptId] = 1 page

# Implementation

1. Create a folder /docs/
2. Create another folder /docs/[...slug]

Load the url
`http://localhost:3000/docs/1/2/3/4/5/6/7` 
- you will realize that it catch all segments from the site

if you use /docs/[[...slug]]/page.tsx
```
return <h1>Docs Home Page</h1>; 
```

