## 📘 Bölüm: Bellek Güvenliği ve Statik Analiz
### 🔹 Kategori: Use-after-free Hataları
#### ✅ Cevap 854: Use-after-free hatalarını tespit ve düzeltme

Use-after-free hatası, bir nesne serbest bırakıldıktan sonra ona erişilmeye çalışıldığında oluşur. Rust'ın sahiplik ve ömür sistemi, bu tür hataları derleme zamanında engeller.

Örnek (derlenmez):

```rust
let r;
{
    let s = String::from("merhaba");
    r = &s;
} // s burada drop edilir
println!("{}", r); // HATA: s'nin ömrü bitti
```

Derleyici, ömür kuralları sayesinde use-after-free hatalarını önler.
