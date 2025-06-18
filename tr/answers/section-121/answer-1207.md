## 📘 Bölüm: İleri Async I/O ve Ağ Programlama  
### 🔹 Kategori: Bağlantı Havuzu ve Yük Dengeleme  
#### ✅ Cevap 1207: Bağlantı havuzu ve yük dengeleme

Bağlantı havuzu, tekrar kullanılabilir bağlantıların yönetilmesini sağlar ve kaynak kullanımını optimize eder. Yük dengeleme ise gelen isteklerin birden fazla sunucuya dağıtılmasıdır. Rust'ta `bb8` ve `deadpool` gibi kütüphanelerle bağlantı havuzu oluşturulabilir.

```rust
use bb8::{Pool, ManageConnection};
use bb8_postgres::PostgresConnectionManager;
use tokio_postgres::NoTls;

#[tokio::main]
async fn main() {
    let manager = PostgresConnectionManager::new_from_stringlike(
        "host=localhost user=postgres password=secret",
        NoTls,
    ).unwrap();
    let pool = Pool::builder().build(manager).await.unwrap();
    let conn = pool.get().await.unwrap();
    let row = conn.query_one("SELECT 1", &[]).await.unwrap();
    println!("Sonuç: {}", row.get::<_, i32>(0));
}
```

Bu örnekte, `bb8` ile PostgreSQL için bir bağlantı havuzu oluşturulmuştur.
