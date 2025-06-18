## 📘 Bölüm: Future'lar ve Async Primitifler
### 🔹 Kategori: Async görev uyandırma için Waker kullanımı
#### ✅ Cevap 1045: Async görev uyandırma için `Waker` kullanımı

`Waker`, bir future'ın askıya alındıktan sonra tekrar çalıştırılmasını sağlar. Kendi `Future` implementasyonunuzda, bir görevin başka bir görev tarafından uyandırılmasını sağlayabilirsiniz. Aşağıda, bir future'ın bir thread tarafından uyandırılması örneklenmiştir.

```rust
use std::future::Future;
use std::pin::Pin;
use std::sync::{Arc, Mutex};
use std::task::{Context, Poll, Waker};
use std::thread;
use std::time::Duration;

struct ManualWake {
    waker: Arc<Mutex<Option<Waker>>>,
    ready: Arc<Mutex<bool>>,
}

impl Future for ManualWake {
    type Output = &'static str;
    fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output> {
        let mut ready = self.ready.lock().unwrap();
        if *ready {
            Poll::Ready("Uyandırıldı!")
        } else {
            let mut waker = self.waker.lock().unwrap();
            *waker = Some(cx.waker().clone());
            Poll::Pending
        }
    }
}

fn main() {
    let waker = Arc::new(Mutex::new(None));
    let ready = Arc::new(Mutex::new(false));
    let mut future = ManualWake {
        waker: waker.clone(),
        ready: ready.clone(),
    };

    let waker2 = waker.clone();
    let ready2 = ready.clone();
    thread::spawn(move || {
        thread::sleep(Duration::from_millis(500));
        *ready2.lock().unwrap() = true;
        if let Some(w) = waker2.lock().unwrap().take() {
            w.wake();
        }
    });

    futures::executor::block_on(async {
        let msg = (&mut future).await;
        println!("{}", msg);
    });
}
```
