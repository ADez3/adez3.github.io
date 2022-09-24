'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c5e1670a76fa30eb5c8cb1969cb58536",
".git/config": "3fca3e741a297a4931c6a9433d71d5a7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "381613c49766b37a44c597e83baf9036",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dcbb20ffe06588498ac59dde7ba4a010",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "71e81ff8ff8b3dc40a72ce9a1d9accaa",
".git/logs/refs/heads/main": "b9f6c6b27ec28829c74455ac31942069",
".git/logs/refs/heads/master": "d822f962a56a2a73927c01c25df421be",
".git/logs/refs/remotes/origin/HEAD": "dd4433a28ab9510ac8ab404d77389b7c",
".git/logs/refs/remotes/origin/main": "fc6667cf8c09fdcd16dd67e60048cb28",
".git/objects/04/011a3ee1ec31e588ec15e93739829a5887760e": "ab0ddc89c8b521bfde774e4ff37bdddd",
".git/objects/05/95559efe31c8aad8e1bf64f6bc794ad7c3760e": "067b2178cbf7fd18220ffda4199d16a1",
".git/objects/07/097d146005e4fc65847dce73152cced2f6f4dd": "5609c66a511f7d5de60c037407c29fdf",
".git/objects/07/9f45ee751c01b5fba24f9dee09eb6725be2b59": "ac6c75f4e7306915e22eaedf05174f17",
".git/objects/0c/d15368099c3d5bc686d52b337fd9c067e4552a": "dfbae2e26c326b4269ec413a7dfd4f2f",
".git/objects/0e/c6cb36d241b67e0d25d15c6aa4bfc0b0ef270e": "0c73f33f0b9aa722ae04c122d9b1b0bb",
".git/objects/0f/d8a27b48d21280b3687ed6407ec55c82b10d7b": "9690b50ddbe75f44669d02b1a5889143",
".git/objects/14/21b234a41168c375e9450ebed1bc895ccba714": "3548664e135731fa72dfd5ff2ff90f26",
".git/objects/16/7ab3b6e135301f91960fdc428f3bbcb341f4ed": "99cfba74eeabcdf80211ce6d3045ca06",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1d/0207e38affa02a4d9568ef3e5b368992901892": "6dfadbae238029a020800f2bd90514a0",
".git/objects/1f/9c82510894dbe0aa27dc360df191eb84b61d68": "6732fde82c44133fafa3206d3a20c132",
".git/objects/27/09e71450af5e9e0a95b7f577094ac9c5d24ce1": "3643b48f11d711b41cb9a89cc4d1d34b",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/66f0c7b34cec6e3a13a7b36565574bc897f920": "a918ca3094677602373a99959737f7b9",
".git/objects/32/c4b4e054c159abe74cf03552722aa9001266fe": "0dc5cc9b1080021333f4f347a66269e4",
".git/objects/3c/59f729d130218ccc4034965d341710f61866fb": "33b4913e08eb148297c81028f553237f",
".git/objects/3f/4ba6c7a11149902c2754c3817c29590496ea34": "7b51fcbdaf8677999b8a0c6e9ba84836",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/0cb96ec66f1714599f6866171ceecd5cec16e6": "abe2a869950c4b1ca7c9bab45acb28aa",
".git/objects/40/8d3dc8e7834de075e68c00dc1bfc85d8c222ae": "36040e8d64f9f40f70f5425eb245149c",
".git/objects/41/af43e0f104ceeb73754779570f0d87fdd2c62a": "be69e3280dd132cd81cbc8aba982d475",
".git/objects/41/e842bf03bcac6f28211de55ef2ca578ab4a9aa": "408305ec62e2ee3215a2d3497e881f56",
".git/objects/42/bb7f2c88b92622c2c8ec093068ebdb8d03317a": "176922d15e14bb5a153504a072ef18dd",
".git/objects/44/d902e7a29c69f9b52824a6dafb54d1390484dc": "f19c0c6eb0b5df105cdb7fb6b3e8da83",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/c135c1bb8b4521cc9a54b568cb1fd1c814cf3a": "9d1556093b49fa466bb5241cedee7c4b",
".git/objects/47/9cd68c0af30b6d821ab6f9aba4988942aa41f9": "4b9cdf3151789254de41ff2684daa59e",
".git/objects/48/74ee6614df96543da213696512a637a0aed083": "2fe025399759540769f3014014fcd6ee",
".git/objects/49/01af913b560d2b9f6bab0c63ebb614ddd217e9": "6ba3108814335d953263887814127bc8",
".git/objects/4a/311d3a13b38d3aeda56160e474fc657158c034": "e40bbe24f00ed0f232e67d6961e18cf4",
".git/objects/52/67312fb6e6e61747bd0a4205bc8c2664d4c35e": "112b54c8383014764d5e9122ba475600",
".git/objects/53/56c2b6dc70d2634bb2ffb150b59179c55cde69": "966d563682462ab76db8f14d94fd6955",
".git/objects/53/9bc9e97f5ed10be065c5f0e3f3b444e13f1f26": "b586e0b458e2d08fc142ee7f77f72919",
".git/objects/54/68bb64910465536bce5bc4e3856b21c6b9319d": "5dbd031b4cad016fe1733b455aa46365",
".git/objects/54/b5e65baf95ff5b1a4f7e6686e8b0a8ae2cf668": "e288b3e078a8f59eff37ac3b48b5879b",
".git/objects/57/683c2c2ee95da93732e9a58f3dd07e3fbbba33": "ca3dc9c59d2ead25ea6a81c48ec362d9",
".git/objects/58/562a3fcf196fec70e292c1b804a785f28ff1e9": "223c22e36f441d4b575f4a055a9f036f",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/a74c45c0f0c613f62cf194b25abd59dccb56cc": "f4a8956e01f6e064f3e60766597f5f1f",
".git/objects/5c/5f4090a0709263eb076e4f07fa4e49eebad8c3": "efb2af909cf1ade04420ac856e10b300",
".git/objects/5e/fa159e298de577b010637fe1081b7482234233": "75b2cb10122d42e49c900fc870965ca0",
".git/objects/61/871b79b83d2574ec7af34f5983a810ccdc8571": "34515933703b6a08f917c6bccccc8590",
".git/objects/67/94bc3d5a5f673dfd3c31720c603603b207e8e8": "3b81625eeefe8ba50edd32012ed8bb07",
".git/objects/67/c409fa0d78cede0abaef2643c15924455abdb9": "92327c10ef570ad70a4459321be3a2e7",
".git/objects/6a/d6a49c62577f2b4a1c4c98e5cb0bdda6e6b91d": "72377e06c6f9cc13b00b7ce29961a0db",
".git/objects/6b/3118ddbe00842be6ee326d96d887d909464363": "6790feba7cae240a6af7b74f6b19a607",
".git/objects/6c/4bf3de99b20fdfd59b4c40b14f3c6a240baf0f": "0c2ac38ebf13e42c57d28249a2180490",
".git/objects/72/99c29b8ddb45ea56830eca7d17b5d96d353e77": "3b7308b85bbcd9af71c44ee7caeec113",
".git/objects/75/92fcfe854389913d5d627cc5761846adf54156": "5cf71dd8a0600b4eed128f839a661160",
".git/objects/77/a5ea23bae34b3a5495a705986ab1eab6a22715": "0e8e2eee4effe43c3e182448eacca22f",
".git/objects/78/6aa5b35a962555760d1e0dff4852e690ff6629": "759b3478780d25119c3a3899287a9a5b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/288a57780d53f7a92d804395ae6c146ebcda01": "913bdb39c399daf71216d2ec9e468099",
".git/objects/7c/15ebaa8af7f9ef897b64ec08e757afd413448a": "37b25df706675cf17f159a9c646b0179",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/454103dc3a4107959173929b02740dac0b38f1": "6b5aa5a3910faf52f2e1a6df571456ec",
".git/objects/7f/7923cef211822ea33e843259c1f946dbc55d59": "59a21915ec587192844012f90ab38317",
".git/objects/80/48cab9ac1ba0e83f9edd09ab719bead83f7885": "b26ce33dcd6de46f203f5d19cf0cef32",
".git/objects/84/bd8a24f9126123bef0946016aeaca1cd162da5": "232bae530a11fdab81e06ca9b5aa2835",
".git/objects/85/1a1afdf3443477068259182e3f60f693be62bc": "1a96cafc633f069a1870a59b2c4527f7",
".git/objects/85/f3da81611bc4178d7f3e80c6dac2021d567d51": "8637f53324938824dc2e6d2833c91224",
".git/objects/87/23df8980947fe55f70431efeab9279d9b1f9ad": "1c1212dfb0ab283313f497056f7f78c8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/ef6c8aa0104728895ce735b3880b25a0f0b7f4": "9df14ef739e1d326431491a7fcc83f22",
".git/objects/92/98e1bee648ef678ec00ee0cd104bae7cdff208": "97bc046f693c7fef47356d4dbf1cff47",
".git/objects/93/84cb400b913322062a0e36a868cb03117cdb99": "dd0b683663d541b79d9f30145a7f9483",
".git/objects/93/d3cf9dd7420269766fc05840ae19be89d76dd8": "4c4a73c05595cd9ba9484724be1d6f73",
".git/objects/95/79c87d8abf12542f27119bdaee1904036ce86f": "2f25941d7f2493dc7377acbcbca563d6",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9a/ec2f4d4c7364f9ca78ca319f288658017abf8a": "35d2a502bade75c082507ebd6b79afd7",
".git/objects/9f/afcd5f0a1aee860b987eaab679b088d7bd205a": "fdadb0e2315bc554ed65c2196d6b55f3",
".git/objects/9f/f7b215b97b46daecab09e48649acfc72568054": "71037c251701bdc67a0dc912baa7c062",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/c780bf84a03a022362d76e4631a2176b716c5d": "84def648e5c938cc6870f6fcf0e94f12",
".git/objects/ae/c363c983c1854a5d1c03c921b5ba05ac380121": "0656e23abe81bc18334fb7e3ba005a6f",
".git/objects/af/2daa5da8025c7600c98c8f31f4a26848045135": "181c1ac94e69cadeb345270c59369d8e",
".git/objects/af/ddfc10c43b13b979486792172460552515a648": "00a8972843bcd0f190e014268b29c75c",
".git/objects/b2/5002fd0f9a1e3f173159e3d969becda0880571": "624a7e3cd26d399ede13ce3f4c44068f",
".git/objects/b6/ebc6af28612c5d5bcde7ca184eea1be3700ebd": "e9748c05a201004d84299dd6ea00a662",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/603e485e7f0ccff03b94882fa00068b07bf4b8": "278d6b5fadaca7b7bf26331695f59d86",
".git/objects/bd/6ee43832e5ee662c71b8273defc9641d90b2e9": "cf548b9ad3f05d84fa6b8047aab336b0",
".git/objects/c0/a620a4f6b9e2824dc904a12bd27c952f175556": "294e3a9ae48eda1aee2375995501dfc4",
".git/objects/c3/3ede16ac49439e29efac4b4af9dc344f4da136": "ea7a70f85588f364b8e5d2ae8c0793cb",
".git/objects/c4/7c430eedba36930de77d6af29b4ce0ef3a8c38": "c5469d6ae46ef667be80f8d0cee8fc49",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/f11fffdb413ac74cde0c5256fa03da61ef488b": "813158833a3834b15b39671132a7a097",
".git/objects/cf/ef48f3ea1e048ae69fcbbdaaecf120b19d4379": "a518265c9e5d20f46c248e00926424cf",
".git/objects/d0/22e5d066d41d5a7bddf2d5a83102ecd18253d3": "ef2e46961079ccc94be6aa4b2705e56a",
".git/objects/d1/2ac77565b0032c02b0f3f6cec0c231a48d58cf": "9b26b62f80f825a0d1289c5229159f08",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/544e39ab0f543abcd3494d89ea69307376432e": "4bb178259c4271da75446f9f86b525d6",
".git/objects/e1/8567d96132e1d9c76de2f7bdff670a4da8f173": "2683008c13dde992cf59626f1aa53879",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/0ad705d53ebb158ae4a5f9ff4627113b947592": "209227f3b0fb5295af4d90e86924a60a",
".git/objects/e9/52fc2692bcd7daa5dac158c20b458e84d455f8": "5024e09c55ce388c09108b16a0b98034",
".git/objects/ea/29497023217d6f0bdc36b52386a66fe7fab480": "e97c61ca978bd8d19ff2262ce8e98912",
".git/objects/ea/d058c7b974f1ceea4a486b97c36074a0073f5c": "d470818fe51823c1bd9215cb57ec698c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/48c5a73baffe91e15bcfafea704d9494e6c6a9": "4f0cbd373bd904ee146a152923bcce12",
".git/objects/f2/6486295df8937c3901fdd303bef482ad9cbdad": "958ecee0571de33944c137c6104199ed",
".git/objects/f3/753c5a1fe11044320724fe58a28c82faa19716": "68aaa0828057e54b3ab488c38205e22d",
".git/objects/f6/6ddd5eb3b41269ff8efa49162fe5ed585c4e1e": "125af3e53e30603d8ef8eb1b7f17942c",
".git/objects/f8/a10e09d5c9790688018bd9c80bd52257019357": "0cb76367d23f9605bed96dda4a7969b0",
".git/objects/fa/f8d52ef63f899980af4ef570be38d0daf2690d": "7784f2fc7f1f291117fdc1a6a0e2c367",
".git/objects/fc/3a81176c2aad4f21259bd6a1f4b20705ee9da5": "975b54d499ff08f14a6f19a1f9a6bf0e",
".git/objects/fc/9a6f50d74a30309e024acb861bf25c90dbb71c": "4880f38ab25b14901181680d372c4ae7",
".git/objects/fe/22118c05f9584b108df9111135e6371670f77d": "4b3dce8edbccb0d8e10ea348dde8aa30",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "d96a4f7c6ed82aad9bd4efc405ca21bb",
".git/refs/heads/master": "6dcde8f47f003c76a54bbe515253e7ab",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d96a4f7c6ed82aad9bd4efc405ca21bb",
"assets/AssetManifest.json": "b1b31f4f598ac275fc850f04ded2d9aa",
"assets/assets/icons/app-store-192x192-2365235.png": "2cf11618c964b62d3a82a13ab643938f",
"assets/assets/icons/apple-music-192x192-2365226.png": "2fde912e57d2960439861a69b3f3ac9d",
"assets/assets/icons/apple-store-192x192-1575941.png": "f22797fa04ad0770731c652c5a5e4ea2",
"assets/assets/icons/apple-tv-192x192-1575940.png": "c5829161a47ae012eefe3b4672338fe0",
"assets/assets/icons/books-192x192-2365234.png": "096cbda01144b0bd2288ff4342a5b0c5",
"assets/assets/icons/calculator-192x192-1575939.png": "6b48f6d632a01f23b44c6c05d6afadc0",
"assets/assets/icons/calendar-192x192-2365233.png": "6f787afe7d05c5ecfa158421b2c23112",
"assets/assets/icons/camera-192x192-2365232.png": "28360f9bdeb3e0c893738c385aca1ef1",
"assets/assets/icons/clips-192x192-1575951.png": "2341c1bc0edb55e9ff3e5a47b05399ca",
"assets/assets/icons/clock-192x192-2365231.png": "0eaa33e3fa603f242a3043a4accb29cd",
"assets/assets/icons/contacts-192x192-2365230.png": "62bb7e6ba150984221c530ab2970356c",
"assets/assets/icons/facetime-192x192-1575950.png": "363ef7405ef976af521fb26761c76f5f",
"assets/assets/icons/files-192x192-2365229.png": "9c7e6ec63bd22419f59c8a55a1384bbf",
"assets/assets/icons/find-my-192x192-1575949.png": "a55dbdbe3690b16213f6ec61c0e25773",
"assets/assets/icons/flutter.png": "66a8f8c0905dbeef982bb247789bc8dc",
"assets/assets/icons/health-192x192-2365228.png": "61d30f0e1c7a5dd7688d8285aaef8b43",
"assets/assets/icons/home-192x192-2365227.png": "0e44ab93d8a23bd378397638d6486c22",
"assets/assets/icons/ios-message-192x192-1575946.png": "13b1fe7f2bbab2e7611c291468af393e",
"assets/assets/icons/mail-192x192-2365225.png": "e1b14d48f17a6ae7cf75c30d348d40f7",
"assets/assets/icons/measure-192x192-1575947.png": "c0f7f71545e37e65b5560a7c6df2dfb4",
"assets/assets/icons/my-shortcuts-192x192-1575945.png": "2bc56f828796718cb77e62ad1ab98e06",
"assets/assets/icons/news-192x192-2365224.png": "ede7d4af0e46e0cc5636671a028283d3",
"assets/assets/icons/notes-192x192-2365245.png": "1a9acd9896cb77cb3aa6c31d234346dd",
"assets/assets/icons/photos-192x192-2365244.png": "4411f028bc807d7bfe915e94671871fd",
"assets/assets/icons/podcasts-192x192-2365243.png": "9340ef297a0e647af302af75ed6e988f",
"assets/assets/icons/reminders-192x192-2365242.png": "8751d5f9f974d82d7d8b3903cf7247f4",
"assets/assets/icons/safari-192x192-2365241.png": "a336bbeb67f044fca4c127f13ec7f500",
"assets/assets/icons/settings-192x192-2365240.png": "d072dd2f32ed0cac379fced84981eeaa",
"assets/assets/icons/stocks-192x192-2365239.png": "1353499a90ab26a29777b1ad59833b02",
"assets/assets/icons/translate-192x192-2365238.png": "b6386a6d4e13bb31cb09c1f766de160f",
"assets/assets/icons/voice-memos-192x192-1575942.png": "4cf411aa3072a0a3e525cd43961daefb",
"assets/assets/icons/wallet-192x192-2365237.png": "9e0304db7bd7392a7266f81b0c21499e",
"assets/assets/icons/weather-192x192-2365236.png": "a020a7c3e470ff2ddd3fd7c2093cbaca",
"assets/assets/images/androidBackground.jpg": "fab88dccd5445178aafe141bece6cfe4",
"assets/assets/images/avatar.jpg": "c7b5f6a007a193933d22f1b03bf2b43e",
"assets/assets/images/ipadbackground.jpg": "a08a99d0fc964f8751a0307641747b2d",
"assets/assets/images/ipadBackground1.jpg": "78d250522da808f3d8b25ee83227451e",
"assets/assets/images/Rectangle%25208.png": "a9a846fc4e85c2aacdb832ff75299912",
"assets/assets/images/Rectangle7.png": "61b021ac1e0e3d40e3096e8716226ce8",
"assets/assets/images/screenph14.png": "744d7a26f9321c4de4990d9954268c08",
"assets/avatar.png": "c7b5f6a007a193933d22f1b03bf2b43e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "e89b304343a0985cf23eb11bfa7099c5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "3657c44c77e3a6aae02f6e56d97c3855",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0a28c9e8424793671220b61f9b27e44d",
"/": "0a28c9e8424793671220b61f9b27e44d",
"main.dart.js": "747a1429173aa8b305778c626cffd1e5",
"manifest.json": "18d8476a7b41c8371904d623ad658600",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
