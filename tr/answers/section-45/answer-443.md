## 📘 Bölüm: Ömürler ve Ödünç Alma Pratiği  
### 🔹 Kategori: Ömür Çıkarım Kuralları  
#### ✅ Cevap 443: Ömür çıkarım kurallarını doğru kullanma

Rust'ta bazı fonksiyonlarda ömür belirtmeye gerek yoktur çünkü derleyici ömürleri otomatik olarak çıkarabilir. Tek referans parametresi ve dönüş değeri olan fonksiyonlarda bu kural geçerlidir.

```rust
fn ilk_karakter(s: &str) -> &str {
    &s[0..1]
}

fn main() {
    let kelime = "rust";
    println!("{}", ilk_karakter(kelime));
}
```
