'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c5e1670a76fa30eb5c8cb1969cb58536",
".git/config": "e5674453a2e6c570f70273123bd23e97",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6e9011c38b7c1846996207ed64ab9013",
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
".git/index": "515ca106015c11efca69bb67fa6d96ee",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6a2537a72d783b39ee16cdaa506bc484",
".git/logs/refs/heads/main": "6a2537a72d783b39ee16cdaa506bc484",
".git/logs/refs/remotes/origin/HEAD": "aa696387df831cbb65774f195c34d7af",
".git/logs/refs/remotes/origin/main": "68591645ea0ff0d21270244bfff94f55",
".git/objects/00/0997b8d4dbb82ffca5e830fa310930df1db165": "9c91ff1f571fd9f8e3ef7e55c90199a7",
".git/objects/00/28fd5cbd4b3902ed489d6bf07288afd1950ca0": "e74d1314e2bdc02dbb5a045bba4f0b5f",
".git/objects/01/b5460c39f29435a46e4348db19ceefb1c3043a": "0da7e93dfd3b9c6a60df95ef9f183108",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/62494d8218e60bdda4ebe59d5335002c5c8ad3": "1ae6fc3ada5e09eb484a2a0f250ccf46",
".git/objects/04/df2bad9c733e5c9962ef4539eeb42538fb6476": "3f6d12e9ccfb24cd7bec215c04693efb",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/07/f965a6769f0618c2a166e57b9197d9633e4ae4": "62b1d20e4db36a16a907b7d4b6d8b441",
".git/objects/08/b3473ec2ccaf185a9726bd90ef3a80eded48df": "a5f5b4bfe18bc98a3da4fe84b1156819",
".git/objects/09/654bcf165cfcd29734c2c8ce6d34741e9bb73e": "b14fd2f1fcef78dd8a050179c891b7de",
".git/objects/0a/634c6be6296e76faefac33083483e9225bcac8": "2b9c166b0cd1afa61600ce8c0128d0ef",
".git/objects/0a/edf9e3e3c3e5f676dbd5d54118f3727a3a761e": "0327ac5207c8006bab5c86180deb4e65",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0b/926cf72fa692e2c3f72528d858920524dfb11d": "1fec44b160f9e3fbf4cea7d08b1a7d78",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/11/9f510d0bbbeec43cf10a1940d5dff4fc5df220": "1821350d34998636e28c9ef601662313",
".git/objects/13/a38ca6f57047f4386ca9d241be3a04ab249409": "af1f762a2dd7d6d56628a536209e6a85",
".git/objects/14/ea84fb5d16c64d01398162f2fd1f33ef2e961f": "45008d0ebb54e1e7551cd67ac223bfd8",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/addd00a654c96cac0f33a54ab0469fa88a4622": "edc10204a89e60163282a853a5c52e15",
".git/objects/1a/a5511a3d4cf23ce862ddbd70051f8827e7281a": "9dc1e294b7e212215c5e565d1854d130",
".git/objects/1a/c7fed18a58963392314028c4140cf1d5677b5c": "863298d7e1301ab81f956fb0ea29798a",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/20/07c50c00fc4e583bab2e2681076391ca890a01": "a438be9c8a89a6fb5f7d77f24d16f8b8",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/dd3f4d1c0aafe08db9b62826534668dd1ada6f": "3b288a0d275ef1d99c9456b98960d0ba",
".git/objects/26/0f4d42f1aadc16c6393ee05f9e44027c5bae9e": "3095a551585a2aa2e085c5e902fb2271",
".git/objects/27/1fc206d225ce15a702dc8df3230c7523f67a81": "b30228b9fde66b40baafd3db73f96c7f",
".git/objects/2a/ad1ca7c854e80b13b034c34498b9afa4f17f42": "7ec728c1b5a76ca0ea7821558669b7a5",
".git/objects/2b/697fe1e594bd8d509fad73aab733a42751c493": "cbff9e155963263664c3a2c31cbe540e",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2d/8f03f3fe54ec4898850af27ebb35ac59b0558b": "ba8325374a8759553fd000ff16a55669",
".git/objects/2f/5c627073804e7589ed8674deb1bdcc0b4a6d0a": "9bd12d39408c35c281844e275ddb8a55",
".git/objects/31/b379200e95d718fea90eba7d4d5dcbea7dd76d": "4f1ced50def50609c06bbd16e397c29f",
".git/objects/32/6b1ba6722fab7d36c96c926b2ddf3d8454bf6b": "611bf125e1f2ff0d5ecdeae5e8889826",
".git/objects/33/008a1a69687662854127b3408224295a03346f": "2a3c1d4257360f7d71489070e857ad89",
".git/objects/34/f40d2aaafef0f0c1cf654b1f3782f64d03073c": "dd7219f442fda3dc25529d49bed6da5f",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/18c61e9500d2ad3de2f4cc2c1fd728fcdadeb5": "62ac84db4a88332228035b10e615e828",
".git/objects/39/056d6e8a2700b71096f38c2dfc364075c776bf": "dd48c3b1ebbd2d9dc1ba117102a4a733",
".git/objects/3a/3a6552abccac2687a5cbd53b992dcbfa02cc03": "d71c0a3adf3e6697a41fd9960e45d5f9",
".git/objects/3a/72b75b7e5f531fa7d0f8cb16822213edef6107": "5fd6aabdf6df957ccaec0d17537581f0",
".git/objects/3a/d1e0b39d5d6eb7ea000b85b18a4480b6d7e41a": "84805614ec101c87fa55ef911120b769",
".git/objects/3c/4646c837caf2fdf38f894576a1ffb0066b3a3f": "0449a37e495fc7b22ecea1c3ee431360",
".git/objects/3d/3248491587bd081d289faedc97ed764189eaa5": "338c795ea7adbab33e1b7b1acb462d1f",
".git/objects/3d/bc19bfbadaf51a349d6d0fac5248da5e6d6ee3": "4e30c0bf656c4b2d37d4a2b17e8ee763",
".git/objects/3f/527d34d0e5c5f753b97c690ebfd47d438b4f40": "8d49d1ff293fd3c9f9cfe6b9360fca7e",
".git/objects/3f/c87bd19d8d2c012ad172e02fb4b4347df040e6": "3485f81faf9105555b7c373784b155c5",
".git/objects/40/dcec67db1f75ff67ec21dd9b803c751545beed": "e51a6dfe4bae167fc71290e8ff3900cf",
".git/objects/41/5722508b6a8a5aa0fc0ec01a36c79fd0ca8f75": "71f93ff2316e9cf6692ae06efb1ae483",
".git/objects/43/e41a47f2fd2b8aee53506478bb1bc47f74ef64": "8b1a97e8bae8eb79462c6112f01046e6",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/43/eef074db2c42c671e086fb8f7e5ed99cb7ab01": "8adaa23f0dd2c4af8c82759597c5d03e",
".git/objects/44/d16945e96360f9d1cabbbc2f033e662a9d9b38": "f6a0ad99301bf9e9b38c933c79200e50",
".git/objects/44/efb3faaf13a1770ba83e1fe3ca10ebb6c917ea": "cf0143afd745093a0ad2cdfe8aabc87a",
".git/objects/46/e93c802548059dbee8fcc155e24967cd10a544": "7308d001b83c395de598061cc52d59ec",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/422ca450ac69c2f6a43ff52c47a52d6e4dab1f": "dc97ba7fcb6a5e6fb93e1ecbc7286f98",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4d/4da6fe8c2305be77d1ec9cf2510e2f53377365": "99ef8a1bd54fbe18330d33b4e9da7a84",
".git/objects/4d/b1be42c74265da2500f7a679ad512d4ba10a66": "cb1273f413e1d9f205b4b25b254ce522",
".git/objects/4e/af0beaaec850649ebc3f9bf8cef48e09042587": "d01d130d0acec27437b485189649f278",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/125d402a5fed3b8c7e6979a8fd715a7c4363e2": "f940c4555b33a3b9120271c07fe2612c",
".git/objects/51/2af6908d902c6cda064bd895ecd6bdc4c246b2": "887628a713c8459f357f633dad21274d",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/f8b659bef373eef27e979d4bdcc06f8742c2a9": "c260b6af78b28092a913bd12444bd589",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/c4681fcd009d23f98445706d03c8f5a09dde4b": "f51d7a8179a065ddb33f6b039505d772",
".git/objects/57/86a3e425f09d6b84e4d0bcf0b4fff7b5945951": "cad40e9df98cc2c353d054d40d490b21",
".git/objects/59/15cda4f11aaaec56f647c4725e197cc58d871e": "8af05a479a89c1052c7f803ffe8222ea",
".git/objects/59/203866bf327ea6da4aaae508e72a6cb3934a2d": "6d3cafbe67a06d6ecb133dc1c2e83871",
".git/objects/59/75054f8ff4eecc97ac8ce49bb8963b75940ca2": "4fca96ef534010512e5f1d3fea21d02b",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/5b/cb5fc7002e1218768d4e914dbc99693ab52eeb": "972f01120a81a1eba3166d8e582c9b0c",
".git/objects/61/2ca0a723fbdcd86471f5d802c73e6404b93629": "d4dc1f0a57053864fa48a4e416eff9ec",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/4128eb98171d16cc80f1d8e5db937645207f23": "7f83fe01c2956a734bc5f3ba768f7109",
".git/objects/63/953a9a72b58db3d38f7b2aa14087b8064cf400": "c4b556d97e8fe35e6a23040c269542d8",
".git/objects/63/ccdd4f1df84de2232dc528f0da5dee7eac96c1": "a2249e88d382736ef0910508d91bea3c",
".git/objects/6a/4e8cb9b22e988919d76d58f52fa73fcf146225": "293d8df7ea63c0df2829cfe4248c6d19",
".git/objects/6b/84482532f11de872d162164c9fe28694c69ad7": "30cf546d018c74ea662e8cd7e02e1cbc",
".git/objects/6e/0b5a9626e34240ac7cea7a2fd437d93ce8301a": "2992a32b0e019c5335a98d4a8228d037",
".git/objects/6f/25a474172fa88e23c27cc015c73d4b76da28c4": "511f0b9b0543cb42c41b86d8d606a684",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/3fdd808133811d0f396385162d9437f81972ab": "25a2221de328c44e5d2f8b9201780277",
".git/objects/70/66116df7b485a824b2b126632547ff9aa9ba9b": "3e4bfd2af092062555ec6d063aaaae60",
".git/objects/71/626b1bea21e58d4bdb2d665fcee43f74049022": "2f6cb954fa58a9e76cb3cbf7db6f8c62",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/75/59934083cb41dbe54d635933615f3f7a08d8e0": "3c6ed2b240db1ed28b77d3d441a0f55c",
".git/objects/78/a80757edf0b5edd7567ab20ccdc9f60efd52a1": "423ec2769c534eb049c51e9efe8b02e4",
".git/objects/7b/a64170d64cf68b953c1809fca89bba5e32cf57": "1844381e9b9bc5c273fe807d111584f8",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7c/9f184f2e4e128803627ea344f9841f04e9fd34": "7e44c562d79e2e78e9e758bbc149cc0a",
".git/objects/7d/e93668b5e16ac1ee8a7234d1be5330c9b0a5be": "4ca56342955596890c7ac7714512700b",
".git/objects/82/8c70a2eca0bfc8f883d98e804a7d6b1a5e7c8f": "6678d3149bddf28bcb76ae9ee03726fc",
".git/objects/83/4ce14e142b8f71113981871566caff5e3692cd": "e56c4f11771c96459588623080734fc8",
".git/objects/86/8cee034c9bebc88d261e241624951de018a357": "28fce8f49915d9814c8ce9cab8b05403",
".git/objects/87/6b69bc93d7bc2f47724669e0fc051dbf6f0fc1": "9404813ae2136667e167a09e9310f299",
".git/objects/8b/57ca144f404807594613265944c18813095c1e": "a1e015fe7575e0fd486c3e1cc257efaa",
".git/objects/8b/8cd4e4df7ee75757cf79d863098bc44524fd03": "b7337634a5d56714edab5dcbd5b1094a",
".git/objects/8b/c8c44d20372c2f756432536fabc6bfee7c9b95": "802a8d8046e9ffc20cebeaefd7a06731",
".git/objects/8d/319d2be24d42c3297d7a4a41b1007245298d0a": "e49f0881278924ee2b9ae92d0448d6e9",
".git/objects/8d/5d63db71670184d5597e7e416a64212111b53d": "1838bfb1e0128501b436fbca04e93cac",
".git/objects/8d/6881db17aa0fe10655507b5a913008b170b6c7": "69f6e165c39b4b158daff42b203a0c92",
".git/objects/8d/caa6e1b542e6dcc19afc06444f0c1eaaf7a4de": "d169a77f5d75168a0dab7265c127ff1d",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/97/71d0b02b04ddb77bdca8fdc6555afc82ceec36": "324fd20450ea60259b6e905a7b7c7ae0",
".git/objects/97/ce02435fc03082a178279c1e98d1c5afb0aca3": "64aa4abdadf232907d8635252d13dae7",
".git/objects/9f/3eb251d940d8454cbc3a6243219e9844a667de": "fc740401bdc79b9f539adc3052ae7d2a",
".git/objects/9f/efb8c4cd4a8659d565f193359da556599be7bd": "b5ce19e241a85b9f61553301c2d0c115",
".git/objects/a0/dbb3c52de45974a99d87a3e16c35d270bf0f7c": "4575ee7f08a56387d00809aec8c4fc73",
".git/objects/a1/bade5002c80346daaed1bea32361411ef4f20e": "878af44210d1988117c3d15e7f205226",
".git/objects/a1/dfb311f0a1eeae3c70fe8af06215b7b94475a7": "8097417f49131aa4f9e2128cbe4ac26e",
".git/objects/a6/f60f82c56bb21820f51ac5ff1544a9f16d4431": "23f242b4b99c7c736b977dd2f1a06b33",
".git/objects/a7/2a61e6ff284bd58ff148ace72cf6543816128f": "a198e08992384131b7a2b18d7a2eb63c",
".git/objects/a7/b6db72e65ef60511efefc4d641ee19c260abfc": "1050c7ba6a16d275c23e7bfbd3100a50",
".git/objects/a8/bc1bd7807efe427fecf1915ba23eafa27d428b": "08c1ab0e4da5f355e1c75851055d0d46",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ac/7e8665e339fc030029296b83336c2cc7870db3": "e28f0b5bc183c1571a6563be59410d29",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b2/2bc18454a7740cfe3cc276535ffaeefa5e055d": "9fc0b136031ee465cc7a708199b3c547",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/c74ac6b5d3ba89ab10756ba3199f7135204e70": "4507f3aab08f6c82997d9591cf299c52",
".git/objects/b4/0fd2f05400ebd2238f16ab4374aadd338d551a": "983e01c1a0f662bb02917e93303b1d59",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/ba/44c5703a4583c6d8558bc35196cfd0a2e69f70": "ece40dd3a0647aae83fb7db36e1dc482",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/2c8a07a6cb902e4565f4205bb71f1992217f21": "e7bee19337ffdc05789ea6f08a0648e7",
".git/objects/be/21f3b5c3b5d22c9c228613f9f1d4bf10888cee": "899ec5312fe6ee63c198c71961f8c357",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/bf/ce0530f1da18d24b80e5c5832290a2fa1c6341": "f41a0d08d72a5576ff4846289cd1b3f0",
".git/objects/c2/4aab4781c697b6b836d1c413fbe3fe470ca9b3": "c0d9ed03347ab46d9c3e4d2cb50bf135",
".git/objects/c2/9d854fb122dce984566aadaf09665699704110": "12a14875a13635312886a4ed5c209c1c",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c8/73500b719f42deda9ad7833b3bed47fc16a8d3": "9c83c14be3674fd82e878f61a6d21572",
".git/objects/c9/02d128f9ac1c09bf369947911a237f104d61c5": "b612b689b061e5d04e146c23065032f6",
".git/objects/ca/4a927c3358d294e8001f8cc26ec72123c49417": "f0ba4ee4a91b47bf5878491c76398371",
".git/objects/cd/f2bd4d30230a5fa6f32b648f0666544514a6d8": "f696ad9c063af872ae26425aa405dea2",
".git/objects/ce/d2e37fc1eb55bc33b588636d961e6a8eeb83da": "6daf76818ad4f66f9c0c2e4fdbfffe1a",
".git/objects/d0/78b4e57bbcb37a792ac5d6dd456ff331f8d3f8": "916b1dcfe97d4a6118b76c38abb4f16d",
".git/objects/d1/5ff8ece4065dea622ef5e1b96e2861b049fda5": "8ff7d10d44430e4b00398391a9c1a43a",
".git/objects/d2/0efbbb76eee3660a30d74d737b8a51df06e81b": "1d87a49492398805e84ac5764cadaad2",
".git/objects/d3/e35768b0be5d9ad13aedb7c7e613bdc0c745cf": "1b99b849c25c7210cb819d24354cbff0",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/a00c075d47f65bfef91190800a985ee05d8066": "4b9dae33fa94a2b7e25ca2bec7403a45",
".git/objects/db/a596f66c6ae960b312ccbb22f5c091b6757fe0": "cc8c48d6eeaa2f2271539e94ff50c3ec",
".git/objects/df/0ee2dbce52bbed01b56fff0ef4f048a7c71b6f": "6b7813243b19b9f3cb7753361b0da27a",
".git/objects/e2/4a14cb3c5adf2a8819681bf2d88f2e23032744": "3d2ec7184007cff3c5657472cccdb60d",
".git/objects/e3/84d91b13957f883935a92afa06b1dd968db741": "617ef1a027ee48d0a0296624b7ed00c9",
".git/objects/e3/8d8967d93b33f9739d672fa6ec6ef1ea96d973": "8075c7c0b16d85fad0b9763f4f4310cd",
".git/objects/e5/80a36de483bddc89f50453090d8ea3f36ec5fc": "f35f9a08d16e3f8608f1702b773e66db",
".git/objects/e6/5c55a5b595e20e25bd59a1c8bd161d5b13e8a3": "a790fab1222de456f3faf3ebd3e8b99d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/627dd1a413d151de2c371555052e13f19a2b85": "4613e4307b934229999a046da1c900b3",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/b174c977934884901eb800c943dfaf4f0184de": "70d98a157c5c5a14ea525035ca4e5aa8",
".git/objects/f0/fca1b76eee2b43baab59058bb2c90775662079": "bbcda71968eafe2dbe1919be835e303f",
".git/objects/f1/a16349f06970da155e973100295da4b4e98db1": "e03bf0c56a7f22968df5e26ae25c6419",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/0bf1c7ba1bdf09bd181631772990a4d3e7ad8c": "232c2a957f5c1225bc9a5cad07f399c1",
".git/objects/f8/361823df7e64416568ab1af7bdbe9baa8a7244": "49e1c1dd2e80e51fd2e1c68927441899",
".git/objects/fb/a25ef70a1a520fb664eb8f74dc4896de6003c4": "ec419437c31fdf0f3da7e88b4f5e89a6",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fc/fdf5e681033c7be4826e6dd484d9655730365f": "af0ae43d42c1484cb61279b10f5e817c",
".git/objects/ff/9bce597e3eb5bfe72694c3b2e49b8909f81a4f": "9237f17d5a350f944a9c6babb07cbdba",
".git/objects/pack/pack-08c5202ca27615e7f6688b10eb0985c4e9fcf7cc.idx": "f235ec024ba45bbb1d48c107c57eb8ff",
".git/objects/pack/pack-08c5202ca27615e7f6688b10eb0985c4e9fcf7cc.pack": "f5ee742ffcc327982a34b7a42d13fcaa",
".git/ORIG_HEAD": "d4850d92942b6912cc6a2ca65dea10fd",
".git/packed-refs": "ac789a2cc37c9a4530c2dc55f0113aad",
".git/refs/heads/main": "2a5d02fe42ef2315e9f11b4684721f11",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "2a5d02fe42ef2315e9f11b4684721f11",
"app-ads.txt": "6e81a9ecea6ce460ad32478dd9379ad3",
"assets/AssetManifest.bin": "a7abb3b7f8351ad0c8d8262f98cfd5ba",
"assets/AssetManifest.bin.json": "e17cd8c659d33c2b6d182a31571fcf40",
"assets/AssetManifest.json": "41e73af81e61a9c860de7ce6734a4264",
"assets/assets/icons/daky.png": "66cba7602b3250726607b4796d1c67de",
"assets/assets/icons/flutter.png": "66a8f8c0905dbeef982bb247789bc8dc",
"assets/assets/images/androidBackground.jpg": "84d55ee3313fd34ad9b9824cbe186c29",
"assets/assets/images/avatar.jpg": "c7b5f6a007a193933d22f1b03bf2b43e",
"assets/assets/images/ipadBackground1.jpg": "f1a261c97133f8a99ba7d32ed9e8a909",
"assets/avatar.png": "c7b5f6a007a193933d22f1b03bf2b43e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "3cc7cf24d6bfaed7500d8e333bffc6a8",
"assets/NOTICES": "924d9b16c2eb37116abac137a59938e7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "cdc050c68e0e20a059025876853026bd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"avatar.jpg": "c7b5f6a007a193933d22f1b03bf2b43e",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "25e73daee0f23848fb82ae3d919e76e1",
"favicon.png": "bfb8f2d2482fd5174922a1a0def5b12f",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "cd1fd44c95a1b4d91709b664c8430fc0",
"google0ca38fa7bb7cf3f4.html": "a0697eb76b055979e7195583f8e94369",
"icons/Icon-192.png": "ec5afbd1ad1082d11ff5df2dbf9a85c0",
"icons/Icon-512.png": "4c9938af0af14d57091d4dd142d00dd8",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "32034c21619d6faef19fa16dc247bcee",
"/": "32034c21619d6faef19fa16dc247bcee",
"main.dart.js": "6b81477c5f9e23d76b047f4abea7d9a2",
"main.dart.mjs": "b36e31fd9ac9f23516834b4cca17ffeb",
"main.dart.wasm": "2ca3372b33927fbc5d97abb411c938ab",
"manifest.json": "18d8476a7b41c8371904d623ad658600",
"version.json": "009c9e65172e010890f7f65fde438006",
"versionM.json": "bb45d3e2fb5117643eaf5479ed9ef80e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
