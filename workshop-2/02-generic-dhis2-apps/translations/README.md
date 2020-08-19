## Workshop 2 - i18n task

### Add i18n to a small app

This application has some hardcoded strings in the English language, but it needs to support multiple locales. So you have two tasks:

1. Make these strings translatable using `@dhis2/d2-i18n`
2. Add translations strings for another locale

#### Tips

-   You will need to use interpolation, [see i18Next docs](https://www.i18next.com/translation-function/interpolation) for more information
-   After you have made the hardcoded strings translatable (step 1), you can run `yarn start` again and some folders will be created for you which you can use for step 2.
-   If you would like to see the results the translated strings in action for the language you just added, you could do the following:
    - If you are logging in to https://academy.demos.dhis2.org/app-dev-academy:
        - Make sure you have added translations for `es` (Spanish). It doesn't matter if you don't speak Spanish, all that matters is that you are using different strings than the English ones.
        - Now logout using the menu in the header bar. Note that the logout redirect doesn't work in the sandbox, so you will have to refresh the page.
        - Now log in using a Spanish user I created earlier: username `user_es` password `Test123!`
    - If you are using a local dhis2-core instance:
        - Go to the user-profile-app
        - set the current-user's UI Locale to the language you've just added
