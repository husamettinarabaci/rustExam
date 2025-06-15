## 📘 Bölüm: Jenerikler I  
### 🔹 Kategori: Enumlarda Jenerik Kullanımı  
#### ✅ Cevap 213: Enumlarda jenerik kullanımı

Jenerik enum'lar, herhangi bir türde değer tutabilen varyantlar tanımlamanıza olanak tanır. Bu örnekte, `MyOption<T>` adlı enum `T` türü üzerinde jeneriktir. `MyOption<i32>`, `MyOption<&str>` gibi farklı türlerle örnekler oluşturabilir ve desen eşleme ile değeri çıkarabilirsiniz.

```rust
enum MyOption<T> {
    Some(T),
    None,
}

fn main() {
    let a = MyOption::Some(5);
    let b = MyOption::Some("merhaba");
    let c: MyOption<f64> = MyOption::None;

    match a {
        MyOption::Some(val) => println!("a: {}", val),
        MyOption::None => println!("a: None"),
    }
    match b {
        MyOption::Some(val) => println!("b: {}", val),
        MyOption::None => println!("b: None"),
    }
    match c {
        MyOption::Some(val) => println!("c: {}", val),
        MyOption::None => println!("c: None"),
    }
}
```
