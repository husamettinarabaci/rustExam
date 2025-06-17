## 📘 Bölüm: Workspace ve Paket Organizasyonu
### 🔹 Kategori: Görünürlük kontrolü için `pub(crate)` ve `pub(super)` kullanımı
#### ✅ Cevap 464: Görünürlük kontrolü için `pub(crate)` ve `pub(super)` kullanımı

`pub(crate)` bir fonksiyonu sadece aynı crate içinde erişilebilir yapar. `pub(super)` ise fonksiyonu bir üst modülden erişilebilir kılar. Farklı modüllerden erişim denemeleri ile sınırlar gösterilebilir.

```rust
mod a {
    pub(crate) fn only_crate() {}
    pub(super) fn only_super() {}
}
```

Erişim sınırları derleyici hatası ile test edilebilir.
