# Introduction

Hello, this is a Intagram Video Parser, that you can use to download instagram reels

## Installation

```
> npm install insta-dl
```

## Example

```javascript
import { getReelInfo } from "insta-dl";

getReelInfo("https://www.instagram.com/reel/CrQ9TvAAuRe/").then((data) =>
  console.log(data)
);
```

## Output (Direct Download URL)

```
https://scontent.cdninstagram.com/o1/v/t16/f1/m82/7E4DADE8464B3190C4DE9E38C5E11192_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uY2xpcHMuYzIuNzIwLmJhc2VsaW5lIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&vs=1599966017182295_940007587&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC83RTREQURFODQ2NEIzMTkwQzRERTlFMzhDNUUxMTE5Ml92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dMdU1iaFFsNktRdWRsSUdBTWE3RHJhVDdaNUticV9FQUFBRhUCAsgBACgAGAAbABUAACagrOL2w9HjPxUCKAJDMywXQDdMzMzMzM0YEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HAA%3D%3D&ccb=9-4&oh=00_AfCO50z86EYZ6HuUvS1mHn9bymnUBUEzh02dunAatMiTQg&oe=65780D2F&_nc_sid=10d13b
```
