## 📘 Bölüm: Future'lar ve Async Primitifler
### 🔹 Kategori: Async iptal ve temizleme
#### ✅ Cevap 1046: Async iptal ve temizleme

Async görevler iptal edildiğinde, ilgili kaynakların temizlenmesi için `Drop` trait'i kullanılır. `tokio::select!` ile bir görevi iptal edebilir ve iptal sırasında bir temizleme işlemi tetiklenebilir. Aşağıdaki örnekte, bir görev iptal edildiğinde bir mesaj yazdırılır.

```rust
use tokio::time::{sleep, Duration};

struct Resource;

impl Drop for Resource {
    fn drop(&mut self) {
        println!("Kaynak temizleniyor!");
    }
}

#[tokio::main]
async fn main() {
    let fut = async {
        let _res = Resource;
        sleep(Duration::from_secs(5)).await;
    };
    tokio::select! {
        _ = fut => {},
        _ = sleep(Duration::from_millis(500)) => {
            println!("Görev iptal edildi!");
        }
    }
    // "Kaynak temizleniyor!" mesajı her durumda yazdırılır.
}
```
