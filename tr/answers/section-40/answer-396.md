## 📘 Bölüm: String ve Metinle Çalışma
### 🔹 Kategori: String Oluşturma
#### ✅ Cevap 396: `format!` ve `push_str` ile string oluşturma

`format!` ile yeni bir `String` oluşturulur, `push_str` ise mevcut bir `String`'e ekleme yapar. Parça parça oluşturmak için `push_str` kullanılır.

```rust
fn main() {
    let isim = "Rust";
    let s1 = format!("Merhaba, {}!", isim);
    let mut s2 = String::from("Merhaba");
    s2.push_str(", ");
    s2.push_str(isim);
    s2.push('!');
    println!("format!: {}", s1);
    println!("push_str: {}", s2);
}
```
