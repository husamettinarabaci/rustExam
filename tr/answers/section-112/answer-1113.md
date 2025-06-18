## 📘 Bölüm: Async Kaynak Yönetimi  
### 🔹 Kategori: Görev iptalinde kaynak temizliği  
#### ✅ Cevap 1113: Görev iptalinde kaynak temizliği

Çözümde, bir async görev başlatılır ve görev iptal edildiğinde kaynak otomatik olarak drop edilir ve mesaj yazdırılır.

```rust
use tokio::time::{sleep, Duration};
use tokio::task;

struct Resource;

impl Drop for Resource {
    fn drop(&mut self) {
        println!("Kaynak temizlendi!");
    }
}

#[tokio::main]
async fn main() {
    let handle = task::spawn(async {
        let _r = Resource;
        sleep(Duration::from_secs(10)).await;
    });
    sleep(Duration::from_millis(100)).await;
    handle.abort(); // Görev iptal edilir
    // _r drop edilir ve mesaj yazılır
}
```
