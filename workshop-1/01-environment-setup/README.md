# Initial Environment Setup

## Pre-requisites

1. Install [Node.js](https://nodejs.org/en/download/)
2. Install [Yarn](https://yarnpkg.com/getting-started/install)

## Install the DHIS2 CLI

```sh
yarn global add @dhis2/cli
d2 help
```

## Initialize a new DHIS2 app

We'll use the [d2-app-scripts init command](https://platform.dhis2.nu/#/scripts/init) to create a new DHIS2 app

```sh
d2 app scripts init my-app
cd my-app
ls
```

> **NOTE** If you call `d2 app scripts init my-app`, a new directory will be created at `./my-app` with a pre-populated `package.json`.  You can also run `d2 app scripts init .` to upgrade an existing app in the current directory.

**OR, if you don't have `d2` installed globally**

```sh
npx @dhis2/cli-app-scripts init my-app
cd my-app
ls
```

## Set up code-style wtih DHIS2 style

The `d2` cli includes a tool for checking and fixing the style of javascript and text files in your repository.  The tool, called [d2-style](https://cli-style.dhis2.nu/), runs [`prettier`](https://prettier.io/) and [`eslint`](https://eslint.org) under the hood with [a standardized configuration](https://github.com/dhis2/cli-style/tree/master/config/js).  It also installs git hooks with [husky](https://github.com/typicode/husky) which will automatically check your code style before making a `git` commit!

Following the DHIS2 styleguide isn't strictly required, but it can be very helpful in ensuring you write clean, readable, and functional code for your DHIS2 apps!

> You can use [this sandbox](https://githubbox.com/dhis2/academy-web-app-dev-2020/tree/master/workshop-1/01-environment-setup/my-app) for the rest of these steps

```sh
d2 style install project/react
```

**OR, if you don't have `d2` installed globally**

```sh
npx d2-style install project/react
```

This will set up the project to automatically follow the DHIS2 style guidelines

## Add lint and format scripts

```sh
yarn add --dev @dhis2/cli-style
```

Then, add the following scripts to `package.json`:

```js
// package.json
{
    // ...
    "scripts": {
        // ...
        "lint": "d2-style js check && d2-style text check"
        "format": "d2-style js apply && d2-style text apply"
    }
}
```

And try out your new scripts!

```sh
yarn lint
yarn format
```
