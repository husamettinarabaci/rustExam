## 📘 Bölüm: Fonksiyon Sınırlarında Sahiplik  
### 🔹 Kategori: Fonksiyonlardan sahiplikli değerler döndürme  
#### ✅ Cevap 372: Fonksiyonlardan sahiplikli değerler döndürme

Bu örnekte, bir string değişkeninin sahipliği bir fonksiyona aktarılır. Fonksiyon, string üzerinde işlem yapar ve sahipliği ana fonksiyona geri döndürür. Böylece ana fonksiyon, dönen yeni string üzerinde işlem yapmaya devam edebilir.

```rust
fn append_suffix(mut s: String) -> String {
    s.push_str(" - rustacean");
    s
}

fn main() {
    let my_string = String::from("merhaba");
    let new_string = append_suffix(my_string);
    println!("{}", new_string);
}
```
