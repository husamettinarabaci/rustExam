## 📘 Bölüm: Kontrol Akışı  
### 🔹 Kategori: Desen Eşleme  
#### ✅ Cevap 30: Desen eşlemede `if let` kullanımı

**Açıklama:**

`if let`, özellikle `Option` gibi enumlarda tek bir deseni kolayca eşlemek için kullanılır.

```rust
fn main() {
    let belki_sayi = Some(7);
    if let Some(n) = belki_sayi {
        println!("Değer: {}", n);
    } else {
        println!("Değer yok");
    }
}
```
