## 📘 Bölüm: Hata Yönetimi ve Result Tipleri  
### 🔹 Kategori: main Fonksiyonunda Hata Yönetimi  
#### ✅ Cevap 180: main fonksiyonunda hata yönetimi

`main` fonksiyonunun dönüş tipi olarak `Result` kullanarak hata yayılımı yapabilirsiniz. Böylece `main` içinde `?` operatörünü kullanmak mümkün olur.

```rust
fn main() -> Result<(), Box<dyn std::error::Error>> {
    let icerik = std::fs::read_to_string("dosya.txt")?;
    println!("{}", icerik);
    Ok(())
}
```
