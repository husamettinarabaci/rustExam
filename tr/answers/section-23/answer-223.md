## 📘 Bölüm: Jenerikler II  
### 🔹 Kategori: Jenerik where ifadeleri  
#### ✅ Cevap 223: Jenerik where ifadeleri

`where` ifadesi, birden fazla trait sınırı olduğunda okunabilirliği artırmak için kullanılır.

```rust
fn islem<T, U>(t: T, u: U)
where
    T: std::fmt::Debug + Clone,
    U: std::fmt::Display + Default,
{
    println!("{:?} {}", t.clone(), u);
}
```
