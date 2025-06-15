## 📘 Bölüm: Option ve Result Türleri  
### 🔹 Kategori: Nullable Değerler için Option  
#### ✅ Cevap 181: Nullable değerler için `Option` kullanımı

Rust'ta mevcut olup olmadığı belli olmayan bir değeri temsil etmek için `Option` türü kullanılır. Burada, `cift_bul` fonksiyonu bir çift sayı bulursa `Some(i32)`, bulamazsa `None` döndürür. Sonuç desen eşleme ile yönetilir.

```rust
fn cift_bul(sayilar: &[i32]) -> Option<i32> {
    for &n in sayilar {
        if n % 2 == 0 {
            return Some(n);
        }
    }
    None
}

fn main() {
    let dizi = [1, 3, 5, 8, 11];
    match cift_bul(&dizi) {
        Some(cift) => println!("Çift bulundu: {}", cift),
        None => println!("Çift sayı yok"),
    }
}
```
