'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c5e1670a76fa30eb5c8cb1969cb58536",
".git/config": "3fca3e741a297a4931c6a9433d71d5a7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5873552170ab4ab01b1254597c16999b",
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
".git/index": "dc781d80e81608ec111b1ea87bc304b0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "24fa82d3eb27005c0b3510fc7b3d972f",
".git/logs/refs/heads/main": "5c12c0219419ad57afcbd32b17460ae0",
".git/logs/refs/heads/master": "d822f962a56a2a73927c01c25df421be",
".git/logs/refs/remotes/origin/HEAD": "150b509d980ba3dbe0604a7b14cdeb33",
".git/logs/refs/remotes/origin/main": "fbbf48c6c5a19a6984a185286c83d0f0",
".git/objects/00/3c31675f33cb0289e4f18b8dba78e94437a4e5": "75741f4ad909aba79e696075ad8a83ca",
".git/objects/00/d881d5e4f22b7707205b70800c88ce5f01f430": "272645a882ea6057cec2bec0878b95e6",
".git/objects/03/cc6ae28441c23dd8fab583aa8c05c06bdaf1e7": "9e95a8de0a443540a8ac203266dacfb9",
".git/objects/04/011a3ee1ec31e588ec15e93739829a5887760e": "ab0ddc89c8b521bfde774e4ff37bdddd",
".git/objects/05/95559efe31c8aad8e1bf64f6bc794ad7c3760e": "067b2178cbf7fd18220ffda4199d16a1",
".git/objects/05/a246589a547e9026146f1f4acb1bf05b5d4ae1": "4a75f7a386db9e7a925ebc0ba1fa38ea",
".git/objects/07/097d146005e4fc65847dce73152cced2f6f4dd": "5609c66a511f7d5de60c037407c29fdf",
".git/objects/07/9f45ee751c01b5fba24f9dee09eb6725be2b59": "ac6c75f4e7306915e22eaedf05174f17",
".git/objects/07/c9c0921d8dfd333372491a3a1620c50d7cf3b4": "b27dfb6d7d3f4ac69c9c191346002a98",
".git/objects/0c/d15368099c3d5bc686d52b337fd9c067e4552a": "dfbae2e26c326b4269ec413a7dfd4f2f",
".git/objects/0d/6d0b491464a29c5433bb58a333ede4855e92ea": "6d6de691fb71e26f3e409c2200d0c41d",
".git/objects/0d/6e445af60b979632e23a141dd4df9df37f029f": "aad130a22f8f0db6558e9cea5c056388",
".git/objects/0e/c6cb36d241b67e0d25d15c6aa4bfc0b0ef270e": "0c73f33f0b9aa722ae04c122d9b1b0bb",
".git/objects/0f/d8a27b48d21280b3687ed6407ec55c82b10d7b": "9690b50ddbe75f44669d02b1a5889143",
".git/objects/14/21b234a41168c375e9450ebed1bc895ccba714": "3548664e135731fa72dfd5ff2ff90f26",
".git/objects/16/7ab3b6e135301f91960fdc428f3bbcb341f4ed": "99cfba74eeabcdf80211ce6d3045ca06",
".git/objects/18/1ca2bc362c53ec40f84fd22bf0fde79e5c7f33": "464aae748a789c0de774443485a7cce8",
".git/objects/18/cd615fe3837ccf3d56f7607f155329e03a7d12": "1bafea6f137326e6695a664de8a8078b",
".git/objects/1a/52def372d32978b9133d01baa62608cfedc5cd": "9fcdaecc5f01043ad32a8cce079d4b30",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1d/0207e38affa02a4d9568ef3e5b368992901892": "6dfadbae238029a020800f2bd90514a0",
".git/objects/1d/788a1f61d17e7d4574f5a49b8f7770e3255745": "46e18587de5d970200c6dffbac5a4e16",
".git/objects/1f/9c82510894dbe0aa27dc360df191eb84b61d68": "6732fde82c44133fafa3206d3a20c132",
".git/objects/21/55e52f6fd8bdd0eab13dab52f06636d1d7fbc6": "cd605d1fd364c083b16f80f2843d3e31",
".git/objects/22/db43513aadad04853713464e6555d93d8d46bb": "fd728bab3be1a1cbc0a235222861321c",
".git/objects/23/0559c0a4d6060667dbb3b643f0b21ff7d0e382": "1af1c0b5f9b9b9b72fe15de2784c539d",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/09e71450af5e9e0a95b7f577094ac9c5d24ce1": "3643b48f11d711b41cb9a89cc4d1d34b",
".git/objects/2a/3a59967070d6aba89cde991e0860b80e5b779d": "736bea9ed037539142bcce2cc1cc1770",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/66f0c7b34cec6e3a13a7b36565574bc897f920": "a918ca3094677602373a99959737f7b9",
".git/objects/30/032f7b736f4077a557c0699ac7d90e8da1e6ed": "6a12d0cc30bbea0206cac1228d86a36c",
".git/objects/32/c4b4e054c159abe74cf03552722aa9001266fe": "0dc5cc9b1080021333f4f347a66269e4",
".git/objects/33/00e441f25486f87723e66b42eeb5781955d673": "ac872a9f6649b54b6b735770d9d0526d",
".git/objects/35/aa1198aa00fd453fe941e8f56ae7d48a2baa6c": "68611cce088b706bbe14db5223b90c8c",
".git/objects/37/e07fdffceab319986d15ab3eb740ecbbfaeac1": "861e3b0ec4ebb499de35a00719c6f5bb",
".git/objects/38/6136f6500668e224082ea59cd52be5c130ea76": "5f097e0f0fce684639a8ba9622df835a",
".git/objects/39/3ae250ead84622172ad74e237d01ee1e0e9159": "e00ce6c212eddb94aa732f3f6ccfae36",
".git/objects/3a/79c98bd6e5391830ebba35e212914a8672faa2": "cf244f91a4c2691281a004e6bb3759e3",
".git/objects/3b/88ac68e8a2be2c4da67614db86a5ccbb670db2": "c9ad5d099386fdf9fa147832d08387cd",
".git/objects/3c/0c4ade982dc0b7b18994e25ff2468f53ec6563": "aa4b136ad9210ee56a38f66d363f8020",
".git/objects/3c/59f729d130218ccc4034965d341710f61866fb": "33b4913e08eb148297c81028f553237f",
".git/objects/3d/25899e14a581f5fa1cec5a865268dcc436860e": "fd41325a13037a853307b7d24b0404b5",
".git/objects/3d/d0c13e537e8f12349f20f762aacae86209614b": "61edfb5398335383b0e19862d69b3953",
".git/objects/3f/4ba6c7a11149902c2754c3817c29590496ea34": "7b51fcbdaf8677999b8a0c6e9ba84836",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/8708199591746849b439655aea8695c48569d2": "00b40c328ca363960d43f2b69f1b5baf",
".git/objects/40/0cb96ec66f1714599f6866171ceecd5cec16e6": "abe2a869950c4b1ca7c9bab45acb28aa",
".git/objects/40/8d3dc8e7834de075e68c00dc1bfc85d8c222ae": "36040e8d64f9f40f70f5425eb245149c",
".git/objects/41/af43e0f104ceeb73754779570f0d87fdd2c62a": "be69e3280dd132cd81cbc8aba982d475",
".git/objects/41/e842bf03bcac6f28211de55ef2ca578ab4a9aa": "408305ec62e2ee3215a2d3497e881f56",
".git/objects/42/bb7f2c88b92622c2c8ec093068ebdb8d03317a": "176922d15e14bb5a153504a072ef18dd",
".git/objects/44/a4d661fdd4c1e115b328a1ee201041fb66d224": "b514e609e97a1d02baa2ffd50a46221b",
".git/objects/44/d902e7a29c69f9b52824a6dafb54d1390484dc": "f19c0c6eb0b5df105cdb7fb6b3e8da83",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/c135c1bb8b4521cc9a54b568cb1fd1c814cf3a": "9d1556093b49fa466bb5241cedee7c4b",
".git/objects/47/818cc125f4b61ab58210edd3c06f8c437f90ba": "ce1161c7701ab241f737dc9b927be76d",
".git/objects/47/9cd68c0af30b6d821ab6f9aba4988942aa41f9": "4b9cdf3151789254de41ff2684daa59e",
".git/objects/48/74ee6614df96543da213696512a637a0aed083": "2fe025399759540769f3014014fcd6ee",
".git/objects/49/01af913b560d2b9f6bab0c63ebb614ddd217e9": "6ba3108814335d953263887814127bc8",
".git/objects/4a/311d3a13b38d3aeda56160e474fc657158c034": "e40bbe24f00ed0f232e67d6961e18cf4",
".git/objects/4c/69c6bc78235ef7af4547e4427ae530384da2a3": "62b0826ad0028d0488da6436780cb4b3",
".git/objects/4d/74b4e4a534116306a8fecf4f3e56a45e1a37f6": "8b3c59f8bb492e3a3fbc901cf1a59c90",
".git/objects/4e/75acd27bdc42cb1e4e6e1a8709cfa3e4f7725b": "da0c8c81a7f2b4929a426dac8ea801fc",
".git/objects/50/df4800b2dd433a354d37c0a5433009baa26e07": "2ba47b2941a47a2b62bbf9234618cdfb",
".git/objects/52/67312fb6e6e61747bd0a4205bc8c2664d4c35e": "112b54c8383014764d5e9122ba475600",
".git/objects/53/4a2d5955bb253bfd3a0a0f3cd02c4e4314c584": "cddf06fcfaa8046aab30f19bd06b5cee",
".git/objects/53/56c2b6dc70d2634bb2ffb150b59179c55cde69": "966d563682462ab76db8f14d94fd6955",
".git/objects/53/9bc9e97f5ed10be065c5f0e3f3b444e13f1f26": "b586e0b458e2d08fc142ee7f77f72919",
".git/objects/54/68bb64910465536bce5bc4e3856b21c6b9319d": "5dbd031b4cad016fe1733b455aa46365",
".git/objects/54/b5e65baf95ff5b1a4f7e6686e8b0a8ae2cf668": "e288b3e078a8f59eff37ac3b48b5879b",
".git/objects/55/fab101bd08a4a13e991f78d1edd841bea643f4": "6be61dfd749c7b358048bd01619b577a",
".git/objects/57/683c2c2ee95da93732e9a58f3dd07e3fbbba33": "ca3dc9c59d2ead25ea6a81c48ec362d9",
".git/objects/58/562a3fcf196fec70e292c1b804a785f28ff1e9": "223c22e36f441d4b575f4a055a9f036f",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/a74c45c0f0c613f62cf194b25abd59dccb56cc": "f4a8956e01f6e064f3e60766597f5f1f",
".git/objects/5c/5f4090a0709263eb076e4f07fa4e49eebad8c3": "efb2af909cf1ade04420ac856e10b300",
".git/objects/5e/d1d93612f33fc8c989bf9a5e7d36746b2b473a": "a236b9a87c1fbff359e0e0423e409215",
".git/objects/5e/fa159e298de577b010637fe1081b7482234233": "75b2cb10122d42e49c900fc870965ca0",
".git/objects/61/871b79b83d2574ec7af34f5983a810ccdc8571": "34515933703b6a08f917c6bccccc8590",
".git/objects/62/bc1b6d200f57f6cc0bed83285878706618fe40": "3fa3732c1725103f74e4b92c8a3af60c",
".git/objects/63/de0ca6b54aa744e08e67fb650a28090bd37981": "b4d32faf892a7431397f40ede6a1eb6f",
".git/objects/67/94bc3d5a5f673dfd3c31720c603603b207e8e8": "3b81625eeefe8ba50edd32012ed8bb07",
".git/objects/67/c409fa0d78cede0abaef2643c15924455abdb9": "92327c10ef570ad70a4459321be3a2e7",
".git/objects/68/13163a319f903ed9b55206242fe07549a5d9d1": "cd55701345a554dd23171399d01f606f",
".git/objects/6a/abeca32c3734b63221607ad9b3d6ddfec99781": "d3427112a9221035f626b2087df71244",
".git/objects/6a/d6a49c62577f2b4a1c4c98e5cb0bdda6e6b91d": "72377e06c6f9cc13b00b7ce29961a0db",
".git/objects/6b/3118ddbe00842be6ee326d96d887d909464363": "6790feba7cae240a6af7b74f6b19a607",
".git/objects/6c/4bf3de99b20fdfd59b4c40b14f3c6a240baf0f": "0c2ac38ebf13e42c57d28249a2180490",
".git/objects/6c/77ea0faee8cbfd799768f275d7bdcdec70b549": "df276336b8893a24d84bb5f2d3257959",
".git/objects/6f/4d9a2bc8fb03c44d911f941ebcf5689decbf35": "767309f05b6c982506c233747e3c98cb",
".git/objects/6f/cf695490b2852c9c738e242624b8930c94ef4a": "ea91a7e0a0802a746603718f18434e2a",
".git/objects/70/110b51c1da3a8963421b03a814e96e5f47a2cb": "b941316e41e88d496717924847b2fa98",
".git/objects/71/28e318c71a3c890191035a2e2d3d11a846965f": "e571130db50f4894bffae848cfa43bbf",
".git/objects/72/99c29b8ddb45ea56830eca7d17b5d96d353e77": "3b7308b85bbcd9af71c44ee7caeec113",
".git/objects/75/92fcfe854389913d5d627cc5761846adf54156": "5cf71dd8a0600b4eed128f839a661160",
".git/objects/77/a5ea23bae34b3a5495a705986ab1eab6a22715": "0e8e2eee4effe43c3e182448eacca22f",
".git/objects/78/6aa5b35a962555760d1e0dff4852e690ff6629": "759b3478780d25119c3a3899287a9a5b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/1bff1fe31020c4441d5212a6860526cef43425": "ad68c7c6bd2e541126ea982355e28324",
".git/objects/7a/288a57780d53f7a92d804395ae6c146ebcda01": "913bdb39c399daf71216d2ec9e468099",
".git/objects/7a/86939075996f20aec046fdd2ef082a61f2a2bd": "2cd973e32ef2c91b315df2d04dc64a30",
".git/objects/7a/be6a817c68b80ffca50307492a97f7371bf76b": "d6cbb098d9b191da6c95709fc3716e90",
".git/objects/7b/a5057e34719da7679e1ac32c3fc2c43c190fcf": "a330983c24b66676c48c513d21cff0f5",
".git/objects/7c/15ebaa8af7f9ef897b64ec08e757afd413448a": "37b25df706675cf17f159a9c646b0179",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/454103dc3a4107959173929b02740dac0b38f1": "6b5aa5a3910faf52f2e1a6df571456ec",
".git/objects/7f/7923cef211822ea33e843259c1f946dbc55d59": "59a21915ec587192844012f90ab38317",
".git/objects/80/48cab9ac1ba0e83f9edd09ab719bead83f7885": "b26ce33dcd6de46f203f5d19cf0cef32",
".git/objects/84/bd8a24f9126123bef0946016aeaca1cd162da5": "232bae530a11fdab81e06ca9b5aa2835",
".git/objects/85/1a1afdf3443477068259182e3f60f693be62bc": "1a96cafc633f069a1870a59b2c4527f7",
".git/objects/85/eca59c4390f7e2788cf0fc40918833054c9ad4": "b67518413a0f4d22eb738020eaaf1662",
".git/objects/85/f3da81611bc4178d7f3e80c6dac2021d567d51": "8637f53324938824dc2e6d2833c91224",
".git/objects/85/fa2e99c9caf6bc562eaef89a381d80b427a07c": "a754cc5d0d0a4e2aad927617dd734612",
".git/objects/87/23df8980947fe55f70431efeab9279d9b1f9ad": "1c1212dfb0ab283313f497056f7f78c8",
".git/objects/87/f1a566d52994399ba6d0d571f02a70a9718ca8": "b690f133c44ea9eaa48019126cefc924",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/a488f1fa003d401ab46defd2acde3a6898c297": "839d22250de2fe9c8ad0188f1f1ae876",
".git/objects/8e/54320666da6433b602d2adfcdacc5241841a7a": "a05e3730aef0900625ac1c53139a58d6",
".git/objects/8f/ef6c8aa0104728895ce735b3880b25a0f0b7f4": "9df14ef739e1d326431491a7fcc83f22",
".git/objects/91/a97afed44c662281b424e6424fd5151143df77": "4e0a041023746bbd8f7d81b0f0df67c8",
".git/objects/92/98e1bee648ef678ec00ee0cd104bae7cdff208": "97bc046f693c7fef47356d4dbf1cff47",
".git/objects/93/84cb400b913322062a0e36a868cb03117cdb99": "dd0b683663d541b79d9f30145a7f9483",
".git/objects/93/d3cf9dd7420269766fc05840ae19be89d76dd8": "4c4a73c05595cd9ba9484724be1d6f73",
".git/objects/95/79c87d8abf12542f27119bdaee1904036ce86f": "2f25941d7f2493dc7377acbcbca563d6",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/99/b7be15c3c343f763717806de5921a579d16220": "52796ce76a8ef6d35515c6cdde45ac2e",
".git/objects/9a/ec2f4d4c7364f9ca78ca319f288658017abf8a": "35d2a502bade75c082507ebd6b79afd7",
".git/objects/9d/2ad795459f75fc1b596cb086dd33726c6ff56e": "9aa1a5c07869866463f8d0b9ae522f61",
".git/objects/9f/afcd5f0a1aee860b987eaab679b088d7bd205a": "fdadb0e2315bc554ed65c2196d6b55f3",
".git/objects/9f/f7957c6fa79dfa72dea75a8dcd0f4c1f7eed95": "70a8b265f147610e37fb459204acd97d",
".git/objects/9f/f7b215b97b46daecab09e48649acfc72568054": "71037c251701bdc67a0dc912baa7c062",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/288e71f0872e23e4647510b237fa58cfd0374a": "f855ca6314428cec58b907de6a8a8f83",
".git/objects/a2/8e3a03a60368a0e4d983c4c150ec3b1e64d3e9": "469654bb536df5c66b9fa006edd3dc6d",
".git/objects/a6/83acbc0c087d4fadd226fbc3eaa0da3cd3916f": "a1ef74eff0a3df785e05ddb1ff6c36e9",
".git/objects/a8/35ef764060077959a9343ef650bdc812111d5b": "7f50385b186bec5edb04b9e6147c6b5b",
".git/objects/aa/853ea13752bb0213b64996374fde8cc361dffc": "4fb717ac1d6482d73e9e85c396bd4d8a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/b52da42edd3fc2f5689a9bc4cfd414746f66f9": "89910479041114a20a44904abac50742",
".git/objects/ad/c780bf84a03a022362d76e4631a2176b716c5d": "84def648e5c938cc6870f6fcf0e94f12",
".git/objects/ae/c363c983c1854a5d1c03c921b5ba05ac380121": "0656e23abe81bc18334fb7e3ba005a6f",
".git/objects/af/2daa5da8025c7600c98c8f31f4a26848045135": "181c1ac94e69cadeb345270c59369d8e",
".git/objects/af/ddfc10c43b13b979486792172460552515a648": "00a8972843bcd0f190e014268b29c75c",
".git/objects/b1/347a792050928665e43c4727a1e54c59ac4861": "7d513b99547649125370cf44a0ad0929",
".git/objects/b1/a472c4db01e86b76dfd1bda420c11aa5840818": "9e7390e0313ea57250bfca0590bf5ce0",
".git/objects/b2/5002fd0f9a1e3f173159e3d969becda0880571": "624a7e3cd26d399ede13ce3f4c44068f",
".git/objects/b2/ebf5b7db998e3841fa227aa8ffd22147eca0a7": "370b5fcf8e2f7289129c798d1836733a",
".git/objects/b6/d0ae9889d2aebcf244747cf13dac5a0ceb725b": "4178fa8b583f7dd8657c89dae7270c4d",
".git/objects/b6/ebc6af28612c5d5bcde7ca184eea1be3700ebd": "e9748c05a201004d84299dd6ea00a662",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/36faa5f0cd467f329b95d924fec5f2de62c51f": "7200d999dfa3839b515284a301d3bb3b",
".git/objects/bb/603e485e7f0ccff03b94882fa00068b07bf4b8": "278d6b5fadaca7b7bf26331695f59d86",
".git/objects/bc/af04aa83431b9e8b42624ecbd41c105a24cbf0": "ecdd0114c73e75c4b6fc980056e04d7f",
".git/objects/bd/6ee43832e5ee662c71b8273defc9641d90b2e9": "cf548b9ad3f05d84fa6b8047aab336b0",
".git/objects/c0/a620a4f6b9e2824dc904a12bd27c952f175556": "294e3a9ae48eda1aee2375995501dfc4",
".git/objects/c3/3ede16ac49439e29efac4b4af9dc344f4da136": "ea7a70f85588f364b8e5d2ae8c0793cb",
".git/objects/c4/7c430eedba36930de77d6af29b4ce0ef3a8c38": "c5469d6ae46ef667be80f8d0cee8fc49",
".git/objects/c4/dd984f88f7ebc199bb524f8a453f17e278c5d9": "384c234614fc2c5f1ca411c66341716c",
".git/objects/c8/12cbeabc56e185d44fbee40d17a05c5c497c1f": "492c9c5d671ded3c23462afb80247193",
".git/objects/c8/7ef298218de83137f5018e35f6e251fdca9160": "35830ce2fedef57fb41c230be9af98a7",
".git/objects/cb/fbdeb06374e81fbd5c0a3c55a168f2e99cb654": "04090274a14bbf8db9f9ea7e1065b451",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/6aa1f81c29f67c15a6c594ceb58edf43e397b8": "02b78236d5595c3950e689f4d4a14efd",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/ea7a2e1d9bbe5a77ee3d4e3172ba74e2ae05eb": "e6f3485c9cd2ed2c1531ae13ec076631",
".git/objects/ce/8a343f2ac63f4ae557d1959052eda75c2b1538": "74fdb3f7ab9cf02e4fcfa5aa5aaedcf5",
".git/objects/ce/f11fffdb413ac74cde0c5256fa03da61ef488b": "813158833a3834b15b39671132a7a097",
".git/objects/cf/b3574a8324836550b4acd9701cfa8dfdabd4b7": "f2db54225c0005a67e028a1090f80e05",
".git/objects/cf/e3d7ac007f0c49ec127eb14739d61f75391747": "5a87fc3cf1836a3d4dd607f5b13083b5",
".git/objects/cf/ef48f3ea1e048ae69fcbbdaaecf120b19d4379": "a518265c9e5d20f46c248e00926424cf",
".git/objects/d0/22e5d066d41d5a7bddf2d5a83102ecd18253d3": "ef2e46961079ccc94be6aa4b2705e56a",
".git/objects/d1/2ac77565b0032c02b0f3f6cec0c231a48d58cf": "9b26b62f80f825a0d1289c5229159f08",
".git/objects/d4/666a26211d3f977457cb41dad74efae6326dd6": "273ebe05fc1e95c8f0e453c3760be6eb",
".git/objects/d4/d30318e5293aa96bc25e9dc6051817e9d324f3": "62f9e737487f2870a14eb73149161e26",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/f990cc6d0360db475c05fa823ac17ac96974fb": "02bc531ccd2858da41cb162950396585",
".git/objects/d7/8c922a489b21559a36c1fdd3d729c339b17db1": "4de48b69b95f3f817531304766800c9c",
".git/objects/d8/9b66cc9bffd60d2e75f7b17cfbd6b7346d0e8b": "8d947e2afb04984f83448a16253f96d8",
".git/objects/db/7aed12334de340688feeaf2fdc5eefee7a920b": "754e4563ab0d5b884475e3f097bb8917",
".git/objects/dd/7a3e0c6caad2bfc795316a71016e0f807eb06f": "e04c84493a161fad0440e0d10b3d0032",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/544e39ab0f543abcd3494d89ea69307376432e": "4bb178259c4271da75446f9f86b525d6",
".git/objects/e1/8567d96132e1d9c76de2f7bdff670a4da8f173": "2683008c13dde992cf59626f1aa53879",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/cc18f2023f9cd494fe362ad43383c21230a5e4": "2064dd9a358dd7189492c3cd6f5440b3",
".git/objects/e8/0ad705d53ebb158ae4a5f9ff4627113b947592": "209227f3b0fb5295af4d90e86924a60a",
".git/objects/e9/52fc2692bcd7daa5dac158c20b458e84d455f8": "5024e09c55ce388c09108b16a0b98034",
".git/objects/ea/29497023217d6f0bdc36b52386a66fe7fab480": "e97c61ca978bd8d19ff2262ce8e98912",
".git/objects/ea/d058c7b974f1ceea4a486b97c36074a0073f5c": "d470818fe51823c1bd9215cb57ec698c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b2f3ff36f6407595f7f9d26e29238864ea9084": "602196a107cea9c225a6f899cc379227",
".git/objects/ec/dd61ed5bcab5ab8c60c4d0458374f9467be948": "c38fee1770b0439d1e078303ace6ab1e",
".git/objects/ee/c08cd789807fc5bd0e35e058ff8c3e00947d60": "2ddfbea839ab1eb4ddf792480225e52b",
".git/objects/f0/48c5a73baffe91e15bcfafea704d9494e6c6a9": "4f0cbd373bd904ee146a152923bcce12",
".git/objects/f0/fc4d54dd142ace893e3988af4982262fa5fcce": "41781b42a9221340573b4906798e23a6",
".git/objects/f2/32a7d9fb5374aef4c7791275c8c03b0da76302": "babb5d66b8653d1f9a59c4a340056c69",
".git/objects/f2/6486295df8937c3901fdd303bef482ad9cbdad": "958ecee0571de33944c137c6104199ed",
".git/objects/f3/753c5a1fe11044320724fe58a28c82faa19716": "68aaa0828057e54b3ab488c38205e22d",
".git/objects/f4/0a2c144b1f5b91f2d30688e6b933704ffa7ed4": "3d8bebaec52e6db6c473386f16705a9b",
".git/objects/f6/6ddd5eb3b41269ff8efa49162fe5ed585c4e1e": "125af3e53e30603d8ef8eb1b7f17942c",
".git/objects/f8/9fc9f854f31dfa1481d31d1b19c25816da4947": "6e21873c815076cd177381687146928c",
".git/objects/f8/a10e09d5c9790688018bd9c80bd52257019357": "0cb76367d23f9605bed96dda4a7969b0",
".git/objects/f9/a08546c7c2f9c094d3aa4e2c3d87b5a1b75b30": "a4645b3231626b5016a9271337cb6dd5",
".git/objects/fa/0b6c890ad4eeb5fbc396699a1b220850e56daf": "e278861f7acf96b3cee66678b2025609",
".git/objects/fa/f8d52ef63f899980af4ef570be38d0daf2690d": "7784f2fc7f1f291117fdc1a6a0e2c367",
".git/objects/fc/3a81176c2aad4f21259bd6a1f4b20705ee9da5": "975b54d499ff08f14a6f19a1f9a6bf0e",
".git/objects/fc/9a6f50d74a30309e024acb861bf25c90dbb71c": "4880f38ab25b14901181680d372c4ae7",
".git/objects/fd/b10d9263756a79ff5742442b71aef276d653f4": "e859a3ee3ac0295b94e50c3ff4731717",
".git/objects/fe/22118c05f9584b108df9111135e6371670f77d": "4b3dce8edbccb0d8e10ea348dde8aa30",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "3012c954842583871306ca5f0157cd45",
".git/refs/heads/master": "6dcde8f47f003c76a54bbe515253e7ab",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "3012c954842583871306ca5f0157cd45",
"assets/AssetManifest.json": "af4cc4552f69c9c671c382556970c728",
"assets/assets/icons/flutter.png": "66a8f8c0905dbeef982bb247789bc8dc",
"assets/assets/images/androidBackground.jpg": "fab88dccd5445178aafe141bece6cfe4",
"assets/assets/images/avatar.jpg": "c7b5f6a007a193933d22f1b03bf2b43e",
"assets/assets/images/ipadbackground.jpg": "a08a99d0fc964f8751a0307641747b2d",
"assets/assets/images/ipadBackground1.jpg": "78d250522da808f3d8b25ee83227451e",
"assets/assets/images/Rectangle%25208.png": "a9a846fc4e85c2aacdb832ff75299912",
"assets/assets/images/Rectangle7.png": "61b021ac1e0e3d40e3096e8716226ce8",
"assets/assets/images/screenph14.png": "744d7a26f9321c4de4990d9954268c08",
"assets/avatar.png": "c7b5f6a007a193933d22f1b03bf2b43e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7ae615972fca49d78a4a3a63f5f9a723",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
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
"index.html": "f261b58384dfcf2ea020eb6dcda79a74",
"/": "f261b58384dfcf2ea020eb6dcda79a74",
"main.dart.js": "b4a2887f4871582213119f8df02bb88c",
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
