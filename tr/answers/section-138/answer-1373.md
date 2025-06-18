## 📘 Bölüm: WASM Performansı ve Hata Ayıklama
### 🔹 Kategori: WASM Hata Ayıklama
#### ✅ Cevap 1373: WASM hata ayıklama için kaynak haritaları kullanma

Kaynak haritaları (source maps), tarayıcıda WASM kodunu orijinal Rust satırlarıyla eşleştirmenizi sağlar. `wasm-pack` veya `trunk` ile derlerken kaynak haritası desteğini etkinleştirin.

```sh
wasm-pack build --dev
# veya trunk ile
tunk build --dev
```

- Tarayıcı geliştirici araçlarında "Sources" sekmesinde Rust dosyalarını görebilirsiniz.
- Hataları ve panikleri doğrudan Rust kodunda izleyebilirsiniz.
