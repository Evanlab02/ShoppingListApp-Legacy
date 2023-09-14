# Frontend documentation

This is the documentation for the frontend of the project. It is created with [vite](https://vitejs.dev/) and [react](https://reactjs.org/) and is used to create a dashboard for the shopping list app. The entire front-end is not developed with only react and most of the pages will be using django-templates.

The reason we use react for the dashboard is because I am more familiar with react and really wanted the dashboard to fit a certain style. The dashboard is also the only part of the front-end that will be using react.

## Getting started

To get the front-end running on your machine you will need to have [node](https://nodejs.org/en/) installed. You can check if you have node installed by running `node -v` in your terminal. If you do not have node installed you can download it from [here](https://nodejs.org/en/).

Once you have node installed you can run `npm install` in the frontend directory to install all the dependencies. Once the dependencies are installed you can run `npm run dev` to start the development server. The development server will be running on http://localhost:5173.

As this front-end is still very early in development there is not much to see yet, and no need to setup proxy as the front-end is not yet connected to the back-end.

## Building the project

To build the project you can run `npm run build`. This will create a dist folder in the frontend directory. This dist folder can be used to serve the front-end with nginx or apache. We host it using Caddy.

## Why vite? Why React?

To try something new, also its really fast.

I am more familiar with react.

## Why not use react for the entire front-end?

I did not want to use react for the entire front-end because I really wanted to lean into django and use django-templates. I am already quite familiar with react so this was just for a bit of fun away from django.

## Developer documentation

Please find more docs here: [Developer documentation](./docs/README.md)
