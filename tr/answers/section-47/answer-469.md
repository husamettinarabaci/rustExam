## 📘 Bölüm: Workspace ve Paket Organizasyonu
### 🔹 Kategori: Çoklu crate workspace derleme ve test etme
#### ✅ Cevap 469: Çoklu crate workspace derleme ve test etme

Birden fazla crate içeren bir workspace'de, tüm crate'leri tek komutla derleyip test edebilirsiniz:

```bash
cargo build
cargo test
```

Bu komutlar workspace içindeki tüm crate'leri derler ve test eder. Çıktıda her crate için derleme ve test sonuçları listelenir.
