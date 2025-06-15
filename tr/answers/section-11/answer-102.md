## 📘 Bölüm: Enumlar I  
### 🔹 Kategori: Verili Enum Varyantları  
#### ✅ Cevap 102: Varyantlara veri eklenen enum

Bu örnekte, veri tutan bir enum varyantı nasıl tanımlanır, bir örneği nasıl oluşturulur ve veri `match` ile nasıl yazdırılır gösterilmektedir.

```rust
enum Mesaj {
    Cikis,
    Yaz(String),
}

fn main() {
    let mesaj = Mesaj::Yaz(String::from("Merhaba, Rust!"));
    match mesaj {
        Mesaj::Cikis => println!("Çıkış mesajı"),
        Mesaj::Yaz(metin) => println!("Mesaj: {}", metin),
    }
}
```
