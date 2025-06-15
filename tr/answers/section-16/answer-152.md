## 📚 Bölüm: Koleksiyonlar: Vektörler  
### 🔹 Kategori: Vektör Temelleri  
#### ✅ Cevap 152: Vektöre eleman ekleme ve çıkarma

Rust'ta vektöre eleman eklemek için `push` metodu, son elemanı çıkarmak için ise `pop` metodu kullanılır. Vektörün içeriğini değiştirmek için değiştirilebilir (mutable) olması gerekir.

```rust
fn main() {
    let mut sayilar = vec![1, 2, 3];
    sayilar.push(4);
    sayilar.push(5);
    sayilar.pop();
    println!("{:?}", sayilar);
}
```
