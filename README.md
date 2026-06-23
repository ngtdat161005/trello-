# Trello Web

Frontend cho du an Trello Clone, duoc xay dung bang React + Vite. Phan web hien dang render board bang mock data va da co chuc nang keo tha column/card tren giao dien.

## Muc tieu

- Xay dung giao dien quan ly cong viec theo phong cach Trello.
- Hien thi board, column va card.
- Ho tro drag & drop column/card.
- Tach rieng frontend de co the ket noi voi backend API sau nay.

## Kien truc thu muc

```text
vite-trello-web-base-project/
+-- public/                 # Static file public
+-- src/
|   +-- apis/               # Mock data/API client
|   +-- assets/             # SVG, image, asset dung trong UI
|   +-- components/         # Component dung chung
|   |   +-- AppBar/         # Thanh navigation tren cung
|   |   +-- ModeSelect/     # Chon light/dark mode
|   +-- pages/
|   |   +-- Auth/           # Trang authentication, dang skeleton
|   |   +-- Boards/         # Man hinh board chinh
|   |   +-- Users/          # Trang user, dang skeleton
|   +-- redux/              # Store cho state global, du phong
|   +-- utils/              # Constants, formatters, sorting helpers
|   +-- App.jsx             # Root component
|   +-- main.jsx            # Entry point React
+-- index.html
+-- vite.config.js          # Vite config, alias "~" -> src
+-- package.json
```

## Thu vien su dung

- `react`, `react-dom`: xay dung giao dien.
- `vite`: dev server va build tool.
- `@vitejs/plugin-react-swc`: bien dich React bang SWC.
- `@mui/material`, `@mui/icons-material`: component UI va icon.
- `@emotion/react`, `@emotion/styled`: styling engine cho MUI.
- `@dnd-kit/core`, `@dnd-kit/sortable`, `@dnd-kit/utilities`: drag & drop cho column/card.
- `lodash`: ho tro clone/xu ly du lieu.
- `vite-plugin-svgr`: import SVG nhu React component.
- `eslint`: kiem tra coding style.

## Yeu cau moi truong

- Node.js `>= 18.x`
- Yarn hoac npm

Repo co `yarn.lock`, nen nen dung Yarn de cai dependency nhat quan.

## Setup va chay local

```bash
git clone <frontend-repo-url>
cd vite-trello-web-base-project
yarn install
yarn dev
```

Sau khi chay, Vite se hien URL tren terminal, thuong la:

```text
http://localhost:5173
```

## Scripts

```bash
yarn dev
```

Chay dev server.

```bash
yarn build
```

Build source ra ban production.

```bash
yarn preview
```

Preview ban production build.

```bash
yarn lint
```

Kiem tra coding style bang ESLint.

## Trang thai hien tai

- Du lieu board dang lay tu `src/apis/mock-data.js`.
- Drag & drop dang xu ly o client-side.
- Chua ket noi backend API.
- Cac trang `Auth` va `Users` dang la phan khung de phat trien tiep.

## De xuat phat trien tiep

- Tao file `.env.example` de cau hinh API base URL, vi du `VITE_API_ROOT`.
- Tach API client rieng de thay mock data bang request den backend.
- Them routing neu ung dung co nhieu trang that su.
- Them state management khi board/user/auth phuc tap hon.
- Them test cho helper sap xep va logic drag & drop quan trong.
- Chuan hoa encoding tieng Viet trong comment de tranh loi hien thi.
