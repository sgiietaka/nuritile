# ぬりタイル（ホーム画面アプリ版）

スマホやタブレットのホーム画面から全画面・横向きで起動でき、一度開いたあとはネットなしでも遊べるゲームです。

## 入っているファイル

| ファイル | 役割 |
|---|---|
| index.html | ゲーム本体 |
| manifest.webmanifest | アプリ名・アイコン・全画面・横向きの設定 |
| sw.js | ネットなしで動かすための仕組み（端末にファイルを保存） |
| lib/three.min.js | 3D表示の部品（three.js r128。ライセンスは LICENSE-three.txt） |
| icons/ | ホーム画面のアイコン |
| fonts/ | 文字の書体（ライセンスは OFL-*.txt） |

## 公開の手順（GitHub Pages）

算数道場とは別に、新しいリポジトリを作ります。

1. GitHub で「＋」→「New repository」。名前を `nuritile`、「Public」を選んで作成。
2. 「uploading an existing file」を押し、このフォルダの中身（index.html、manifest.webmanifest、sw.js、README.md、lib・icons・fonts フォルダ）をすべてドラッグして「Commit changes」。
3. 「Settings」→「Pages」→ Branch で `main` と `/ (root)` を選んで「Save」。
4. 1〜2分後に出るアドレス（例：`https://ユーザー名.github.io/nuritile/`）が公開アドレス。

## スマホに入れる手順

- Android：Chrome で公開アドレスを開き、「︙」→「アプリをインストール」（または「ホーム画面に追加」）。
- iPhone：Safari で公開アドレスを開き、共有ボタン →「ホーム画面に追加」。

一度アイコンから起動したあと、機内モードで起動して遊べれば、ネットなしでも動いています。

## ゲームを直したいとき

index.html を差し替え、sw.js の 3 行目 `const VERSION = "v1";` を `"v2"` のように 1 つ上げてアップロードします。ネットにつないで 1 回起動すると、次の起動から新しい版になります。

## 注意

- 記録（戦績・武器の自動調整・設定）は端末の中に保存されます。アプリを削除すると消えます。
- Claude 上で遊んだ記録は引き継がれません。
