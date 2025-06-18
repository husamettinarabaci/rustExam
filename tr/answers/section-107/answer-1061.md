## 📘 Bölüm: Eşzamanlılık Desenleri ve İfadeleri  
### 🔹 Kategori: select! ile karmaşık eşzamanlılık kontrolü  
#### ✅ Cevap 1061: select! ile karmaşık eşzamanlılık kontrolü

`select!` makrosu, birden fazla eşzamanlı işlemi aynı anda beklemek ve ilk tamamlanan işlemi seçmek için kullanılır. Özellikle async kodda, birden fazla kanal veya future ile çalışırken kullanışlıdır. Bu sayede, örneğin birden fazla kanaldan gelen mesajları veya zaman aşımı olaylarını aynı anda bekleyebilirsiniz.

```rust
use tokio::sync::mpsc;
use tokio::time::{self, Duration};
use tokio::select;

#[tokio::main]
async fn main() {
    let (tx1, mut rx1) = mpsc::channel(1);
    let (tx2, mut rx2) = mpsc::channel(1);
    tx1.send("mesaj1").await.unwrap();
    tx2.send("mesaj2").await.unwrap();
    let timeout = time::sleep(Duration::from_secs(1));
    tokio::pin!(timeout);

    select! {
        Some(msg) = rx1.recv() => println!("rx1: {}", msg),
        Some(msg) = rx2.recv() => println!("rx2: {}", msg),
        _ = &mut timeout => println!("Zaman aşımı!"),
    }
}
```
Bu örnekte, iki kanaldan veya zaman aşımından hangisi önce gerçekleşirse ona göre işlem yapılır.
