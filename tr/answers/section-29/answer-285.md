## 📘 Bölüm: Desen Eşleme ve Kontrol Akışı
### 🔹 Kategori: Match İfadelerinde Koruyucu Kullanımı
#### ✅ Cevap 285: Match ifadelerinde koruyucu kullanımı (`if` ile)

Bu soruda, match kollarında koruyucu (guard) ile ek koşullar eklenir. Böylece desen eşleme sırasında ek kontroller yapılabilir.

```rust
fn main() {
    let num = 7;

    match num {
        n if n > 0 && n < 10 => println!("Sayı 0 ile 10 arasında: {}", n),
        n if n >= 10 => println!("Sayı 10 veya daha büyük: {}", n),
        _ => println!("Sayı sıfır veya negatif"),
    }
}
```
