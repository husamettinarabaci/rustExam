## 📘 Bölüm: Fonksiyon Sınırlarında Sahiplik  
### 🔹 Kategori: Fonksiyonlara sahiplikli değerler aktarma  
#### ✅ Cevap 371: Fonksiyonlara sahiplikli değerler aktarma

Bu örnekte, bir string değişkeninin sahipliği bir fonksiyona aktarılır. Fonksiyon, aldığı string üzerinde işlem yapar ve sahipliği tamamen devralır. Ana fonksiyonda, sahipliği devredilen değişken tekrar kullanılmak istendiğinde derleyici hata verir. Bu, Rust'ın sahiplik kurallarının temel bir göstergesidir.

```rust
fn print_uppercase(s: String) {
    println!("{}", s.to_uppercase());
}

fn main() {
    let my_string = String::from("merhaba rust");
    print_uppercase(my_string);
    // Aşağıdaki satır derleyici hatası verecektir:
    // println!("{}", my_string);
}
```
