## 📘 Bölüm: İleri Async I/O ve Ağ Programlama  
### 🔹 Kategori: Sıfır Kopya Ağ Programlama  
#### ✅ Cevap 1201: Rust'ta sıfır kopya ağ programlama

Sıfır kopya (zero-copy), verinin kullanıcı alanı ve çekirdek arasında fazladan kopyalanmadan doğrudan aktarılmasıdır. Bu, performansı artırır ve CPU yükünü azaltır. Rust'ta `std::io::copy` gibi fonksiyonlar, bir TCP bağlantısından diğerine veri aktarırken sıfır kopya aktarımı mümkün kılar.

```rust
use std::net::{TcpListener, TcpStream};
use std::io;

fn transfer(mut from: TcpStream, mut to: TcpStream) -> io::Result<u64> {
    std::io::copy(&mut from, &mut to)
}
```

Bu örnekte, `copy` fonksiyonu veriyi doğrudan aktarır ve ek kopyalama yapmaz.
