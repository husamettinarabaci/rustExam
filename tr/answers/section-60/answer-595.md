## 📘 Bölüm: Sistem Programlama Ustalığı  
### 🔹 Kategori: Sinyal ve Süreç Kontrolü  
#### ✅ Cevap 595: Sinyal ve süreç yaşam döngüsü olaylarını yönetme

Rust'ta child process başlatmak ve sinyal göndermek için std::process ve nix crate'i kullanılabilir. Aşağıda bir örnek verilmiştir:

```rust
use std::process::{Command, Child};
use nix::sys::signal::{kill, Signal};
use nix::unistd::Pid;
use std::thread::sleep;
use std::time::Duration;

fn main() {
    let mut child = Command::new("sleep").arg("10").spawn().unwrap();
    sleep(Duration::from_secs(1));
    kill(Pid::from_raw(child.id() as i32), Signal::SIGTERM).unwrap();
    let status = child.wait().unwrap();
    println!("Child exited with: {:?}", status);
}
```
