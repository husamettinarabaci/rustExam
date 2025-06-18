## 📘 Bölüm: Test ve Hata Ayıklama
### 🔹 Kategori: Test Kapsamı Ölçümü
#### ✅ Cevap 846: `cargo tarpaulin` ile test kapsamı ölçümü

`cargo tarpaulin`, Rust projelerinde testlerin kodun ne kadarını kapsadığını ölçmek için kullanılır. Kapsamı artırmak için eksik test edilen kodlar belirlenir ve yeni testler eklenir.

Temel kullanım:

```sh
cargo install cargo-tarpaulin
cargo tarpaulin --out Html
```

Bu komut, kapsam raporunu HTML olarak üretir. Rapor, hangi satırların test edildiğini ve eksik kalanları gösterir. Eksik kalan satırlar için ek testler yazılarak kapsam artırılabilir.
