## 📘 Bölüm: Jenerikler II  
### 🔹 Kategori: Jenerik tür takma adları  
#### ✅ Cevap 229: Jenerik tür takma adı tanımlama ve kullanma

Bu örnekte, Rust'ta jenerik tür takma adı tanımlama ve kullanma gösterilmiştir. `ResultString<T>` takma adı, `Result<T, String>` döndüren fonksiyon imzalarını sadeleştirir. `parse_number` fonksiyonu bu takma adı kullanarak ya parse edilen bir `i32` ya da hata mesajı döndürür.

```rust
type ResultString<T> = Result<T, String>;

fn parse_number(s: &str) -> ResultString<i32> {
    s.parse::<i32>().map_err(|e| format!("Parse hatası: {}", e))
}

fn main() {
    match parse_number("42") {
        Ok(n) => println!("Parse edilen sayı: {}", n),
        Err(e) => println!("Hata: {}", e),
    }
    match parse_number("sayı değil") {
        Ok(n) => println!("Parse edilen sayı: {}", n),
        Err(e) => println!("Hata: {}", e),
    }
}
```
