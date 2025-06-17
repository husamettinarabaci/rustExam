## 📘 Bölüm: Enumlar, Varyantlar ve Cebirsel Veri Tipleri  
### 🔹 Kategori: Enumlarda desen eşleme ve koruyucular
#### ✅ Cevap 310: Koruyucu ve bağlamalı desenlerle enumları eşleme

Rust'ta enumlar üzerinde desen eşleme yaparken koruyucu (guard) ve `@` bağlama kullanmak, daha esnek ve okunabilir kod yazmanızı sağlar. Aşağıdaki örnekte, bir enum üzerinde hem koruyucu hem de `@` bağlama ile farklı durumlar kontrol edilmiştir.

```rust
enum Message {
    Number(i32),
    Quit,
}

fn process_message(msg: Message) {
    match msg {
        n @ Message::Number(val) if val > 0 => {
            println!("Pozitif sayı: {:?}", n);
        }
        Message::Number(val) if val < 0 => {
            println!("Negatif sayı: {}", val);
        }
        Message::Quit => {
            println!("Çıkış mesajı alındı");
        }
        _ => {
            println!("Sıfır veya bilinmeyen mesaj");
        }
    }
}

fn main() {
    process_message(Message::Number(42));
    process_message(Message::Number(-7));
    process_message(Message::Quit);
}
```

Bu örnekte, `n @ Message::Number(val) if val > 0` satırı hem `@` bağlamayı hem de koruyucu kullanır. Böylece pozitif sayılar için enumun tamamı yakalanıp işlenebilir.
