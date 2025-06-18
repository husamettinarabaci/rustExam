## 📘 Section: FFI and Foreign Interfacing  
### 🔹 Category: Python Interfacing  
#### ✅ Answer 608: Interfacing Rust with Python via `pyo3`

`pyo3` allows you to export Rust functions as Python modules. You can build with `maturin` or `setuptools-rust`.

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
