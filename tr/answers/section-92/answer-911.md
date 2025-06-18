## 📘 Bölüm: Sistem Güvenliği ve Sertleştirme
### 🔹 Kategori: Bellek güvenli kriptografik kod yazma
#### ✅ Cevap 911: Bellek güvenli kriptografik kod yazma

Bu çözümde, yalnızca güvenli Rust kodu kullanılarak basit bir XOR şifreleme fonksiyonu yazılmıştır. Fonksiyon, bir byte dilimi ve anahtar alır, her byte'ı anahtar ile XOR'layıp yeni bir vektör döndürür.

```rust
fn xor_sifrele(girdi: &[u8], anahtar: u8) -> Vec<u8> {
    girdi.iter().map(|&b| b ^ anahtar).collect()
}

fn main() {
    let veri = b"merhaba";
    let sifreli = xor_sifrele(veri, 42);
    println!("{:?}", sifreli);
}
```
