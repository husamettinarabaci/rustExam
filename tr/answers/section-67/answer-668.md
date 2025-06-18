## 📘 Bölüm: Alan Odaklı Tasarım
### 🔹 Kategori: Alan servisleri ve uygulama katmanları yazma
#### ✅ Cevap 668: Alan servisleri ve uygulama katmanları yazma

Alan servisleri, doğrudan bir varlığa veya değer nesnesine ait olmayan iş mantığını kapsüller. Rust'ta struct ve trait'ler ile servis mantığı yazabilir, kodunuzu katmanlara ayırabilirsiniz.

```rust
struct EpostaServisi;

impl EpostaServisi {
    fn eposta_gonder(&self, kime: &str, icerik: &str) {
        println!("{} adresine e-posta gönderiliyor: {}", kime, icerik);
    }
}

fn main() {
    let servis = EpostaServisi;
    servis.eposta_gonder("ayse@example.com", "Hoş geldiniz!");
}
```
