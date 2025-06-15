## 📚 Bölüm: Koleksiyonlar: Vektörler  
### 🔹 Kategori: Vektör Temelleri  
#### ✅ Cevap 153: Vektör elemanlarına güvenli erişim

Vektör elemanlarına güvenli erişmek için `get` metodu kullanılır. Bu metod, sınır dışı bir indeks verilirse panik yerine `Option` döndürür.

```rust
fn main() {
    let sayilar = vec![10, 20, 30];
    match sayilar.get(1) {
        Some(deger) => println!("İkinci eleman: {}", deger),
        None => println!("İkinci eleman yok!"),
    }
}
```
