## 📘 Bölüm: WebAssembly İleri Konular  
### 🔹 Kategori: WASM Performansı ve Hata Ayıklama  
#### ✅ Cevap 782: WASM modüllerinde bellek yönetimi

WASM modüllerinde bellek yönetimi, Rust'ın `std::alloc` ve WASM'in lineer bellek modeliyle sağlanır. Bellek sızıntılarını önlemek için Rust'ın sahiplik modeli ve RAII kullanılır. Bellek büyütme için `memory.grow` fonksiyonu ve Rust tarafında `Vec` gibi dinamik yapılar tercih edilir.

```rust
// Rust ile WASM'de dinamik bellek kullanımı
#[no_mangle]
pub extern "C" fn allocate(size: usize) -> *mut u8 {
    let mut buf = Vec::with_capacity(size);
    let ptr = buf.as_mut_ptr();
    std::mem::forget(buf);
    ptr
}
```
