# classNames

Easy way to concatenate CSS class names in your web apps

## Usage examples

### Vanilla JavaScript

```javascript
import { classNames } from '@mesmotronic/react-classnames';

const element = document.createElement('div');
element.className = classNames('container', 'active', false, null, '  extra-class  ');
console.log(element.className); // Output: "container active extra-class"
```

### React

```javascript
import React from 'react';
import { classNames } from '@mesmotronic/react-classnames';

function Button({ isActive }) {
  return (
    <button className={classNames('btn', isActive && 'btn-active', 'btn-primary')}>
      Click Me
    </button>
  );
}
