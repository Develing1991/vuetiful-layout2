# vuetiful-layout2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

```
vuetiful-layout2
├─ .browserslistrc
├─ .eslintrc.js
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-applypatch
│  │  ├─ post-checkout
│  │  ├─ post-commit
│  │  ├─ post-merge
│  │  ├─ post-receive
│  │  ├─ post-rewrite
│  │  ├─ post-update
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-auto-gc
│  │  ├─ pre-commit
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout
│  │  ├─ sendemail-validate
│  │  ├─ update
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ master
│  │     │  ├─ master_v2
│  │     │  └─ master_v3
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ HEAD
│  │           └─ master_v3
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ 5acbfdaad9e77e6890d21f7f881a3d6c0e0270
│  │  ├─ 02
│  │  │  └─ 0f7526f6b2d091f2723cefb13853ce71b1bfe6
│  │  ├─ 04
│  │  │  └─ 583f361f33ac53cc41d0dbf17211410bdc9f11
│  │  ├─ 05
│  │  │  └─ 45cdfef925ea6d963a70950d79ba8b054a5df3
│  │  ├─ 06
│  │  │  ├─ 84edb798c91e2436a0dd9daeefe52dee2e8825
│  │  │  └─ 88778ec12f4edddd00f2af0f71a2679f1eb945
│  │  ├─ 08
│  │  │  └─ 5345ad29573802ef02aeee0fe7671cfb9995a9
│  │  ├─ 0a
│  │  │  ├─ 8b05ba40dce28a2b9ce047a64fff038de63498
│  │  │  └─ d268715aade16d087079d2c8549c23ee7313f0
│  │  ├─ 0b
│  │  │  ├─ 51cbd8bd22616fbd29d5491d368bcab9ea23ed
│  │  │  └─ 523f90041a2826713be563269571d85d48272b
│  │  ├─ 0c
│  │  │  └─ b301939f8aaa6012a0890b807ebf478007514b
│  │  ├─ 0d
│  │  │  └─ af9f01d13a09994b92879fc663e560690e4f4b
│  │  ├─ 0e
│  │  │  └─ a015242ec9b70c5a156ff21f4898510e9711c2
│  │  ├─ 0f
│  │  │  ├─ 7d4719d362a21dc27902213c2ad25843abf081
│  │  │  └─ df1ef194bb82f796a36d8d4b1f30029cb10dc1
│  │  ├─ 10
│  │  │  ├─ 37a98525e0acb20c7a964f387a33e0b4afd8d6
│  │  │  └─ c57983102dd11e5063c3cad394379b301a8ea3
│  │  ├─ 13
│  │  │  └─ 948dba99df476f30426f7858ebaef3e3c0c17e
│  │  ├─ 14
│  │  │  ├─ 42ed4b78843feda2c47a0b598f96ed32f98d5e
│  │  │  └─ a6a85c77ba3a269b3c30acfe5abe7e2ca4309e
│  │  ├─ 18
│  │  │  └─ e2b51c7c5fa8adee4a6689f22060b131d33202
│  │  ├─ 1a
│  │  │  └─ e3886348c20c403e8bec41378873f44655bc3c
│  │  ├─ 1b
│  │  │  └─ ad82459753d70512d75215551c23a1fef08442
│  │  ├─ 1d
│  │  │  ├─ 394a70c4b4f9574e3d65837369a86820904f46
│  │  │  ├─ b59d6289e3cc651470c633482af73176b88240
│  │  │  └─ f17b7dbe325870ad96ec6161f3fc5a5cce9649
│  │  ├─ 20
│  │  │  └─ a4b0ff24b4ca6b01b9e5d6690557111d6b39d2
│  │  ├─ 21
│  │  │  ├─ 484e04d61e249891ca74d71f73208cfc56fbc8
│  │  │  └─ 922e15055c722fe8ac8909014f82274930f89b
│  │  ├─ 22
│  │  │  └─ d063bb8ffd0d47f9937a2de5b57cb4b3108a62
│  │  ├─ 23
│  │  │  ├─ 113a3e463019ee392a6fe5f29e08319e480696
│  │  │  └─ 141f9e5bb9bcef9217bd6a80a5903b95fbe511
│  │  ├─ 25
│  │  │  ├─ 1c510e72202ae19acdbec57ffef88368b7d0a1
│  │  │  └─ 6993faa21502e501b5fb3a23a88c7f2228e5c1
│  │  ├─ 26
│  │  │  └─ 0aed5c9fdf5f324daf687e41a01a82df5f8fa9
│  │  ├─ 27
│  │  │  ├─ 17ccfed11f86bf041308561694c4de4ad46b43
│  │  │  └─ a9b97111d635fe78c66ad4d7cc1518932f8783
│  │  ├─ 29
│  │  │  └─ ab528ef6fbc742cbfb4f6dbb2b85ae3f0c3329
│  │  ├─ 2a
│  │  │  └─ a4ea054259ef1083545b9fc48ccac3e78bf919
│  │  ├─ 2f
│  │  │  ├─ c702eb726e663f260b0deb52643471b68740e0
│  │  │  └─ fee4129f9dd6dd69fbdfd671d23ac0f345fe2b
│  │  ├─ 31
│  │  │  ├─ 1bad447854f2b170bc30e8cbfee8d18305ea5f
│  │  │  └─ 79f7d577ad32c64eca4cab4510034d1121a775
│  │  ├─ 33
│  │  │  ├─ 28deb9746b31be7585aa56981eae347415511b
│  │  │  └─ 5ca10e273f6a5ea2185dbbf8eaedb529f729e0
│  │  ├─ 34
│  │  │  └─ 427ba0ceba1d78500a41b0a418533b095c3138
│  │  ├─ 39
│  │  │  ├─ 47546ab66c19d2371bd5e2dbdff332c25325ab
│  │  │  └─ bc743f98d90cb77b0e2de99345d82ed5dc1c47
│  │  ├─ 3d
│  │  │  ├─ 3a6b57269364099b63dc54f37dbec757a4bfcf
│  │  │  └─ dbd2400f8eeb3b642a4f516786cd42bbfcb79e
│  │  ├─ 3e
│  │  │  └─ 8c5ae2bf846d9f00a14ab740153536db8afc5e
│  │  ├─ 41
│  │  │  └─ 6a25fa6e129091865617e6767bc762d4471902
│  │  ├─ 42
│  │  │  └─ 0541177333d343c0b12d1a1607dcd1b88396f4
│  │  ├─ 43
│  │  │  └─ 074e929b7874dd33dcc7d657c2a126457aac07
│  │  ├─ 44
│  │  │  └─ 7ec99fd8cea9ecc1faa4eea3aed8bebadce6e3
│  │  ├─ 45
│  │  │  ├─ 37ad12b4db06896d783b855ff1705e8c9f0e03
│  │  │  └─ 98b161047b8de347b4f44edebeda2cc4a78f52
│  │  ├─ 46
│  │  │  ├─ 05aaa7a43e6fa8ac55d0e768d415bc73d3368b
│  │  │  ├─ 1c107b8713c1a99e0617c3a3d5694731bcb536
│  │  │  ├─ 9b266f53c1657277f1d285cdc77e60f7c3d1d7
│  │  │  └─ f3fcadc0c406453548188e8e4e875ecba60ea0
│  │  ├─ 47
│  │  │  ├─ 42ffcb81e04e197a186d1307d81f4a800a6e12
│  │  │  └─ ae445dc16f726134d49cf6072d1b0291454a86
│  │  ├─ 48
│  │  │  └─ b7a3dde92eb2fe30b04ac7e7bea49cb4b3991e
│  │  ├─ 49
│  │  │  └─ 03c89fef249880e2a03fbd500e770b8b41a761
│  │  ├─ 4a
│  │  │  ├─ 3026a2a2cdebbb267d04dbd8449f47bdc04c10
│  │  │  └─ bca6da815745e4e62625a520e51c6088fd43be
│  │  ├─ 4c
│  │  │  └─ 139465d8822d178d6a30d02cc89699076eca22
│  │  ├─ 4e
│  │  │  ├─ 1916bc9948cbcb93edd688e863c51ea96f4156
│  │  │  ├─ 252ac8ea578ff441a857f4c88374a44649fc92
│  │  │  └─ e5b64f6408d5b8c074599709672218f23de835
│  │  ├─ 50
│  │  │  └─ 5b35c44a4e0ba18b869fcc61f3a825c25b806b
│  │  ├─ 51
│  │  │  └─ 7ac13d97a17801c870c5ebe3651d3af5c94935
│  │  ├─ 52
│  │  │  ├─ 4747c1bcc6b533c47522caff9433fcddc6c665
│  │  │  └─ c27752bdc07f54e99e67913543b9906f296e02
│  │  ├─ 53
│  │  │  ├─ 19d9131238ba5a3817abad504924101f6c4476
│  │  │  └─ 892e7e401114539a86a235303bb1b2de63a9e5
│  │  ├─ 54
│  │  │  └─ f4f050ee65adeab598b14e5a0d3249d1143f85
│  │  ├─ 55
│  │  │  └─ 921f02e282e7cbbf26df132ceb70f4111e9920
│  │  ├─ 56
│  │  │  └─ 1fd56ed06fe154b71cfb6c242f772b7aca423f
│  │  ├─ 58
│  │  │  └─ 1a81b32ed37b41c328a04a1cd88b4e5ea1d325
│  │  ├─ 59
│  │  │  ├─ 30d9107b5ee410c3570d06b45a88e189d34190
│  │  │  └─ b4c541ce7dd33c6da56ea7fef8dfb9ce5b5244
│  │  ├─ 5a
│  │  │  └─ 36d6f7164ae41c48f0e190b3da68baa3785c6c
│  │  ├─ 5c
│  │  │  ├─ 4041358e4a2f843dd8b69294e242ffe046c8f6
│  │  │  ├─ 87c94f2b2703e51ad026436062e442f5740894
│  │  │  └─ d27ee5ddfba6a792c2725183fce7416ff25ef4
│  │  ├─ 5d
│  │  │  └─ f56ab2f7fb38d22415f9b56cad31f1f2163b5f
│  │  ├─ 5e
│  │  │  ├─ 502975038174ea76d0d6ef4fa5232d15255e4e
│  │  │  └─ b70f09f6bd2a6a207f1886b257d08d017a9d31
│  │  ├─ 61
│  │  │  └─ eb19425297568a2920b984ddd1cf4ea258bb2a
│  │  ├─ 62
│  │  │  └─ 31c0773729f3f534aa1f7f7b6ff8b023b7b783
│  │  ├─ 65
│  │  │  └─ 288ba29c2b31e430c5543b9206ffa028838802
│  │  ├─ 66
│  │  │  ├─ 18b23301831c1084760177f39d0d649d921cfb
│  │  │  └─ f7fee613c2be69cd141a315f5ffd52072febce
│  │  ├─ 69
│  │  │  ├─ 1de4a5e90ffd3c95da082472261b5b99bf7a33
│  │  │  └─ 50e01e1cb5e8813d3a7aeb4c4131acb6f90b57
│  │  ├─ 6a
│  │  │  ├─ 677a3d35a0093d9ddaeb60bd82a771d556151b
│  │  │  └─ ec596519c6cfe77e28e71165ee72ec9fb1051b
│  │  ├─ 6b
│  │  │  └─ a486cc9bf6f222fd5ef6ff78f442d0cab8b2c0
│  │  ├─ 6c
│  │  │  └─ c3cef236f47c97abf307eaaa7415e2a898ca69
│  │  ├─ 70
│  │  │  └─ 7fb536a63cf02633276902f3a75340ea696cb2
│  │  ├─ 72
│  │  │  └─ c0cb8cc21418cb780e936121c87b8a8429d613
│  │  ├─ 77
│  │  │  └─ d436595565ed1f6d076ecb227393a2042d4f71
│  │  ├─ 79
│  │  │  └─ 04bdbe7fcaa03ddc7b5b85252e8e72215d78a2
│  │  ├─ 7b
│  │  │  └─ fde33ca766b24dea1c0a23f3b4cb827c6c93f6
│  │  ├─ 7c
│  │  │  └─ 9f7b7734950816a97c1b975d4ac559aeedd01f
│  │  ├─ 7d
│  │  │  └─ d4892c3e799f3c9074adcc9a78a37497690257
│  │  ├─ 7e
│  │  │  └─ d5eff463d81d8a09f4e3bec3998064502a567e
│  │  ├─ 7f
│  │  │  ├─ 2a6486a9e30246a031bd9956fd2bbf15b6ccd9
│  │  │  └─ 5b4ff3c8af63e3aade1168035ba14f19b842e9
│  │  ├─ 82
│  │  │  └─ a75eab496d485ec292779a0e7f6c9f19f19d43
│  │  ├─ 83
│  │  │  └─ 3e8d5018dd9ecea2268147463f147181d16ec3
│  │  ├─ 86
│  │  │  ├─ 29d1bdd36290285345a471339918b76ab6bdcd
│  │  │  └─ 51b625332eb3f1e2153c1fc0b6a28da62387b2
│  │  ├─ 88
│  │  │  └─ e23931208227b162bfca041b8adfe2020a1e76
│  │  ├─ 89
│  │  │  └─ 748a43f037c9ac29ddad35f322409404661ad6
│  │  ├─ 8c
│  │  │  ├─ 675980939ade3c55c624f0d411326539b609f3
│  │  │  └─ 964ef98356e2cc8b537b3a1bf006705877aea3
│  │  ├─ 8d
│  │  │  └─ 2b10683f3b048a2418fcd1f92709904b558143
│  │  ├─ 8e
│  │  │  ├─ 3af2cabc55e2615c11d9b81db4f8c1b021c9d9
│  │  │  └─ a26ec959cda2eaf4c84c35cc3648aa2149211a
│  │  ├─ 8f
│  │  │  ├─ 95f3d8ac16776743c2e77ddd41cbb6c38bb9e7
│  │  │  └─ eaa7a323094b735fe6d656df08a17d9725e466
│  │  ├─ 91
│  │  │  └─ c80a7eeff4d4f5f5f4f61ae9b38950446bbaf1
│  │  ├─ 93
│  │  │  └─ 1c2271f7d2dc65a0b0278c03c879987865f9a0
│  │  ├─ 95
│  │  │  └─ aaef971f38168398af1888fc420a6a34f08501
│  │  ├─ 96
│  │  │  └─ 38828a7550b589d946cd26c036cb0c3305118c
│  │  ├─ 98
│  │  │  ├─ 52d12b6aae40324a3e47733c2ac4215520dcd6
│  │  │  └─ 6ab0c4d6f1722fcae1537132aa0a6620f2d3c0
│  │  ├─ 99
│  │  │  └─ 702d7c26ffe9af7402b4db1104096e6bcbc1ac
│  │  ├─ 9a
│  │  │  └─ 72927e4d72f15601ff139fe062593e8c45c367
│  │  ├─ 9d
│  │  │  ├─ 56f6e9d735f74209317070ea1c7db5e60da369
│  │  │  └─ d647df62a436d3180d44800f9356893a4b6d27
│  │  ├─ 9f
│  │  │  └─ 069332374b17feccf13e6fb65ef31471e27066
│  │  ├─ a2
│  │  │  └─ 94540c86b8137f864185874a9a6794e0df46cc
│  │  ├─ a4
│  │  │  ├─ 4b56cfdb0af7c3092bffaa5a197b40f6d5c48c
│  │  │  └─ 59f1326e0355e5408518c369c537a20bbeac35
│  │  ├─ a6
│  │  │  ├─ 2f03dfc43f4a18ca66e8ac33fe680c435c71ea
│  │  │  └─ 94cc8754903b02e8f511828605fefebb12e125
│  │  ├─ a8
│  │  │  └─ 0662e0b1c2a3731560af14d44eb5137ec3d726
│  │  ├─ a9
│  │  │  └─ fd93f9e5e5a9ac6b873fca3484a7d9ef3b5622
│  │  ├─ ac
│  │  │  └─ 377dc42e65d2ff1970abf6ae1b49e1ac617db5
│  │  ├─ ae
│  │  │  └─ 016db4c7873f6c614294ec54e2fa68788f2080
│  │  ├─ b2
│  │  │  └─ 96e0aafbf290812c14c1fb2646c87a5427ba8b
│  │  ├─ b4
│  │  │  └─ e30a8361a7c68a3d1c7c2320507eaf374faf47
│  │  ├─ b5
│  │  │  └─ 792b0e60c25af3d9fad861863c8781336a5a37
│  │  ├─ b6
│  │  │  └─ 2d9c605e121b158333eadcc56c5e6d83322235
│  │  ├─ b7
│  │  │  └─ db0d47055923da7ae959fbca0725211e5d0395
│  │  ├─ b8
│  │  │  └─ 95fdad0bf74874dfc38f573c858a86e471595c
│  │  ├─ ba
│  │  │  └─ 8970c0e2b84ddbb8667ffd2279f62bb5db2c3a
│  │  ├─ bb
│  │  │  ├─ 0eaa793d5d869e5e5b4bc361c9e486ec68a65a
│  │  │  ├─ 3bc7670f75d6dbcbf9bc0251a459c2d734e026
│  │  │  └─ 41c5d221ea3da326886280d1359f6c83ff427f
│  │  ├─ bc
│  │  │  └─ 5b43797a8ccc5a6c8619eb50ffd1e897be3973
│  │  ├─ be
│  │  │  └─ cf88996e2509c106a0c11e4141fba076ba6cb4
│  │  ├─ bf
│  │  │  └─ d88593b2803ec2a27db4f0ba503b71d96d25dd
│  │  ├─ c1
│  │  │  └─ 9644b3da7774e4278c1c701014bee3f870282e
│  │  ├─ c4
│  │  │  └─ 297e8a2d30249fb17fb9064f61f8c93d4891e7
│  │  ├─ c5
│  │  │  ├─ 4b292a54f34e265bf458a8f16a13330bf7aeab
│  │  │  └─ d10368e7bb8d1517952521a7fb38429e2f764b
│  │  ├─ c9
│  │  │  └─ 082cc7b7e7821e59dee2ea0a64104b3eead2a9
│  │  ├─ ca
│  │  │  └─ 6c9f312d3464f44bdbf71507e654651583d190
│  │  ├─ cb
│  │  │  └─ bf70e9967985a891f54cd29aac673f554312dc
│  │  ├─ cc
│  │  │  ├─ 546ab311d9fb74a714476f0376938b2eb27e8e
│  │  │  ├─ c55d00928f5b871200fb56138385adb22a23af
│  │  │  └─ e96d9ade13bd9b776bf9f889f8ad56656873c4
│  │  ├─ cd
│  │  │  └─ 15dc4ec76827df801474502f89c8de5645052f
│  │  ├─ cf
│  │  │  └─ 21371d5e06ea390fc8b408d910b61c02fe3ec2
│  │  ├─ d0
│  │  │  ├─ 29cd11011e804c4b6395fb151a299823d0a1ad
│  │  │  └─ 2ebe85ebf8f3dd8ff9937d83d8eeee1e981b38
│  │  ├─ d3
│  │  │  └─ 0afb533524a22d3e886e0f66a5013bcdd9b2e6
│  │  ├─ d4
│  │  │  └─ 2061d757e2805f7ea75a77f857d08d95fde8e4
│  │  ├─ d5
│  │  │  ├─ 474da5f8ec4fa4c97a461a4acd49bb77ccff56
│  │  │  └─ 9d24c4f780f6b83fe31907911abbaeee9b8126
│  │  ├─ d6
│  │  │  ├─ 814e7d67f49684a67144d8b3cb3f10939d2a9d
│  │  │  └─ f28b0f53faba0d4427997dbb5ef177935facc9
│  │  ├─ d8
│  │  │  └─ 11b652116316b89793aff8a988448eae0ab523
│  │  ├─ d9
│  │  │  ├─ 7d5fe86b304708d5cfcf2a72b6c78f527aef2d
│  │  │  └─ 8a21d2bd4651bab1db6156deb31cdb9dedfb06
│  │  ├─ dd
│  │  │  └─ 06846b925557cb61c38ac1aec9e61aac2fdd48
│  │  ├─ e0
│  │  │  └─ ef212601dfcc25219abee79b0a1cab412cc757
│  │  ├─ e2
│  │  │  ├─ 281061ee114e1fee71c2daf65479f8da5b168a
│  │  │  ├─ 4855cbefaa7ac43807c15976860d4243039885
│  │  │  └─ bbf7ae22675899c538fe82a2609f5fc47e0f52
│  │  ├─ e3
│  │  │  └─ cf164842a2d17f8eb27416253ba4a2a32a6cb1
│  │  ├─ e4
│  │  │  └─ f9a926e07f5812351e46b7d03e41da4ec4fdea
│  │  ├─ e5
│  │  │  └─ 1123510124c6434c2978a2d8f00e087db5c66d
│  │  ├─ e6
│  │  │  └─ 3c10732e5de74f4b612ee2122d1da9551f19a5
│  │  ├─ e8
│  │  │  └─ 99036a3fd9f214ae3379c02d6a1ba326f9b912
│  │  ├─ e9
│  │  │  └─ c8e498c9ef3c4a04911941ab9fc35fb73a188b
│  │  ├─ eb
│  │  │  └─ 537a8d2b17332f335cfa83b12b0080080136f3
│  │  ├─ ec
│  │  │  └─ 12ffc3d300d0104a500a849e7921177e980348
│  │  ├─ ed
│  │  │  └─ c5789de4ab25f069d15abf45c9b2df9a1bc01f
│  │  ├─ ef
│  │  │  └─ 1f6f85fcb03ed767e8ad3334664f6492218541
│  │  ├─ f2
│  │  │  ├─ 1d9695949f824e1dacabf748f7f94256b1f96e
│  │  │  └─ 20a0c24774e9cf1752d0554329b96baef7f285
│  │  ├─ f3
│  │  │  └─ f09dd63f2cccb755786e92da7c658ba4388794
│  │  ├─ f4
│  │  │  └─ 68d78c4e524aa30b6d2dffabf61d7d780af911
│  │  ├─ f6
│  │  │  └─ 9b01e681563fff97256d28148eb342ab77ad9e
│  │  ├─ f7
│  │  │  └─ 859b99a4dd6bd7bd07f01379c57d4e260046a8
│  │  ├─ f8
│  │  │  └─ f2096589689321368fff8ad4c4418ff923a641
│  │  ├─ f9
│  │  │  ├─ 33d5f7823c0edfcd0735748df861822e55c24c
│  │  │  ├─ af783a17cb0d0b0a8099c4c5eb01fd86d0d0b4
│  │  │  └─ cbb5c77ae11736a7c78ae65dcec81d98dd4666
│  │  ├─ fa
│  │  │  └─ dd194e8e00966696d32e98a0e7bc55e69983de
│  │  ├─ fb
│  │  │  └─ 393eb35a2698921817d74b5e4460d791ef458d
│  │  ├─ fd
│  │  │  └─ edfd251d25def6ceda017d7fd863d29550fb7e
│  │  ├─ fe
│  │  │  └─ 3196e59a9abdb39044fa840555aa99fae0b6ee
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-283e740de3e440f12c8b608ae5946f17b8ee281d.idx
│  │     └─ pack-283e740de3e440f12c8b608ae5946f17b8ee281d.pack
│  ├─ ORIG_HEAD
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  ├─ master
│     │  ├─ master_v2
│     │  └─ master_v3
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     └─ master_v3
│     └─ tags
├─ .gitignore
├─ .prettierrc
├─ babel.config.js
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ README.md
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  ├─ images
│  │  │  ├─ icons
│  │  │  │  ├─ avatar_icon.png
│  │  │  │  ├─ circle_icon.png
│  │  │  │  ├─ home_icon.png
│  │  │  │  ├─ lock_icon.png
│  │  │  │  ├─ next_btn_icon.png
│  │  │  │  ├─ plus_icon.png
│  │  │  │  ├─ prev_btn_icon.png
│  │  │  │  └─ search_icon.png
│  │  │  └─ logo
│  │  ├─ logo.png
│  │  └─ logo.svg
│  ├─ common
│  │  └─ js
│  │     └─ navigation.js
│  ├─ components
│  │  ├─ ButtonCmp.vue
│  │  ├─ dialog
│  │  │  └─ TermsDialogCmp.vue
│  │  ├─ product
│  │  │  └─ SlideProductItem.vue
│  │  ├─ ProductSkeleton.vue
│  │  ├─ slide
│  │  │  └─ SlideDoubleSampleCmp.vue
│  │  ├─ TextFieldCmp.vue
│  │  └─ TransitionCmp.vue
│  ├─ layouts
│  │  ├─ auth
│  │  │  ├─ AppBar.vue
│  │  │  └─ Index.vue
│  │  ├─ base
│  │  │  ├─ appbars
│  │  │  │  ├─ LayoutBaseAppBar.vue
│  │  │  │  ├─ LayoutMainAppBar.vue
│  │  │  │  └─ LayoutSearchAppBar.vue
│  │  │  ├─ footers
│  │  │  │  └─ LayoutBaseFooter.vue
│  │  │  └─ views
│  │  │     ├─ LayoutBaseView.vue
│  │  │     ├─ LayoutScrollTopView.vue
│  │  │     └─ LayoutSearchWordView.vue
│  │  ├─ category
│  │  │  ├─ AppBar.vue
│  │  │  └─ Index.vue
│  │  ├─ main
│  │  │  ├─ AppBar.vue
│  │  │  └─ Index.vue
│  │  ├─ member
│  │  │  ├─ AppBar.vue
│  │  │  └─ Index.vue
│  │  ├─ product
│  │  │  ├─ AppBar.vue
│  │  │  └─ Index.vue
│  │  ├─ search
│  │  │  ├─ AppBar.vue
│  │  │  └─ Index.vue
│  │  └─ wish
│  │     ├─ AppBar.vue
│  │     └─ Index.vue
│  ├─ main.js
│  ├─ plugins
│  │  └─ vuetify.js
│  ├─ router
│  │  ├─ auth
│  │  │  └─ index.js
│  │  ├─ category
│  │  │  └─ index.js
│  │  ├─ index.js
│  │  ├─ main
│  │  │  └─ index.js
│  │  ├─ member
│  │  │  └─ index.js
│  │  ├─ product
│  │  │  └─ index.js
│  │  ├─ search
│  │  │  └─ index.js
│  │  └─ wish
│  │     └─ index.js
│  ├─ store
│  │  └─ index.js
│  ├─ styles
│  │  └─ variables.scss
│  └─ views
│     ├─ AboutView.vue
│     ├─ auth
│     │  ├─ private
│     │  │  ├─ FindIdView.vue
│     │  │  └─ FindPassView.vue
│     │  ├─ SignInView.vue
│     │  ├─ SignUpBizChkView.vue
│     │  ├─ SignUpTermsView.vue
│     │  └─ SignUpView.vue
│     ├─ category
│     │  └─ CategoryView.vue
│     ├─ error
│     │  └─ ErrorView.vue
│     ├─ main
│     │  └─ MainView.vue
│     ├─ member
│     │  ├─ MyInfoView.vue
│     │  └─ MyMenuView.vue
│     ├─ product
│     │  ├─ ProductDetail.vue
│     │  ├─ ProductItem.vue
│     │  ├─ ProductList.vue
│     │  └─ ProductView.vue
│     ├─ search
│     │  ├─ SearchRcntView.vue
│     │  └─ SearchView.vue
│     ├─ utils
│     │  ├─ ButtonSample.vue
│     │  └─ TextFieldSample.vue
│     └─ wish
│        ├─ WishItem.vue
│        ├─ WishList.vue
│        └─ WishView.vue
└─ vue.config.js

```
```
vuetiful-layout2
├─ .browserslistrc
├─ .eslintrc.js
├─ .prettierrc
├─ babel.config.js
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ README.md
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  ├─ images
│  │  │  ├─ icons
│  │  │  │  ├─ avatar_icon.png
│  │  │  │  ├─ circle_icon.png
│  │  │  │  ├─ home_icon.png
│  │  │  │  ├─ lock_icon.png
│  │  │  │  ├─ next_btn_icon.png
│  │  │  │  ├─ plus_icon.png
│  │  │  │  ├─ prev_btn_icon.png
│  │  │  │  └─ search_icon.png
│  │  │  └─ logo
│  │  ├─ logo.png
│  │  └─ logo.svg
│  ├─ common
│  │  └─ js
│  │     └─ navigation.js
│  ├─ components
│  │  ├─ ButtonCmp.vue
│  │  ├─ dialog
│  │  │  └─ TermsDialogCmp.vue
│  │  ├─ product
│  │  │  └─ SlideProductItem.vue
│  │  ├─ ProductSkeleton.vue
│  │  ├─ slide
│  │  │  └─ SlideDoubleSampleCmp.vue
│  │  ├─ TextFieldCmp.vue
│  │  └─ TransitionCmp.vue
│  ├─ layouts
│  │  ├─ auth
│  │  │  ├─ AppBar.vue
│  │  │  └─ Index.vue
│  │  ├─ base
│  │  │  ├─ appbars
│  │  │  │  ├─ LayoutBaseAppBar.vue
│  │  │  │  ├─ LayoutMainAppBar.vue
│  │  │  │  └─ LayoutSearchAppBar.vue
│  │  │  ├─ footers
│  │  │  │  └─ LayoutBaseFooter.vue
│  │  │  └─ views
│  │  │     ├─ LayoutBaseView.vue
│  │  │     ├─ LayoutScrollTopView.vue
│  │  │     └─ LayoutSearchWordView.vue
│  │  ├─ category
│  │  │  ├─ AppBar.vue
│  │  │  └─ Index.vue
│  │  ├─ main
│  │  │  ├─ AppBar.vue
│  │  │  └─ Index.vue
│  │  ├─ member
│  │  │  ├─ AppBar.vue
│  │  │  └─ Index.vue
│  │  ├─ product
│  │  │  ├─ AppBar.vue
│  │  │  └─ Index.vue
│  │  ├─ search
│  │  │  ├─ AppBar.vue
│  │  │  └─ Index.vue
│  │  └─ wish
│  │     ├─ AppBar.vue
│  │     └─ Index.vue
│  ├─ main.js
│  ├─ plugins
│  │  └─ vuetify.js
│  ├─ router
│  │  ├─ auth
│  │  │  └─ index.js
│  │  ├─ category
│  │  │  └─ index.js
│  │  ├─ index.js
│  │  ├─ main
│  │  │  └─ index.js
│  │  ├─ member
│  │  │  └─ index.js
│  │  ├─ product
│  │  │  └─ index.js
│  │  ├─ search
│  │  │  └─ index.js
│  │  └─ wish
│  │     └─ index.js
│  ├─ store
│  │  └─ index.js
│  ├─ styles
│  │  └─ variables.scss
│  └─ views
│     ├─ AboutView.vue
│     ├─ auth
│     │  ├─ private
│     │  │  ├─ FindIdView.vue
│     │  │  └─ FindPassView.vue
│     │  ├─ SignInView.vue
│     │  ├─ SignUpBizChkView.vue
│     │  ├─ SignUpTermsView.vue
│     │  └─ SignUpView.vue
│     ├─ category
│     │  └─ CategoryView.vue
│     ├─ error
│     │  └─ ErrorView.vue
│     ├─ main
│     │  └─ MainView.vue
│     ├─ member
│     │  ├─ MyInfoView.vue
│     │  └─ MyMenuView.vue
│     ├─ product
│     │  ├─ ProductDetail.vue
│     │  ├─ ProductItem.vue
│     │  ├─ ProductList.vue
│     │  └─ ProductView.vue
│     ├─ search
│     │  ├─ SearchRcntView.vue
│     │  └─ SearchView.vue
│     ├─ utils
│     │  ├─ ButtonSample.vue
│     │  └─ TextFieldSample.vue
│     └─ wish
│        ├─ WishItem.vue
│        ├─ WishList.vue
│        └─ WishView.vue
└─ vue.config.js

```
```
vuetiful-layout2
├─ .browserslistrc
├─ .eslintrc.js
├─ .prettierrc
├─ babel.config.js
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ README.md
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  ├─ images
│  │  │  ├─ icons
│  │  │  │  ├─ avatar_icon.png
│  │  │  │  ├─ circle_icon.png
│  │  │  │  ├─ home_icon.png
│  │  │  │  ├─ lock_icon.png
│  │  │  │  ├─ next_btn_icon.png
│  │  │  │  ├─ plus_icon.png
│  │  │  │  ├─ prev_btn_icon.png
│  │  │  │  └─ search_icon.png
│  │  │  └─ logo
│  │  ├─ logo.png
│  │  └─ logo.svg
│  ├─ common
│  │  └─ js
│  │     └─ navigation.js
│  ├─ components
│  │  ├─ ButtonCmp.vue
│  │  ├─ dialog
│  │  │  └─ TermsDialogCmp.vue
│  │  ├─ product
│  │  │  └─ SlideProductItem.vue
│  │  ├─ ProductSkeleton.vue
│  │  ├─ slide
│  │  │  └─ SlideDoubleSampleCmp.vue
│  │  ├─ TextFieldCmp.vue
│  │  └─ TransitionCmp.vue
│  ├─ layouts
│  │  ├─ auth
│  │  │  ├─ AppBar.vue
│  │  │  └─ Index.vue
│  │  ├─ base
│  │  │  ├─ appbars
│  │  │  │  ├─ LayoutBaseAppBar.vue
│  │  │  │  ├─ LayoutMainAppBar.vue
│  │  │  │  └─ LayoutSearchAppBar.vue
│  │  │  ├─ footers
│  │  │  │  └─ LayoutBaseFooter.vue
│  │  │  └─ views
│  │  │     ├─ LayoutBaseView.vue
│  │  │     ├─ LayoutScrollTopView.vue
│  │  │     └─ LayoutSearchWordView.vue
│  │  ├─ category
│  │  │  ├─ AppBar.vue
│  │  │  └─ Index.vue
│  │  ├─ main
│  │  │  ├─ AppBar.vue
│  │  │  └─ Index.vue
│  │  ├─ member
│  │  │  ├─ AppBar.vue
│  │  │  └─ Index.vue
│  │  ├─ product
│  │  │  ├─ AppBar.vue
│  │  │  └─ Index.vue
│  │  ├─ search
│  │  │  ├─ AppBar.vue
│  │  │  └─ Index.vue
│  │  └─ wish
│  │     ├─ AppBar.vue
│  │     └─ Index.vue
│  ├─ main.js
│  ├─ plugins
│  │  └─ vuetify.js
│  ├─ router
│  │  ├─ auth
│  │  │  └─ index.js
│  │  ├─ category
│  │  │  └─ index.js
│  │  ├─ index.js
│  │  ├─ main
│  │  │  └─ index.js
│  │  ├─ member
│  │  │  └─ index.js
│  │  ├─ product
│  │  │  └─ index.js
│  │  ├─ search
│  │  │  └─ index.js
│  │  └─ wish
│  │     └─ index.js
│  ├─ store
│  │  └─ index.js
│  ├─ styles
│  │  └─ variables.scss
│  └─ views
│     ├─ AboutView.vue
│     ├─ auth
│     │  ├─ private
│     │  │  ├─ FindIdView.vue
│     │  │  └─ FindPassView.vue
│     │  ├─ SignInView.vue
│     │  ├─ SignUpBizChkView.vue
│     │  ├─ SignUpTermsView.vue
│     │  └─ SignUpView.vue
│     ├─ category
│     │  └─ CategoryView.vue
│     ├─ error
│     │  └─ ErrorView.vue
│     ├─ main
│     │  └─ MainView.vue
│     ├─ member
│     │  ├─ MyInfoView.vue
│     │  └─ MyMenuView.vue
│     ├─ product
│     │  ├─ ProductDetail.vue
│     │  ├─ ProductItem.vue
│     │  ├─ ProductList.vue
│     │  └─ ProductView.vue
│     ├─ search
│     │  ├─ SearchRcntView.vue
│     │  └─ SearchView.vue
│     ├─ utils
│     │  ├─ ButtonSample.vue
│     │  └─ TextFieldSample.vue
│     └─ wish
│        ├─ WishItem.vue
│        ├─ WishList.vue
│        └─ WishView.vue
└─ vue.config.js

```