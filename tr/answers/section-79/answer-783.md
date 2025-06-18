## 📘 Bölüm: WebAssembly İleri Konular  
### 🔹 Kategori: WASM Performansı ve Hata Ayıklama  
#### ✅ Cevap 783: Rust ile JavaScript'e asenkron arayüz oluşturma

Rust ile JavaScript arasında asenkron arayüz oluşturmak için `wasm-bindgen` ve `async`/`await` kullanılır. Rust fonksiyonları `#[wasm_bindgen]` ile işaretlenir ve JavaScript tarafında Promise olarak çağrılabilir.

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub async fn fetch_data() -> Result<JsValue, JsValue> {
    // JS tarafında fetch veya başka bir async işlem
    Ok(JsValue::from_str("done"))
}
```
