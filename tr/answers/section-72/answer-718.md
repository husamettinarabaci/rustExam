## 📘 Bölüm: Ömür Sistemi ve HRTB Ustalığı  
### 🔹 Kategori: İç içe closure'larda ömür çıkarım sınırlarını gösterme  
#### ✅ Cevap 718: İç içe closure'larda ömür çıkarım sınırlarını gösterme

Aşağıda, iç içe closure'larda ömür çıkarımının başarısız olduğu ve çözümünün gösterildiği bir örnek verilmiştir.

```rust
fn main() {
    let s = String::from("rust");
    let outer = |x: &str| {
        let inner = || x;
        inner()
    };
    println!("{}", outer(&s));
}
// Derleyici burada ömür çıkarımında başarısız olabilir.
// Çözüm: closure'a ömür ekleyin
fn main_fixed() {
    let s = String::from("rust");
    let outer = |x: &str| {
        let inner = move || x;
        inner()
    };
    println!("{}", outer(&s));
}
```

İç içe closure'larda, ömür çıkarımı bazen yetersiz kalır. `move` anahtar kelimesiyle veya ömürleri açıkça belirterek çözüm sağlanabilir.
