## 📘 Bölüm: WebAssembly İleri Konular  
### 🔹 Kategori: WASM Performansı ve Hata Ayıklama  
#### ✅ Cevap 786: Yeniden kullanılabilir WASM bileşenleri oluşturma

Yeniden kullanılabilir WASM bileşenleri oluşturmak için modüler Rust kodu yazılır ve her bileşen ayrı bir WASM modülü olarak derlenebilir. Ortak arabirimler ve standart veri tipleri kullanmak, farklı uygulamalarda tekrar kullanılabilirliği artırır. `wasm-bindgen` ile fonksiyonlar dışa aktarılır.

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}
```
