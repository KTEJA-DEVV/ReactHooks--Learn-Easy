<h1>UseState</h1>
<p>The useState hook in React is a tool that lets you add and manage changing data (state) inside a functional component.

In simple words — it helps your app remember values and update the UI when those values change.

👉 Example: If you click a button to increase a number or show/hide something, useState keeps track of that change.</p>

********************************************************************

<h1>useEffect</h1>
<p>The useEffect hook in React lets you run code after the component renders — like fetching data, updating the DOM, or setting up timers.

In simple words — it’s used to handle side effects in your component (things that happen outside the normal rendering).</p>

********************************************************************
<h1>UseRef</h1>
<p>useRef is react hook allows use to create immutable variables, which will not re-render the component</p>

*******************************************************************
<h1>useMemo</h1>
<p>useMemo is a React Hook that helps you optimize performance by memoizing (caching)(Memoizing means storing the result of a function call so that if the same inputs occur again, the function doesn’t need to run again — it just returns the stored result.) the result of a computation — so React doesn’t recompute it every render unless its dependencies change.</p>
<p>useMemo(cb,[d])</p>
***********************************************************************
<h1>useCallback</h1>
<p>useCallback is a React Hook that returns a memoized (cached) version of a function — it only changes when one of its dependencies changes.</p>
<p>useMemo:-used to return memoized value use for expensive calculations ex :filtering ,Sorting</p>
<p>useCallback-used to return memoized function use for children re-renders ex:passing props</p>

*************************************************************************
