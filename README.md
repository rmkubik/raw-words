## Tasks

Tasks are run with the cli tool [xc](https://xcfile.dev/getting-started/). So `xc publish` runs the Publish task below.

### Publish

Copy #public tagged files from my personal notes into the `content` dir of this project.
Push a new git commit to kick off a publish build.
This will run in Netlify and go live at https://words.ryankubik.com.

```bash
bun scripts/copy-public-files.ts ~/Google\ Drive/notes/personal

git --no-pager diff --name-only

read -r -p "Publish these files? [y/N] " answer
[[ "$answer" =~ ^[Yy]$ ]] || exit 1

git add -A
git commit -m "Update notes"
git push
```

### See most recently published files

```bash
git diff HEAD~1 --name-only
```
