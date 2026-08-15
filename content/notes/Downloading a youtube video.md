---
tags:
  - public
---
You can use [yt-dlp](https://github.com/yt-dlp/yt-dlp) to download a youtube video copy to you computer if you have the URL for the video. This is a CLI tool.

## Installation
Detailed [installation instructions](https://github.com/yt-dlp/yt-dlp/wiki/Installation#installing-the-release-binary)
```bash
curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o ~/.local/bin/yt-dlp
chmod a+rx ~/.local/bin/yt-dlp  # Make executable
```

## Usage
```bash
 ~/.local/bin/yt-dlp -F https://www.youtube.com/watch\?v\=dMdpzyr9XRg
```

Use the `-F` flag short for `--list-formats`. This will show all formats of audio and video that are available for download for this video.

Some formats will be audio only, video only, or have both things.

### Format selection
To actually download a video you can use the `-f` flag short for `--format`. This flag requires you to specify the format you want to use. 

[Docs on this section are here](https://github.com/yt-dlp/yt-dlp#format-selection)

There is a bunch of very specific stuff you can choose for all the different formats, but there are also a bunch of helpful shortcuts.

- `best` - the best format that has audio and video
- `bv` - the best video format, may not have good audio
- `ba` - the best audio format, may not have video
