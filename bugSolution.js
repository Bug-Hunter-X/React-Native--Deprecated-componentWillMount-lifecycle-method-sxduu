Using componentDidMount:

```javascript
class MyComponent extends React.Component {
  componentDidMount() {
    // Your code here
  }

  render() {
    return (
      // Your JSX
    );
  }
}
```

Using Functional Component and useEffect:

```javascript
import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    // Your code here
  }, []);

  return (
    // Your JSX
  );
};
```