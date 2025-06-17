## 📘 Bölüm: Test ve Hata Ayıklama  
### 🔹 Kategori: Testleri Çalıştırma ve Filtreleme  
#### ✅ Cevap 344: `cargo test` ile testleri çalıştırma ve ada göre filtreleme

Rust'ta tüm testleri çalıştırmak için `cargo test` komutu kullanılır. Belirli bir test fonksiyonunu çalıştırmak için test adını filtre olarak verebilirsiniz. Test çıktısında hangi testlerin geçtiği veya başarısız olduğu gösterilir.

```bash
# Tüm testleri çalıştır
cargo test

# Sadece belirli bir testi çalıştır (örneğin test_add_positive)
cargo test test_add_positive
```

Test çıktısı örneği:

```
test tests::test_add_positive ... ok
test tests::test_add_negative ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out
```
