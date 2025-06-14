## 📚 Bölüm: Hata Yönetimi  
### 🔹 Kategori: Option Tipi  
#### ✅ Cevap 52: Opsiyonel değerler için Option tipini kullanmak

**Açıklama:**
`Option` tipi, bir değerin var olup olmadığını belirtmek için kullanılır. `Some` değer içerir, `None` ise içermez.

```rust
fn find_even(n: i32) -> Option<i32> {
    if n % 2 == 0 {
        Some(n)
    } else {
        None
    }
}

fn main() {
    match find_even(4) {
        Some(sayi) => println!("Çift: {}", sayi),
        None => println!("Tek sayı"),
    }
}
```
