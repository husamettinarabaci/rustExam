## 📘 Bölüm: Kontrol Akışı  
### 🔹 Kategori: Döngüler  
#### ✅ Cevap 24: `loop` ve `break` ile sayaç döngüsü oluşturma

**Açıklama:**

`loop` anahtar kelimesiyle sonsuz döngü oluşturulur. Koşul sağlandığında `break` ile döngüden çıkılır.

```rust
fn main() {
    let mut sayac = 0;
    loop {
        println!("Sayaç: {}", sayac);
        sayac += 1;
        if sayac == 5 {
            break;
        }
    }
}
```
