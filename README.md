### Features

- Built with a focus on performance and usability
- Use in native HTML form
- Simplify number and field formatting

### Install

    npm install react-hook-format

### Quickstart

```jsx
import { useFormat } from 'react-hook-format';

function App() {
  const { pattern } = useFormat();

  return (
    <form>
      <input name="document" {...pattern('###.###.###-##')} />
      <input name="price" {...pattern('R$#.###,##')} />
      <input type="submit" />
    </form>
  );
}
```


### Contributors

Thank you for being amazing people!

<a target="_blank" href='#'>
    <img width="94" src="https://avatars.githubusercontent.com/u/38348723?v=4" />
</a>