## 📘 Bölüm: Derleme Zamanı Performans Optimizasyonu
### 🔹 Kategori: Derleme Süresi ve Artımlı Derleme
#### ✅ Cevap 1421: Artımlı derlemelerle derleme süresini en aza indirme

Artımlı derleme (incremental compilation), sadece değişen dosyaların veya modüllerin yeniden derlenmesini sağlayarak, tam derleme yerine daha hızlı sonuç alınmasını amaçlar. Rust'ta bu özellik varsayılan olarak etkindir ve özellikle büyük projelerde geliştirme döngüsünü hızlandırır. `CARGO_INCREMENTAL` ortam değişkeni ile kontrol edilebilir. Ancak, bazı durumlarda tam optimizasyon için (örn. `--release` ile) artımlı derleme devre dışı bırakılır.

```rust
// Artımlı derleme genellikle ek bir ayar gerektirmez, ancak manuel olarak etkinleştirilebilir:
// $ CARGO_INCREMENTAL=1 cargo build
```

Artımlı derleme, kodda küçük değişiklikler yapıldığında derleme süresini önemli ölçüde azaltır.
