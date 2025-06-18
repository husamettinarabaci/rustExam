## 📘 Bölüm: Bellek Güvenliği ve Statik Analiz
### 🔹 Kategori: Bellek Denetleyicilerle Çalışma
#### ✅ Cevap 859: Rust'ta ASAN, MSAN gibi denetleyicilerle çalışma

ASAN ve MSAN gibi bellek denetleyiciler, bellek taşmaları, use-after-free ve başlatılmamış bellek kullanımı gibi hataları tespit eder. Rust projelerinde bu araçlar ile derleme ve test kolayca yapılabilir.

Temel kullanım:

```sh
RUSTFLAGS="-Z sanitizer=address" cargo +nightly test
```

Çıktı örneği:
```
==12345==ERROR: AddressSanitizer: heap-buffer-overflow on address ...
```

Bu araçlar, bellekle ilgili hataları erken tespit etmeye yardımcı olur.
