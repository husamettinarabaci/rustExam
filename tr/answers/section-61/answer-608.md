## 📘 Bölüm: FFI ve Yabancı Arayüzler  
### 🔹 Kategori: Python ile Arayüz  
#### ✅ Cevap 608: `pyo3` ile Rust'ı Python'a bağlama

`pyo3`, Rust fonksiyonlarını Python modülü olarak dışa aktarmanızı sağlar. `maturin` veya `setuptools-rust` ile derlenebilir.

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
