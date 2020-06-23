# Initial Environment Setup

## Install node and yarn

...TODO

## Install the DHIS2 CLI

```sh
yarn global add @dhis2/cli
d2 help
```

## Initialize a new DHIS2 app

```sh
d2 app scripts init my-app
cd my-app
ls
```

> **NOTE** If you call `d2 app scripts init my-app`, a new directory will be created at `./my-app` with a pre-populated `package.json`

## Set up code-style wtih DHIS2 style

> You can use [this sandbox](https://githubbox.com/dhis2/academy-web-app-dev-2020/tree/master/workshop-1/01-environment-setup/my-app) for the rest of these steps

```sh
d2 style install project/react
```

This will set up the project to automatically follow the DHIS2 style guidelines

## Add lint and format scripts

```sh
yarn add --dev @dhis2/cli-style
```

Then, add the following scripts to `package.json`:

```js
{
    "scripts": {
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
