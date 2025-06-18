## 📘 Bölüm: WebAssembly İleri Konular  
### 🔹 Kategori: WASM Performansı ve Hata Ayıklama  
#### ✅ Cevap 787: Tarayıcılarda WASM hata ayıklama

Tarayıcılarda WASM hata ayıklama için kaynak haritaları (source maps) ve tarayıcı geliştirici araçları kullanılır. Rust derlemesinde `-g` bayrağı ile debug sembolleri eklenir. Chrome ve Firefox gibi tarayıcılar WASM modüllerini adım adım incelemeye olanak tanır.

```rust
// Debug sembolleriyle derleme
cargo build --target wasm32-unknown-unknown --features debug
```
