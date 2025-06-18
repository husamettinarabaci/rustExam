## 📘 Bölüm: Ömür Sistemi ve HRTB Ustalığı  
### 🔹 Kategori: Yüksek Sıralı Trait Bound (HRTB) ile for<'a> kullanımı  
#### ✅ Cevap 716: for<'a> ile Yüksek Sıralı Trait Bound (HRTB) kullanımı

Aşağıda, `for<'a>` ile HRTB kullanılan bir fonksiyon örneği verilmiştir. Bu fonksiyon, ömrü ne olursa olsun bir referans kabul eden bir closure alır.

```rust
fn apply_to_str<F>(f: F)
where
    F: for<'a> Fn(&'a str) -> usize,
{
    let s = String::from("rust");
    let len = f(&s);
    println!("Uzunluk: {}", len);
}

fn main() {
    apply_to_str(|s| s.len());
}
```

`for<'a>` ile, closure'ın herhangi bir ömre sahip referans alabileceği garanti edilir.
