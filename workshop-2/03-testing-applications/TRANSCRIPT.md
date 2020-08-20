# Table of contents

* What testing code means
* Why testing code is important
* Test Driven Development (TDD)
* End-to-end (e2e) tests
  * What are e2e tests
  * Cypress as an e2e testing tool
  * Cyress - Graphical User Interface
  * Outlook into the future: @dhis2/cli-utils-cypress
* Unit tests
  * What are unit tests
  * Jest as an unit testing tool
  * Simple jest test
  * Testing Reactjs component: Enzyme
  * Testing Reactjs hooks: @testing-library/react-hooks
    * `renderHook`
    * With context
    * `act` & `waitForNextUpdate`
* Code sandbox examples don't work in FF but in Chrome

# What testing code means

Everytime we write code, it's normal that we don't spot all the typos or edge
cases that will cause bugs occuring on the end user side. Especially when
changing existing code that the developer hasn't worked with before, it's near
to impossible to know every possible scneario the code has to handle.

In order to make refactoring easier and to prevent user facing bugs, the code
can be tested with testing tools to make sure the errornous parts are reduced
to a minimum.

This can be done by testing bits and pieces of the code or testing the entire
stack. When testing the smallest parts of the code, e. g. functions and
classes, the tests make sure that for a given input or state the function or
class will return an expected value or that components render expected html.

Testing entire apps will ensure that the app works in the intended way while
not testing any code directly. Tools that help testing apps open a browser and
click or type just as a user would do.

Of course apps and code could be tested manually, but that's a cumbersome and
time consuming task. Without a dedicated team, manual testing is unreliable.
That's why tools can be used to automate these tasks, adding robustness to the
app while reducing the burden on the quality assurance team.

# Why testing code is important

Writing tests does take more time than simply writing the code, which is why
it's often seen as a hurdle. But offers several benefits that make adding
tests worthwhile.

By covering the app and code with tests, the amount of user facing bugs and the
time to confirm and fix bugs is reduced. Additionally the time it takes to get
back into the development flow is reduced as developers don't have to handle
unexpected issues.

#### At dhis2

This is especially true for apps that are going to be used by dhis2 instances,
as what's normally being handled is critical, health related information.

Testing apps can make a difference in data collection and display, so covering
apps by both core developers as third party developers is a very important, yet
often overlooked aspect.

At dhis2 this has been a topic that we have not addressed properly for way too
long. Roughly a year ago we started adding tests to our apps and libraries and
see and appreciate all the benefits this adds to our daily routine.
It feels a lot safer to work on apps as we know that all the functionality that
we covered with tests stays intact.

# Test Driven Development (TDD)

Additionally to just covering code with tests after the code has been written,
there are several alternative approaches.
One of these is called test driven development or just TDD. This means that
tests are being written before the actual code, which adds the benefit that the
developer has to think about the final structure and logic before writing code
that she or he has to change eventually again while making up the structure on
the go.

# End-to-end (e2e) tests

As mentioned, there are different levels of an app that can be tested. One of
these is called End-to-end tests. We'll go through what end to end tests are
and what tools we use at dhis2 to implement these tests.

## What are e2e tests

End to end tests don't test actual code. They instead try to test the entire
product from beginning to end to ensure the application flow behaves as
expected.

In other words: An application is tested from one end to the other, which of
course includes the user's perspective.

## Cypress as an e2e testing tool

The tool that we use at dhis2 is called cypress. We will not cover how to use
cypress during this workshop, but I want to give you a quick overview over this
software so you can look into it yourself if you're interested.

Cypress is a cli tool with a graphical user interface for development. It opens
the app inside the browser and clicks or types on elements that a user would
interact with as well.

Between the interaction steps the software performs checks to test whether an
interaction has caused the app to perform a desired change.

With the graphical interface every step of the test can be inspected, this
includes the DOM in the developer tool's dom explorer as well. This is quite
handy when developing tests as it's easy to see why a test is failing.

## Cyress - Graphical User Interface

#### Screenshot 1 - GUI Test overview

The graphical user interface will show all available tests as well as a
dropdown in the upper right corner which you can use to choose a different
browser. We're using the default browser, called electron, which uses chromium
under the hood.

On the image you can see some of the tests that use to test our UI library
components, like the AlertBar or Button.

#### Screenshot 2 - GUI Test run Transfer

On this screenshot you can see the tests for the Transfer component being
executed. We're testing one specific feature here which is allowing the user to
highlight options with key combinations like clicking with ctrl, command or
shift.

In the center you can see the actual component that's being tested. On the
right hand side are the developer tools which can be used to inspect the
current state of the HTML at any state of the test.

This allows to write tests relatively quickly and comfortably.

#### Screenshot 3 - GUI Test Failure

If one of the tests fail, cypress will provide details about what went wrong.
It will let you know about the origin of your error, might might come from the
application or the test code itself.

In case an error occurs, you can see the console output and inspect the dom at
the time the error occurred. This is what makes cypress such a powerful tool
and is one of many reasons why we'll will increase the test coverage of our
apps with cypress and our own cli utilities that extend the functionality of
cypress.

