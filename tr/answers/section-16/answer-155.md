## 📚 Bölüm: Koleksiyonlar: Vektörler  
### 🔹 Kategori: Vektör Temelleri  
#### ✅ Cevap 155: Vektör elemanlarını değiştirme

Vektör elemanlarını değiştirmek için `iter_mut` metodu ve değiştirilebilir referanslar kullanılır. Her elemanı yerinde değiştirebilirsiniz.

```rust
fn main() {
    let mut sayilar = vec![1, 2, 3];
    for n in sayilar.iter_mut() {
        *n *= 2;
    }
    println!("{:?}", sayilar);
}
```
