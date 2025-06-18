## 📘 Bölüm: Bellek Güvenliği ve Statik Analiz
### 🔹 Kategori: Sembolik Yürütme
#### ✅ Cevap 856: Rust programlarında sembolik yürütme kullanımı

Sembolik yürütme, programı gerçek değerler yerine sembolik girdilerle çalıştırarak tüm olası yürütme yollarını analiz eder. Rust'ta MIRI ve KLEE gibi araçlar kullanılabilir.

Örnek MIRI kullanımı:

```sh
cargo +nightly miri test
```

Avantajı, potansiyel hataları ve bellek güvenliği sorunlarını erken tespit etmektir. Sınırı ise karmaşık programlarda yol patlaması (path explosion) yaşanabilmesidir.
