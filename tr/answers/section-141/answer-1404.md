## 📘 Bölüm: Eklenti Sistemi Testi ve Bakımı  
### 🔹 Kategori: Sürekli Entegrasyon için Eklenti Testleri  
#### ✅ Cevap 1404: Sürekli entegrasyon için eklenti ekosistemleri

Eklenti ekosistemlerinde sürekli entegrasyon (CI), testlerin her değişiklikte otomatik çalıştırılmasını sağlar. GitHub Actions gibi araçlarla testler otomatikleştirilebilir.

```yaml
# .github/workflows/test.yml
name: Plugin CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Rust
        uses: actions-rs/toolchain@v1
        with:
          toolchain: stable
      - name: Run tests
        run: cargo test
```
Bu yapılandırma, her kod değişikliğinde testleri çalıştırır ve başarısız olursa bildirim gönderir.
