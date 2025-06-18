## 📘 Bölüm: Sahiplik ve Ödünç Alma I  
### 🔹 Kategori: Geçersiz Referanslar ve Önlenmesi  
#### ✅ Cevap 70: Geçersiz referanslar ve önlenmesi

Rust'ın borrow checker'ı, referansların işaret ettikleri veri yaşam süresini aşmasını engelleyerek geçersiz (dangling) referansları önler. Scope dışına çıkan bir değişkene referans oluşturmaya çalışırsanız, derleyici hata verir. Bu, bellek güvenliğini garanti altına alır.

```rust
fn main() {
    let r;
    {
        let x = 5;
        // r = &x; // Bu satırı açarsanız derleme hatası alırsınız
    } // x burada drop edilir
    // println!("Geçersiz referans: {}", r); // Hata: `x` yeterince uzun yaşamıyor

    // Doğru kullanım:
    let y = 10;
    let r2 = &y;
    println!("Geçerli referans: {}", r2);
}
```
