## 📘 Bölüm: Senkronizasyon Primitifleri Derinlemesine
### 🔹 Kategori: Öncelik tersliği ve açlık önleme
#### ✅ Cevap 1137: Öncelik tersliği ve açlık önleme

Öncelik tersliği, düşük öncelikli bir thread'in yüksek öncelikli bir thread'i engellemesi durumudur. Açlık ise bir thread'in sürekli kaynak alamamasıdır. Rust'ta bu sorunlar için adil kilitler veya öncelik protokolleri kullanılabilir.

```rust
// Rust'ta std::sync::Mutex adil davranır, ancak özel protokoller için ek algoritmalar gerekir.
// Örneğin, priority inheritance protokolü ile öncelik tersliği azaltılabilir.
```
Bu tür sorunlar için uygun kilit stratejileri ve algoritmalar seçilmelidir.
