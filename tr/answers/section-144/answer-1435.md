## 📘 Bölüm: WASM Araçları ve Ekosistemi  
### 🔹 Kategori: WASM Hata Ayıklama  
#### ✅ Cevap 1435: Tarayıcı eklentileriyle WASM hata ayıklama

Chrome ve Firefox gibi tarayıcılar, WASM hata ayıklama için yerleşik geliştirici araçları sunar. WASM kodunu kaynak haritaları ile satır satır izleyebilir, değişkenleri inceleyebilirsiniz. Hata ayıklama sırasında optimize edilmemiş derleme ve doğru kaynak haritası kullanımı önemlidir.

```rust
// Rust'ta debug için
// $ cargo build --target wasm32-unknown-unknown --debug
```
