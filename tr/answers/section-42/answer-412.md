## 📘 Bölüm: Koleksiyonlar: Vec, HashMap, HashSet
### 🔹 Kategori: Vektöre Eleman Ekleme ve Çıkarma
#### ✅ Cevap 412: Vektöre eleman ekleme ve çıkarma

`Vec` ile eleman eklemek için `push`, çıkarmak için `pop` kullanılır. `pop` son elemanı çıkarır ve döndürür.

```rust
fn main() {
    let mut fruits = Vec::new();
    fruits.push("elma".to_string());
    fruits.push("armut".to_string());
    fruits.push("muz".to_string());
    fruits.pop();
    println!("Vektör: {:?}", fruits);
}
```