#### Screenshot 4 - Feature file code

The test that you just saw in the previous screenshot is describe in this file,
a so called feature file which is divided into scenarios.

As you can see, this is more or less normal English, which is another advantage
of using these type of tests as even non-developers are able to read what the
software should be capable of.

If this is interesting to you, I have included a couple of links that might be
interesting to you if you want to get started with cypress while waiting until
we've released a stable version of our cypress utility tool!

## Outlook into the future: @dhis2/cli-utils-cypress

In the future we'll provide utilities so you can use cypress the same way we
do. These will include utilities to test dhis2 specific logic and automatically
comes with support for feature files. These are a specific format to describe
the specifications of the software in a natural language, like English.

But this tool is currently in development and heavy subject to change, so if
you decide to use it, use it with caution as things might change.

# Unit tests

Another way of testing code is to test the smallest parts of the code. This is
what we'll have a look at today and what the exercises later will be about.

## What are unit tests

As mention in the introduction, with unit test we can test the smallest units
of the code, like functions or classes and their methods.

These are very light weight tests, so it takes a fairly low amount of time to
run these. This allows us to integrate these tests into our daily workflow,
like in the git pre-commit hook, which ensures that code that doesn't pass
tests can be added to a codebase.

This is especially useful when changing existing code. If the changed code will
produce an unwanted behavior in a part of our code that hasn't been touched,
this might be caught with these tests before it ever makes it into production.

Michael Lynch says in his blog posts about why good developers write bad tests
that "a good unit test is often small enough that a developer can conceptualize
all the logic at once".

## Jest as an unit testing tool

A very common tool to write unit tests with is called jest. It developed and
maintained by facebook's developers and contains a complete package to write
unit tests for javascript projects.

It's widely used, so for functionality that's not covered by jest itself, like
testing react components, there's a solution that covers the missing part, like
enzyme, which is a react component testing library developed by AirBnB.

#### Screenshot 1 - Jest tests running

Jest allows you to run tests in your terminal, which is way faster than using
cypress. In the screenshot you can see that 164 tests were executed in just 4
seconds.

#### Screenshot 2 - Jest test failure

When a test fails, jest will tell you what exactly went wrong as well. In this
case, the test expected only valid emails to be passed to the email validator
function. The description assiciated with this test states: "should return
undefined for value 'I am not a valid e-mail addres' of type string".

Obviously "I am not a valid e-mail address" is not a valid e-mail address, so
this test fails for a good reason.

Jest also caches its results, so if a test and all its related files have not
changed, it treats the tests as having passed, which is why it only took a bit
more than 6 seconds to run 486 tests on my computer.

## Break announcement

After the 5 minute break we will get into how to use jest for both standard
javascript code as well as react specific code like components and hooks.

### Simple jest test

Let's have a look at what a typical jest test can look like.
Here you can see a function called getLabelByType.
It expects an objects as the first and only argument.
That object should have a type property.

If the value of the type is handled by the function, it will return a human
readable label. For example if the type of "top", then the function will return
"premium tier".

If the type is not recognized by the function, it simply returns the type
itself.

And in case no argument is provided or the provided argument does not have a
type propery, an error will be thrown.

```js
function getLabelByType(instance) {
  // if instance if not an object
  // or if the type property is missing
  if (typeof instance.type === 'undefined') {
    throw new Error(`
      No "type" property on instance,
      instance is of type ${typeof instance}.
    `)
  }

  if (instance.type === 'top') {
    return 'Premium tier'
  }

  if (instance.type === 'mid') {
    return 'Top tier'
  }

  if (instance.type === 'low') {
    return 'Value tier'
  }

  return instance.type
}
```

Now let's have a look at how this function can be tested with jest.
There are different ways how to set up jest tests. The most common way, that we
use at dhis2 as well, is using the `describe` and `it` functions.

`describe` functions could cover once scenario of the code that should be
tested while the `it` functions test one particular aspect of the scenario.

Here you can see that the describe function expects two arguments. The first
argument is a string that describes the scenario.

The second argument is a function that will contain all the indivudual tests
of the aspects with the `it` function

```js
// one describe block
describe('getLabelByType', () => {})

// multiple describe blocks
describe('getLabelByType - Handles types', () => {})
describe('getLabelByType - Edge cases', () => {})
```

The `it` function has the same structure as the `describe` function.
It expects a string as first argument that describes the aspect. Normally this
includes the expected outcome as well as a condition, like "it should return
the premium label when the type is 'top'"

The second argument is a function that will contain the actual test code.

```js
describe('getLabelByType', () => {
    it('should return the premium label when the type is "top"', () => {})
    it('should return the top tier label when the type is "mid"', () => {})
    it('should return the value tier label when the type is "low"', () => {})
    it('should return the type value if the type is unknown', () => {})
    it('should throw an error if the ')
})
```

Most tests are quite simple. The actually returned value for a certain input is
compared with an expected return value.

jest provides the `expect` function which can be used to make assertions.
In this example you can see that the variable with the name "actual" contains
the return value of the function when called with an object with type "top".

