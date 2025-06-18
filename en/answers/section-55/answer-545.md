## 📘 Section: Systems-Level Design with Rust  
### 🔹 Category: Unix System Calls and `nix`  
#### ✅ Answer 545: Working with `nix` crate for low-level Unix operations

The `nix` crate allows you to perform file creation, writing, and reading. Errors are handled with `Result`.

```rust
use nix::fcntl::{open, OFlag};
use nix::sys::stat::Mode;
use nix::unistd::{write, read, close};
use std::os::unix::io::RawFd;

fn main() -> nix::Result<()> {
    let fd: RawFd = open("test.txt", OFlag::O_CREAT | OFlag::O_WRONLY, Mode::S_IRWXU)?;
    write(fd, b"Hello, nix!\n")?;
    close(fd)?;
    let fd = open("test.txt", OFlag::O_RDONLY, Mode::empty())?;
    let mut buf = [0u8; 32];
    let n = read(fd, &mut buf)?;
    println!("Read: {}", std::str::from_utf8(&buf[..n]).unwrap());
    close(fd)?;
    Ok(())
}
```
