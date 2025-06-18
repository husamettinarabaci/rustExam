## 📘 Section: Fullstack WASM Applications
### 🔹 Category: Integrating WASM with Frontend Frameworks
#### ✅ Answer 1290: Integrating WASM with frontend frameworks

This task demonstrates integrating a Rust WASM module with a modern frontend framework (e.g., React). The WASM function is imported via JS and called from a framework component.

```javascript
// Using a WASM function in a React component
import React, { useState } from 'react';
import init, { greet } from 'wasm-pkg';

export default function App() {
  const [msg, setMsg] = useState('');
  React.useEffect(() => {
    init().then(() => setMsg(greet()));
  }, []);
  return <div>{msg}</div>;
}
```
// The greet function is exported from Rust using wasm-bindgen.
