## 📘 Bölüm: WebAssembly İleri Konular  
### 🔹 Kategori: WASM Performansı ve Hata Ayıklama  
#### ✅ Cevap 781: WASM binary boyutunu optimize etme

WASM binary boyutunu optimize etmek, daha hızlı yükleme süreleri ve daha düşük bant genişliği kullanımı sağlar. Rust ile derlerken gereksiz kodları çıkarmak için `--release` bayrağı, LTO (Link Time Optimization) ve `wasm-opt` gibi araçlar kullanılır. Ayrıca, kullanılmayan fonksiyonları ve bağımlılıkları temizlemek de önemlidir.

```rust
// Cargo.toml'da [profile.release] altında lto = true ekleyin
// Derleme:
cargo build --release --target wasm32-unknown-unknown
// wasm-opt ile optimize edin:
wasm-opt -Oz -o output_optimized.wasm output.wasm
```
