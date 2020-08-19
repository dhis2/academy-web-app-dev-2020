# Making generic DHIS2 apps

Some handy links:

-   [Presentation Slides](https://docs.google.com/presentation/d/1OHwNn4TABl4dRoTTAAmyDw3GQo41HGgmAZ4MaTzbTmo/edit?usp=sharing)
-   [Data Store API Documentation](https://docs.dhis2.org/2.34/en/dhis2_developer_manual/web-api.html#data-store)
-   [User Data Store API Documentation](https://docs.dhis2.org/2.34/en/dhis2_developer_manual/web-api.html#user-data-store)
-   [App Service Data Store GitHub repo](https://github.com/dhis2/app-service-datastore)
-   [i18n repo](https://github.com/dhis2/d2-i18n)
-   [Data Store Management App](https://play.dhis2.org/dev/dhis-web-datastore/index.html#/)

## Quiz 1 - Generic app development quiz

1. Which of the following points makes a DHIS2 app fully generic (select multiple)?

    - [ ] It runs on any operating system
    - [ ] It works on supported DHIS2-core versions
    - [ ] It works on all web-browsers
    - [ ] It does not contain any hardcoded IDs
    - [ ] It has support for localisation
    - [ ] It is fully responsive and works on any screen size

2. If a custom DHIS2 app needs to store some **user preferences**, what would be a suitable place to store these (select one)?

    - [ ] In a dedicated database table
    - [ ] In the data store
    - [ ] In the user data store
    - [ ] Store this as a data element

3. If a custom DHIS2 app needs to store some **DHIS2-core instance** specific information, what would be a suitable place to store that (select one)?
    - [ ] In a dedicated database table
    - [ ] In the data store
    - [ ] In the user data store
    - [ ] Store this as a data element

4) What kind of elements are allowed to store in the data store (select one)?

-   [ ] Object
-   [ ] Array
-   [ ] String
-   [ ] Boolean
-   [ ] Strings
-   [ ] All of them

5. Is it possible for the app to reserve a namespace (select one)?

-   [ ] Yes, using the app manifest
-   [ ] No, and there is no specific access required to use it

## Exercise 1 - A localised app

Open [the `translations` CodeSandbox](https://codesandbox.io/s/github/dhis2/academy-web-app-dev-2020/tree/master/workshop-2/02-generic-dhis2-apps/translations?file=README.md) and follow the instructions in [the README](./translation/README.md)

> **NOTE** : Don't forget to fork the sandbox!
