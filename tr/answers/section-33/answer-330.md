## 📘 Bölüm: Result ve Option ile Hata Yönetimi  
### 🔹 Kategori: Hata Yönetimi ve Kombinatörler  
#### ✅ Cevap 330: Panik yapmadan hataları kaydetme veya raporlama

Bu örnekte, bir işlemin başarısız olması durumunda program paniklemek yerine hatayı kullanıcıya anlamlı bir şekilde bildirir. `Result` tipi ile hata yönetimi yapılır ve hata durumunda `eprintln!` ile hata mesajı yazdırılır.

```rust
use std::fs::File;

fn open_file(filename: &str) -> Result<File, std::io::Error> {
    File::open(filename)
}

fn main() {
    match open_file("not_exists.txt") {
        Ok(_file) => println!("File opened successfully!"),
        Err(e) => eprintln!("Failed to open file: {}", e),
    }
    println!("Program continues running.");
}
```
