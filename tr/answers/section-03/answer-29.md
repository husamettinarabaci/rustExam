## 📘 Bölüm: Kontrol Akışı  
### 🔹 Kategori: Desen Eşleme  
#### ✅ Cevap 29: Birden fazla desenle `match` kullanımı

**Açıklama:**

Birden fazla desen, `|` operatörü ile tek bir kolda eşlenebilir.

```rust
fn main() {
    let sayi = 2;
    match sayi {
        1 | 2 => println!("Bir veya İki"),
        _ => println!("Diğer"),
    }
}
```
