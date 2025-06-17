## 📘 Bölüm: Karmaşık Yapılarda Sahiplik  
### 🔹 Kategori: Sahiplik Semantiğini Korumak için Yardımcı Fonksiyonlar  
#### ✅ Cevap 255: Sahiplik semantiğini koruyan yardımcı fonksiyonlar oluşturma

Bu örnekte, sahiplik aktarımını ve ödünç almayı güvenli şekilde yöneten yardımcı fonksiyonlar tanımlanmıştır. Rust'ın sahiplik ve ödünç alma kuralları, bu fonksiyonlar sayesinde derleme zamanında korunur ve güvenli erişim sağlanır.

```rust
struct Veri {
    deger: String,
}

// Sahipliği transfer eden yardımcı fonksiyon
fn sahipligi_transfer_et(veri: Veri) -> Veri {
    println!("Sahiplik transfer edildi: {}", veri.deger);
    veri
}

// Referans ödünç alan yardımcı fonksiyon
fn degeri_yazdir(veri: &Veri) {
    println!("Referans ile erişildi: {}", veri.deger);
}

fn main() {
    let veri = Veri { deger: String::from("Rust Yardımcı Fonksiyonlar") };
    degeri_yazdir(&veri); // ödünç alma
    let veri = sahipligi_transfer_et(veri); // sahiplik transferi
    // veri tekrar kullanılabilir çünkü sahiplik geri döndü
    degeri_yazdir(&veri);
}
```
