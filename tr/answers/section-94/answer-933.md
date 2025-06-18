## 📘 Bölüm: Bulut ve Dağıtık Sistemlerde Rust
### 🔹 Kategori: Rust ile Mikroservisler
#### ✅ Cevap 933: Dağıtık uzlaşma algoritmaları (Raft, Paxos)

Dağıtık uzlaşma, birden fazla bilgisayarın (düğümün) arızalara rağmen tek bir veri değeri veya durumda anlaşmasını sağlayan süreçtir. Dağıtık sistemlerde tutarlılık için kritiktir.

Raft ve Paxos popüler uzlaşma algoritmalarıdır. Örneğin Raft, lider seçimi ve log çoğaltma ile tutarlılığı sağlar. Aşağıda, Raft lider seçiminin basit bir Rust örneği verilmiştir:

```rust
enum State {
    Follower,
    Candidate,
    Leader,
}

struct Node {
    id: u32,
    state: State,
    term: u32,
    voted_for: Option<u32>,
}

impl Node {
    fn start_election(&mut self) {
        self.state = State::Candidate;
        self.term += 1;
        self.voted_for = Some(self.id);
        // Gerçek bir sistemde diğer düğümlere RequestVote RPC'leri gönderilir
        println!("Düğüm {} {}. dönem için seçim başlattı", self.id, self.term);
    }
}

fn main() {
    let mut node = Node { id: 1, state: State::Follower, term: 0, voted_for: None };
    node.start_election();
}
```

Gerçek sistemlerde uzlaşma uygulamak; ağ bölünmeleri, düğüm arızaları ve güçlü tutarlılık gereksinimleri nedeniyle zordur. Üretim seviyesinde uygulamalar zaman aşımı, tekrar deneme, kalıcı depolama gibi ek mekanizmalar gerektirir.
