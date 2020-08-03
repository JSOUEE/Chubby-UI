## Input Doc

Basics

```tsx
import React from 'react';
import { Input } from 'Chubby-UI';

export default () => {
  return <Input onChange={e => console.log(e.target.value)} />;
};
```

受控模式

```tsx
import React, { useState, useRef } from 'react';
import { Input } from 'Chubby-UI';

export default () => {
  const [val, setVal] = useState('');

  return (
    <Input value={val} onChange={e => setVal(e.target.value.toUpperCase())} />
  );
};
```

Size

```tsx
import React from 'react';
import { Input } from 'Chubby-UI';

export default () => {
  return (
    <>
      <Input size="sm" placeholder="small" />
      <Input size="md" placeholder="middle" />
      <Input size="lg" placeholder="large" />
    </>
  );
};
```

Advanced

```tsx
import React from 'react';
import { Input } from 'Chubby-UI';

export default () => {
  return <Input />;
};
```
