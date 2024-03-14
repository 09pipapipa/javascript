    /*EPSILON*/  
const EPSILON = 0.0001;

let x = 0.98769;
let y = 0.98761;

console.log(Math.abs(x-y) < EPSILON);
//Math.abs(x - y) < EPSILON の条件は、x と y の値が EPSILON 
//より小さい差である場合にtrueを返す
//x = 0.98769 および y = 0.98761 の場合、差は 0.98769 - 0.98761 = 0.00008
//0.00008 < 0.0001なのでtrue

    /*3-4-4 条件演算子 ?*/
let score = 80;
console.log(score >= 90 ? '合格' : '不合格');
           //条件式 ? 真の場合の値 : 偽の場合の値
//if文と同等の処理ができるが出力する値で振り分けたい場合はコードがシンプルになる

    /*条件式がfalsy(条件式や論理演算で偽と評価される値)のときに特定の値をセットしたい　'';など*/
let value = '';
value = value ? value : '暫定値';
console.log(value); //これだと冗長ですね。

value ||= '暫定値';
console.log(value);
//||= は、左辺の変数が null や undefined、または falsy 値である場合に、右辺の値を代入するための短縮記法

    /*??=演算子*/
value ??= '暫定値';
console.log(value ?? '暫定値')
//??= 演算子は値がnull/undefinedの時だけ検出する
//条件演算子で作ると
value = value !== null && value !==undefined ? value : '暫定値'
