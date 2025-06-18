## 📘 Bölüm: Derleyici Eklentileri ve Özel Lintler  
### 🔹 Kategori: CI/CD Entegrasyonu  
#### ✅ Cevap 825: CI süreçlerinde lint entegrasyonu

Lint ve kod stili kontrollerini CI süreçlerine entegre etmek için:

- `cargo clippy -- -D warnings` ve `cargo fmt -- --check` komutlarını CI betiklerine ekleyin.
- Bu komutlar başarısız olursa CI derlemeyi durdurmalı ve hata raporu sunmalıdır.
- GitHub Actions, GitLab CI gibi sistemlerde bu adımlar otomatik olarak çalıştırılabilir.
- Kod stili ihlalleri ve lint hataları, kodun ana dalına birleştirilmeden önce çözülmelidir.
