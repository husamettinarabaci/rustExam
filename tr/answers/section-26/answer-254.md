## 📘 Bölüm: Karmaşık Yapılarda Sahiplik  
### 🔹 Kategori: Alan Mantığında Sahiplik Aktarımı  
#### ✅ Cevap 254: Alan mantığında sahiplik aktarımını modelleme

Bu örnekte, Rust'ta alan mantığında sahiplik aktarımının nasıl modellenebileceği gösterilmektedir. Burada bir `Kitap` kütüphaneden bir `Okuyucu`ya aktarılır. Aktarımdan sonra kütüphane artık kitabın sahibi değildir ve sadece okuyucu erişebilir. Rust'ın sahiplik sistemi, move sonrası kullanımı engeller ve güvenliği sağlar.

```rust
struct Kitap {
    baslik: String,
}

struct Okuyucu {
    isim: String,
    kitap: Option<Kitap>,
}

struct Kutuphane {
    kitap: Option<Kitap>,
}

fn kitap_aktar(kutuphane: &mut Kutuphane, okuyucu: &mut Okuyucu) {
    okuyucu.kitap = kutuphane.kitap.take();
}

fn main() {
    let kitap = Kitap { baslik: String::from("Rust ile Programlama") };
    let mut kutuphane = Kutuphane { kitap: Some(kitap) };
    let mut okuyucu = Okuyucu { isim: String::from("Ayşe"), kitap: None };
    println!("Aktarım öncesi: Kütüphanede kitap var mı? {}", kutuphane.kitap.is_some());
    println!("Aktarım öncesi: Okuyucuda kitap var mı? {}", okuyucu.kitap.is_some());
    kitap_aktar(&mut kutuphane, &mut okuyucu);
    println!("Aktarım sonrası: Kütüphanede kitap var mı? {}", kutuphane.kitap.is_some());
    println!("Aktarım sonrası: Okuyucuda kitap var mı? {}", okuyucu.kitap.is_some());
}
```
