## 📘 Bölüm: Fonksiyonlar I  
### 🔹 Kategori: Fonksiyon Çağrıları  
#### ✅ Cevap 47: Başka bir fonksiyon çağıran fonksiyon

Rust'ta bir fonksiyonun içinde başka bir fonksiyonu çağırmak için fonksiyon adını ve parantezleri kullanmak yeterlidir. Bu, kodun düzenli ve tekrar kullanılabilir olmasını sağlar.

```rust
fn greet() {
    println!("Hello from greet!");
}

fn call_greet() {
    greet();
}

fn main() {
    call_greet();
}
```
