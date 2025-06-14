## 📗 Bölüm: Fonksiyonlar I  
### 🔹 Kategori: Birim Tipi Döndüren Fonksiyonlar  
#### ✅ Cevap 45: Hiçbir şey döndürmeyen fonksiyon (`()`)

**Açıklama:**
Rust'ta hiçbir şey döndürmeyen fonksiyonlar birim tip `()` ile tanımlanır. Bu, genellikle yan etki yapan fonksiyonlarda kullanılır.

**Örnek:**
```rust
fn log_message(msg: &str) {
    println!("{}", msg);
}

fn main() {
    log_message("Bu fonksiyon hiçbir şey döndürmez!");
}
```
Burada `log_message` fonksiyonu dolaylı olarak birim tip `()` döndürür.
