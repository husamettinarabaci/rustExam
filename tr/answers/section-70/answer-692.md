## 📘 Bölüm: Full-Stack Rust Entegrasyonu  
### 🔹 Kategori: Zengin frontend deneyimi için WebAssembly kullanımı  
#### ✅ Cevap 692: Zengin frontend deneyimi için WebAssembly kullanımı

Rust, WebAssembly'ye (WASM) derlenerek zengin frontend uygulamaları geliştirmek için kullanılabilir. WASM, Rust kodunun tarayıcıda neredeyse yerel hızda çalışmasını sağlar.

Örnek:
```rust
// lib.rs
#[no_mangle]
pub extern "C" fn add(a: i32, b: i32) -> i32 {
    a + b
}
```
Bu fonksiyon WASM'a derlenip JavaScript'ten çağrılabilir. Avantajları performans, güvenlik ve kodun yeniden kullanılabilirliğidir.
