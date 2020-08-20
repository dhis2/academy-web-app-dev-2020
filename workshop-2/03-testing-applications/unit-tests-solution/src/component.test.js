/**
 * =======
 * This file contains the component test exercises
 *
 * Overview:
 *   * Exercise 1: Cover a component (getLabelByType) with tests
 *   * Exercise 2: Add functionality to the component based on existing tests
 *
 *   NOTE: The are more non-bonus exercises in the unit.test.js!
 *   Bonus tasks:
 *   * Exercise 3: Set context values and test the outcome
 *   * Exercise 4: Compare props & shallow/mount rendering
 *
 * =======
 */

/**
 * This needs to be done.
 * Normally this would be done in the src/setupTests.js
 * For more information, please have a look a the docs:
 * https://enzymejs.github.io/enzyme/docs/installation/react-16.html
 */
import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
configure({ adapter: new Adapter() })

/**
 * =======
 * Exercise 1
 *
 * In this exercise an existing component should be covered with tests.
 * The individual `it`-blocks already exist but lack the testing-code.
 * =======
 */
import { mount } from "enzyme"
import { PropTypes } from '@dhis2/prop-types'
import React from "react"

/**
 * Just a very simple component
 * that will always render the same content
 */
const SpanComponent = () => <span className="i-am-a-span">Text!</span>

/**
 * This component renders as many `SpanComponent`s as instructed
 * By providing the `spanCount` prop, the amount of `SpanComponent`s can
 * be controlled
 *
 * <Component spanCount={4} /> will render four `SpanComponent`s
 */
const ExerciseOneComponent = props => {
  const { spanCount, className } = props
  const spans = []

  // This loop will iterate "spanCount" times
  for (let i = 0;
       i < spanCount;
       i = i + 1
  ) {
    // In every iteration, a "SpanComponent" is added to the "spans" array
    // The "key" prop is required by react when using arrays of components.
    const span = <SpanComponent key={i} />
    spans.push(span)
  }

  // The container will have the class name that's provided through the props
  // If "prop.className" is undefined (because it wasn't provided), no
  // class name will be added to the div
  return (
    <div className={props.className}>
      {// Render all spans in the array
        spans}
    </div>
  )
}

ExerciseOneComponent.propTypes = {
  spanCount: PropTypes.number.isRequired,
  className: PropTypes.string,
}

describe("Component tests", () => {
  it("shoud render three spans when the spanCount is 3", () => {
    const component = mount(
      <ExerciseOneComponent
        // This should make the component render 3 spans
        spanCount={3}
      />
    )

    // find all span by using the class name
    const spans = component.find('.i-am-a-span')
    
    expect(spans.length).toBe(3)
  })

  it('should add the class "container" to the component\'s container element', () => {
    const component = mount(
      <ExerciseOneComponent
        // This value is required, but irrelevant for this test, so using 0
        spanCount={0}
        // This should add the class name "container" to the the div element
        className="container"
      />
    )

    expect(component.hasClass('container'))
  })
})

/**
 * =======
 * Exercise 2
 *
 * In this exercise, similarly to the second exercise in the
 * unit.test.js, a component needs to be created based
 * on existing tests.
 * =======
 */

/**
 * This component will render a list of data elements
 * provided through the props
 */
const ExerciseTwoComponent = ({ dataElements }) => (
  <ul>
    {
      // renders a "li" for every data element
      dataElements.map(dataElement => {
        const { id, displayName } = dataElement

        return (
          <li key={id} className="data-element">
            {displayName}
          </li>
        )
      })
    }
  </ul>
)

ExerciseTwoComponent.propTypes = {
  dataElement: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
    })
  )
}

