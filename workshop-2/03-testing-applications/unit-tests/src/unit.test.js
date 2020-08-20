/**
 * =======
 * This file contains the unit test exercises
 *
 * Overview:
 *   * Exercise 1: Cover a function (getLabelByType) with tests
 *   * Exercise 2: Add functionality to the function based on existing tests
 *
 *   NOTE: The are more non-bonus exercises in the component.test.js!
 *   Bonus tasks:
 *   * Exercise 3: Test a function stub
 *   * Exercise 4: Test a react hook
 *
 * =======
 */

/*
 * This is the function that will be tested in this file.
 * @param {Object} instance
 * @returns {string}
 */
function getLabelByType(instance) {
  // if instance if not an object
  // or if the type property is missing
  if (typeof instance.type === 'undefined') {
    throw new Error(`No "type" property on instance, instance is of type ${typeof instance}.`)
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

/**
 * =======
 * Exercise 1
 *
 * This exercise is the exercise that was shown during the presentation.
 * You can have a loot at the slides if you want to see them.
 * One `it` block already has the solution as it was demonstrated as well.
 * =======
 */

describe('getLabelByType - Exercise 1', () => {
  // Solution from presentation
  it('should return the premium label when the type is "top"', () => {
    const actual = getLabelByType({ type: 'top' })
    const expected = 'Premium tier'
    expect(actual).toBe(expected)

    // alternative, shorter, implementation:
    expect(getLabelByType({ type: 'top' })).toBe('Premium tier')
  })

  it('should return the top tier label when the type is "mid"', () => {
    // @TODO: Test if the top tier label is returned when the type is "mid"
  })

  it('should return the value tier label when the type is "low"', () => {
    // @TODO: Test if the value tier label is returned when the type is "low"
  })

  it('should return the type value if the type is unknown', () => {
    // @TODO: Test if the type is returned when the type is not handled
  })

  // BONUS step!
  // it('should throw an error if the argument is not an object', () => {})
})

/**
 * =======
 * Exercise 2
 * =======
 *
 * TODO: You have to uncomment the following tests!
 *
 * This exercise is about getting a sense for Test Driven Development (TDD).
 * That means that tests are being written before the actual code.
 * In this case the tests already exist, only the functionality of
 * the `getLabelByType` function has to be extended.
 */
describe('getLabelByType - Exercise 2', () => {
  /*
   * This test covers the type "broken"
   */
  // @TODO: Uncomment the code
  // it('should return the broken tier label when type if "broken"', () => {
  //   const actual = getLabelByType({ type: 'broken' })
  //   const expected = 'Handyman\'s version'
  //   expect(actual).toBe(expected)
  // })

  /*
   * This test covers the "unusable" flag
   */
  // @TODO: Uncomment the code
  // it('should respect the unusable flag on the object', () => {
  //   const withoutFlag = getLabelByType({ type: 'broken' })
  //   expect(withoutFlag).toBe('Handyman\'s version')
  // 
  //   const withFalsyFlag = getLabelByType({ type: 'broken', unusable: false })
  //   expect(withFalsyFlag).toBe('Handyman\'s version')
  // 
  //   const withTruthyFlag = getLabelByType({ type: 'broken', unusable: true })
  //   expect(withTruthyFlag).toBe('Handyman\'s version (for desperates)')
  // })
})

/**
 * =======
 * BONUS EXERCISES
 *
 * These exercises are meant as additional challenges that you could work on
 * after the workshop if you want to dig deeper into the testing world with
 * jest or if you're participating during the workshop, and you're done with
 * the component tests, while there's still some time left.
 * =======
 */

/**
 * =======
 * BONUS Exercise 3
 *
 * In this exercise you need to check if the callback has been called the 
 * correct amount of times and if it has been provided with the specified
 * or default payload
 *
 * In order to get this done, you need to read about test setup and teardown.
 * You can find the docs here: https://jestjs.io/docs/en/setup-teardown
 * =======
 */
const callback = jest.fn()

const thirdExerciseFunction = (callback, times, payload = {}) => {
  for (let i = 0; i < times; i = i + 1) {
    callback(payload)
  }
}

describe('Test how many times the callback has been called', () => {
  // @TODO: You need to make sure the callback mock is reset,
  //        so counting the calls starts from 0 again for each test

  // @TODO: Uncomment the code
  it('should call the callback 5 times with a defined payload', () => {
    const payload = { key: 'value' }
    const times = 5

    thirdExerciseFunction(callback, times, payload)

    // @TODO: You have to assert that the callback has been called 5 times
    // @TODO: You have to assert that the callback
    //        has been called with the specified payload
  })

  // @TODO: Uncomment the code
  it('should call the callback 5 times with the default payload', () => {
    const times = 5

    thirdExerciseFunction(callback, times)

    // @TODO: You have to assert that the callback has been called 5 times
    // @TODO: You have to assert that the callback
    //        has been called with the default payload
  })
})

/**
 * ========
 * BONUS Exercise 4
 *
 * You can take a look at the documentation of the React Hooks testing library:
 * https://react-hooks-testing-library.com/usage/advanced-hooks
 *
 * Your task is to implement the actual hook based on the test code
 * ========
 */
import { renderHook, act } from '@testing-library/react-hooks'
import { useState } from 'react'

// TODO: Implement the hook's funcitonality
const useCounter = () => {}

describe('Testing a simple react hook', () => {
  // @TODO: Uncomment the code
  // it('should return the same counter that\'s provided initially', () => {
  //   const { result } = renderHook(() => useCounter(3))
  //   expect(result.current.counter).toBe(3)
  // })

  // @TODO: Uncomment the code
  // it('should increment the counter when calling the increment function', async () => {
  //   const { result, waitForNextUpdate } = renderHook(() => useCounter(0))
  //   expect(result.current.counter).toBe(0)

  //   // with "act" we can proceed the asynchronous hook
  //   await act(async () => {
  //     result.current.increment()

  //     // This will wait until the hook has returned different values
  //     await waitForNextUpdate()

  //     expect(result.current.counter).toBe(1)
  //   })
  // })
})
