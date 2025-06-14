## 📚 Bölüm: Hata Yönetimi  
### 🔹 Kategori: Panic Makrosu  
#### ✅ Cevap 53: `panic!` makrosunu kullanmak

**Açıklama:**
`panic!` makrosu, onarılamaz bir hata oluştuğunda programı durdurmak için kullanılır.

```rust
fn pozitif_mi(n: i32) {
    if n < 0 {
        panic!("Negatif sayı: {}", n);
    }
}

fn main() {
    pozitif_mi(5);
    pozitif_mi(-3);
}
```
