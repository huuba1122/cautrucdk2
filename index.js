

/**     String
 *
 *
// var fullname = "Son Dang";
//
//
// // kiem tra do dai chuoi
// console.log(fullname.length);

// cach noi chuoi


// var username = "cach noi chuoi"
// + "noi vao chuoi 1"
// + "noi vao chuoi 2"
// + "noi vao chuoi 3"
//
// console.log(username);

// template string

// var firstName = 'Son';
// var lastName = 'Dang';
//
// console.log('toi la:  ');


            tim hieu them Polyfill trong javascript


 */



/**
                // mang co the seach " javascript array methods"
//
// var language = 'Javascript';
// var language2 = 'PHP';
// var language3 = 'Ruby';

        // 3 cau lenh tren tuong duong voi mot mang sau

// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby',
// ];
// // hien len noi dung cua mang
// console.log(languages);
// // kiem tra xem co phai la mang hay khong
// console.log(Array.isArray(languages));
// // chieu dai cua mang
// console.log(languages.length);
// // lay phan tu thu i trong mang languages'
// console.log(languages[1]);
// //phuong thuc toString() co nghia truyen kieu du
// // lieu array sang kieu du lieu string
// // cac phan tu trong mang thanh chuoi cach nhau bang dau ","
// console.log(languages.toString());
// console.log(typeof languages.toString());
 */



/**         Ham
 *
 * ham la mot khoi ma
 * lam mot viec cu the
 *
 * loai ham
 * 1.built-in
 * 2.Tu dinh nghia
 *
 *
 * Quy tac dat ten ham
 * - trong ten co the co cac chu cai tu a-z, A-Z cac so 0-9, "_" va '$"
 * luu y khong duoc dat ten bat dau bang mot so
 *
 * */
// function showDialog() {
//     //code cua ham showDialog
//     alert('Hello');
// }
//
// // toan tu goi ham call();
//
// showDialog();

/**     Tham so ham  - Javascript co ban
 *
 * 1. Tham so
 *      -   Dinh nghia
 *      -   Kieu du lieu
 *      -   Tinh private
 *      -   1 tham so
 *      -   nhieu tham so
 * 2. truyen tham so
 *      1 tham so
 *      nhieu tham so
 * 3. Arguments?
 *      doi tuong arguments
 *      gioi thieu vong lap for
 *
 *
 * */

//     function writelog(message) {
//         console.log(message)
//         console.log(typeof message);
// }
//
//     writelog('Test message');
//     //khi thay doi doi so thi code van chay binh thuong
//
//     writelog(123);
//     writelog(['Java', 'PHP', 'JS'])

/** Cac loai function
 *
 * 1. Declaration f
 * 2. Expression f
 * 3. Arrow f
 *
 * */

//Declaration function
//     function showMessage() {
//
// }

// 2. Expression f

    // var showMessage2 = function () {
    //
    // }
    //
    // setTimeout(function (){
    //
    // });
    //
    // var myObject = {
    //     myfunction: function () {
    //
    //     }
    // }

    // tim hieu ve hosting trong ham javascript


/**     Object trong javaScript
 *
 *      thuong dung luu tru thong tin cua mot doi tuong cu the
 *      trong OB cung co the chua cac ham
 *      trong truong hop key la function thi ta goi la phuong thuc / mothod
 *      cac key binh thuong thi goi la thuoc tinh / property
 * */

    // var myInfo = {
    //     name: 'Son Dang',
    // //name la key
    // //'Son Dang' la value
    // // cac cap key: value duoc ngan cach boi dau ","
    // // key cung co the la chuoi
    // //  'name': 'Son Dang',
    //     age: 18,
    //     address: 'Ha Noi',
    //     getName: function () {
    //         // return myInfo.name;
    //         return this.name;
    //     }
    // };
        // console.log(myInfo.getName());
    /**ta co the them mot key vao bang cach sau */
    // myInfo['my-email'] = 'sondang@gmail.com';
    // //hoac dat mot bien: var emailKey = 'email'
    // // sau do them vao trong Object myInfo {
    // //  name: ....
    // //  [emailkey]: 'vlue vao day'
    // // }
    // console.log(myInfo);
    // // lay mot key ra ngoai bang cach
    // console.log(myInfo.name);
    // console.log(myInfo.age);
    // // khong the dung cach tren de lay ra key my-email
    // //nen ta dung cach sau day
    // console.log(myInfo['address']);
    // console.log(myInfo['my-email']);
    // var mykey = 'address';
    // console.log(myInfo[mykey]);
    //
    /** xoa di mot key:value trong OB*/
    // delete myInfo.age;
    // delete myInfo.address;


/**        cau lenh dieu kien
 *
 * trong truong hop switch {
 *  case :
 * }
 *  thi neu khong co tu break thi tinh tu key dung thi no se lot vao
 *  cac key tiep theo va thuc hien lenh trong do cho den khi gap break
 *
 *
 *  khi so sanh tinh dung sai co the toan tu khong bang thi su dung if{}else
 *  trong th duoc cho truoc nhung gia tri va so luong case tu 3 case thi dung switch
 * */
console.log(window.innerHeight);



