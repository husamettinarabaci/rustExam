## 📘 Bölüm: Fullstack WASM Uygulamaları
### 🔹 Kategori: WASM Paketleme ve Dağıtım
#### ✅ Cevap 1289: WASM uygulamalarını paketleme ve dağıtma

Bu soruda, Rust WASM uygulamasının derlenmesi, paketlenmesi ve dağıtılması adım adım gösterilir. `wasm-pack` veya `trunk` ile derleme yapılır, çıktı dosyaları uygun dizine alınır ve statik sunucu veya CDN ile dağıtım sağlanır.

```rust
// wasm-pack ile derleme ve paketleme:
// wasm-pack build --release --target web

// trunk ile derleme:
// trunk build --release

// Çıktı dosyalarını (WASM, JS, HTML) /dist veya /pkg dizinine yerleştirin.
// Statik sunucu ile dağıtım örneği:
// python3 -m http.server 8080 -d dist
```
