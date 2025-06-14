## 📘 Bölüm: Jenerikler II  
### 🔹 Kategori: Jenerik trait sınırları  
#### ✅ Cevap 222: Jenerik trait sınırları

Trait sınırları, jenerik tiplerin belirli trait'leri uygulamasını zorunlu kılar. Satır içi veya `where` ifadesiyle yazılabilir.

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
