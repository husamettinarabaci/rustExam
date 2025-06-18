## 📘 Bölüm: Dil Arası Çalışabilirlik  
### 🔹 Kategori: Rust'ı Betik Dilleriyle Entegre Etme  
#### ✅ Cevap 987: Rust'ı betik dilleriyle entegre etme

Rust fonksiyonunu Python'dan çağırmak için `pyo3` kütüphanesi kullanılabilir.

Cargo.toml:
```toml
[dependencies]
pyo3 = { version = "0.20", features = ["extension-module"] }
```

Rust tarafı:
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

Terminalde:
```
maturin develop
```

Python tarafı:
```python
import mymod
print(mymod.double(5))
```
Bu şekilde Rust fonksiyonu Python'dan çağrılır.
