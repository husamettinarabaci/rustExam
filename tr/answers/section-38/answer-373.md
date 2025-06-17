## 📘 Bölüm: Fonksiyon Sınırlarında Sahiplik  
### 🔹 Kategori: Parametrelerde değiştirilemez ödünç alma  
#### ✅ Cevap 373: Parametrelerde değiştirilemez ödünç alma

Bu örnekte, bir string değişkeni bir fonksiyona değiştirilemez referans (&) ile aktarılır. Fonksiyon, stringin uzunluğunu hesaplar ve ekrana yazdırır. Sahiplik aktarılmadığı için ana fonksiyonda orijinal değişken fonksiyon çağrısından sonra da kullanılabilir.

```rust
fn print_length(s: &String) {
    println!("Uzunluk: {}", s.len());
}

fn main() {
    let my_string = String::from("merhaba rust");
    print_length(&my_string);
    println!("Orijinal: {}", my_string);
}
```
