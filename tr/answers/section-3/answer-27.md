## 📘 Bölüm: Kontrol Akışı  
### 🔹 Kategori: Döngüler  
#### ✅ Cevap 27: Belirli bir değerde `for` döngüsünü kırma

**Açıklama:**

Bir koşul sağlandığında `break` ile `for` döngüsünden çıkılabilir.

```rust
fn main() {
    for i in 1..=10 {
        if i == 6 {
            break;
        }
        println!("i: {}", i);
    }
}
```
