## 📘 Bölüm: Closure ve Sahiplik
### 🔹 Kategori: Closure'lar Yapı Alanı Olarak
#### ✅ Cevap 246: Closure'lar yapı alanı olarak

Rust'ta bir closure'ı struct alanı olarak saklamak için generic parametreyle trait sınırı (`Fn`) veya kutulama (`Box<dyn Fn>`) kullanılabilir. Aşağıda `Box<dyn Fn(i32) -> i32>` ile bir örnek verilmiştir:

```rust
struct ClosureTutucu {
    fonk: Box<dyn Fn(i32) -> i32>,
}

fn main() {
    let tutucu = ClosureTutucu {
        fonk: Box::new(|x| x * 2),
    };
    let sonuc = (tutucu.fonk)(10);
    println!("Sonuç: {}", sonuc); // Çıktı: Sonuç: 20
}
```

Bu örnekte, `ClosureTutucu` adında bir struct ve `fonk` adında bir closure alanı tanımlanmıştır. Closure, struct üzerinden çağrılabilir.
