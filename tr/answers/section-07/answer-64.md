## 📘 Bölüm: Sahiplik ve Ödünç Alma I  
### 🔹 Kategori: Fonksiyondan Sahiplik Döndürme  
#### ✅ Cevap 64: Fonksiyondan sahiplik döndürme

Bir fonksiyon, bir değeri döndürerek onun sahipliğini çağırana aktarabilir. Çağıran, dönen değerin sahibi olur ve onu kullanabilir.

```rust
fn sahiplik_ver() -> String {
    let s = String::from("merhaba");
    s // sahiplik çağırana geçer
}

fn main() {
    let s1 = sahiplik_ver();
    println!("{}", s1); // çalışır
}
```

Burada `sahiplik_ver` fonksiyonu bir `String` döndürerek sahipliği çağırana aktarır ve çağıran bu değeri kullanabilir.
