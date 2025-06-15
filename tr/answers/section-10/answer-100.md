## 📘 Bölüm: Yapılar II  
### 🔹 Kategori: Metotlar ve Statik Değişkenler  
#### ✅ Cevap 100: Statik değişkenli metot

Bu örnekte, bir metotta statik değişken nasıl kullanılır gösterilmektedir. Statik `COUNTER` değişkeni, metot içinde `unsafe` ve `static mut` ile değiştirilir. Statik değişkenlerin değiştirilmesi güvenli değildir ve eşzamanlı kodda sorunlara yol açabilir.

```rust
static mut COUNTER: u32 = 0;

struct Ornek;

impl Ornek {
    fn sayaci_arttir() {
        unsafe {
            COUNTER += 1;
            println!("COUNTER: {}", COUNTER);
        }
    }
}

fn main() {
    Ornek::sayaci_arttir();
    Ornek::sayaci_arttir();
}
```

**Not:** `static mut` değişkenlere erişmek veya onları değiştirmek güvenli değildir ve thread-safe değildir. Güvenli eşzamanlılık için atomik türler veya senkronizasyon araçları kullanılmalıdır.
