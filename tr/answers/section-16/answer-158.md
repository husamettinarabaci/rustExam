## 📘 Bölüm: Koleksiyonlar: Vektörler  
### 🔹 Kategori: Eleman Çıkarma  
#### ✅ Cevap 158: Vektörden eleman çıkarma

Rust'ta bir vektörden eleman çıkarmak için `remove` metodunu kullanabilirsiniz. Bu metod, belirtilen indeksteki elemanı siler ve döndürür. İşte bir örnek:

```rust
fn main() {
    let mut sayilar = vec![5, 10, 15, 20, 25];
    println!("Çıkarma öncesi: {:?}", sayilar);
    sayilar.remove(2); // 2. indeksteki eleman (15) silinir
    println!("Çıkarma sonrası: {:?}", sayilar);
}
```
