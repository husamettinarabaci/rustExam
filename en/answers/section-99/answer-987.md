## 📘 Section: Language Interoperability  
### 🔹 Category: Integrating Rust with Scripting Languages  
#### ✅ Answer 987: Integrating Rust with scripting languages

You can use the `pyo3` crate to call Rust functions from Python.

Cargo.toml:
```toml
[dependencies]
pyo3 = { version = "0.20", features = ["extension-module"] }
```

Rust side:
```rust
use pyo3::prelude::*;

#[pyfunction]
fn double(x: i32) -> i32 {
    x * 2
}

#[pymodule]
fn mymod(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(double, m)?)?;
    Ok(())
}
```

In the terminal:
```
maturin develop
```

Python side:
```python
import mymod
print(mymod.double(5))
```
This way, the Rust function can be called from Python.
