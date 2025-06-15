## 📘 Bölüm: Koleksiyonlar: Vektörler  
### 🔹 Kategori: Sıralama ve Karşılaştırma  
#### ✅ Cevap 157: Vektörü sıralama

Rust'ta bir vektörü sıralamak için `sort` metodunu kullanabilirsiniz. Bu metod, vektörü yerinde artan düzende sıralar. İşte bir örnek:

```rust
fn main() {
    let mut sayilar = vec![42, 7, 19, 73, 2];
    sayilar.sort();
    println!("Sıralanmış vektör: {:?}", sayilar);
}
```
