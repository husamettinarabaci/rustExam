## 📘 Section: Systems Programming Mastery  
### 🔹 Category: Signal and Process Lifecycle Events  
#### ✅ Answer 595: Handling signals and process lifecycle events

To spawn a child process and send a signal in Rust, use std::process and the nix crate. Example:

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
