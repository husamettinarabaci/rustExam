## 📘 Bölüm: Enumlar ve Veri Modelleme  
### 🔹 Kategori: CLI komutları veya mesajları için enumlar kullanma  
#### ✅ Cevap 429: CLI komutları veya mesajları için enumlar kullanma

CLI uygulamalarında komutları veya mesajları modellemek için enumlar kullanılabilir. Her komut bir enum varyantı olarak tanımlanır.

```rust
enum Command {
    Add(String),
    Remove(String),
    List,
}

fn execute(cmd: Command) {
    match cmd {
        Command::Add(item) => println!("Eklendi: {}", item),
        Command::Remove(item) => println!("Silindi: {}", item),
        Command::List => println!("Listele"),
    }
}
```
