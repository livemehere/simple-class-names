# simple-class-names

A function that simply toggle classNames in the React.

what you need is really just one function!

## Example

### Pure function

```js
cn('hi','bye') // hi bye
cn('hi',{active:true, big:true, animation:false}) // hi active big
```

### In React

```jsx
const [active, setActive] = useState(false);

return(
    <div className={cn('hi','red', {active})}> // hi react active
        <h1>TEST</h1>
        <button onClick={()=> setActive(prev => !prev)}>click</button>
    </div>
)
```