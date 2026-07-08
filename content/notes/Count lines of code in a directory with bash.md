---
created: 2026-07-03T21:06:47-07:00
modified: 2026-07-03T21:09:17-07:00
tags:
  - public
---
```bash
find . -path "*/node_modules" -prune -o -name '*.ts' -print | xargs wc -l
```

Run from root of project. Use -path + -prune to avoid counting node_modules directory. -o is "or" and allows the second check of "files ending with .ts". -print to output the results. Pipe into xargs so that you can convert it to cli args for wc. Use -l with wc to count lines instead of words.