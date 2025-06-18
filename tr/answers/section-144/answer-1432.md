## 📘 Bölüm: WASM Araçları ve Ekosistemi  
### 🔹 Kategori: WASM Paketleme ve Yayınlama  
#### ✅ Cevap 1432: wasm-pack ile WASM modüllerini paketleme

`wasm-pack`, Rust projelerini WASM modüllerine dönüştürmek ve npm paketleri olarak yayınlamak için kullanılır. `wasm-pack build` komutu ile derleme yapılır, ardından çıkan dosyalar (pkg klasörü) web projelerinde veya npm ile paylaşımda kullanılır.

```rust
// wasm-pack ile derleme
// $ wasm-pack build --target web
```
