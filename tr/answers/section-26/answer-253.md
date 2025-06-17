## 📘 Bölüm: Karmaşık Yapılarda Sahiplik  
### 🔹 Kategori: Soyutlama Katmanlarında Sahiplik Aktarımı  
#### ✅ Cevap 253: Sahipliği birden fazla soyutlama katmanında aktarma

Bu örnekte, sahipliğin Rust'ta birden fazla soyutlama katmanı arasında nasıl aktarılabileceği gösterilmektedir. Her fonksiyon veya struct değerin sahipliğini alır ve move sonrası önceki sahip artık değeri kullanamaz. Bu, move sonrası kullanım hatalarını engeller ve bellek güvenliğini sağlar.

```rust
struct Veri {
    deger: String,
}

fn veri_katmani(val: String) -> Veri {
    Veri { deger: val }
}

fn servis_katmani(veri: Veri) -> Veri {
    println!("Servis aldı: {}", veri.deger);
    veri
}

fn uygulama_katmani(veri: Veri) {
    println!("Uygulama aldı: {}", veri.deger);
}

fn main() {
    let ham = String::from("Rust Sahiplik");
    let veri = veri_katmani(ham);
    // ham artık kullanılamaz
    let veri = servis_katmani(veri);
    // veri tekrar taşındı
    uygulama_katmani(veri);
    // veri burada kullanılamaz
}
```
