# ๐ About this repo

React.js์์ ์ฝ๊ฒ drag and drop ๊ด๋ จ ๊ธฐ๋ฅ์ ๊ตฌํํ  ์ ์๊ฒ ํด์ฃผ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)์ [๊ณต์ ํํ ๋ฆฌ์ผ ๋น๋์ค](https://egghead.io/courses/beautiful-and-accessible-drag-and-drop-with-react-beautiful-dnd)์ ๋ด์ฉ์ ํ๊ตญ์ด๋ก ๋ฒ์ญํ๋ฉด์ ์ ๋ฆฌํ๋ ๋ธ๋ก๊ทธ ๊ธ์ ์ฌ์ฉ๋  ๋ธ๋ก๊ทธ ๋์๋ถ๋ค์ ๋์๋๋ฆฌ๊ธฐ ์ํ Github Repo ์๋๋ค.

# ๐ Getting Started

์ด ๋ ํฌ์งํ ๋ฆฌ๋ yarn berry zero-install์ ์ฌ์ฉํฉ๋๋ค. `git clone`์ ํตํด์ clone ํ ์ดํ์ [์๋](#๐-ํ์ฌ-์ ๊ณต์ค์ธ-ํ๊ทธ๋ค)์์ ์๊ฐํ ํ๊ทธ๋ค์ ํ์ฉํด์ `checkout`ํด์ ์ฌ์ฉํ์๋ฉด ๋ฉ๋๋ค.

Create-react-app์ผ๋ก ๋ง๋ค์ด์ก๊ธฐ์, ์คํ ํด๋ณด๋ ค๋ฉด `yarn start`๋ก ์คํํ๋ฉด ๋ฉ๋๋ค.

์ต์ ๋ฒ์  Ubuntu 22.04์์ Visual Studio Code๋ก ์๋์ด ๋จ์ ํ์ธํ์์ต๋๋ค. ๋ง์ฝ, ์คํ์ด ์๋๋ ํ๊ฒฝ์ด ์์ผ๋ฉด issue๋ฅผ ๋จ๊ฒจ ์ฃผ์ธ์!

# ๐ท๏ธ This Repo provides git tags

๊ฐ์ ๋ด์ฉ์ ๋ฐ๋ผ์ค๋ฉด์, ์ฌ์ฉํ ์ฝ๋๋ฅผ ์ง์  ํ์ธํด๋ณด์๊ณ  ์ถ๋ค๊ณ ์? ์ด ๋ ํฌ์์ ์ ์๊ฐ ๋ฌ์๋์ ์ฝ๋๋ฅผ ํ์ฉํด์ ํ์ํ ๋ถ๋ถ์ ์ฒดํฌ์์ํด์ ํ์ธํด ๋ณด์ธ์.

```bash
git checkout <ํ๊ทธ ๋ช>
```

## ๐ ํ์ฌ ์ ๊ณต์ค์ธ ํ๊ทธ๋ค

- init : ์ด๊ธฐ repo ์ค์  ๋ฐ ์คํ์ผ๋ง
- intro : [์ฒซ๋ฒ์งธ ์๊ฐ ๊ธ](https://kasterra.github.io/react-beautiful-dnd-1/)์์ ๋ค๋ฃฌ ๋๋ถ๋ถ
- resultPersistence : [๋๋ฒ์งธ ์๊ฐ ๊ธ](https://kasterra.github.io/react-beautiful-dnd-2/)์์ ๋ค๋ฃฌ `onDragEnd` ์์ฑํ๊ธฐ ๋ถ๋ถ
- styleUsingSnapshot : [๋๋ฒ์งธ ์๊ฐ ๊ธ](https://kasterra.github.io/react-beautiful-dnd-2/)์์ ๋ค๋ฃฌ snapshot ์ธ์๋ฅผ ์ด์ฉํ ์คํ์ผ๋ง ๋ถ๋ถ
- callbackGlobalStyle : [๋๋ฒ์งธ ์๊ฐ ๊ธ](https://kasterra.github.io/react-beautiful-dnd-2/) ๋ค๋ฃฌ `DragDropContext`์ ์ฝ๋ฐฑ์ ์ด์ฉํ ์คํ์ผ๋ง ๋ถ๋ถ
- specificDrag : [์ธ๋ฒ์งธ ์๊ฐ ๊ธ](https://kasterra.github.io/react-beautiful-dnd-3/)์์ ๋ค๋ฃฌ Drag Handle ๋ฐ๋ก ์ง์ ํ๊ธฐ ๋ถ๋ถ
- multipleColumn : [์ธ๋ฒ์งธ ์๊ฐ ๊ธ](https://kasterra.github.io/react-beautiful-dnd-3/)์์ ์ฌ๋ฌ Column๊ฐ item ์ด๋ ๋ถ๋ถ
- isDragDisabled : [์ธ๋ฒ์งธ ์๊ฐ ๊ธ](https://kasterra.github.io/react-beautiful-dnd-3/)์์ `isDragDisabled`๋ฅผ ์ด์ฉํด์ ๋๋๊ทธ ์ ํํ๊ธฐ ๋ถ๋ถ
- controlWithType : [์ธ๋ฒ์งธ ์๊ฐ ๊ธ](https://kasterra.github.io/react-beautiful-dnd-3/)์์ `TYPE`์ ์ด์ฉํด์ drag๋ฅผ ๋ ์์ธํ ์ ์ดํ๊ธฐ ๋ถ๋ถ
- isDropDiabled : [์ธ๋ฒ์งธ ์๊ฐ ๊ธ](https://kasterra.github.io/react-beautiful-dnd-3/)์์ isDropDisabled๋ฅผ ์ด์ฉํ ์ ์ด ๋ถ๋ถ
- horizontalDnd : [๋ค๋ฒ์งธ ์๊ฐ ๊ธ](https://kasterra.github.io/react-beautiful-dnd-4/)์์ ์ํ๋ฐฉํฅ dnd ๋ง๋ค๊ธฐ ๋ถ๋ถ
- columnReorder : [๋ค๋ฒ์งธ ์๊ฐ ๊ธ](https://kasterra.github.io/react-beautiful-dnd-4/)์์ Column ์ฌ์ ๋ ฌ ๋ถ๋ถ

# โ๏ธ Tech stacks used in this repo

๋ณธ ๋ ํฌ์งํ ๋ฆฌ์์๋ ์๋์ ๊ฐ์ ํํฌ ์คํ์ ์ฌ์ฉํฉ๋๋ค.

![react logo](https://img.shields.io/badge/React%2018-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

![typescript logo](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=61DAFB)

![yarn berry](https://img.shields.io/badge/yarn%20berry-2C8EBB?style=for-the-badge&logo=yarn&logoColor=61DAFB)

![beautiful dnd](https://img.shields.io/badge/react%20beautiful%20dnd-0BAF7C?style=for-the-badge)

![emotion](https://img.shields.io/badge/emotion-C865B9?style=for-the-badge)

This Project is BootStrapped with Create React App <img src="public/createreactapp.svg" style="color:#09D3AC; width:2em; margin-left:5px;"/>.
