# Tutorial 4

React Server Components (RSC)

RSC is a new architecture that was introduct but react team and adopted by Next.js

Intro an approach to creasting react components by dividing them into 2 distinct types
- Server Components
- Client Components

## Server Components
- By default, nextjs trates all components as server components
- these components can perform server-side tasks like reading or fetching data directly form a database
- the tradeof is that they can't use React hooks or handle user interactions
 
## Client components
- will need to add the `user client` directive at the top of your component file
- client components can't perform server-side tasks like reading files, they can use hooks and handle user interactions
- client components are the traditional react components you're already familiar with from previous version of react.

As we get into routing, we will see practical examples of both type

- work with server components that wait for certain operations to complete before rendering content
- use client components to take advantage of hooks from the routing module