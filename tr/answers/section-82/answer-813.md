## 📘 Bölüm: İleri Makro Tasarımı  
### 🔹 Kategori: Makroları modüler koda genişletme  
#### ✅ Cevap 813: Makroları modüler koda genişletme

Aşağıda, birden fazla modülde kullanılabilen basit bir `hello_macro!` makrosu örneği verilmiştir. Makro, crate kökünde tanımlanır ve `pub use` ile diğer modüllere açılır.

```rust
// src/lib.rs
d#[macro_export]
macro_rules! hello_macro {
    () => {
        println!("Hello from macro!");
    };
}

// src/module1.rs
pub fn call_macro() {
    crate::hello_macro!();
}

// src/module2.rs
pub fn call_macro() {
    crate::hello_macro!();
}
```

Makro, `macro_export` ile crate genelinde erişilebilir olur ve tüm modüllerde çağrılabilir.