The variable "expected" has a static value, which is what the function should
return if it worked correctly, which is "Premium tier" in this case.

The actual value is then passed to the `expect` function, which has some
utility functions to make comparisons. In this case the return value should be
the expected value.

For better readability I created the variables `actual` and `expected`, but you
could pass the function call and expected value directly to the jest helpers.

```js
import { getLabelByType } from './getLabelByType'

    // ...

    it('should return the premium label when the type is "top"', () => {
        const actual = getLabelByType({ type: 'top' })
        const expected = 'Premium tier'
        expect(actual).toBe(expected)
        
        // alternative, shorter, implementation:
        expect(getLabelByType('top')).toBe('Premium tier')
    })

    // ...
```

## Testing Reactjs components: Enzyme

Another great tool that was mentioned briefly earlier is called enzyme. It's
the standard library for testing react components.

In this example you can see that enzyme is used to render a component and then
check if it has both the "my-class-name" and "another-class-name" classes.

The first check will return true while the second one obviously will return
false.

A link to the documentation is included both in the academy's course
description as well as in the comments in the codesandbox environments that you
will use later when working on the exercises.

```js
import React from 'react'
import { mount } from 'enzyme'

const Component = () => <span className="my-class-name" />
const mounted = mount(<Component />)

mounted.hasClass('my-class-name') // true
mounted.hasClass('another-class-name') // false
```

## Testing Reactjs hooks: @testing-library/react-hooks

As react has introduced hooks since version 16, and these work different than
normal functions under the hood, a specialized tool is required to test these
without too much effort.

One of these tools is called react hooks testing library.

### `renderHook`

One of the functions that this library provides is called `renderHook`.
It expects a function that will call the hook and then returns whatever the
hooks returns.

`renderHook` returns an object with the `result` property. This is just the
return value of the `useRef` hook for those who are already familiar with
react's hooks.

That means that whatever the actual hook returned is stored in the `dot
current` property.

In this example you can see that the function passed to renderHook returns
whatever `useState`, a hook provided by react itself, returns.

When logging `result dot current`, you can see that it contains what `useState`
always returns: an array with the current value and a function to change the
current value.

```js
const { result } = renderHook(() => {
  return useState({ property: 'value' })
})

// will print the obect "[{ property: 'value' }, Function]"
console.log(result.current)
```

### With context

If you're already familiar with react's context functionality, which the app
runtime uses under the hood as well, you might end up with custom hooks that
make use of the context.

Just as you would wrap an app with the app-runtime's provider, you can also
wrap the hook that you want to test with a component that sets up the context
as shown in this example.

It's not necessary to remember all of this, there are links to the official
documentation in the example codesandboxes as well as in the academy course
exercise pages.

The exercises with context are bonus exercises anyways as this is already an
advanced topic.

```js
const wrapper = ({ children }) => (
  <Context.Provider value={42}>
    {children}
  </Context.Provider>
)

const { result } = renderHook(() => useCounter(), { wrapper })
```

You can even have a wrapper that accepts properties so you don't have to create
a new one in every tests.

```js
const wrapper = ({ children, number }) => (
  <Context.Provider value={number}>
    {children}
  </Context.Provider>
)

const { result } = renderHook(
  () => useCounter(),
  {
    wrapper,
    initialProps: {
      number: 42,
    },
  }
)
```

### `act` & `waitForNextUpdate`

Now we're getting into the really advanced parts of testing react hooks.
The state that hooks return often changes over time, for example when using the
`useDataQuery` hook, the loading, error and data states will change, depending
on the request made.

To gain control over testing a hook at a certain point of time, the testing
library also provides the `act` function, which can be used to call functions
returned by the hooks, like refetch.

The return value of the `renderHook` call also contains a function call
`waitForNextUpdate`, which, when called, returns a promise that will fulfill
once the return values of the hook have changed.

With the async and await key words, that Austin demonstrated briefly yesterday,
you can wait for the changes to have happened and then make assertions of the
altered state.

In this example you can see that a custom hook called `useCounter` is being
tested.

The initial state of the counter is zero. But it also returns a function called
`increment` which should increase the counter by one.

With the `act` function, we can first call the increment funciton and then wait
for the state changes.

The counter value should then be one instead.

```js
const useCounter = () => {
  const [counter, setCounter] = useState(0)
  const increment = () => setCounter(counter + 1)
  return { counter, increment }
}

it('should', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useCounter())
  expect(result.current.counter).toBe(0)
  
  // perform an asynchronous action
  await act(
    async () => {
      result.current.increment()
      await waitForNextUpdate()
    }
  )

  expect(result.current.counter).toBe(1)
})
```

### Executing platform app tests

When you're working on a platform app, built with the tools that we've explored
during the first workshop, you don't have to add or configure jest, it's
included in the app platform scripts.

Once you have added tests, you can simply run either `yarn test` or `npm test`.
This will run all your tests and print the result on your console.

If you don't change jest's default configuration, you'll have to add the `dot
test dot js` or `dot spec dot js` file extensions to your test files.
