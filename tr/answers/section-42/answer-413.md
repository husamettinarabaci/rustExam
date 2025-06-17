## 📘 Bölüm: Koleksiyonlar: Vec, HashMap, HashSet
### 🔹 Kategori: Vec Üzerinde Yineleme
#### ✅ Cevap 413: Vektör üzerinde değer, referans ve değiştirilebilir olarak yineleme

Bir vektör üzerinde üç şekilde yineleme yapılabilir: değer olarak, referansla ve değiştirilebilir referansla. Her biri farklı kullanım sağlar.

```rust
fn main() {
    let mut v = vec![1, 2, 3];
    for x in v.clone() { println!("Değer: {}", x); }
    for x in &v { println!("Referans: {}", x); }
    for x in &mut v { *x *= 2; }
    println!("Güncellenmiş vektör: {:?}", v);
}
```
