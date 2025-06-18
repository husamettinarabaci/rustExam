## 📘 Bölüm: Bellek Güvenliği ve Statik Analiz
### 🔹 Kategori: Biçimsel Doğrulama Araçları
#### ✅ Cevap 855: Unsafe kodu biçimsel doğrulama araçlarıyla analiz etme

Biçimsel doğrulama araçları, unsafe kodun belirli güvenlik özelliklerini matematiksel olarak kanıtlamak için kullanılır. Prusti ve Kani gibi araçlar, kodun belirli kurallara uyup uymadığını kontrol eder.

Örnek Prusti kullanımı:

```sh
cargo install prusti
prusti-verify src/main.rs
```

Avantajı, kritik kodun güvenliğini kanıtlamaktır. Sınırı ise karmaşık kodlarda tüm özelliklerin kanıtlanamayabilmesidir.
