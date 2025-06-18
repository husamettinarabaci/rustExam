## 📘 Bölüm: İleri Trait Tasarımı ve Kullanımı
### 🔹 Kategori: Okunabilirlik için Where ile Trait Birleştirme
#### ✅ Cevap 630: Okunabilirlik için `where` ile trait birleştirme

Rust'ta `where` ifadesi, trait bound'larını daha okunabilir şekilde belirtmenizi sağlar. Özellikle birden fazla bound veya karmaşık jenerik kısıtlar olduğunda kodun okunabilirliğini artırır.

```rust
fn hepsini_yazdir<T, U>(a: T, b: U)
where
    T: std::fmt::Display + Clone,
    U: std::fmt::Debug,
{
    println!("a: {}", a);
    println!("b: {:?}", b);
}

fn main() {
    hepsini_yazdir(42, "merhaba");
}
```
