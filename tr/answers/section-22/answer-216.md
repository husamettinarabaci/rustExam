## 📘 Bölüm: Traitler I  
### 🔹 Kategori: Trait Sınırları  
#### ✅ Cevap 216: Fonksiyon imzalarında trait sınırları

Trait sınırları, jenerik tiplerin belirli trait'leri uygulamasını zorunlu kılar. `T: Trait` veya `where` ifadesiyle yazılabilir.

```rust
fn yazdir<T: std::fmt::Debug>(item: T) {
    println!("{:?}", item);
}

fn yazdir_display<T>(item: T)
where
    T: std::fmt::Display,
{
    println!("{}", item);
}
```
