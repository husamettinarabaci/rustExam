## 📘 Bölüm: Sahiplik ve Ödünç Alma I  
### 🔹 Kategori: Birden Fazla Değiştirilemez Referans  
#### ✅ Cevap 68: Birden fazla değiştirilemez referans

Rust'ta bir değişkene aynı anda birden fazla değiştirilemez referans alınabilir. Ancak, değiştirilemez referanslar aktifken değiştirilebilir referans almak mümkün değildir. Bu, bellek güvenliğini ve veri yarışlarını önler. Scope kullanarak referansların geçerlilik süresi yönetilebilir.

```rust
fn main() {
    let x = 42;
    let r1 = &x;
    let r2 = &x;
    println!("Değiştirilemez referanslar: {} ve {}", r1, r2);
    // Aşağıdaki satırı açarsanız derleme hatası alırsınız:
    // let r3 = &mut x;
    // println!("Değiştirilebilir referans: {}", r3);
    // r1 ve r2 burada hala kullanımda olduğu için değiştirilebilir referans alınamaz
    // r1 ve r2 scope dışına çıktıktan sonra değiştirilebilir referans alınabilir
}
```
