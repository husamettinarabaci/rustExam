## 📘 Bölüm: Derleyici Eklentileri ve Özel Lintler  
### 🔹 Kategori: Kod Stili Denetimi  
#### ✅ Cevap 823: Kod stili denetimini otomatikleştirme

Rust projelerinde kod stili denetimi için Clippy ve rustfmt kullanılır. Clippy kodunuzu statik olarak analiz eder ve önerilerde bulunur. rustfmt ise kodunuzu otomatik olarak biçimlendirir. CI/CD süreçlerinde aşağıdaki gibi entegre edilir:

- `cargo clippy -- -D warnings` ile tüm uyarıları hata olarak değerlendirin.
- `cargo fmt -- --check` ile kodun biçimlendirilip biçimlendirilmediğini kontrol edin.
- CI betiklerine bu komutları ekleyerek kod stili ihlallerini otomatik olarak tespit edebilirsiniz.
