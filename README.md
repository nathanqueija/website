# Next.js simple project [![Build Status](https://travis-ci.org/nathanqueija/nextjs-react.svg?branch=master)](https://travis-ci.org/nathanqueija/nextjs-react)

This is a simple project built with Next.js
The aim of this project is to simple run a function than unflatten an array and show the result visually using React components.
Besides that, the most important part of this project is to setup a complete CI/CD cycle with Travis.
Test will be written using Jest, Enzyme and react-testing-library.
There is a simple droplet on Digital Ocean to run the application and the next step is to create a dockerfile with instructions to create a container and run the application.
Git hooks are managed by husky. Currently there is only a pre-push hook to run the tests.
