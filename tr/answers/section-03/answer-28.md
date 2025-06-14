## 📘 Bölüm: Kontrol Akışı  
### 🔹 Kategori: Döngüler  
#### ✅ Cevap 28: `continue` ile döngü adımını atlama

**Açıklama:**

`continue` ifadesi, mevcut döngü adımını atlayıp bir sonrakine geçer.

```rust
fn main() {
    for i in 1..=5 {
        if i == 3 {
            continue;
        }
        println!("i: {}", i);
    }
}
```
