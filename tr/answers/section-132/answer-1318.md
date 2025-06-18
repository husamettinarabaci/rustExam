## 📘 Bölüm: Gömülü DSL'ler: Ayrıştırma ve Derleme
### 🔹 Kategori: DSL Araçları ve Editör Entegrasyonu
#### ✅ Cevap 1318: DSL araçları ve editör entegrasyonu

Bu örnekte, DSL anahtar kelimelerini ve sayıları farklı renkte gösteren basit bir renklendirme fonksiyonu yazılmıştır (renkler terminalde gösterim amaçlıdır).

```rust
fn highlight_dsl(input: &str) {
    for token in input.split_whitespace() {
        if token == "add" || token == "mul" {
            print!("\x1b[32m{}\x1b[0m ", token); // yeşil
        } else if token.chars().all(|c| c.is_digit(10)) {
            print!("\x1b[34m{}\x1b[0m ", token); // mavi
        } else {
            print!("{} ", token);
        }
    }
    println!();
}

fn main() {
    highlight_dsl("add 1 2");
}
```
