# simple-class-names

[npm](https://www.npmjs.com/package/simple-class-names)

A function that simply toggle classNames in the React.

what you need is really just one function!

## Example

### Pure function

use can use array, string, number, object and mix them all!

```js
let name = 'kong';
cn('hi','bye') // hi bye
cn(['hi','bye',1, name]) // hi bye 1 kong
cn('hi',{active:true, big:true, animation:false}) // hi active big
cn(['card',{active:true, hover:false}]) // card active
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