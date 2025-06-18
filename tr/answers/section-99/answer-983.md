## 📘 Bölüm: Dil Arası Çalışabilirlik  
### 🔹 Kategori: Header Üretimi ve Otomasyon  
#### ✅ Cevap 983: Header üretimi için `cbindgen` kullanımı

`cbindgen`, Rust kütüphanesinden otomatik olarak C header dosyası (.h) üretir.

Terminalde:
```
cargo install cbindgen
cbindgen --crate <crate_adı> --output mylib.h
```

Oluşan `mylib.h` dosyasını C/C++ projelerinde kullanabilirsiniz. Rust fonksiyonlarınız `extern "C"` ile tanımlanmalıdır.
