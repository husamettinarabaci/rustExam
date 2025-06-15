## 📘 Bölüm: Ömürler I  
### 🔹 Kategori: Ömür Hataları ve Çözümleri  
#### ✅ Cevap 75: Ömür hataları ve çözümleri

Bir fonksiyon, parametrelerinden birinin referansını döndürüyorsa, Rust girişlerin ömürlerinin çıktıyla nasıl ilişkili olduğunu bilmek ister. Ömür parametresi eklenmezse derleyici hata verir. Açık ömür parametresi eklenerek bu hata çözülür.

**Ömür parametresi olmadan (hata verir):**
```rust
// fn en_uzun(x: &str, y: &str) -> &str {
//     if x.len() > y.len() { x } else { y }
// }
```

**Doğru ömür parametresiyle:**
```rust
fn en_uzun<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}

fn main() {
    let s1 = String::from("merhaba");
    let s2 = String::from("dünya!");
    let sonuc = en_uzun(&s1, &s2);
    println!("En uzun: {}", sonuc);
}
```
