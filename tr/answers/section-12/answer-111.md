## 📘 Bölüm: Enumlar II  
### 🔹 Kategori: Match Kollarında Desen Koruyucular  
#### ✅ Cevap 111: Match kollarında desen koruyucular

Desen koruyucular (pattern guard), match kollarında ek koşullar eklemenizi sağlar. Burada, `Number::Value` içindeki değerin pozitif, negatif veya sıfır olup olmadığı bir koruyucu ile kontrol edilir.

```rust
enum Number {
    Value(i32),
}

fn main() {
    let num = Number::Value(-5);
    match num {
        Number::Value(n) if n > 0 => println!("Pozitif: {}", n),
        Number::Value(n) if n < 0 => println!("Negatif: {}", n),
        Number::Value(0) => println!("Sıfır"),
        _ => (),
    }
}
```
