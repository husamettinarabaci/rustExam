## 📘 Bölüm: Hata Yönetimi  
### 🔹 Kategori: expect ve unwrap kullanımı  
#### ✅ Cevap 191: `expect` ve `unwrap`'ı güvenli kullanma

`unwrap` ve `expect`, `Option` ve `Result` türlerinden değer çıkarmak için kullanılır, ancak `None` veya `Err` durumunda panik oluştururlar. Güvenli kullanım için değerin varlığından emin olunmalı veya hata durumu önceden kontrol edilmelidir. `expect`, hata mesajı eklemenizi sağlar ve hata ayıklamada faydalıdır.

```rust
fn main() {
    let bazi_option = Some(10);
    // Güvenli: Değerin Some olduğunu biliyoruz
    let deger = bazi_option.unwrap();
    println!("Değer: {}", deger);

    let bazi_result: Result<i32, &str> = Ok(20);
    // Güvenli: Değerin Ok olduğunu biliyoruz
    let deger = bazi_result.expect("Ok olmalı");
    println!("Değer: {}", deger);

    let hic_option: Option<i32> = None;
    // Panik önleme: Önce kontrol edin
    if let Some(v) = hic_option {
        println!("Güvenli unwrap: {}", v);
    } else {
        println!("Unwrap edilecek değer yok");
    }

    let hata_result: Result<i32, &str> = Err("hata");
    // Panik önleme: Önce kontrol edin
    match hata_result {
        Ok(v) => println!("Güvenli expect: {}", v),
        Err(e) => println!("Hata: {}", e),
    }
}
```

`unwrap` ve `expect` sadece değerin kesinlikle var olduğundan emin olduğunuzda veya hızlı prototip/testlerde kullanılmalıdır. Üretim kodunda hata yönetimi için desen eşleme veya kombinatorler tercih edilmelidir.
