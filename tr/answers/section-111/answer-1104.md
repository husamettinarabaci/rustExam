## 📘 Bölüm: Kanal Desenleri ve İleri Mesajlaşma  
### 🔹 Kategori: Mesaj önceliklendirme yönetimi  
#### ✅ Cevap 1104: Mesaj önceliklendirme yönetimi

Bu örnekte, mesajlar acil ve normal olarak iki öncelik seviyesinde işlenir. Tüketici önce acil mesajları, ardından normal mesajları işler.

```rust
use tokio::sync::mpsc;

#[derive(Debug)]
enum PriorityMsg {
    Urgent(String),
    Normal(String),
}

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(10);
    tx.send(PriorityMsg::Normal("normal1".into())).await.unwrap();
    tx.send(PriorityMsg::Urgent("urgent1".into())).await.unwrap();
    tx.send(PriorityMsg::Normal("normal2".into())).await.unwrap();
    tx.send(PriorityMsg::Urgent("urgent2".into())).await.unwrap();
    drop(tx);
    let mut urgent = Vec::new();
    let mut normal = Vec::new();
    while let Some(msg) = rx.recv().await {
        match msg {
            PriorityMsg::Urgent(s) => urgent.push(s),
            PriorityMsg::Normal(s) => normal.push(s),
        }
    }
    for u in urgent { println!("Urgent: {}", u); }
    for n in normal { println!("Normal: {}", n); }
}
```
