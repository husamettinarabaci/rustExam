## 📘 Bölüm: Kapanışlar ve İteratör Temelleri  
### 🔹 Kategori: Peekable ve Cycle  
#### ✅ Cevap 240: `peekable` ve `cycle` kullanımı

`peekable` bir sonraki elemanı tüketmeden görmenizi sağlar; `cycle` ise iteratörü tekrarlar.

```rust
let mut iter = [1, 2, 3].iter().peekable();
if let Some(&next) = iter.peek() {
    println!("Sonraki: {}", next);
}

let mut c = [10, 20].iter().cycle();
for _ in 0..5 {
    println!("{}", c.next().unwrap());
}
```
