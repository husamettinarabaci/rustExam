## 📘 Bölüm: Test ve Hata Ayıklama
### 🔹 Kategori: Fuzz Test ile Hata Bulma
#### ✅ Cevap 842: Fuzz test ile hata bulma

Fuzz test, bir fonksiyona rastgele ve beklenmedik girdiler vererek hata bulmayı amaçlar. Rust'ta `cargo-fuzz` aracı ile kolayca fuzz test yapılabilir. Fuzz test, özellikle panik, çökme veya beklenmeyen davranışları bulmak için etkilidir.

Örnek kullanım:

```sh
cargo install cargo-fuzz
cargo fuzz init
cargo fuzz run fuzz_target_1
```

Örnek bir hata çıktısı:
```
thread 'main' panicked at 'index out of bounds: the len is 3 but the index is 10', src/lib.rs:5:10
```

Bu çıktı, fuzz testin bir sınır aşımı (out of bounds) hatasını bulduğunu gösterir.
