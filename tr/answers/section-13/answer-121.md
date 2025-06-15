## 📘 Bölüm: Modüller I  
### 🔹 Kategori: Modül Tanımlama  
#### ✅ Cevap 121: Aynı dosyada modül tanımlama

Rust'ta bir modül, aynı dosya içinde `mod` anahtar kelimesiyle tanımlanabilir. Modül içindeki fonksiyonlara modül yolu ile erişilir. Aşağıda, `greetings` modülü ve içindeki `hello` fonksiyonu örneği verilmiştir. `main` fonksiyonundan bu fonksiyon çağrılır.

```rust
mod greetings {
    pub fn hello() {
        println!("Hello from the module!");
    }
}

fn main() {
    greetings::hello();
}
```
