# 📚 About this repo

React.js에서 쉽게 drag and drop 관련 기능을 구현할 수 있게 해주는 라이브러리 [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)의 [공식 튜토리얼 비디오](https://egghead.io/courses/beautiful-and-accessible-drag-and-drop-with-react-beautiful-dnd)의 내용을 한국어로 번역하면서 정리하는 블로그 글에 사용될 블로그 독자분들을 도와드리기 위한 Github Repo 입니다.

# 🏃 Getting Started

이 레포지토리는 yarn berry zero-install을 사용합니다. `git clone`을 통해서 clone 한 이후에 [아래](#📜-현재-제공중인-태그들)에서 소개한 태그들을 활용해서 `checkout`해서 사용하시면 됩니다.

Create-react-app으로 만들어졌기에, 실행 해보려면 `yarn start`로 실행하면 됩니다. 

최신버전 Ubuntu 22.04에서 Visual Studio Code로 작동이 됨을 확인하였습니다. 만약, 실행이 안되는 환경이 있으면 issue를 남겨 주세요!

# 🏷️ This Repo provides git tags

강의 내용을 따라오면서, 사용한 코드를 직접 확인해보시고 싶다고요? 이 레포에서 저자가 달아놓은 코드를 활용해서 필요한 부분을 체크아웃해서 확인해 보세요.

```bash
git checkout <태그 명>
```

## 📜 현재 제공중인 태그들

- init : 초기 repo 설정 및 스타일링
- intro : [첫번째 소개 글](https://kasterra.github.io/react-beautiful-dnd-1/)에서 다룬 끝부분
- resultPersistence : [두번째 소개 글](https://kasterra.github.io/react-beautiful-dnd-2/)에서 다룬 `onDragEnd` 작성하기 부분
- styleUsingSnapshot : [두번째 소개 글](https://kasterra.github.io/react-beautiful-dnd-2/)에서 다룬 snapshot 인수를 이용한 스타일링 부분
- callbackGlobalStyle : [두번째 소개 글](https://kasterra.github.io/react-beautiful-dnd-2/) 다룬 `DragDropContext`의 콜백을 이용한 스타일링 부분
- specificDrag : [세번째 소개 글](https://kasterra.github.io/react-beautiful-dnd-3/)에서 다룬 Drag Handle 따로 지정하기 부분

# ⚒️ Tech stacks used in this repo 

본 레포지토리에서는 아래와 같은 테크 스택을 사용합니다.

![react logo](https://img.shields.io/badge/React%2018-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

![typescript logo](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=61DAFB)

![yarn berry](https://img.shields.io/badge/yarn%20berry-2C8EBB?style=for-the-badge&logo=yarn&logoColor=61DAFB)

![beautiful dnd](https://img.shields.io/badge/react%20beautiful%20dnd-0BAF7C?style=for-the-badge)

![emotion](https://img.shields.io/badge/emotion-C865B9?style=for-the-badge)

This Project is BootStrapped with Create React App <img src="public/createreactapp.svg" style="color:#09D3AC; width:2em; margin-left:5px;"/>.