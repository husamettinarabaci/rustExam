## 📘 Bölüm: İleri Async Desenleri  
### 🔹 Kategori: futures::stream ile async stream implementasyonu  
#### ✅ Cevap 551: futures::stream ile async stream implementasyonu

Bu soruda, `futures::stream` kullanarak bir async stream oluşturmayı öğrendiniz. `Stream` trait'i, async olarak veri üreten bir yapıdır ve genellikle veri akışlarını modellemek için kullanılır. `futures::stream::iter` gibi yardımcı fonksiyonlarla kolayca stream oluşturabilir ve `.next().await` ile elemanları asenkron olarak çekebilirsiniz.

```rust
use futures::stream::{self, StreamExt};
use tokio;

#[tokio::main]
async fn main() {
    let mut s = stream::iter(vec![1, 2, 3]);
    while let Some(val) = s.next().await {
        println!("Got: {}", val);
    }
}
```
