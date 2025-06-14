## 📘 Bölüm: Traitler I  
### 🔹 Kategori: Çoklu Trait Sınırları  
#### ✅ Cevap 217: Birden fazla trait sınırı

Birden fazla trait sınırı satır içi veya `where` ifadesiyle yazılabilir.

```rust
fn yazdir_hepsi<T: std::fmt::Debug + std::fmt::Display>(item: T) {
    println!("{:?} {}", item, item);
}

fn yazdir_hepsi_where<T>(item: T)
where
    T: std::fmt::Debug + std::fmt::Display,
{
    println!("{:?} {}", item, item);
}
```