describe('Implement the component for the following tests', () => {
  const dataElements = [
    { id: 'id1', displayName: 'Data element 1' },
    { id: 'id2', displayName: 'Data element 2' },
    { id: 'id3', displayName: 'Data element 3' },
    { id: 'id4', displayName: 'Data element 4' },
  ]

  it('should have a "li" for every data element', () => {
    const component = mount(
      <ExerciseTwoComponent dataElements={dataElements} />
    )

    const dataElementLiElements = component.find('li.data-element')
    expect(dataElementLiElements.length).toBe(dataElements.length)
  })

  it('should use the id as key on each li element', () => {
    const component = mount(
      <ExerciseTwoComponent dataElements={dataElements} />
    )
    const dataElementLiElements = component.find('li.data-element')

    dataElementLiElements.forEach((element, index) => {
      expect(element.key()).toBe(dataElements[index].id)
    })
  })
})

/**
 * =======
 * BONUS EXERCISES
 *
 * These exercises are meant as additional challenges that you could work on
 * after the workshop if you want to dig deeper into the testing world with
 * jest or if you're participating during the workshop, and you're done with
 * the unit tests, while there's still some time left.
 * =======
 */

/**
 * =======
 * BONUS Exercise 3
 *
 * In this exercise the component that should be tested is using
 * React's context. In order to see if the component produces the right
 * output, the context value has to be overwritten.
 * =======
 */
import { useContext } from 'react'

// This context will have the default value: { language: 'English' }
const ExerciseThreeContext = React.createContext({ language: 'English' })

const ExerciseThreeComponent = () => {
  // Gets the context's value
  // If none has been set explicitly, the default value will be provided
  const { language } = useContext(ExerciseThreeContext)

  return (
    <p>
      The current language is:<br />
      <span className="language">{language}</span>
    </p>
  )
}

describe(
  'The component needs to display what is provided through context',
  () => {
    it('should display the default language when no value has been provided', () => {
      const mounted = mount(<ExerciseThreeComponent />)
      const languageSpan = mounted.find('.language')
      expect(languageSpan.text()).toBe('English')
    })

    it('should display the "German" language when the context has that value', () => {
      // Set a conext value, in this case an object with the language set to "German",
      // by wrapping the component with the context's Provider component
      const mounted = mount(
        <ExerciseThreeContext.Provider value={{ language: 'German' }}>
          <ExerciseThreeComponent />
        </ExerciseThreeContext.Provider>
      )

      const languageSpan = mounted.find('.language')
      expect(languageSpan.text()).toBe('German')
    })
  }
)

/**
 * ========
 * BONUS Exercise 4
 *
 * In this exercise you need to make sure that specific props are passed to
 * another component that's rendered by the outer component
 *
 * NOTE:
 *   This exercises uses both "shallow" and "mount", which is important for
 *   this test to work. You can have a look at the difference between those two
 *   in the docs:
 *
 *   * Shallow rendering: https://enzymejs.github.io/enzyme/docs/api/shallow.html
 *   * Full rendering: https://enzymejs.github.io/enzyme/docs/api/mount.html
 * ========
 */
import { shallow } from 'enzyme'

const InnerComponent = ({ option, onClick }) => {
  return (
    <div onClick={onClick} className="inner">
      {option.label}:<br />
      {option.value}
    </div>
  )
}

InnerComponent.propTypes = {
  option: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
}

const OuterComponent = ({ label, value, onClick }) => {
  const option = { label, value }

  return (
    <div>
      <InnerComponent option={option} onClick={onClick} />
    </div>
  )
}

OuterComponent.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

describe('Some props should be passed down to other components', () => {
  it('should pass an option object to InnerComponent', () => {
    const expected = { label: 'This is the label', value: 'i-am-the-value' }
    const mounted = shallow(
      <OuterComponent
        label="This is the label"
        value="i-am-the-value"
      />
    )

    const inner = mounted.find(InnerComponent)
    expect(inner.props().option).toEqual(expected)
  })

  it('should call the provided onClick funciton when clicking the div of InnerComponent', () => {
    const onClick = jest.fn()
    const expected = onClick
    const mounted = mount(
      <OuterComponent
        label="This is the label"
        value="i-am-the-value"
        onClick={onClick}
      />
    )

    const inner = mounted.find('.inner')
    inner.simulate('click')
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
