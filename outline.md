* Comparison to Angular
	- Data flow
		+ Angular: dirty checking, sometimes unpredictable (Data <-> UI)
		+ React: view is a function of application state, not vice-versa (Data -> UI)
* JSX overview
	- Attributes
		+ Built-ins, e.g.`className`
	- Babel transpilation of JSX
* Component architecture
	- Stateless functional components
	- Stateful components
	- Component lifecycle
		+ `getInitialState()`
		+ `getDefaultProps()`
		+ `componentWillMount()`
		+ `render()`
		+ `componentDidMount()`
		+ `componentWillUnmount()`
* "Transclusion"
* Event handling
	- `onClick`
* Virtual DOM
	- Triggers
		+ `ReactDOM.render()`
		+ `forceUpdate()`
		+ `setState()`
* State vs. props
	- Props should be treated as immutable to maintain Data -> UI
	- One component's state may become another component's props
	- State can be derived from props, or internal state
* Smart vs. dumb components
* Stores
* Best practices
	+ Uni-directional data flow
	+ Extract state to closest common ancestor