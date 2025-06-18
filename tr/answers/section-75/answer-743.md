## 📘 Bölüm: Pinning ve Kendine Referanslı Tipler
### 🔹 Kategori: `Pin<Box<T>>` ile Taşıma Sonrası Hareketi Önlemek
#### ✅ Cevap 743: Taşıma sonrası hareketi önlemek için `Pin<Box<T>>` kullanımı

`Pin<Box<T>>`, işaret ettiği değerin pinlendikten sonra bellekte taşınmayacağını garanti eder. Bu, kendine referanslı tipler ve async görevler için kritiktir.

```rust
use std::pin::Pin;

struct Tasınmaz {
    veri: String,
}

fn main() {
    let x = Tasınmaz { veri: String::from("merhaba") };
    let mut pinli = Box::pin(x);
    // let y = *pinli; // HATA: Pinlenmiş kutudan değer taşınamaz
    let veri_ref = &pinli.veri;
    println!("{}", veri_ref);
}
```

Pinlenmiş kutudan değeri taşımaya çalışmak derleme zamanı hatası verir.
