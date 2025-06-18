## 📘 Bölüm: Karmaşık Alanlar için DSL'ler
### 🔹 Kategori: DSL Tasarımı ve Kullanımı
#### ✅ Cevap 1468: DSL yürütmede güvenlik

DSL yürütülürken zararlı kod çalıştırma, kaynak tüketimi ve veri sızıntısı gibi riskler oluşabilir. Güvenli yürütme için izinli komut listesi ve kaynak sınırlamaları uygulanabilir.

```rust
// Güvenli komut kontrolü örneği:
fn is_command_allowed(cmd: &str) -> bool {
    matches!(cmd, "print" | "add" | "subtract")
}

fn main() {
    let cmd = "delete";
    if is_command_allowed(cmd) {
        println!("Command allowed");
    } else {
        println!("Command blocked");
    }
}
```
