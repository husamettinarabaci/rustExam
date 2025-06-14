## 📚 Bölüm: Hata Yönetimi  
### 🔹 Kategori: Result Tipi  
#### ✅ Cevap 51: Hata yönetimi için Result tipini kullanmak

**Açıklama:**
Rust'ta `Result` tipi, bir işlemin başarılı olup olmadığını belirtmek için kullanılır. Başarı durumunda `Ok`, hata durumunda `Err` döndürülür.

```rust
fn divide(a: i32, b: i32) -> Result<i32, String> {
    if b == 0 {
        Err("Sıfıra bölünemez".to_string())
    } else {
        Ok(a / b)
    }
}

fn main() {
    match divide(10, 2) {
        Ok(sonuc) => println!("Bölüm: {}", sonuc),
        Err(e) => println!("Hata: {}", e),
    }
}
```
