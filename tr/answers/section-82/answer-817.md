## 📘 Bölüm: İleri Makro Tasarımı  
### 🔹 Kategori: Makro hata ayıklama için cargo expand kullanımı  
#### ✅ Cevap 817: Makro hata ayıklama için cargo expand kullanımı

Aşağıda, bir makronun genişlemesini `cargo expand` ile nasıl görebileceğinizi gösteren örnek verilmiştir.

```rust
macro_rules! say_hello {
    () => {
        println!("Hello!");
    };
}

fn main() {
    say_hello!();
}
```

Terminalde:
```
cargo install cargo-expand
cargo expand
```

`cargo expand` çıktısı, makronun genişletilmiş halini gösterir. Bu, makro hata ayıklamada çok faydalıdır.
