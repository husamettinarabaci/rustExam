## 📘 Bölüm: Enumlar ve Veri Modelleme  
### 🔹 Kategori: Enumlar ve desen koruyucularını birleştirme  
#### ✅ Cevap 428: Enumlar ve desen koruyucularını birleştirme

Desen koruyucular (`match` kollarında `if` ile) ile enum varyantlarını ek koşullarla eşleyebilirsiniz.

```rust
enum Number {
    Int(i32),
    Float(f64),
}

fn describe(num: Number) -> &'static str {
    match num {
        Number::Int(n) if n > 0 => "Pozitif tam sayı",
        Number::Int(_) => "Diğer tam sayı",
        Number::Float(f) if f > 0.0 => "Pozitif ondalık",
        Number::Float(_) => "Diğer ondalık",
    }
}
```
