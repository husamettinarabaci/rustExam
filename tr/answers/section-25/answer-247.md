## 📘 Bölüm: Closure ve Sahiplik
### 🔹 Kategori: Closure ve Trait Sınırları
#### ✅ Cevap 247: Closure ve trait sınırları

Rust'ta closure parametreleri için `Fn`, `FnMut` veya `FnOnce` gibi trait sınırları kullanılabilir. Aşağıda `Fn(i32) -> i32` ile bir örnek verilmiştir:

```rust
fn bes_uygula<F>(fonk: F) -> i32
where
    F: Fn(i32) -> i32,
{
    fonk(5)
}

fn main() {
    let bir_ekle = |x| x + 1;
    let kare = |x| x * x;
    println!("bir_ekle: {}", bes_uygula(bir_ekle)); // Çıktı: bir_ekle: 6
    println!("kare: {}", bes_uygula(kare));         // Çıktı: kare: 25
}
```

Bu örnekte, `bes_uygula` fonksiyonu, `Fn(i32) -> i32` trait sınırını sağlayan herhangi bir closure veya fonksiyonu parametre olarak alır ve 5 değerine uygular. İhtiyaca göre `FnMut` veya `FnOnce` da kullanılabilir.
