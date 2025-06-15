## 📘 Bölüm: Koleksiyonlar: Vektörler  
### 🔹 Kategori: Eleman Ekleme  
#### ✅ Cevap 159: Vektöre eleman ekleme

Rust'ta bir vektöre belirli bir konumda eleman eklemek için `insert` metodunu kullanabilirsiniz. Bu metod, verilen indekse elemanı ekler ve sonraki elemanları sağa kaydırır. İşte bir örnek:

```rust
fn main() {
    let mut sayilar = vec![1, 2, 4, 5];
    println!("Ekleme öncesi: {:?}", sayilar);
    sayilar.insert(2, 3); // 2. indekse 3 eklenir
    println!("Ekleme sonrası: {:?}", sayilar);
}
```
