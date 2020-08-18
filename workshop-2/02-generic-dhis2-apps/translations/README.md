## Workshop 2 - i18n task

### Add i18n to a small app

This application has some hardcoded strings in the English language, but it needs to support multiple locales. So you have two tasks:

1. Make these strings translatable using `@dhis2/d2-i18n`
2. Add translations strings for another locale

#### Tips

-   You will need to use interpolation, [see i18Next docs](https://www.i18next.com/translation-function/interpolation) for more information
-   After you have made the hardcoded strings translatable (step 1), you can run `yarn start` again and some folders will be created for you which you can use for step 2.
-   If you would like to see the results the translated strings in action for the language you just added, you can go to the user-profile-app and set the current-user's UI Locale to the language you've just added (but please don't do this if you are using a dhis2-core instance at `play.dhis2.org` because this will inconvenience others).
