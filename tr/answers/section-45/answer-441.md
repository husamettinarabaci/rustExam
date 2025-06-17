## 📘 Bölüm: Ömürler ve Ödünç Alma Pratiği  
### 🔹 Kategori: Fonksiyon Parametrelerinde Ömürler  
#### ✅ Cevap 441: Fonksiyon parametrelerine açık ömür ekleme

Fonksiyon parametrelerinde referanslar kullanıldığında, ömür belirtimi gerekebilir. Aşağıdaki örnekte iki referans parametresi alan ve birini döndüren bir fonksiyonun ömür anotasyonu gösterilmiştir.

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}

fn main() {
    let s1 = "merhaba";
    let s2 = "dünya";
    let sonuc = longest(s1, s2);
    println!("En uzun: {}", sonuc);
}
```
