# Personal website: [nathanqueija.tech](https://nathanqueija.tech)[![Build Status](https://travis-ci.org/nathanqueija/website.svg?branch=master)](https://travis-ci.org/nathanqueija/website)[![Coverage Status](https://coveralls.io/repos/github/nathanqueija/nextjs-react/badge.svg?branch=master)](https://coveralls.io/github/nathanqueija/nextjs-react?branch=master)

This is my personal website built with Next.js
Besides that, the most important part of this project is to setup a complete CI/CD cycle with Travis.
Test will be written using Jest, Enzyme and react-testing-library.
There is a simple droplet on Digital Ocean to run the application and the next step is to create a dockerfile with instructions to create a container and run the application.
Git hooks are managed by husky. Currently there is only a pre-push hook to run the tests.
